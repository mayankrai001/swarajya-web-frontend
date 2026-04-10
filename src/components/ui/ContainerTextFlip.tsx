"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ContainerTextFlipProps {
  words: string[];
  interval?: number;
}

export function ContainerTextFlip({
  words,
  interval = 2500,
}: ContainerTextFlipProps) {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setIsVisible(false);
      timeoutRef.current = setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setIsVisible(true);
      }, 300);
    }, interval);

    return () => {
      clearInterval(id);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [words, interval]);

  return (
    <span className="inline-block relative">
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.span
            key={words[index]}
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="gradient-text font-extrabold"
          >
            {words[index]}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}
