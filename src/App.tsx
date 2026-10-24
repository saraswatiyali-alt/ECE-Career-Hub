import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DomainCard } from './components/DomainCard';
import { DomainDetailView } from './components/DomainDetailView';
import { RoadmapsHub } from './components/RoadmapsHub';
import { CompaniesView } from './components/CompaniesView';
import { CoursesView } from './components/CoursesView';
import { CourseModal } from './components/CourseModal';
import { CertificateModal } from './components/CertificateModal';
import { CompareModal } from './components/CompareModal';
import { SkillQuizModal } from './components/SkillQuizModal';
import { CAREER_FIELDS, FREE_COURSES, ALL_COMPANIES } from './data/careerData';
import { CareerField, DomainId, FreeCourse, CertificateData } from './types/career';
import { Layers, ArrowRight, Sparkles, Search, Compass, BookOpen, Award, CheckCircle } from 'lucide-react';

export default function App() {
  // Navigation State
  const [activeView, setActiveView] = useState<'home' | 'roadmaps' | 'companies' | 'courses'>('home');
  const [selectedDomain, setSelectedDomain] = useState<CareerField | null>(null);
  const [initialRoadmapDomainId, setInitialRoadmapDomainId] = useState<DomainId>('embedded-firmware');

  // Search Query
  const [searchQuery, setSearchQuery] = useState('');

  // Modals State
  const [activeCourse, setActiveCourse] = useState<FreeCourse | null>(null);
  const [activeCertificate, setActiveCertificate] = useState<CertificateData | null>(null);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  // Persistent Progress in LocalStorage
  const [completedSteps, setCompletedSteps] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('ece_completed_steps');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [savedCertificates, setSavedCertificates] = useState<CertificateData[]>(() => {
    try {
      const saved = localStorage.getItem('ece_certificates');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Save to LocalStorage on change
  useEffect(() => {
    try {
      localStorage.setItem('ece_completed_steps', JSON.stringify(completedSteps));
    } catch (e) {
      console.error(e);
    }
  }, [completedSteps]);

  useEffect(() => {
    try {
      localStorage.setItem('ece_certificates', JSON.stringify(savedCertificates));
    } catch (e) {
      console.error(e);
    }
  }, [savedCertificates]);

  // Handlers
  const handleToggleStep = (stepKey: string) => {
    setCompletedSteps(prev =>
      prev.includes(stepKey) ? prev.filter(k => k !== stepKey) : [...prev, stepKey]
    );
  };

  const handleClaimCertificate = (certificate: CertificateData) => {
    setActiveCourse(null);
    setSavedCertificates(prev => {
      const existing = prev.filter(c => c.id !== certificate.id);
      return [certificate, ...existing];
    });
    setActiveCertificate(certificate);
  };

  const handleUpdateCertName = (newName: string) => {
    if (!activeCertificate) return;
    const updated = { ...activeCertificate, studentName: newName };
    setActiveCertificate(updated);
    setSavedCertificates(prev =>
      prev.map(c => (c.credentialId === updated.credentialId ? updated : c))
    );
  };

  const handleSelectDomain = (domain: CareerField) => {
    setSelectedDomain(domain);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuickRoadmap = (domain: CareerField) => {
    setInitialRoadmapDomainId(domain.id);
    setActiveView('roadmaps');
    setSelectedDomain(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectDomainById = (domainId: DomainId) => {
    const matched = CAREER_FIELDS.find(f => f.id === domainId);
    if (matched) {
      setSelectedDomain(matched);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavigate = (view: 'home' | 'roadmaps' | 'companies' | 'courses') => {
    setActiveView(view);
    setSelectedDomain(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filtered Domains based on home search
  const filteredDomains = CAREER_FIELDS.filter(domain => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const titleMatch = domain.title.toLowerCase().includes(q);
    const roleMatch = domain.subRoles.some(r => r.title.toLowerCase().includes(q) || r.keySkills.some(s => s.toLowerCase().includes(q)));
    const skillMatch = domain.skillsRequired.some(s => s.category.toLowerCase().includes(q) || s.whatToLearn.toLowerCase().includes(q));
    const tagMatch = domain.tags.some(t => t.toLowerCase().includes(q));
    const companyMatch = domain.hiringCompanies.some(c => c.name.toLowerCase().includes(q));
    return titleMatch || roleMatch || skillMatch || tagMatch || companyMatch;
  });

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 selection:bg-blue-600 selection:text-white">
      
      {/* Top Navbar */}
      <Navbar
        activeView={activeView}
        onNavigate={handleNavigate}
        onOpenCompare={() => setIsCompareOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
        certificateCount={savedCertificates.length}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
        
        {/* If viewing a single domain's full standardized profile */}
        {selectedDomain ? (
          <DomainDetailView
            domain={selectedDomain}
            course={FREE_COURSES.find(c => c.id === selectedDomain.featuredCourseId)}
            courses={FREE_COURSES}
            savedCertificates={savedCertificates}
            completedRoadmapSteps={completedSteps}
            onToggleStep={handleToggleStep}
            onOpenCourse={(c) => setActiveCourse(c)}
            onBack={() => setSelectedDomain(null)}
          />
        ) : (
          <>
            {/* View: Home / Career Fields */}
            {activeView === 'home' && (
              <div className="space-y-10">
                
                {/* Hero Section */}
                <Hero
                  searchQuery={searchQuery}
                  onSearchChange={setSearchQuery}
                  onSelectQuickTag={(tag) => setSearchQuery(tag)}
                />

                {/* CAREER FIELDS SECTION HEADER */}
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="p-1.5 bg-blue-100 text-blue-800 rounded-lg">
                          <Layers className="w-5 h-5" />
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                          Career Fields in ECE
                        </h2>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        All major domains in Electronics & Communication Engineering with standardized sub-roles and skills
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-200/70 text-slate-700">
                        Showing {filteredDomains.length} of 8 Domains
                      </span>
                    </div>
                  </div>

                  {searchQuery && (
                    <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl text-xs text-blue-800 flex items-center justify-between">
                      <span>Filtering fields by search query: <strong className="font-semibold">"{searchQuery}"</strong></span>
                      <button
                        onClick={() => setSearchQuery('')}
                        className="text-blue-600 font-bold hover:underline"
                      >
                        Reset Search
                      </button>
                    </div>
                  )}
                </div>

                {/* Career Fields Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredDomains.map((field) => (
                    <DomainCard
                      key={field.id}
                      domain={field}
                      onSelect={handleSelectDomain}
                      onQuickRoadmap={handleQuickRoadmap}
                    />
                  ))}
                </div>

                {/* Secondary Discovery Banner */}
                <div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="space-y-2 max-w-2xl text-center md:text-left">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100/60 px-2.5 py-0.5 rounded-md">
                      Interactive Planning
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      Not sure which ECE career field to choose?
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Take our 2-minute ECE Career Readiness Quiz or compare any two engineering branches side-by-side to review starting salaries, math intensity, and hands-on lab requirements.
                    </p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <button
                      onClick={() => setIsQuizOpen(true)}
                      className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-colors flex items-center gap-2"
                    >
                      <Compass className="w-4 h-4" /> Take Career Quiz
                    </button>
                    <button
                      onClick={() => setIsCompareOpen(true)}
                      className="px-5 py-2.5 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-bold text-xs sm:text-sm rounded-xl transition-colors"
                    >
                      Compare Fields
                    </button>
                  </div>
                </div>

              </div>
            )}

            {/* View: Roadmaps */}
            {activeView === 'roadmaps' && (
              <RoadmapsHub
                completedSteps={completedSteps}
                onToggleStep={handleToggleStep}
                onSelectDomain={handleSelectDomain}
                onOpenCourse={(c) => setActiveCourse(c)}
                courses={FREE_COURSES}
                initialDomainId={initialRoadmapDomainId}
              />
            )}

            {/* View: Companies & Salaries */}
            {activeView === 'companies' && (
              <CompaniesView
                onSelectDomainById={handleSelectDomainById}
              />
            )}

            {/* View: Free Courses & Certifications */}
            {activeView === 'courses' && (
              <CoursesView
                onOpenCourse={(c) => setActiveCourse(c)}
                savedCertificates={savedCertificates}
                onViewCertificate={(cert) => setActiveCertificate(cert)}
              />
            )}
          </>
        )}

      </main>

      {/* Footer */}
      <footer className="mt-16 bg-white border-t border-slate-200 py-10 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <p className="font-bold text-slate-900 text-sm">ECE Career Hub</p>
            <p>Empowering Electronics and Communication Engineering students worldwide.</p>
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => handleNavigate('home')} className="hover:text-blue-600">Career Fields</button>
            <button onClick={() => handleNavigate('roadmaps')} className="hover:text-blue-600">Roadmaps</button>
            <button onClick={() => handleNavigate('companies')} className="hover:text-blue-600">Companies & Salaries</button>
            <button onClick={() => handleNavigate('courses')} className="hover:text-blue-600">Free Courses</button>
          </div>
          <p className="font-mono text-[11px] text-slate-400">
            © {new Date().getFullYear()} ECE Career Hub. Open Educational Platform.
          </p>
        </div>
      </footer>

      {/* Course Modules & Quiz Modal */}
      {activeCourse && (
        <CourseModal
          course={activeCourse}
          domainTitle={CAREER_FIELDS.find(f => f.id === activeCourse.domainId)?.title || 'ECE'}
          onClose={() => setActiveCourse(null)}
          onClaimCertificate={handleClaimCertificate}
        />
      )}

      {/* Certificate Modal */}
      {activeCertificate && (
        <CertificateModal
          certificate={activeCertificate}
          onClose={() => setActiveCertificate(null)}
          onUpdateName={handleUpdateCertName}
        />
      )}

      {/* Compare Modal */}
      <CompareModal
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        onSelectDomain={handleSelectDomain}
      />

      {/* Career Matchmaker Quiz Modal */}
      <SkillQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onSelectDomain={handleSelectDomain}
      />

    </div>
  );
}
