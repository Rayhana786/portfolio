
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
  SiGit,
  SiGithub,
} from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';

interface TechItem {
  name: string;
  icon: React.ReactNode;
}

interface RowPosition {
  row1: number;
  row2: number;
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

const TechMarquee: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  const [rowWidths, setRowWidths] = useState({
    row1: 0,
    row2: 0,
  });

  const [position, setPosition] = useState<RowPosition>({
    row1: 0,
    row2: 0,
  });

  useEffect(() => {
    const section = sectionRef.current;
    const row1 = row1Ref.current;
    const row2 = row2Ref.current;

    if (!section || !row1 || !row2) return;

    const measureRows = () => {
      setRowWidths({
        row1: row1.getBoundingClientRect().width,
        row2: row2.getBoundingClientRect().width,
      });
    };

    measureRows();

    const resizeObserver = new ResizeObserver(measureRows);

    resizeObserver.observe(row1);
    resizeObserver.observe(row2);
    resizeObserver.observe(section);

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    if (!rowWidths.row1 || !rowWidths.row2) return;

    const mediaQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    if (mediaQuery.matches) {
      setPosition({ row1: 0, row2: 0 });
      return;
    }

    let animationFrame = 0;

    const calculatePosition = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();

      const sectionTop = window.scrollY + rect.top;

      const scrollProgress =
        window.scrollY - sectionTop + window.innerHeight;

      // Responsive parallax speed
      const width = window.innerWidth;

      const movementSpeed =
        width < 640
          ? 0.16
          : width < 1024
            ? 0.24
            : 0.32;

      const getPhase = (rowWidth: number) => {
        const distance = scrollProgress * movementSpeed;

        // Keep the movement inside the duplicated content.
        return ((distance % rowWidth) + rowWidth) % rowWidth;
      };

      const nextPosition = {
        row1: getPhase(rowWidths.row1),
        row2: getPhase(rowWidths.row2),
      };

      setPosition((previous) => {
        if (
          Math.abs(previous.row1 - nextPosition.row1) < 0.5 &&
          Math.abs(previous.row2 - nextPosition.row2) < 0.5
        ) {
          return previous;
        }

        return nextPosition;
      });
    };

    const handleScroll = () => {
      if (animationFrame) return;

      animationFrame = window.requestAnimationFrame(() => {
        calculatePosition();
        animationFrame = 0;
      });
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    window.addEventListener('resize', handleScroll);

    calculatePosition();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);

      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, [rowWidths]);

  const renderItems = (items: TechItem[], rowName: string) => (
    <>
      {items.map((item, index) => (
        <div
          key={`${rowName}-${index}`}
          className="
            inline-flex shrink-0 items-center justify-center
            gap-2 sm:gap-2.5 md:gap-3
            rounded-full
            border border-[#D7E2EA]/20
            bg-[#141416]/90
            px-3.5 py-2.5
            min-[400px]:px-4
            sm:px-5 sm:py-3
            md:px-6
            text-xs sm:text-sm md:text-base
            uppercase font-medium
            text-[#D7E2EA]
            shadow-sm
            transition-colors duration-200
            hover:border-white/50 hover:text-white
          "
        >
          <span className="shrink-0 drop-shadow-sm">
            {item.icon}
          </span>

          <span>{item.name}</span>
        </div>
      ))}
    </>
  );

  return (
    <section
      ref={sectionRef}
      className="
        relative w-full min-w-0
        overflow-hidden
        bg-[#0C0C0C]
        pt-12 sm:pt-16 md:pt-24 lg:pt-32
        pb-8 sm:pb-10 md:pb-12
        select-none
      "
      aria-label="Technologies and Skills"
    >
      <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">

        {/* Frontend Technologies */}
        <div
          className="w-full overflow-hidden"
        >
          <div
            className="flex w-max"
            style={{
              transform: `translate3d(${-position.row1}px, 0, 0)`,
              willChange: 'transform',
            }}
          >
            <div
              ref={row1Ref}
              className="flex w-max shrink-0 gap-2.5 sm:gap-3 md:gap-4 pr-2.5 sm:pr-3 md:pr-4"
            >
              {renderItems(ROW1, 'frontend')}
            </div>

            <div
              className="flex w-max shrink-0 gap-2.5 sm:gap-3 md:gap-4 pr-2.5 sm:pr-3 md:pr-4"
              aria-hidden="true"
            >
              {renderItems(ROW1, 'frontend-duplicate')}
            </div>
          </div>
        </div>

        {/* Backend and Database Technologies */}
        <div
          className="w-full overflow-hidden"
        >
          <div
            className="flex w-max"
            style={{
              transform: `translate3d(${-rowWidths.row2 + position.row2}px, 0, 0)`,
              willChange: 'transform',
            }}
          >
            <div
              ref={row2Ref}
              className="flex w-max shrink-0 gap-2.5 sm:gap-3 md:gap-4 pr-2.5 sm:pr-3 md:pr-4"
            >
              {renderItems(ROW2, 'backend')}
            </div>

            <div
              className="flex w-max shrink-0 gap-2.5 sm:gap-3 md:gap-4 pr-2.5 sm:pr-3 md:pr-4"
              aria-hidden="true"
            >
              {renderItems(ROW2, 'backend-duplicate')}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechMarquee;
