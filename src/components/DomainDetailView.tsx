import React, { useState } from 'react';
import { 
  Briefcase, 
  CheckCircle2, 
  Circle, 
  GraduationCap, 
  Layers, 
  Building2, 
  ExternalLink, 
  Award, 
  Clock, 
  MapPin, 
  TrendingUp, 
  Lightbulb, 
  ArrowLeft,
  ArrowRight,
  Share2,
  FileText,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { CareerField, FreeCourse, CertificateData } from '../types/career';

interface DomainDetailViewProps {
  domain: CareerField;
  course?: FreeCourse;
  courses?: FreeCourse[];
  savedCertificates?: CertificateData[];
  completedRoadmapSteps: string[];
  onToggleStep: (stepKey: string) => void;
  onOpenCourse: (course: FreeCourse) => void;
  onBack: () => void;
}

export const DomainDetailView: React.FC<DomainDetailViewProps> = ({
  domain,
  course,
  courses = [],
  savedCertificates = [],
  completedRoadmapSteps,
  onToggleStep,
  onOpenCourse,
  onBack,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'roles' | 'skills' | 'roadmap' | 'projects' | 'companies' | 'courses'>('all');

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      
      {/* Top Breadcrumb & Hero */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs relative overflow-hidden">
        <div className="flex items-center justify-between gap-4 mb-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All ECE Domains</span>
          </button>
          
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
              {domain.badgeText}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" /> High Placement
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="font-mono text-2xl sm:text-3xl font-extrabold px-3 py-1 bg-slate-900 text-blue-400 rounded-xl shadow-xs">
                {domain.symbol}
              </span>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {domain.title}
              </h1>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {domain.overview}
            </p>
            <div className="pt-2 flex flex-wrap gap-1.5">
              {domain.tags.map(t => (
                <span key={t} className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs font-mono font-medium">
                  #{t}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Action Card */}
          {course && (
            <div className="w-full md:w-auto p-4 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-md flex md:flex-col justify-between items-center md:items-start gap-3 shrink-0">
              <div>
                <p className="text-xs uppercase tracking-wider text-blue-200 font-semibold">Certified Free Course</p>
                <p className="font-bold text-sm sm:text-base leading-snug line-clamp-1">{course.title}</p>
                <p className="text-xs text-blue-100">{course.durationHours} Hours • Certificate Included</p>
              </div>
              <button
                onClick={() => onOpenCourse(course)}
                className="px-4 py-2 bg-white text-blue-700 hover:bg-blue-50 font-bold text-xs rounded-lg shadow-xs transition-colors shrink-0"
              >
                Enroll Free
              </button>
            </div>
          )}
        </div>

        {/* Quick Section Anchor Pills */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 overflow-x-auto pb-1 text-xs font-medium text-slate-600">
          <span className="text-slate-400 shrink-0">Standard Sections:</span>
          {[
            { id: 'roles', label: '1. Sub-Job Roles' },
            { id: 'skills', label: '2. Skills Matrix' },
            { id: 'roadmap', label: '3. Step Roadmap' },
            { id: 'projects', label: '4. Project Ideas' },
            { id: 'companies', label: '5. Hiring Companies' },
            { id: 'courses', label: '6. Free Course & Cert' },
          ].map(sec => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className="px-3 py-1 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-blue-600 transition-colors whitespace-nowrap"
            >
              {sec.label}
            </a>
          ))}
        </div>
      </div>

      {/* SECTION 1: SUB-JOB ROLES */}
      <section id="roles" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">1</span>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Sub-Job Roles in {domain.title}</h2>
              <p className="text-xs sm:text-sm text-slate-500">Core job titles, industry responsibilities, and market salary bands</p>
            </div>
          </div>
          <span className="text-xs font-semibold text-slate-400 font-mono">{domain.subRoles.length} Roles Identified</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {domain.subRoles.map((role, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                    role.level === 'Entry' ? 'bg-emerald-100 text-emerald-800' :
                    role.level === 'Mid' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                  }`}>
                    {role.level} Role
                  </span>
                  <Briefcase className="w-4 h-4 text-slate-400" />
                </div>

                <h3 className="font-bold text-slate-900 text-base">{role.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {role.description}
                </p>

                {/* Key Skills Tags */}
                <div className="pt-2 flex flex-wrap gap-1">
                  {role.keySkills.map(sk => (
                    <span key={sk} className="text-[11px] font-mono px-2 py-0.5 bg-white border border-slate-200 text-slate-700 rounded-md">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>

              {/* Salary Band */}
              <div className="mt-5 pt-3 border-t border-slate-200 text-xs space-y-1">
                <div className="flex items-center justify-between text-slate-600">
                  <span>Fresher (0-2 Yrs):</span>
                  <span className="font-bold text-emerald-600">{role.avgFresherSalary}</span>
                </div>
                <div className="flex items-center justify-between text-slate-600">
                  <span>Exp (3-7+ Yrs):</span>
                  <span className="font-bold text-indigo-600">{role.avgExpSalary}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: SKILLS REQUIRED MATRIX (STANDARDIZED FORMAT) */}
      <section id="skills" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-sm">2</span>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Skills Required Matrix</h2>
              <p className="text-xs sm:text-sm text-slate-500">Standardized competencies across hardware, software, protocols, and tooling</p>
            </div>
          </div>
          <span className="text-xs font-semibold text-slate-400 font-mono">Industry Benchmarked</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100/70 border-b border-slate-200 text-xs font-semibold text-slate-600 uppercase tracking-wider">
                <th className="py-3.5 px-4 w-44">Skill Category</th>
                <th className="py-3.5 px-4">What To Learn</th>
                <th className="py-3.5 px-4 w-52">Industry Tools & Hardware</th>
                <th className="py-3.5 px-4 w-28 text-center">Priority</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {domain.skillsRequired.map((skill, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900 align-top">
                    {skill.category}
                  </td>
                  <td className="py-3.5 px-4 text-slate-700 leading-relaxed align-top">
                    {skill.whatToLearn}
                  </td>
                  <td className="py-3.5 px-4 align-top">
                    <div className="flex flex-wrap gap-1">
                      {skill.tools.map((t, tidx) => (
                        <span key={tidx} className="px-2 py-0.5 bg-slate-100 text-slate-800 rounded font-mono text-[11px] border border-slate-200">
                          {t}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-center align-top">
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                      skill.importance === 'Essential' 
                        ? 'bg-red-50 text-red-700 border border-red-200' 
                        : 'bg-blue-50 text-blue-700 border border-blue-200'
                    }`}>
                      {skill.importance}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 3: STEP-BY-STEP LEARNING ROADMAP */}
      <section id="roadmap" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">3</span>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Step-by-Step Learning Roadmap</h2>
              <p className="text-xs sm:text-sm text-slate-500">Your step-by-step learning path from beginner to interview-ready engineer</p>
            </div>
          </div>
          <div className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
            Interactive Checklist
          </div>
        </div>

        {/* Roadmap Summary Flow */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 font-mono flex items-center gap-2 overflow-x-auto">
          <span className="font-bold text-blue-600 shrink-0">Roadmap Path:</span>
          <span>{domain.roadmapSummary}</span>
        </div>

        {/* Vertical Step Sequence */}
        <div className="space-y-4">
          {domain.roadmap.map((step) => {
            const stepKey = `${domain.id}-step-${step.stepNumber}`;
            const isCompleted = completedRoadmapSteps.includes(stepKey);

            return (
              <div
                key={step.stepNumber}
                className={`p-5 rounded-xl border transition-all ${
                  isCompleted
                    ? 'border-emerald-300 bg-emerald-50/30'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <button
                      onClick={() => onToggleStep(stepKey)}
                      className="mt-0.5 text-slate-400 hover:text-emerald-600 transition-colors"
                      title={isCompleted ? 'Mark as Incomplete' : 'Mark as Completed'}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="w-6 h-6 text-emerald-600 fill-emerald-100" />
                      ) : (
                        <Circle className="w-6 h-6 text-slate-300 hover:text-emerald-500" />
                      )}
                    </button>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                          Step {step.stepNumber}
                        </span>
                        <h3 className={`font-bold text-base ${isCompleted ? 'text-emerald-950 line-through' : 'text-slate-900'}`}>
                          {step.title}
                        </h3>
                        <span className="text-xs text-slate-500 flex items-center gap-1 font-mono">
                          <Clock className="w-3.5 h-3.5" /> {step.duration}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-3 ml-9 pt-3 border-t border-slate-100/80 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="font-bold text-slate-700 block mb-1">Key Topics Covered:</span>
                    <ul className="space-y-1 text-slate-600">
                      {step.keyTopics.map((top, tidx) => (
                        <li key={tidx} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                          {top}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-2.5 rounded-lg bg-amber-50/70 border border-amber-200/60 text-amber-900">
                    <span className="font-bold block mb-0.5">🎯 Recommended Practice Task:</span>
                    <span className="text-amber-800">{step.recommendedPractice}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 4: PRACTICAL PROJECT IDEAS */}
      <section id="projects" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm">4</span>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Practical Project Ideas</h2>
              <p className="text-xs sm:text-sm text-slate-500">Portfolio-ready projects that demonstrate real engineering skills to recruiters</p>
            </div>
          </div>
          <span className="text-xs font-semibold text-slate-400 font-mono">Resume Builders</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {domain.projectIdeas.map((proj, pidx) => (
            <div
              key={pidx}
              className="p-5 rounded-xl border border-slate-200 bg-slate-50/40 hover:bg-white hover:border-amber-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider ${
                    proj.difficulty === 'Beginner' ? 'bg-emerald-100 text-emerald-800' :
                    proj.difficulty === 'Intermediate' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                  }`}>
                    {proj.difficulty}
                  </span>
                  <Lightbulb className="w-4 h-4 text-amber-500" />
                </div>

                <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">{proj.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{proj.summary}</p>
                
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">Tools & Parts:</span>
                  <div className="flex flex-wrap gap-1">
                    {proj.componentsOrTools.map((c, cidx) => (
                      <span key={cidx} className="text-[11px] font-mono px-2 py-0.5 bg-white border border-slate-200 rounded text-slate-700">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 text-xs text-emerald-800 bg-emerald-50/50 p-2.5 rounded-lg">
                <span className="font-bold block mb-0.5">Key Learning Outcome:</span>
                <span>{proj.learningOutcome}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: TOP HIRING COMPANIES */}
      <section id="companies" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm">5</span>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Top Hiring Companies & Salaries</h2>
              <p className="text-xs sm:text-sm text-slate-500">Tier-1 semiconductor, automotive, and tech companies hiring for {domain.title}</p>
            </div>
          </div>
          <span className="text-xs font-semibold text-slate-400 font-mono">Salary Verified</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {domain.hiringCompanies.map((comp, cidx) => (
            <div
              key={cidx}
              className="p-5 rounded-xl border border-slate-200 bg-white hover:border-purple-300 hover:shadow-md transition-all space-y-4"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-slate-900 text-white font-mono font-bold flex items-center justify-center text-xs">
                    {comp.logoText}
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">{comp.name}</h3>
                    <p className="text-xs text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> {comp.locations.join(', ')}
                    </p>
                  </div>
                </div>

                <a
                  href={comp.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-slate-400 hover:text-blue-600 rounded-lg hover:bg-slate-100 transition-colors"
                  title="Visit Careers Page"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Salaries Grid */}
              <div className="grid grid-cols-2 gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs">
                <div>
                  <span className="text-slate-500 block">Fresher Salary:</span>
                  <span className="font-bold text-emerald-600 text-sm">{comp.fresherSalary}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Experienced (3-7y):</span>
                  <span className="font-bold text-indigo-600 text-sm">{comp.experiencedSalary}</span>
                </div>
              </div>

              {/* Roles */}
              <div className="text-xs">
                <span className="text-slate-500 font-semibold block mb-1">Target Roles:</span>
                <div className="flex flex-wrap gap-1">
                  {comp.hiringRoles.map((r, ridx) => (
                    <span key={ridx} className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded-md font-medium">
                      {r}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interview Rounds & Tips */}
              <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs">
                <p className="text-slate-700">
                  <span className="font-bold">Hiring Rounds: </span>
                  {comp.hiringRounds.join(' → ')}
                </p>
                <p className="text-slate-600 italic bg-amber-50/60 p-2 rounded-md border border-amber-100">
                  💡 <span className="font-semibold text-amber-900">Interview Tip: </span>{comp.interviewTips}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: RECOMMENDED FREE COURSES & CERTIFICATES */}
      {domain.id === 'embedded-firmware' ? (
        <section id="courses" className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-amber-400 text-slate-900 flex items-center justify-center font-bold text-sm">6</span>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl sm:text-2xl font-bold text-white">Embedded C: Basic to Industry Level Track</h2>
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-500/30 text-cyan-300 text-[11px] font-bold border border-cyan-400/30">
                    6 Progressive Courses
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300">
                  Complete each stage from basic pointers to AUTOSAR and claim an accredited certificate for each level!
                </p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-400/30 self-start md:self-auto">
              100% Free with Verified Certificates
            </span>
          </div>

          {/* 6 Stage Grid for Embedded Role */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses
              .filter(c => c.domainId === 'embedded-firmware')
              .sort((a, b) => (a.trackStage || 0) - (b.trackStage || 0))
              .map(c => {
                const isCert = savedCertificates.some(cert => cert.id === c.id);
                return (
                  <div
                    key={c.id}
                    className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/60 p-5 rounded-xl transition-all flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="px-2 py-0.5 rounded bg-blue-500/30 text-blue-200 font-mono text-[11px] font-bold">
                          Stage {c.trackStage}: {c.levelTag || c.level}
                        </span>
                        {isCert ? (
                          <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-400/30">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Certified
                          </span>
                        ) : (
                          <span className="text-[11px] text-slate-400 flex items-center gap-1 font-mono">
                            <Clock className="w-3.5 h-3.5" /> {c.durationHours}h
                          </span>
                        )}
                      </div>

                      <h3 className="text-base font-bold text-white leading-snug">{c.title}</h3>
                      <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                        {c.description}
                      </p>

                      <div className="flex flex-wrap gap-1 pt-1">
                        {c.skillsGained.slice(0, 3).map((sk, idx) => (
                          <span key={idx} className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-slate-300">
                            ✓ {sk}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                      <span className="text-[11px] text-amber-300 flex items-center gap-1">
                        <Award className="w-3.5 h-3.5" /> Certificate
                      </span>
                      <button
                        onClick={() => onOpenCourse(c)}
                        className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-lg transition-colors flex items-center gap-1 shadow-xs"
                      >
                        <span>{isCert ? 'Review Course' : 'Start Course & Exam'}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </section>
      ) : course ? (
        <section id="courses" className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-2xl p-6 sm:p-8 shadow-lg space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-amber-400 text-slate-900 flex items-center justify-center font-bold text-sm">6</span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Recommended Free Course & Certificate</h2>
                <p className="text-xs sm:text-sm text-slate-300">Complete curriculum and earn a verified ECE Career Hub credential</p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-400/30">
              100% Free
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-white/5 p-6 rounded-xl border border-white/10">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md bg-blue-500/30 text-blue-300 text-xs font-semibold">
                  {course.level} Level
                </span>
                <span className="text-xs text-slate-400">
                  • {course.durationHours} Hours Total
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">{course.title}</h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
                {course.description}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {course.skillsGained.map((sk, skidx) => (
                  <span key={skidx} className="px-2 py-0.5 rounded bg-white/10 text-xs text-slate-200">
                    ✓ {sk}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
              <button
                onClick={() => onOpenCourse(course)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-slate-950 font-extrabold text-sm shadow-md transition-all hover:scale-105"
              >
                <BookOpen className="w-4 h-4" /> Start Course & Quiz
              </button>
            </div>
          </div>
        </section>
      ) : null}

    </div>
  );
};
