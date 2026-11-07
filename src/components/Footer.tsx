import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0C0C0C] text-[#D7E2EA]/70 py-10 px-6 border-t border-white/5 select-none">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light">
        <p className="text-center sm:text-left">
          © 2026 Raihana Khelifati. Built with React.
        </p>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/15 text-xs text-[#D7E2EA] hover:border-white/50 hover:text-white transition-colors cursor-pointer select-none"
        >
          <span>Back to top</span>
          <ArrowUp size={13} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
