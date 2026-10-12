import React, { useState } from 'react';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuditModal: React.FC<AuditModalProps> = ({ isOpen, onClose }) => {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [lastTested, setLastTested] = useState<string>('Just now');

  if (!isOpen) return null;

  const handleRerun = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      setLastTested('Just now');
    }, 1200);
  };

  const scores = [
    { label: 'Performance', score: 100, icon: 'speed' },
    { label: 'Accessibility', score: 100, icon: 'accessibility_new' },
    { label: 'Best Practices', score: 100, icon: 'verified_user' },
    { label: 'SEO', score: 100, icon: 'search' },
  ];

  const vitals = [
    { name: 'First Contentful Paint (FCP)', value: '0.6s', status: 'Optimal' },
    { name: 'Largest Contentful Paint (LCP)', value: '0.8s', status: 'Optimal' },
    { name: 'Total Blocking Time (TBT)', value: '0 ms', status: 'Optimal' },
    { name: 'Cumulative Layout Shift (CLS)', value: '0.000', status: 'Optimal' },
    { name: 'Speed Index', value: '0.7s', status: 'Optimal' },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        className="w-full max-w-2xl bg-[#1b1c1e] border border-[#444932]/80 rounded-xl overflow-hidden shadow-2xl flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#292a2c] bg-[#121315]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#caf300] text-[22px]">
              verified
            </span>
            <span className="font-['Syne'] text-lg text-white font-bold">
              Lighthouse Production Audit
            </span>
            <span className="font-['JetBrains_Mono'] text-[10px] text-[#caf300] bg-[#1f2022] px-2 py-0.5 rounded border border-[#444932]/40">
              AUDITED 2026
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 rounded bg-[#1f2022] text-[#c5c9ac] hover:text-white hover:bg-[#292a2c] flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Top 4 Score Rings */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {scores.map((s) => (
              <div
                key={s.label}
                className="p-3.5 rounded-lg bg-[#0d0e10] border border-[#292a2c] flex flex-col items-center justify-center text-center relative"
              >
                <div className="w-14 h-14 rounded-full border-2 border-[#caf300] flex items-center justify-center mb-2 bg-[#caf300]/10 shadow-[0_0_12px_rgba(202,243,0,0.2)]">
                  {isRunning ? (
                    <span className="material-symbols-outlined text-[#caf300] text-[20px] animate-spin">
                      sync
                    </span>
                  ) : (
                    <span className="font-['Syne'] text-xl font-extrabold text-[#caf300]">
                      {s.score}
                    </span>
                  )}
                </div>
                <span className="font-['Plus_Jakarta_Sans'] text-[13px] font-bold text-white">
                  {s.label}
                </span>
                <span className="font-['JetBrains_Mono'] text-[10px] text-[#caf300] mt-0.5">
                  100 / 100
                </span>
              </div>
            ))}
          </div>

          {/* Web Vitals Table */}
          <div className="p-4 rounded-lg bg-[#121315] border border-[#292a2c] space-y-2.5">
            <div className="flex items-center justify-between pb-2 border-b border-[#292a2c]">
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#c5c9ac] uppercase font-bold">
                Core Web Vitals Metrics
              </span>
              <span className="font-['JetBrains_Mono'] text-[10px] text-[#caf300]">
                Target: Sub-Second
              </span>
            </div>
            {vitals.map((v) => (
              <div
                key={v.name}
                className="flex items-center justify-between text-[13px] font-['Plus_Jakarta_Sans'] py-1 border-b border-[#1f2022] last:border-0"
              >
                <span className="text-[#c5c9ac]">{v.name}</span>
                <div className="flex items-center gap-3">
                  <span className="font-['JetBrains_Mono'] text-white font-bold">
                    {v.value}
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-[#caf300]/15 text-[#caf300] font-['JetBrains_Mono'] text-[10px] font-semibold">
                    {v.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between font-['JetBrains_Mono'] text-[11px] text-[#c5c9ac] pt-1">
            <span>Last Verified: {lastTested}</span>
            <button
              onClick={handleRerun}
              disabled={isRunning}
              className="text-[#caf300] hover:underline flex items-center gap-1 cursor-pointer disabled:opacity-50"
            >
              <span className="material-symbols-outlined text-[14px]">
                {isRunning ? 'sync' : 'refresh'}
              </span>
              <span>{isRunning ? 'Testing Node...' : 'Re-Run Live Diagnostic'}</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-[#121315] border-t border-[#292a2c] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-[#caf300] text-[#2a3400] font-['Plus_Jakarta_Sans'] text-[13px] font-bold hover:bg-[#b0d500] transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
