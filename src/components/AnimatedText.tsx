import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  maxWidth?: string;
}

interface CharProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Character: React.FC<CharProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-0 select-none">{char === ' ' ? '\u00A0' : char}</span>
      <motion.span
        style={{ opacity }}
        className="absolute inset-0 select-text inline-block"
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  maxWidth = '640px',
}) => {
  const elementRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const characters = text.split('');
  const total = characters.length;

  return (
    <p
      ref={elementRef}
      className={`text-center leading-relaxed text-[#D7E2EA] font-medium ${className}`}
      style={{
        fontSize: 'clamp(1rem, 2vw, 1.35rem)',
        maxWidth,
      }}
    >
      {characters.map((char, index) => {
        const start = index / total;
        const end = Math.min(1, (index + 1) / total);
        return (
          <Character
            key={`${index}-${char}`}
            char={char}
            progress={scrollYProgress}
            range={[start, end]}
          />
        );
      })}
    </p>
  );
};

export default AnimatedText;
