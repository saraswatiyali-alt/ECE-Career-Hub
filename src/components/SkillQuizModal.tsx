import React, { useState } from 'react';
import { X, Sparkles, Compass, ArrowRight, CheckCircle2 } from 'lucide-react';
import { CAREER_FIELDS } from '../data/careerData';
import { CareerField, DomainId } from '../types/career';

interface SkillQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDomain: (domain: CareerField) => void;
}

interface Question {
  text: string;
  options: {
    label: string;
    targetDomain: DomainId;
    icon: string;
  }[];
}

const QUIZ_QUESTIONS: Question[] = [
  {
    text: '1. What type of technical challenge excites you the most?',
    options: [
      { label: 'Writing fast C code directly controlling microcontroller registers & peripherals', targetDomain: 'embedded-firmware', icon: '</>' },
      { label: 'Designing digital logic gates, RISC-V CPU cores, and silicon tape-outs in Verilog', targetDomain: 'vlsi-chip-design', icon: '⚡IC' },
      { label: 'Connecting sensors to wireless networks and streaming data to the cloud', targetDomain: 'iot-connected-devices', icon: '📶' },
      { label: 'Designing physical circuit boards, high-speed signals, and power supplies', targetDomain: 'hardware-pcb-design', icon: '🎛️' },
    ]
  },
  {
    text: '2. Which engineering project would you proudly put on your resume?',
    options: [
      { label: 'Autonomous mobile robot with ROS 2, LiDAR navigation, and PID motor control', targetDomain: 'robotics-automation', icon: '🤖' },
      { label: 'Electric Vehicle Battery Management System (BMS) with cell balancing & CAN bus', targetDomain: 'automotive-ev', icon: '⚡🚗' },
      { label: '5G cellular link budget simulator and SDR wireless transceiver', targetDomain: 'communication-telecom', icon: '📡' },
      { label: 'Real-time active noise cancelling audio filter using FFT and DSP', targetDomain: 'signal-processing', icon: '〰️' },
    ]
  },
  {
    text: '3. What tool or language would you prefer to master deeply?',
    options: [
      { label: 'Embedded C, FreeRTOS, STM32Cube, and JTAG debuggers', targetDomain: 'embedded-firmware', icon: '</>' },
      { label: 'SystemVerilog, UVM, and Synopsys / Cadence EDA tools', targetDomain: 'vlsi-chip-design', icon: '⚡IC' },
      { label: 'KiCad / Altium Designer, LTspice, and Oscilloscopes', targetDomain: 'hardware-pcb-design', icon: '🎛️' },
      { label: 'MATLAB / Simulink, ROS 2, and Industrial PLCs', targetDomain: 'robotics-automation', icon: '🤖' },
    ]
  }
];

export const SkillQuizModal: React.FC<SkillQuizModalProps> = ({
  isOpen,
  onClose,
  onSelectDomain,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [votes, setVotes] = useState<Record<DomainId, number>>({
    'embedded-firmware': 0,
    'vlsi-chip-design': 0,
    'iot-connected-devices': 0,
    'communication-telecom': 0,
    'hardware-pcb-design': 0,
    'signal-processing': 0,
    'robotics-automation': 0,
    'automotive-ev': 0,
  });
  const [recommendedDomainId, setRecommendedDomainId] = useState<DomainId | null>(null);

  if (!isOpen) return null;

  const handleSelectOption = (target: DomainId) => {
    const newVotes = { ...votes, [target]: (votes[target] || 0) + 1 };
    setVotes(newVotes);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Find highest voted domain
      let highestDomain: DomainId = 'embedded-firmware';
      let highestCount = -1;
      (Object.keys(newVotes) as DomainId[]).forEach(d => {
        if (newVotes[d] > highestCount) {
          highestCount = newVotes[d];
          highestDomain = d;
        }
      });
      setRecommendedDomainId(highestDomain);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setRecommendedDomainId(null);
    setVotes({
      'embedded-firmware': 0,
      'vlsi-chip-design': 0,
      'iot-connected-devices': 0,
      'communication-telecom': 0,
      'hardware-pcb-design': 0,
      'signal-processing': 0,
      'robotics-automation': 0,
      'automotive-ev': 0,
    });
  };

  const matched = recommendedDomainId ? CAREER_FIELDS.find(f => f.id === recommendedDomainId) : null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
        
        {/* Top Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-blue-500/20 text-blue-300 rounded-lg">
              <Compass className="w-5 h-5" />
            </span>
            <div>
              <h2 className="text-lg font-bold">ECE Career Matchmaker</h2>
              <p className="text-xs text-slate-300">Answer 3 questions to discover your optimal ECE career domain</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!recommendedDomainId ? (
            <div className="space-y-6">
              <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>Question {currentStep + 1} of {QUIZ_QUESTIONS.length}</span>
                <span className="font-mono">{Math.round(((currentStep + 1) / QUIZ_QUESTIONS.length) * 100)}% Complete</span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                {QUIZ_QUESTIONS[currentStep].text}
              </h3>

              <div className="space-y-3">
                {QUIZ_QUESTIONS[currentStep].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelectOption(opt.targetDomain)}
                    className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50/50 transition-all text-xs sm:text-sm font-medium text-slate-800 flex items-center justify-between group shadow-2xs"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-base px-2 py-0.5 rounded bg-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        {opt.icon}
                      </span>
                      <span>{opt.label}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            matched && (
              <div className="text-center space-y-6 py-4 animate-in zoom-in-95 duration-200">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-800 font-mono text-2xl font-bold shadow-xs">
                  {matched.symbol}
                </div>

                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-wider font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    🎯 Your #1 Recommended ECE Career Path
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-900">{matched.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                    {matched.shortDescription}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-left space-y-2 max-w-lg mx-auto">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Fresher Salary Range:</span>
                    <span className="font-bold text-emerald-600">{matched.subRoles[0].avgFresherSalary}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Top Sample Role:</span>
                    <span className="font-bold text-slate-800">{matched.subRoles[0].title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">First Milestone:</span>
                    <span className="font-bold text-blue-600">{matched.roadmap[0].title}</span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3 pt-2">
                  <button
                    onClick={handleReset}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 rounded-xl hover:bg-slate-50"
                  >
                    Retake Quiz
                  </button>
                  <button
                    onClick={() => {
                      onSelectDomain(matched);
                      onClose();
                    }}
                    className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-colors flex items-center gap-2"
                  >
                    <span>View {matched.title} Roadmap & Roles</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )
          )}
        </div>

      </div>
    </div>
  );
};
