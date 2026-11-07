import React, { useRef, useState, useEffect } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  tilt?: boolean;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
  disabled?: boolean;
}

export const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 150,
  strength = 3,
  tilt = true,
  activeTransition = 'transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)',
  inactiveTransition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
  className = '',
  disabled = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    if (disabled) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Distance from cursor to element edge
      const distX = Math.max(0, Math.abs(e.clientX - centerX) - rect.width / 2);
      const distY = Math.max(0, Math.abs(e.clientY - centerY) - rect.height / 2);
      const distance = Math.hypot(distX, distY);

      if (distance <= padding) {
        // Inside magnetic radius
        const offsetX = (e.clientX - centerX) / strength;
        const offsetY = (e.clientY - centerY) / strength;
        setPosition({ x: offsetX, y: offsetY });
        setIsActive(true);
      } else {
        if (isActive) {
          setPosition({ x: 0, y: 0 });
          setIsActive(false);
        }
      }
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
      setIsActive(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [padding, strength, isActive, disabled]);

  const transformStyle = tilt
    ? `perspective(1000px) translate3d(${position.x}px, ${position.y}px, 0) rotateX(${-position.y * 0.12}deg) rotateY(${position.x * 0.12}deg)`
    : `translate3d(${position.x}px, ${position.y}px, 0)`;

  return (
    <div
      ref={ref}
      className={`inline-block ${className}`}
      style={{
        transform: transformStyle,
        transition: isActive ? activeTransition : inactiveTransition,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};

export default Magnet;
