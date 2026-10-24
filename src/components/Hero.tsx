import React from 'react';
import { Search, Sparkles, TrendingUp, CheckCircle, Award, Cpu, ShieldCheck } from 'lucide-react';

interface HeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSelectQuickTag: (tag: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  searchQuery,
  onSearchChange,
  onSelectQuickTag,
}) => {
  const quickTags = [
    'Embedded C',
    'Verilog HDL',
    'FreeRTOS',
    'BMS',
    'ROS 2',
    '5G NR',
    'KiCad',
    'PID Control',
  ];

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-blue-950 text-white p-6 sm:p-12 lg:p-16 shadow-xl border border-slate-800">
      
      {/* Background Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        
        {/* Subtle Pill Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs sm:text-sm font-semibold backdrop-blur-sm animate-in fade-in duration-300">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>The Definitive Engineering Guide for ECE Students</span>
        </div>

        {/* Main Title & Hero Tagline */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
            Discover your future in <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">ECE</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Standardized roadmaps, sub-job roles, in-demand technical skills, hands-on project ideas, verified salary insights, and certified free courses across all 8 core domains.
          </p>
        </div>

        {/* Search Bar - Exact user requested placeholder */}
        <div className="max-w-2xl mx-auto relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-md opacity-25 group-hover:opacity-40 transition-opacity" />
          <div className="relative flex items-center bg-white rounded-2xl shadow-2xl p-2 border border-slate-100">
            <Search className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="search job roles,career fieldaor skills.."
              className="w-full px-3 py-2 text-slate-900 text-sm sm:text-base placeholder-slate-400 bg-transparent focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="text-xs font-semibold px-2 py-1 bg-slate-100 text-slate-500 rounded-lg hover:bg-slate-200 mr-2 shrink-0"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Popular Search Suggestions */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-xs">
          <span className="text-slate-400 font-medium">Popular Skills:</span>
          {quickTags.map((tag) => (
            <button
              key={tag}
              onClick={() => onSelectQuickTag(tag)}
              className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 transition-colors font-mono"
            >
              #{tag}
            </button>
          ))}
        </div>

        {/* Quick Highlights Row */}
        <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="space-y-1">
            <p className="text-xl sm:text-2xl font-black text-white">8 Domains</p>
            <p className="text-xs text-slate-400">All Core ECE Branches</p>
          </div>
          <div className="space-y-1">
            <p className="text-xl sm:text-2xl font-black text-cyan-300">38+ Roles</p>
            <p className="text-xs text-slate-400">Sub-Job Titles & Salaries</p>
          </div>
          <div className="space-y-1">
            <p className="text-xl sm:text-2xl font-black text-emerald-300">₹6 - 36 LPA</p>
            <p className="text-xs text-slate-400">Fresher Salary Range</p>
          </div>
          <div className="space-y-1">
            <p className="text-xl sm:text-2xl font-black text-amber-300">8 Free Certs</p>
            <p className="text-xs text-slate-400">Verified Course Badges</p>
          </div>
        </div>

      </div>

    </div>
  );
};
