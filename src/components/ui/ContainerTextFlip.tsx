"use client";

import { useEffect, useState } from "react";

interface ContainerTextFlipProps {
  words: string[];
  interval?: number;
}

export function ContainerTextFlip({
  words,
  interval = 700,
}: ContainerTextFlipProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(id);
  }, [words, interval]);

  return (
    <span className="inline-block mx-2 text-[#FF7F11] transition-all duration-500 ease-in-out">
      {words[index]}
    </span>
  );
}
