import React, { useState, useEffect } from 'react';

export const TYPEWRITER_WORDS = ['Full-Stack Developer', 'Cybersecurity Student'] as const;
export const TYPEWRITER_COLORS = ['#00E5FF', '#10B981'] as const;

interface TypewriterProps {
  words?: readonly string[];
  colors?: readonly string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseMs?: number;
  className?: string;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  words = TYPEWRITER_WORDS,
  colors = TYPEWRITER_COLORS,
  typeSpeed = 80,
  deleteSpeed = 40,
  pauseMs = 1500,
  className = '',
}) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      // If reduced motion is preferred, render full text without cycling
      setCharIndex(words[wordIndex].length);
      return;
    }

    const currentWord = words[wordIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && charIndex < currentWord.length) {
      // Typing forward
      timeout = setTimeout(() => {
        setCharIndex((prev) => prev + 1);
      }, typeSpeed);
    } else if (!isDeleting && charIndex === currentWord.length) {
      // Finished typing word, pause 1.5s
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseMs);
    } else if (isDeleting && charIndex > 0) {
      // Deleting backward letter by letter
      timeout = setTimeout(() => {
        setCharIndex((prev) => prev - 1);
      }, deleteSpeed);
    } else if (isDeleting && charIndex === 0) {
      // Finished deleting, move to next word
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pauseMs]);

  const currentWord = words[wordIndex];
  const displayedText = currentWord.substring(0, charIndex);
  const activeColor = colors[wordIndex % colors.length];

  return (
    <div
      className={`font-light text-[#D7E2EA] select-none ${className}`}
      style={{ fontSize: 'clamp(1.25rem, 3vw, 2.5rem)' }}
    >
      <span>I&apos;m a </span>
      <span
        style={{ color: activeColor }}
        className="font-medium transition-colors duration-300"
      >
        {displayedText}
      </span>
      <span
        className="animate-pulse inline-block ml-0.5 font-light"
        style={{ color: activeColor }}
        aria-hidden="true"
      >
        |
      </span>
    </div>
  );
};

export default Typewriter;
