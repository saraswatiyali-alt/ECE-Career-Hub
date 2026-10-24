import React, { useState } from 'react';
import { Award, CheckCircle2, Download, Printer, Share2, X, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CertificateData } from '../types/career';

interface CertificateModalProps {
  certificate: CertificateData | null;
  onClose: () => void;
  onUpdateName?: (newName: string) => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certificate,
  onClose,
  onUpdateName,
}) => {
  const [studentName, setStudentName] = useState(certificate?.studentName || 'ECE Student');
  const [isEditingName, setIsEditingName] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!certificate) return null;

  const triggerCelebration = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    const text = `I just completed the "${certificate.courseTitle}" certified curriculum on ECE Career Hub! Credential ID: ${certificate.credentialId}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const saveName = () => {
    setIsEditingName(false);
    if (onUpdateName) {
      onUpdateName(studentName);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-emerald-100 text-emerald-700 rounded-lg">
              <ShieldCheck className="w-5 h-5" />
            </span>
            <div>
              <h3 className="font-semibold text-slate-800 text-sm sm:text-base">Verified Academic Credential</h3>
              <p className="text-xs text-slate-500">Official Course Completion Certificate</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 shadow-sm transition-colors"
            >
              <Printer className="w-4 h-4 text-slate-600" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <Share2 className="w-4 h-4" />
              <span>{copied ? 'Copied Link!' : 'Share'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200/60 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Display Area (Printable) */}
        <div className="p-4 sm:p-8 bg-slate-100/60 flex justify-center">
          <div
            id="printable-certificate"
            className="w-full max-w-3xl bg-gradient-to-b from-white to-amber-50/30 p-6 sm:p-10 rounded-xl border-4 border-double border-amber-600/40 shadow-xl relative overflow-hidden"
          >
            {/* Elegant Corner Ornaments */}
            <div className="absolute top-2 left-2 w-12 h-12 border-t-2 border-l-2 border-amber-500 pointer-events-none" />
            <div className="absolute top-2 right-2 w-12 h-12 border-t-2 border-r-2 border-amber-500 pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-12 h-12 border-b-2 border-l-2 border-amber-500 pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-12 h-12 border-b-2 border-r-2 border-amber-500 pointer-events-none" />

            {/* Header / Watermark */}
            <div className="text-center space-y-2 relative z-10">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber-500/10 text-amber-700 border border-amber-500/30 mb-1">
                <Award className="w-8 h-8" />
              </div>
              <p className="text-xs uppercase tracking-[0.3em] font-semibold text-amber-700">ECE Career Hub Certification Authority</p>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif">Certificate of Completion</h1>
              <p className="text-xs text-slate-500 tracking-wider uppercase font-medium">This is officially presented to</p>
            </div>

            {/* Student Name */}
            <div className="my-6 text-center relative z-10">
              {isEditingName ? (
                <div className="inline-flex items-center gap-2">
                  <input
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className="border-b-2 border-blue-600 px-3 py-1 font-serif text-2xl font-bold text-center text-slate-800 outline-none bg-transparent"
                    placeholder="Enter your full name"
                    autoFocus
                  />
                  <button
                    onClick={saveName}
                    className="px-3 py-1 text-xs font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <div className="group inline-block">
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif border-b-2 border-slate-300 pb-1 px-4 inline-block">
                    {studentName}
                  </h2>
                  <button
                    onClick={() => setIsEditingName(true)}
                    className="ml-2 text-xs text-blue-600 opacity-70 group-hover:opacity-100 hover:underline print:hidden"
                  >
                    (Edit Name)
                  </button>
                </div>
              )}
            </div>

            {/* Course Details Description */}
            <div className="text-center max-w-xl mx-auto space-y-2 text-slate-700 text-sm sm:text-base leading-relaxed relative z-10">
              <p>
                for successfully completing the rigorous comprehensive curriculum in
              </p>
              <p className="font-bold text-slate-900 text-lg sm:text-xl text-blue-900">
                {certificate.courseTitle}
              </p>
              <p className="text-xs text-slate-500">
                Domain Specialization: <span className="font-semibold text-slate-700">{certificate.domainTitle}</span>
              </p>
            </div>

            {/* Signatures & Seal */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10 text-xs">
              <div className="text-center sm:text-left">
                <p className="font-mono text-slate-500 uppercase tracking-wider text-[11px]">Date of Issuance</p>
                <p className="font-semibold text-slate-800 mt-1">{certificate.issueDate}</p>
                <p className="text-[10px] text-emerald-700 font-medium flex items-center gap-1 mt-1 justify-center sm:justify-start">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Assessment Grade: {certificate.grade}
                </p>
              </div>

              {/* Gold Medallion Seal */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border-2 border-amber-600 bg-gradient-to-tr from-amber-400 via-amber-200 to-amber-500 flex items-center justify-center shadow-md p-1">
                  <div className="w-full h-full rounded-full border border-dashed border-amber-800 flex flex-col items-center justify-center text-center">
                    <span className="text-[8px] font-bold uppercase text-amber-950 tracking-tighter">ECE Verified</span>
                    <span className="text-[10px] font-extrabold text-amber-950">2026</span>
                    <span className="text-[7px] font-semibold text-amber-900">ACCREDITED</span>
                  </div>
                </div>
                <span className="font-mono text-[9px] text-slate-400 mt-1">ID: {certificate.credentialId}</span>
              </div>

              <div className="text-center sm:text-right">
                <div className="font-serif italic font-bold text-slate-800 text-sm border-b border-slate-300 pb-0.5">
                  Academic Board of ECE
                </div>
                <p className="font-mono text-slate-500 uppercase tracking-wider text-[11px] mt-1">Director of Education</p>
                <p className="text-[10px] text-slate-400">ECE Career Hub</p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer Note */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>This certificate can be attached to your LinkedIn profile, resume, or portfolio.</span>
          <button
            onClick={triggerCelebration}
            className="text-amber-700 font-semibold hover:underline"
          >
            🎉 Celebrate Again
          </button>
        </div>
      </div>
    </div>
  );
};
