"use client";

import React from "react";

interface GlowButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
  target?: string;
  rel?: string;
  type?: "button" | "submit";
}

export function GlowButton({
  children,
  href,
  onClick,
  className = "",
  variant = "primary",
  target,
  rel,
  type = "button",
}: GlowButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center gap-2 font-semibold text-sm transition-all duration-300 rounded-full overflow-hidden";

  const variants = {
    primary:
      "px-8 py-3.5 text-white btn-gradient animate-pulse-glow hover:shadow-[0_8px_35px_rgba(255,107,43,0.4)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
    secondary:
      "px-8 py-3.5 text-primary btn-outline-glass hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
  };

  const combinedClass = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClass} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClass}>
      {children}
    </button>
  );
}
