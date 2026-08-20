"use client";

import React from "react";

interface BorderBeamProps {
  size?: number;
  duration?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
  className?: string;
}

export function BorderBeam({
  size = 80,
  duration = 3,
  colorFrom = "rgba(255, 107, 43, 0.8)",
  colorTo = "rgba(245, 158, 11, 0.6)",
  delay = 0,
  className = "",
}: BorderBeamProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 rounded-[inherit] ${className}`}
      style={
        {
          "--beam-size": `${size}px`,
          "--beam-duration": `${duration}s`,
          "--beam-color-from": colorFrom,
          "--beam-color-to": colorTo,
          "--beam-delay": `${delay}s`,
          padding: "1.5px",
          background: `conic-gradient(from var(--beam-angle, 0deg), transparent 0%, transparent 70%, var(--beam-color-from) 80%, var(--beam-color-to) 90%, transparent 100%)`,
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude" as string,
          animation: `beam-rotate var(--beam-duration) linear infinite`,
          animationDelay: `var(--beam-delay)`,
        } as React.CSSProperties
      }
    />
  );
}
