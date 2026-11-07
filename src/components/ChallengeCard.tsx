import React from 'react';
import { Flag, Shield } from 'lucide-react';

export const ChallengeCard: React.FC = () => {
  return (
    <div className="rounded-2xl bg-[#09100D] border border-[#10B981]/30 p-5 font-mono text-xs sm:text-sm text-[#D7E2EA] shadow-xl space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Flag size={14} className="text-[#10B981]" />
          <span className="text-xs uppercase tracking-wider font-semibold text-white/80">
            Example Challenge Interface
          </span>
        </div>
        <span className="text-[10px] text-[#10B981]/70 px-2 py-0.5 rounded bg-[#10B981]/10">
          CTF Exercise
        </span>
      </div>

      {/* Challenge Simulated Form */}
      <div className="space-y-3">
        <div className="text-xs text-white/60 font-sans">
          Analyze web response headers &amp; cookies to locate the educational flag:
        </div>

        <div className="flex items-center gap-2">
          <input
            type="text"
            readOnly
            disabled
            placeholder="flag{welcome_to_security_learning}"
            className="flex-1 bg-black/50 border border-[#10B981]/40 rounded-xl px-3.5 py-2 text-xs text-emerald-400/80 font-mono focus:outline-none cursor-not-allowed"
          />
          <button
            type="button"
            disabled
            className="px-4 py-2 rounded-xl bg-[#10B981]/20 border border-[#10B981]/40 text-[#10B981] text-xs font-semibold uppercase tracking-wider cursor-not-allowed opacity-70"
          >
            Submit
          </button>
        </div>

        <div className="flex items-center justify-between text-[11px] text-white/40 pt-1 font-sans">
          <span>Target: Web security lab</span>
          <span className="italic">Illustration only</span>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
