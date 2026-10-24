import React from 'react';
import { Cpu, Award, BookOpen, Building2, Map, Scale, Compass, CheckCircle2 } from 'lucide-react';

interface NavbarProps {
  activeView: 'home' | 'roadmaps' | 'companies' | 'courses';
  onNavigate: (view: 'home' | 'roadmaps' | 'companies' | 'courses') => void;
  onOpenCompare: () => void;
  onOpenQuiz: () => void;
  certificateCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  onNavigate,
  onOpenCompare,
  onOpenQuiz,
  certificateCount,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand / Title */}
        <div 
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-slate-950 via-slate-900 to-blue-700 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
            <Cpu className="w-5 h-5 text-blue-400 group-hover:rotate-12 transition-transform" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-slate-900 text-lg tracking-tight group-hover:text-blue-600 transition-colors">
                ECE Career Hub
              </span>
              <span className="text-[10px] font-bold font-mono px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                PRO
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium hidden sm:block">
              Electronics & Communication Engineering Portal
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-semibold text-slate-600">
          <button
            onClick={() => onNavigate('home')}
            className={`px-3 py-2 rounded-lg transition-colors ${
              activeView === 'home'
                ? 'bg-slate-100 text-slate-950 font-bold'
                : 'hover:text-slate-950 hover:bg-slate-50'
            }`}
          >
            Career Fields
          </button>
          <button
            onClick={() => onNavigate('roadmaps')}
            className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-1.5 ${
              activeView === 'roadmaps'
                ? 'bg-slate-100 text-slate-950 font-bold'
                : 'hover:text-slate-950 hover:bg-slate-50'
            }`}
          >
            <Map className="w-4 h-4 text-emerald-600" />
            <span>Roadmaps</span>
          </button>
          <button
            onClick={() => onNavigate('companies')}
            className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-1.5 ${
              activeView === 'companies'
                ? 'bg-slate-100 text-slate-950 font-bold'
                : 'hover:text-slate-950 hover:bg-slate-50'
            }`}
          >
            <Building2 className="w-4 h-4 text-purple-600" />
            <span>Jobs & Salaries</span>
          </button>
          <button
            onClick={() => onNavigate('courses')}
            className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-1.5 ${
              activeView === 'courses'
                ? 'bg-slate-100 text-slate-950 font-bold'
                : 'hover:text-slate-950 hover:bg-slate-50'
            }`}
          >
            <BookOpen className="w-4 h-4 text-blue-600" />
            <span>Free Courses & Certs</span>
            {certificateCount > 0 && (
              <span className="w-4 h-4 rounded-full bg-amber-500 text-white text-[10px] flex items-center justify-center font-bold">
                {certificateCount}
              </span>
            )}
          </button>
        </nav>

        {/* Right Action Tools */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenCompare}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            title="Compare ECE careers side by side"
          >
            <Scale className="w-4 h-4 text-slate-600" />
            <span>Compare Fields</span>
          </button>

          <button
            onClick={onOpenQuiz}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs hover:shadow-sm transition-all"
          >
            <Compass className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Career</span> Quiz
          </button>
        </div>

      </div>

      {/* Mobile nav bar */}
      <div className="md:hidden flex items-center justify-around border-t border-slate-100 py-2 px-2 bg-slate-50 text-xs font-medium text-slate-600">
        <button
          onClick={() => onNavigate('home')}
          className={`py-1 px-2.5 rounded-md ${activeView === 'home' ? 'bg-white text-blue-600 font-bold shadow-xs' : ''}`}
        >
          Domains
        </button>
        <button
          onClick={() => onNavigate('roadmaps')}
          className={`py-1 px-2.5 rounded-md ${activeView === 'roadmaps' ? 'bg-white text-blue-600 font-bold shadow-xs' : ''}`}
        >
          Roadmaps
        </button>
        <button
          onClick={() => onNavigate('companies')}
          className={`py-1 px-2.5 rounded-md ${activeView === 'companies' ? 'bg-white text-blue-600 font-bold shadow-xs' : ''}`}
        >
          Salaries
        </button>
        <button
          onClick={() => onNavigate('courses')}
          className={`py-1 px-2.5 rounded-md flex items-center gap-1 ${activeView === 'courses' ? 'bg-white text-blue-600 font-bold shadow-xs' : ''}`}
        >
          Courses {certificateCount > 0 && `(${certificateCount})`}
        </button>
      </div>
    </header>
  );
};
