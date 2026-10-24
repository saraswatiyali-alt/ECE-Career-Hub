import React, { useState } from 'react';
import { Building2, Search, MapPin, ExternalLink, Briefcase, Filter, TrendingUp, DollarSign } from 'lucide-react';
import { ALL_COMPANIES, CAREER_FIELDS } from '../data/careerData';
import { CompanyHiring, DomainId } from '../types/career';

interface CompaniesViewProps {
  onSelectDomainById: (domainId: DomainId) => void;
}

export const CompaniesView: React.FC<CompaniesViewProps> = ({ onSelectDomainById }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomain, setSelectedDomain] = useState<string>('all');
  const [salaryFilter, setSalaryFilter] = useState<'all' | 'high_fresher' | 'high_exp'>('all');

  const filteredCompanies = ALL_COMPANIES.filter(comp => {
    const matchesDomain = selectedDomain === 'all' || comp.domain === selectedDomain;
    const matchesSearch = 
      comp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      comp.hiringRoles.some(r => r.toLowerCase().includes(searchQuery.toLowerCase())) ||
      comp.locations.some(l => l.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesDomain && matchesSearch;
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      
      {/* Top Banner */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">
            <Building2 className="w-3.5 h-3.5" />
            <span>ECE Industry Hiring Directory</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Top ECE Companies, Roles & Salaries
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            Explore tier-1 semiconductor fabs, automotive OEMs, aerospace giants, and embedded systems leaders hiring ECE graduates. Compare fresher vs experienced compensation and learn their exact interview processes.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
          
          {/* Search Bar */}
          <div className="relative md:col-span-2">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search companies, job roles (e.g. RTL, BMS, FreeRTOS), or locations..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 focus:bg-white transition-all"
            />
          </div>

          {/* Domain Filter Dropdown */}
          <div>
            <select
              value={selectedDomain}
              onChange={(e) => setSelectedDomain(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 text-slate-700 font-medium"
            >
              <option value="all">All ECE Career Domains ({ALL_COMPANIES.length})</option>
              {CAREER_FIELDS.map(f => (
                <option key={f.id} value={f.id}>
                  {f.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Quick Domain Filter Chips */}
        <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          <button
            onClick={() => setSelectedDomain('all')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
              selectedDomain === 'all'
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Fields
          </button>
          {CAREER_FIELDS.map(f => (
            <button
              key={f.id}
              onClick={() => setSelectedDomain(f.id)}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors whitespace-nowrap ${
                selectedDomain === f.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <span className="mr-1">{f.symbol}</span>
              {f.title}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count & Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-500 px-1">
          <span>Showing {filteredCompanies.length} Hiring Companies</span>
          <span>Verified 2026 ECE Placement Data</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCompanies.map((comp, idx) => {
            const matchedField = CAREER_FIELDS.find(f => f.id === comp.domain);

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-6 hover:border-blue-400 hover:shadow-lg transition-all duration-200 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-4">
                  
                  {/* Company Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-slate-900 text-white font-mono font-bold flex items-center justify-center text-sm shadow-xs">
                        {comp.logoText}
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-lg leading-tight">{comp.name}</h3>
                        {matchedField && (
                          <button
                            onClick={() => onSelectDomainById(matchedField.id)}
                            className="text-xs text-blue-600 hover:underline font-medium text-left block"
                          >
                            {matchedField.symbol} {matchedField.title}
                          </button>
                        )}
                      </div>
                    </div>

                    <a
                      href={comp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-slate-400 hover:text-blue-600 hover:bg-slate-100 rounded-lg transition-colors"
                      title="Visit official careers portal"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Locations */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="line-clamp-1">{comp.locations.join(', ')}</span>
                  </div>

                  {/* Freshers vs Exp Salary Card */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-medium">Freshers (0-2 Yrs):</span>
                      <span className="font-extrabold text-emerald-600 text-xs sm:text-sm">{comp.fresherSalary}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-medium">Experienced (3-7+ Yrs):</span>
                      <span className="font-extrabold text-indigo-600 text-xs sm:text-sm">{comp.experiencedSalary}</span>
                    </div>
                  </div>

                  {/* Targeted ECE Roles */}
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                      Hiring Roles:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {comp.hiringRoles.map((role, rIdx) => (
                        <span key={rIdx} className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 font-medium text-xs border border-blue-100">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Interview Rounds */}
                  <div className="text-xs pt-1">
                    <span className="text-slate-500 font-bold block mb-1">Hiring Process:</span>
                    <p className="text-slate-700 bg-slate-50 p-2 rounded-lg border border-slate-100 font-mono text-[11px] leading-relaxed">
                      {comp.hiringRounds.join(' → ')}
                    </p>
                  </div>
                </div>

                {/* Interview Tip Footer */}
                <div className="pt-3 border-t border-slate-100 text-xs text-slate-600 bg-amber-50/60 p-3 rounded-xl border border-amber-200/50">
                  <span className="font-bold text-amber-900 block mb-0.5">💡 Interview Tip:</span>
                  <p className="text-amber-800 leading-relaxed text-[11px]">{comp.interviewTips}</p>
                </div>

              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
