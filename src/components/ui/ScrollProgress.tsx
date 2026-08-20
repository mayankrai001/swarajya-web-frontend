"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  // Ultra-smooth spring animation for premium feel
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, y: 40, scale: 0.8 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40, scale: isVisible ? 1 : 0.8 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed left-6 bottom-6 sm:left-10 sm:bottom-10 z-[100] group ${
        !isVisible ? "pointer-events-none" : "cursor-pointer"
      }`}
      aria-label="Scroll back to top"
    >
      <div className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-500 ease-out group-hover:scale-105">
        
        {/* Subtle background glow */}
        <div className="absolute inset-2 rounded-full bg-accent/10 blur-xl group-hover:bg-accent/20 transition-colors duration-700 pointer-events-none" />
        
        {/* Glass container */}
        <div className="absolute inset-0 rounded-full bg-surface-deep/30 backdrop-blur-xl border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.5)] pointer-events-none" />

        <svg
          className="absolute inset-0 w-full h-full -rotate-90 drop-shadow-lg"
          viewBox="0 0 100 100"
        >
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff6b2b" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Thin ambient background track */}
          <circle
            cx="50"
            cy="50"
            r="47"
            className="stroke-white/5"
            strokeWidth="1.5"
            fill="none"
          />
          
          {/* Main Progress Wheel with premium gradient and glow */}
          <motion.circle
            cx="50"
            cy="50"
            r="47"
            stroke="url(#progressGradient)"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            filter="url(#glow)"
            style={{ pathLength }}
            className="opacity-90 group-hover:opacity-100 transition-opacity duration-300"
          />
        </svg>

        {/* Inner rotating Ship's Wheel (Helm) */}
        <motion.svg
           className="absolute inset-0 w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-500"
           viewBox="0 0 100 100"
           style={{ rotate: useTransform(pathLength, [0, 1], [0, 1080]) }} // Spins 3 times over the page length
        >
          {/* Inner Hub */}
          <circle cx="50" cy="50" r="12" className="stroke-accent/80" strokeWidth="2" fill="none" />
          <circle cx="50" cy="50" r="4" className="fill-accent" />
          
          {/* Main Wheel Rim */}
          <circle cx="50" cy="50" r="32" className="stroke-white/20" strokeWidth="2" fill="none" />
          
          {/* Spokes and Handles */}
          {Array.from({ length: 4 }).map((_, i) => (
            <g key={i} transform={`rotate(${i * 45} 50 50)`}>
              {/* Spoke spanning across */}
              <line x1="50" y1="6" x2="50" y2="94" className="stroke-white/20" strokeWidth="2" strokeLinecap="round" />
              {/* Thicker handle ends */}
              <line x1="50" y1="6" x2="50" y2="14" className="stroke-accent" strokeWidth="4" strokeLinecap="round" />
              <line x1="50" y1="86" x2="50" y2="94" className="stroke-accent" strokeWidth="4" strokeLinecap="round" />
            </g>
          ))}
        </motion.svg>

        {/* Inner Arrow Container with Magnetic/Slide effect */}
        <div className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-surface-deep/80 backdrop-blur-md flex items-center justify-center border border-white/5 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-500 overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.5)]">
          <ArrowUp
            size={18}
            strokeWidth={2}
            className="absolute text-secondary transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-10 group-hover:opacity-0"
          />
          <ArrowUp
            size={18}
            strokeWidth={2}
            className="absolute text-accent translate-y-10 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100"
          />
        </div>
      </div>
    </motion.button>
  );
}
