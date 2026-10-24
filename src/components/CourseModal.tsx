import React, { useState } from 'react';
import { BookOpen, CheckCircle, Clock, X, Award, AlertCircle, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { FreeCourse, CertificateData } from '../types/career';

interface CourseModalProps {
  course: FreeCourse | null;
  domainTitle: string;
  onClose: () => void;
  onClaimCertificate: (certificate: CertificateData) => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({
  course,
  domainTitle,
  onClose,
  onClaimCertificate,
}) => {
  const [activeTab, setActiveTab] = useState<'syllabus' | 'quiz'>('syllabus');
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [studentName, setStudentName] = useState('Alex Rivera');

  if (!course) return null;

  const handleSelectOption = (questionIdx: number, optionIdx: number) => {
    if (quizSubmitted) return;
    setSelectedAnswers(prev => ({ ...prev, [questionIdx]: optionIdx }));
  };

  const handleGradeQuiz = () => {
    setQuizSubmitted(true);
    const total = course.quiz.length;
    let correctCount = 0;
    course.quiz.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) {
        correctCount++;
      }
    });

    if (correctCount >= Math.ceil(total * 0.6)) {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
      });
    }
  };

  const getScore = () => {
    let correctCount = 0;
    course.quiz.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) correctCount++;
    });
    return correctCount;
  };

  const isPassed = quizSubmitted && getScore() >= Math.ceil(course.quiz.length * 0.6);

  const generateAndClaim = () => {
    const credId = `ECE-${Math.random().toString(36).substring(2, 7).toUpperCase()}-${new Date().getFullYear()}`;
    const cert: CertificateData = {
      id: course.id,
      studentName: studentName.trim() || 'ECE Engineering Scholar',
      courseTitle: course.title,
      domainTitle: domainTitle,
      issueDate: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
      credentialId: credId,
      grade: `${Math.round((getScore() / course.quiz.length) * 100)}% (Honors)`,
    };
    onClaimCertificate(cert);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="px-6 py-5 bg-slate-900 text-white flex items-start justify-between">
          <div className="space-y-1 pr-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-medium border border-blue-400/30">
              <span>{domainTitle}</span>
              <span>•</span>
              {course.trackStage && <span className="text-cyan-300 font-bold">Track Stage {course.trackStage}: </span>}
              <span>{course.levelTag || course.level} Level</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">{course.title}</h2>
            <p className="text-xs sm:text-sm text-slate-300 flex items-center gap-4">
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-slate-400" /> {course.durationHours} Hours Self-Paced</span>
              <span className="flex items-center gap-1.5"><Award className="w-4 h-4 text-amber-400" /> Certificate Included</span>
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switch */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6">
          <button
            onClick={() => setActiveTab('syllabus')}
            className={`py-3 px-4 text-sm font-semibold border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'syllabus'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            Curriculum & Modules ({course.modules.length})
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`py-3 px-4 text-sm font-semibold border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'quiz'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Award className="w-4 h-4" />
            Certification Exam ({course.quiz.length} Questions)
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-700">
          {activeTab === 'syllabus' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">About This Course</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{course.description}</p>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">Skills You Will Master</h4>
                <div className="flex flex-wrap gap-2">
                  {course.skillsGained.map((sk, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-100 rounded-lg text-xs font-semibold">
                      ✓ {sk}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">Structured Modules</h4>
                <div className="space-y-3">
                  {course.modules.map((mod, index) => (
                    <div key={mod.id} className="p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-shadow shadow-xs">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-slate-800 text-sm">{mod.title}</span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-mono">{mod.duration}</span>
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-600 mb-3">
                        {mod.topics.map((t, tidx) => (
                          <li key={tidx} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                            {t}
                          </li>
                        ))}
                      </ul>
                      <div className="pt-2 border-t border-slate-100 flex items-start gap-2 text-xs text-emerald-800 bg-emerald-50/50 p-2 rounded-lg">
                        <span className="font-bold shrink-0">Hands-on Lab:</span>
                        <span>{mod.labOrExercise}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setActiveTab('quiz')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-xl transition-colors shadow-sm"
                >
                  Take Certification Quiz to Claim Certificate <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {activeTab === 'quiz' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-800 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block mb-0.5">Accreditation Exam Guidelines</span>
                  Answer all questions below. Scoring at least 60% unlocks your personalized, verifiable Certificate of Completion. You can retake if needed!
                </div>
              </div>

              <div className="space-y-5">
                {course.quiz.map((q, qIdx) => {
                  const hasAnswered = selectedAnswers[qIdx] !== undefined;
                  const isCorrect = quizSubmitted && selectedAnswers[qIdx] === q.correctIndex;
                  const isWrong = quizSubmitted && selectedAnswers[qIdx] !== q.correctIndex;

                  return (
                    <div
                      key={qIdx}
                      className={`p-4 rounded-xl border transition-all ${
                        quizSubmitted
                          ? isCorrect
                            ? 'border-emerald-300 bg-emerald-50/30'
                            : 'border-red-300 bg-red-50/30'
                          : 'border-slate-200 bg-white'
                      }`}
                    >
                      <p className="font-semibold text-slate-800 text-sm mb-3">
                        {qIdx + 1}. {q.question}
                      </p>

                      <div className="space-y-2">
                        {q.options.map((opt, optIdx) => {
                          const isSelected = selectedAnswers[qIdx] === optIdx;
                          let btnStyle = 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white';

                          if (isSelected) {
                            btnStyle = 'border-blue-600 bg-blue-50/70 text-blue-900 font-medium';
                          }

                          if (quizSubmitted) {
                            if (optIdx === q.correctIndex) {
                              btnStyle = 'border-emerald-500 bg-emerald-100 text-emerald-900 font-semibold';
                            } else if (isSelected && !isCorrect) {
                              btnStyle = 'border-red-400 bg-red-100 text-red-900';
                            }
                          }

                          return (
                            <button
                              key={optIdx}
                              onClick={() => handleSelectOption(qIdx, optIdx)}
                              disabled={quizSubmitted}
                              className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm transition-all flex items-center justify-between ${btnStyle}`}
                            >
                              <span>{opt}</span>
                              {quizSubmitted && optIdx === q.correctIndex && (
                                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {quizSubmitted && (
                        <div className="mt-3 pt-2 text-xs border-t border-slate-200/60 text-slate-600">
                          <span className="font-semibold">Explanation: </span>
                          {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Assessment Submit / Results */}
              {!quizSubmitted ? (
                <div className="flex justify-end pt-2">
                  <button
                    onClick={handleGradeQuiz}
                    disabled={Object.keys(selectedAnswers).length < course.quiz.length}
                    className="px-6 py-2.5 rounded-xl font-semibold text-sm bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm transition-colors"
                  >
                    Submit Answers & Check Score
                  </button>
                </div>
              ) : (
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-slate-800 text-base">
                        Your Score: {getScore()} / {course.quiz.length} ({Math.round((getScore() / course.quiz.length) * 100)}%)
                      </h4>
                      <p className="text-xs text-slate-600">
                        {isPassed
                          ? 'Congratulations! You passed the requirements for certification.'
                          : 'You need at least 60% to qualify for the certificate. You can retry anytime.'}
                      </p>
                    </div>
                    {!isPassed && (
                      <button
                        onClick={() => {
                          setQuizSubmitted(false);
                          setSelectedAnswers({});
                        }}
                        className="px-4 py-2 text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100"
                      >
                        Retry Quiz
                      </button>
                    )}
                  </div>

                  {isPassed && (
                    <div className="pt-3 border-t border-slate-200 space-y-3">
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Full Name to appear on your Verified Certificate:
                        </label>
                        <input
                          type="text"
                          value={studentName}
                          onChange={(e) => setStudentName(e.target.value)}
                          placeholder="e.g. John Doe / Jane Smith"
                          className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                      </div>
                      <div className="flex justify-end">
                        <button
                          onClick={generateAndClaim}
                          className="inline-flex items-center gap-2 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-md transition-colors"
                        >
                          <Award className="w-5 h-5" />
                          Generate Verified Certificate
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
