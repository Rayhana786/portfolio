import React, { ElementType, useMemo } from 'react';
import { motion, type TargetAndTransition } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  as?: ElementType;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  as: Tag = 'div',
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className = '',
  style = {},
}) => {
  // Use motion.create for dynamic element types
  const MotionComponent = useMemo(() => {
    return (motion as unknown as { create: (tag: ElementType) => React.ComponentType<any> }).create
      ? (motion as unknown as { create: (tag: ElementType) => React.ComponentType<any> }).create(Tag)
      : (motion as any)[Tag as string] || motion.div;
  }, [Tag]);

  const initial = useMemo(
    () => ({
      opacity: 0,
      x,
      y,
    }),
    [x, y]
  );

  const animate: TargetAndTransition = useMemo(
    () => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
    [duration, delay]
  );

  return (
    <MotionComponent
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      className={className}
      style={style}
    >
      {children}
    </MotionComponent>
  );
};

export default FadeIn;
