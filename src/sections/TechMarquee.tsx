
import React, { useRef, useState, useEffect } from 'react';
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiPhp,
  SiNodedotjs,
  SiExpress,
  SiGit, SiGithub
} from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';

interface TechItem {
  name: string;
  icon: React.ReactNode;
}

const ROW1: TechItem[] = [
  { name: 'HTML', icon: <SiHtml5 size={18} color="#E34F26" /> },
  { name: 'CSS', icon: <SiCss size={18} color="#1572B6" /> },
  { name: 'JavaScript', icon: <SiJavascript size={18} color="#F7DF1E" /> },
  { name: 'React', icon: <SiReact size={18} color="#61DAFB" /> },
  { name: 'TypeScript', icon: <SiTypescript size={18} color="#3178C6" /> },
];

const ROW2: TechItem[] = [
  { name: 'PHP', icon: <SiPhp size={18} color="#777BB4" /> },
  { name: 'Node.js', icon: <SiNodedotjs size={18} color="#5FA04E" /> },
  { name: 'Express.js', icon: <SiExpress size={18} color="#FFFFFF" /> },
  { name: 'SQL', icon: <FaDatabase size={18} color="#4479A1" /> },
  { name: 'Git', icon: <SiGit size={18} color="#F05032" /> },
  { name: 'GitHub', icon: <SiGithub size={18} color="#FFFFFF" /> },
];
const TRIPLED_ROW1 = [...ROW1, ...ROW1, ...ROW1, ...ROW1];
const TRIPLED_ROW2 = [...ROW2, ...ROW2, ...ROW2, ...ROW2];

export const TechMarquee: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let ticking = false;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const sectionTop = window.scrollY + rect.top;
            const calculatedOffset =
              (window.scrollY - sectionTop + window.innerHeight) * 0.3;

            setOffset(calculatedOffset);
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const row1Translate = offset - 200;
  const row2Translate = -(offset - 200);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#0C0C0C] pt-20 sm:pt-28 md:pt-36 pb-10 overflow-hidden relative select-none"
      aria-label="Technologies and Skills"
    >
      <div className="flex flex-col gap-3.5 sm:gap-5">

        {/* Row 1: Frontend Technologies */}
        <div
          className="flex gap-3 sm:gap-4 whitespace-nowrap"
          style={{
            transform: `translate3d(${row1Translate}px, 0, 0)`,
            willChange: 'transform',
          }}
        >
          {TRIPLED_ROW1.map((item, idx) => (
            <div
              key={`row1-${idx}`}
              className="inline-flex items-center gap-3 rounded-full border border-[#D7E2EA]/20 bg-[#141416]/90 px-6 py-3 text-sm sm:text-base uppercase font-medium text-[#D7E2EA] hover:border-white/50 hover:text-white transition-all duration-200 shrink-0 shadow-sm"
            >
              <span className="shrink-0 drop-shadow-sm">{item.icon}</span>
              <span>{item.name}</span>
            </div>
          ))}
        </div>

        {/* Row 2: Backend and Database Technologies */}
        <div
          className="flex gap-3 sm:gap-4 whitespace-nowrap"
          style={{
            transform: `translate3d(${row2Translate}px, 0, 0)`,
            willChange: 'transform',
          }}
        >
          {TRIPLED_ROW2.map((item, idx) => (
            <div
              key={`row2-${idx}`}
              className="inline-flex items-center gap-3 rounded-full border border-[#D7E2EA]/20 bg-[#141416]/90 px-6 py-3 text-sm sm:text-base uppercase font-medium text-[#D7E2EA] hover:border-white/50 hover:text-white transition-all duration-200 shrink-0 shadow-sm"
            >
              <span className="shrink-0 drop-shadow-sm">{item.icon}</span>
              <span>{item.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechMarquee;
