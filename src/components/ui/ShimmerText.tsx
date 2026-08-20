"use client";

import React from "react";

interface ShimmerTextProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

export function ShimmerText({
  children,
  className = "",
  as: Component = "span",
}: ShimmerTextProps) {
  return (
    <Component className={`shimmer-text ${className}`}>{children}</Component>
  );
}
