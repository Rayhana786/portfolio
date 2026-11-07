import React from 'react';

export const TerminalCard: React.FC = () => {
  return (
    <div className="rounded-2xl bg-[#09100D] border border-[#10B981]/30 p-5 font-mono text-xs sm:text-sm text-[#D7E2EA] shadow-xl space-y-3">
      {/* Terminal Window Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <span className="text-[11px] text-white/40 tracking-wider">sh ~ terminal</span>
      </div>

      {/* Terminal Content Lines */}
      <div className="space-y-2.5">
        <div>
          <span className="text-[#10B981] font-semibold">$ </span>
          <span className="text-white/80">whoami</span>
          <div className="text-[#D7E2EA]/75 pl-3">raihana — full-stack developer</div>
        </div>

        <div>
          <span className="text-[#10B981] font-semibold">$ </span>
          <span className="text-white/80">status</span>
          <div className="text-[#D7E2EA]/75 pl-3">cybersecurity student, learning step by step</div>
        </div>

        <div>
          <span className="text-[#10B981] font-semibold">$ </span>
          <span className="text-white/80">next</span>
          <div className="text-[#D7E2EA]/75 pl-3 flex items-center gap-1">
            <span>keep building. keep exploring.</span>
            <span className="w-2 h-4 bg-[#10B981] animate-pulse inline-block" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalCard;
