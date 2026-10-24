import React, { useState } from 'react';
import { CheckCircle2, Circle, Clock, Sparkles, Trophy, BookOpen, ArrowRight } from 'lucide-react';
import { CAREER_FIELDS } from '../data/careerData';
import { CareerField, DomainId, FreeCourse } from '../types/career';

interface RoadmapsHubProps {
  completedSteps: string[];
  onToggleStep: (stepKey: string) => void;
  onSelectDomain: (domain: CareerField) => void;
  onOpenCourse: (course: FreeCourse) => void;
  courses: FreeCourse[];
  initialDomainId?: DomainId;
}

export const RoadmapsHub: React.FC<RoadmapsHubProps> = ({
  completedSteps,
  onToggleStep,
  onSelectDomain,
  onOpenCourse,
  courses,
  initialDomainId = 'embedded-firmware',
}) => {
  const [selectedDomainId, setSelectedDomainId] = useState<DomainId>(initialDomainId);
  const activeDomain = CAREER_FIELDS.find(f => f.id === selectedDomainId) || CAREER_FIELDS[0];
  const matchedCourse = courses.find(c => c.id === activeDomain.featuredCourseId);

  // Compute progress for this domain
  const totalSteps = activeDomain.roadmap.length;
  const completedCount = activeDomain.roadmap.filter(step =>
    completedSteps.includes(`${activeDomain.id}-step-${step.stepNumber}`)
  ).length;
  const progressPercent = Math.round((completedCount / totalSteps) * 100);

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      
      {/* Header */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Learning Tracks</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            ECE Step-by-Step Learning Roadmaps
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            Follow structured, industry-tested engineering paths from foundational fundamentals to interview-ready portfolio projects. Mark milestones as you complete them to track your career readiness!
          </p>
        </div>

        {/* Domain Selector Pills */}
        <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-2">
          {CAREER_FIELDS.map(f => {
            const isSelected = f.id === selectedDomainId;
            return (
              <button
                key={f.id}
                onClick={() => setSelectedDomainId(f.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 border ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <span className="font-mono text-blue-400">{f.symbol}</span>
                <span>{f.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Domain Active Progress Header */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="font-mono text-2xl font-bold px-3 py-1 bg-slate-100 rounded-lg text-slate-800">
              {activeDomain.symbol}
            </span>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">{activeDomain.title} Roadmap</h2>
              <p className="text-xs text-slate-500 font-mono">{activeDomain.roadmapSummary}</p>
            </div>
          </div>
        </div>

        {/* Progress Metric */}
        <div className="w-full md:w-72 bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="text-slate-600">Your Track Progress:</span>
            <span className="text-blue-600">{completedCount} of {totalSteps} Steps ({progressPercent}%)</span>
          </div>
          <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-600 to-emerald-500 transition-all duration-500 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          {progressPercent === 100 && (
            <p className="text-[11px] text-emerald-700 font-bold flex items-center gap-1 justify-center">
              <Trophy className="w-3.5 h-3.5" /> All milestones completed! Ready for interviews!
            </p>
          )}
        </div>
      </div>

      {/* Step by Step Timeline */}
      <div className="space-y-4">
        {activeDomain.roadmap.map((step, idx) => {
          const stepKey = `${activeDomain.id}-step-${step.stepNumber}`;
          const isDone = completedSteps.includes(stepKey);

          return (
            <div
              key={step.stepNumber}
              className={`p-6 rounded-2xl border transition-all bg-white ${
                isDone
                  ? 'border-emerald-300 shadow-xs bg-emerald-50/20'
                  : 'border-slate-200 hover:border-slate-300 hover:shadow-md'
              }`}
            >
              <div className="flex items-start gap-4">
                <button
                  onClick={() => onToggleStep(stepKey)}
                  className="mt-1 shrink-0 text-slate-300 hover:text-emerald-600 transition-colors"
                  title={isDone ? 'Mark as incomplete' : 'Mark as completed'}
                >
                  {isDone ? (
                    <CheckCircle2 className="w-7 h-7 text-emerald-600 fill-emerald-100" />
                  ) : (
                    <Circle className="w-7 h-7 text-slate-300 hover:text-emerald-500" />
                  )}
                </button>

                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-md bg-slate-900 text-blue-300">
                        Step {step.stepNumber}
                      </span>
                      <h3 className={`text-base sm:text-lg font-bold ${isDone ? 'text-emerald-950 line-through' : 'text-slate-900'}`}>
                        {step.title}
                      </h3>
                    </div>
                    <span className="text-xs font-mono font-medium text-slate-500 flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100">
                      <Clock className="w-3.5 h-3.5" /> {step.duration}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-xs">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="font-bold text-slate-700 block mb-1.5 uppercase tracking-wider text-[11px]">
                        What to study & master:
                      </span>
                      <ul className="space-y-1 text-slate-600">
                        {step.keyTopics.map((top, tidx) => (
                          <li key={tidx} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span>{top}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/60 text-amber-950 flex flex-col justify-between">
                      <div>
                        <span className="font-bold block mb-1 uppercase tracking-wider text-[11px] text-amber-900">
                          🎯 Hands-On Challenge:
                        </span>
                        <p className="text-amber-800 leading-relaxed">{step.recommendedPractice}</p>
                      </div>
                      <div className="pt-2 text-right">
                        <button
                          onClick={() => onToggleStep(stepKey)}
                          className="text-[11px] font-bold text-amber-900 hover:underline"
                        >
                          {isDone ? 'Mark as Not Done' : '✓ Mark Step as Learned'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Banner */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
        <div className="space-y-1">
          <h3 className="text-lg sm:text-xl font-bold">Ready to practice hands-on projects or earn certification?</h3>
          <p className="text-xs sm:text-sm text-blue-200">
            View full sub-roles, top companies hiring for {activeDomain.title}, or start the certified course right now.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onSelectDomain(activeDomain)}
            className="px-5 py-2.5 rounded-xl bg-white text-blue-900 hover:bg-blue-50 font-bold text-xs sm:text-sm transition-colors shadow-xs"
          >
            Explore Full {activeDomain.title} Profile
          </button>
          {matchedCourse && (
            <button
              onClick={() => onOpenCourse(matchedCourse)}
              className="px-5 py-2.5 rounded-xl bg-amber-400 text-slate-950 hover:bg-amber-300 font-bold text-xs sm:text-sm transition-colors shadow-xs"
            >
              Start Free Course
            </button>
          )}
        </div>
      </div>

    </div>
  );
};
