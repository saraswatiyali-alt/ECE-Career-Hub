import React from 'react';
import { ArrowRight, ChevronRight, Sparkles, TrendingUp } from 'lucide-react';
import { CareerField } from '../types/career';

interface DomainCardProps {
  domain: CareerField;
  onSelect: (domain: CareerField) => void;
  onQuickRoadmap: (domain: CareerField) => void;
}

export const DomainCard: React.FC<DomainCardProps> = ({
  domain,
  onSelect,
  onQuickRoadmap,
}) => {
  return (
    <div className="group relative bg-white rounded-2xl border border-slate-200 p-6 hover:border-blue-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      
      {/* Top Symbol & Badge */}
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="w-12 h-12 rounded-xl bg-slate-900 text-blue-400 font-mono font-bold text-lg flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
            {domain.symbol}
          </div>
          <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
            {domain.subRoles.length} Sub-Roles
          </span>
        </div>

        {/* Title & Small letters prompt as requested */}
        <div>
          <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
            {domain.title}
          </h3>
          <p className="text-xs text-blue-600/90 font-medium tracking-tight mt-0.5">
            View sub-roles like all domains and skills
          </p>
        </div>

        {/* Description */}
        <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
          {domain.shortDescription}
        </p>

        {/* Sub-Roles Highlights */}
        <div className="space-y-1.5 pt-2 border-t border-slate-100">
          <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Sample Sub-Roles:</p>
          <div className="flex flex-wrap gap-1.5">
            {domain.subRoles.slice(0, 3).map((r, i) => (
              <span key={i} className="text-[11px] font-medium px-2 py-0.5 bg-slate-50 border border-slate-200/80 rounded-md text-slate-700">
                {r.title}
              </span>
            ))}
          </div>
        </div>

        {/* Typical Fresher Salary range */}
        <div className="pt-2 text-xs flex items-center justify-between text-slate-500">
          <span>Freshers:</span>
          <span className="font-bold text-emerald-600">{domain.subRoles[0].avgFresherSalary.split('(')[0]}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
        <button
          onClick={() => onSelect(domain)}
          className="flex-1 py-2 px-3 text-xs font-bold text-white bg-slate-900 hover:bg-blue-600 rounded-xl transition-all shadow-xs flex items-center justify-center gap-1.5 group-hover:shadow-md"
        >
          <span>Explore Field</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={() => onQuickRoadmap(domain)}
          className="py-2 px-3 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
          title="Jump directly to Learning Roadmap"
        >
          Roadmap
        </button>
      </div>

    </div>
  );
};
