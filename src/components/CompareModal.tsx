import React, { useState } from 'react';
import { X, ArrowRight, Check, Sparkles, Scale } from 'lucide-react';
import { CAREER_FIELDS } from '../data/careerData';
import { CareerField, DomainId } from '../types/career';

interface CompareModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDomain: (domain: CareerField) => void;
}

export const CompareModal: React.FC<CompareModalProps> = ({
  isOpen,
  onClose,
  onSelectDomain,
}) => {
  const [selectedIds, setSelectedIds] = useState<DomainId[]>([
    'embedded-firmware',
    'vlsi-chip-design',
  ]);

  if (!isOpen) return null;

  const toggleDomain = (id: DomainId) => {
    if (selectedIds.includes(id)) {
      if (selectedIds.length > 1) {
        setSelectedIds(selectedIds.filter(d => d !== id));
      }
    } else {
      if (selectedIds.length < 3) {
        setSelectedIds([...selectedIds, id]);
      } else {
        // replace last
        setSelectedIds([selectedIds[0], selectedIds[1], id]);
      }
    }
  };

  const comparedDomains = selectedIds
    .map(id => CAREER_FIELDS.find(f => f.id === id)!)
    .filter(Boolean);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
      <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[92vh]">
        
        {/* Top Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-blue-500/20 text-blue-300 rounded-lg">
              <Scale className="w-5 h-5" />
            </span>
            <div>
              <h2 className="text-lg sm:text-xl font-bold">Compare ECE Career Fields</h2>
              <p className="text-xs text-slate-300">Select up to 3 domains side-by-side to compare salaries, skills, and roadmaps</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Domain selection chips */}
        <div className="p-4 bg-slate-50 border-b border-slate-200">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            Click to toggle domains for comparison (Select up to 3):
          </p>
          <div className="flex flex-wrap gap-2">
            {CAREER_FIELDS.map(f => {
              const active = selectedIds.includes(f.id);
              return (
                <button
                  key={f.id}
                  onClick={() => toggleDomain(f.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all flex items-center gap-1.5 ${
                    active
                      ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <span className="font-mono">{f.symbol}</span>
                  <span>{f.title}</span>
                  {active && <Check className="w-3.5 h-3.5 ml-1" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Side by side comparison table */}
        <div className="p-6 overflow-y-auto flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comparedDomains.map(field => (
              <div
                key={field.id}
                className="rounded-2xl border border-slate-200 bg-white p-5 space-y-5 flex flex-col justify-between shadow-xs"
              >
                <div className="space-y-4">
                  
                  {/* Domain Header */}
                  <div className="border-b border-slate-100 pb-3">
                    <span className="font-mono text-xl font-bold px-2 py-0.5 bg-slate-100 rounded-md text-slate-800">
                      {field.symbol}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mt-2">{field.title}</h3>
                    <p className="text-xs text-slate-500 line-clamp-2 mt-1">{field.shortDescription}</p>
                  </div>

                  {/* Typical Fresher Salary */}
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Fresher Compensation (0-2 Yrs):
                    </span>
                    <p className="font-bold text-emerald-600 text-sm mt-0.5">
                      {field.subRoles[0].avgFresherSalary}
                    </p>
                  </div>

                  {/* Experienced Salary */}
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Experienced Range (3-7+ Yrs):
                    </span>
                    <p className="font-bold text-indigo-600 text-sm mt-0.5">
                      {field.subRoles[0].avgExpSalary}
                    </p>
                  </div>

                  {/* Key Sub Roles */}
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Available Sub-Roles ({field.subRoles.length}):
                    </span>
                    <div className="space-y-1">
                      {field.subRoles.slice(0, 3).map((r, ri) => (
                        <div key={ri} className="text-xs font-medium text-slate-700 bg-slate-50 px-2 py-1 rounded">
                          • {r.title}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Core Skills Summary */}
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Core Skills:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {field.skillsRequired.map((s, si) => (
                        <span key={si} className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100">
                          {s.category}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Top Hiring Companies */}
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Top Companies:
                    </span>
                    <p className="text-xs text-slate-600 font-medium">
                      {field.hiringCompanies.map(c => c.name).join(', ')}
                    </p>
                  </div>
                </div>

                {/* Direct Action */}
                <button
                  onClick={() => {
                    onSelectDomain(field);
                    onClose();
                  }}
                  className="w-full py-2.5 px-3 bg-slate-900 hover:bg-blue-600 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <span>Explore {field.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
