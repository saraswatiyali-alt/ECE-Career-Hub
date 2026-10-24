import React, { useState } from 'react';
import { BookOpen, Award, Clock, CheckCircle2, ArrowRight, ShieldCheck, Search, Filter, Sparkles, Layers, Cpu } from 'lucide-react';
import { FREE_COURSES, CAREER_FIELDS } from '../data/careerData';
import { FreeCourse, CertificateData } from '../types/career';

interface CoursesViewProps {
  onOpenCourse: (course: FreeCourse) => void;
  savedCertificates: CertificateData[];
  onViewCertificate: (cert: CertificateData) => void;
}

export const CoursesView: React.FC<CoursesViewProps> = ({
  onOpenCourse,
  savedCertificates,
  onViewCertificate,
}) => {
  const [search, setSearch] = useState('');
  const [domainFilter, setDomainFilter] = useState<string>('all');
  const [levelFilter, setLevelFilter] = useState<'all' | 'Basic' | 'Intermediate' | 'Advanced' | 'Industry Level'>('all');

  const embeddedCourses = FREE_COURSES.filter(c => c.domainId === 'embedded-firmware')
    .sort((a, b) => (a.trackStage || 0) - (b.trackStage || 0));

  const embeddedCompletedCount = embeddedCourses.filter(c => savedCertificates.some(cert => cert.id === c.id)).length;

  const filteredCourses = FREE_COURSES.filter(c => {
    const matchesSearch = c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.skillsGained.some(s => s.toLowerCase().includes(search.toLowerCase())) ||
      c.description.toLowerCase().includes(search.toLowerCase());
    
    const matchesDomain = domainFilter === 'all' || 
      (domainFilter === 'embedded-firmware' ? c.domainId === 'embedded-firmware' : c.domainId === domainFilter);
      
    const matchesLevel = levelFilter === 'all' || 
      c.levelTag === levelFilter || 
      (levelFilter === 'Basic' && c.level === 'Beginner');

    return matchesSearch && matchesDomain && matchesLevel;
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      
      {/* Top Banner */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>Accredited ECE & Embedded Academy</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Free ECE & Embedded Certification Courses
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            From basic Embedded C pointers and bitwise math to ARM bare-metal drivers, FreeRTOS, Embedded Linux BSP, and AUTOSAR. Complete any course, pass the knowledge check, and earn your official verified Certificate of Completion!
          </p>
        </div>

        {/* Search & Domain Filter Bar */}
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search courses (e.g. Embedded C, pointers, RTOS, ARM, CAN, Linux)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 focus:bg-white transition-all"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setDomainFilter('all')}
              className={`px-3 py-2 rounded-xl text-xs font-semibold transition-colors ${
                domainFilter === 'all' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Courses ({FREE_COURSES.length})
            </button>
            <button
              onClick={() => setDomainFilter('embedded-firmware')}
              className={`px-3 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                domainFilter === 'embedded-firmware' ? 'bg-blue-600 text-white shadow-xs' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
              }`}
            >
              <span className="font-mono">{`</>`}</span>
              <span>Embedded Track (6 Courses)</span>
            </button>
          </div>
        </div>

        {/* Level Filters */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          <span className="text-slate-400 font-medium shrink-0">Filter by Level:</span>
          {(['all', 'Basic', 'Intermediate', 'Advanced', 'Industry Level'] as const).map(lvl => (
            <button
              key={lvl}
              onClick={() => setLevelFilter(lvl)}
              className={`px-3 py-1 rounded-lg font-medium transition-colors whitespace-nowrap ${
                levelFilter === lvl
                  ? 'bg-slate-800 text-white font-bold'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {lvl === 'all' ? 'All Tiers' : lvl}
            </button>
          ))}
        </div>
      </div>

      {/* SPECIAL FEATURED TRACK: EMBEDDED C FROM BASIC TO INDUSTRY LEVEL */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-blue-900/50 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-blue-500/20 text-cyan-300 text-xs font-bold border border-blue-400/30">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Flagship Track for Embedded Engineers</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Embedded C: Basic to Industry Level Track
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              A comprehensive 6-stage progressive mastery program. Earn an accredited certificate after completing each course!
            </p>
          </div>

          <div className="bg-white/10 px-4 py-2.5 rounded-xl border border-white/10 text-right shrink-0">
            <span className="text-xs text-slate-300 block">Your Track Progress:</span>
            <span className="font-extrabold text-cyan-300 text-sm">
              {embeddedCompletedCount} of 6 Certified ({Math.round((embeddedCompletedCount / 6) * 100)}%)
            </span>
          </div>
        </div>

        {/* 6-Stage Visual Progression Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {embeddedCourses.map((c) => {
            const isCert = savedCertificates.some(cert => cert.id === c.id);
            return (
              <div
                key={c.id}
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/50 p-4 rounded-xl transition-all flex flex-col justify-between group space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-blue-500/30 text-blue-200 border border-blue-400/20">
                      Stage {c.trackStage} • {c.levelTag || c.level}
                    </span>
                    {isCert ? (
                      <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-400/30">
                        <CheckCircle2 className="w-3 h-3" /> Certified
                      </span>
                    ) : (
                      <span className="text-[10px] text-slate-400 flex items-center gap-1 font-mono">
                        <Clock className="w-3 h-3" /> {c.durationHours}h
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-sm text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {c.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {c.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] text-amber-300 flex items-center gap-1 font-medium">
                    <Award className="w-3 h-3" /> Certificate Included
                  </span>
                  <button
                    onClick={() => onOpenCourse(c)}
                    className="px-3 py-1.5 text-xs font-bold rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors flex items-center gap-1 shadow-xs"
                  >
                    <span>{isCert ? 'Review' : 'Start'}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Earned Certificates Strip (if any) */}
      {savedCertificates.length > 0 && (
        <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-200/20 to-amber-500/10 border border-amber-300/80 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
              <ShieldCheck className="w-5 h-5 text-amber-700" />
              <span>Your Earned Certificates ({savedCertificates.length})</span>
            </div>
            <span className="text-xs text-amber-800">Ready to download, print, or share</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {savedCertificates.map(cert => (
              <div
                key={cert.credentialId}
                onClick={() => onViewCertificate(cert)}
                className="cursor-pointer p-3 bg-white rounded-xl border border-amber-200 hover:border-amber-400 hover:shadow-md transition-all flex items-center justify-between"
              >
                <div>
                  <p className="font-bold text-xs text-slate-900 line-clamp-1">{cert.courseTitle}</p>
                  <p className="text-[10px] text-slate-500 font-mono mt-0.5">ID: {cert.credentialId}</p>
                </div>
                <Award className="w-5 h-5 text-amber-600 shrink-0 ml-2" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* All Filtered Courses Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-500 px-1">
          <span>Showing {filteredCourses.length} Courses</span>
          <span>Each course grants an official completion certificate</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCourses.map(course => {
            const matchedDomain = CAREER_FIELDS.find(d => d.id === course.domainId);
            const hasCert = savedCertificates.some(c => c.id === course.id);

            return (
              <div
                key={course.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 hover:border-blue-400 hover:shadow-lg transition-all duration-200 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-4">
                  
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-mono text-xs font-semibold">
                          {matchedDomain ? matchedDomain.symbol : ''} {matchedDomain?.title}
                        </span>
                        {course.levelTag && (
                          <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[11px] font-bold">
                            {course.levelTag}
                          </span>
                        )}
                        <span className="px-2 py-0.5 rounded-full bg-slate-50 text-slate-600 text-[11px] font-semibold border border-slate-200">
                          {course.level}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 leading-snug">{course.title}</h3>
                    </div>

                    {hasCert && (
                      <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-1 rounded-md shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Certified
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Modules breakdown */}
                  <div className="space-y-1.5 pt-2">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Curriculum ({course.modules.length} Modules):
                    </span>
                    <div className="space-y-1">
                      {course.modules.map(mod => (
                        <div key={mod.id} className="text-xs text-slate-700 flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
                          <span className="line-clamp-1">{mod.title}</span>
                          <span className="font-mono text-[10px] text-slate-400 shrink-0 ml-2">{mod.duration}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills tags */}
                  <div>
                    <div className="flex flex-wrap gap-1">
                      {course.skillsGained.map((sk, i) => (
                        <span key={i} className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-100">
                          ✓ {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-slate-500 font-mono">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {course.durationHours} Hours</span>
                    <span className="flex items-center gap-1"><Award className="w-3.5 h-3.5 text-amber-500" /> Certificate</span>
                  </div>

                  <button
                    onClick={() => onOpenCourse(course)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
                  >
                    <span>{hasCert ? 'Review & Retake' : 'Start Course & Exam'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
