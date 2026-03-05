'use client';

import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface CounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export default function Counter({ target, suffix = '', prefix = '', duration = 2 }: CounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${prefix}${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (isInView) {
      animate(count, target, { duration, ease: 'easeOut' });
    }
  }, [isInView, count, target, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}
