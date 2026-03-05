'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface WordEntry {
  word: string;
  color: string;
}

interface Props {
  words: WordEntry[];
  interval?: number;
}

export default function RotatingText({ words, interval = 2800 }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span className="inline-block relative">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index].word}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="inline-block font-heading font-bold"
          style={{ color: words[index].color }}
        >
          {words[index].word}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
