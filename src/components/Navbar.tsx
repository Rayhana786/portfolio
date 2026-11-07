
import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'About', action: () => scrollTo('about') },
    { label: 'Services', action: () => scrollTo('services') },
    { label: 'Projects', action: () => scrollTo('projects') },
    //{ label: 'Security', action: () => scrollTo('security') },
    { label: 'Contact', action: () => scrollTo('contact') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0C0C0C]/85 backdrop-blur-md border-b border-[#D7E2EA]/10 py-3 sm:py-4 shadow-lg'
          : 'bg-transparent py-5 sm:py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">

        {/* Brand wordmark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-base sm:text-lg font-black tracking-wider uppercase text-[#D7E2EA] hover:opacity-80 transition-opacity whitespace-nowrap"
        >
          RAIHANA<span className="text-[#00E5FF]">.</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-7 lg:gap-10 text-[#D7E2EA] uppercase font-medium tracking-wider text-sm md:text-base"
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={link.action}
              className="hover:opacity-70 transition-opacity duration-200 cursor-pointer"
            >
              {link.label}
            </button>
          ))}

          {/* Direct CV Download */}
          <a
            href="/projects/CV_raihana.pdf"
            download="CV_raihana.pdf"
            className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#00E5FF]/40 text-xs text-[#00E5FF] hover:bg-[#00E5FF]/10 transition-colors cursor-pointer select-none"
          >
            <Download size={13} />
            <span>CV</span>
          </a>
        </nav>

        {/* Mobile Hamburger Button & CV */}
        <div className="flex md:hidden items-center gap-3">

          {/* Direct CV Download */}
          <a
            href="/projects/CV_raihana.pdf"
            download="CV_raihana.pdf"
            className="flex items-center gap-1 px-2.5 py-1 rounded-full border border-[#00E5FF]/40 text-xs text-[#00E5FF]"
          >
            <Download size={12} />
            <span>CV</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg text-[#D7E2EA] hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#121212] border-b border-[#D7E2EA]/10 px-6 py-6 shadow-2xl space-y-4">

          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={link.action}
              className="block w-full text-left text-base uppercase font-medium tracking-wider text-[#D7E2EA] py-2 hover:text-[#00E5FF] transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}

          <div className="pt-2 border-t border-white/10">

            {/* Direct CV Download */}
            <a
              href="/projects/CV_raihana.pdf"
              download="CV_raihana.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full border border-[#00E5FF] text-[#00E5FF] text-xs font-medium uppercase tracking-wider cursor-pointer"
            >
              <Download size={14} />
              <span>Download CV</span>
            </a>

          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
