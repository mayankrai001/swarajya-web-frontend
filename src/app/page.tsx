"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Shield, Database, BarChart, ArrowUpRight, Sparkles } from "lucide-react";
import { ContainerTextFlip } from "@/components/ui/ContainerTextFlip";
import { GlowButton } from "@/components/ui/GlowButton";
import AboutSection from "@/components/AboutUs";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/ProductsSection";
import TechStackSection from "@/components/TechStackSection";
import ContactSection from "@/components/ContactSection";

const stats = [
  { value: 5, suffix: "+", label: "Projects Delivered" },
  { value: 5, suffix: "+", label: "Happy Clients" },
  { value: 100, suffix: "%", label: "Client Retention" },
  { value: 3, suffix: "+", label: "Years of Excellence" },
];

export default function HomePage() {
  return (
    <main>
      {/* ═══════════════════════════════════════════
          HERO SECTION — Cinematic Aurora
      ═══════════════════════════════════════════ */}
      <section
        id="home"
        className="relative min-h-screen w-full flex items-center justify-center overflow-hidden hero-aurora pt-32 pb-20 sm:pt-40 sm:pb-28"
      >
        {/* Dot pattern overlay */}
        <div className="absolute inset-0 dot-pattern opacity-20" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 grid-pattern opacity-30" />

        {/* Aurora orbs - refined with depth */}
        <div className="absolute top-16 left-8 w-80 h-80 bg-accent/15 rounded-full blur-[120px] animate-float pointer-events-none" />
        <div className="absolute bottom-16 right-8 w-[450px] h-[450px] bg-amber-accent/10 rounded-full blur-[140px] animate-float-slow pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-indigo-500/8 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-pink-500/5 rounded-full blur-[100px] pointer-events-none" />

        {/* Floating Tech Badges — refined depth layers */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[18%] left-[12%] w-14 h-14 rounded-2xl glass-elevated flex items-center justify-center text-accent"
          >
            <Code size={24} />
          </motion.div>

          <motion.div
            animate={{ y: [0, 25, 0], rotate: [0, -8, 0] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute top-[22%] right-[12%] w-16 h-16 rounded-2xl glass-elevated flex items-center justify-center text-amber-accent"
          >
            <Shield size={28} />
          </motion.div>

          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 8, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-[38%] left-[15%] w-12 h-12 rounded-2xl glass-elevated flex items-center justify-center text-indigo-400"
          >
            <Database size={20} />
          </motion.div>

          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
            className="absolute bottom-[28%] right-[18%] w-14 h-14 rounded-2xl glass-elevated flex items-center justify-center text-emerald-400"
          >
            <BarChart size={24} />
          </motion.div>
        </div>

        {/* Content */}
        <div className="relative z-10 px-4 sm:px-8 max-w-5xl mx-auto text-center w-full">
          {/* Badge with border beam */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full glass-elevated text-xs sm:text-sm font-medium text-secondary mb-6 sm:mb-8 border-beam max-w-full">
              <Sparkles size={14} className="text-accent shrink-0" />
              <span>Crafting Premium Digital Experiences</span>
            </div>
          </motion.div>

          {/* Headline — shimmer effect */}
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-3xl sm:text-5xl md:text-7xl font-bold leading-[1.15] sm:leading-[1.08] tracking-tight mb-6 text-primary font-display"
          >
            Your Vision.{" "}
            <span className="shimmer-text">Our Code.</span>
            <br />
            <span className="text-secondary font-light text-2xl sm:text-4xl md:text-5xl mt-2 block font-sans">
              Expert{" "}
              <ContainerTextFlip
                words={[
                  "Frontend",
                  "Backend",
                  "CyberSecurity",
                  "ISO 27001",
                  "Analytics",
                  "Power BI",
                ]}
              />{" "}
              Solutions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-base sm:text-lg text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We design and build enterprise-grade software, solve complex
            security challenges, and deliver data-driven insights — all under
            one roof.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <GlowButton href="#products" variant="primary">
              View Our Products
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </GlowButton>
            <GlowButton href="#contact" variant="secondary">
              Get In Touch
            </GlowButton>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-20 sm:mt-24"
          >
            <div className="glass-elevated rounded-2xl px-6 sm:px-8 py-6 max-w-3xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
                {stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`text-center ${
                      i < stats.length - 1
                        ? "md:border-r md:border-white/5"
                        : ""
                    }`}
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-primary font-display">
                      {stat.value}{stat.suffix}
                    </div>
                    <div className="text-xs sm:text-sm text-secondary mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="w-5 h-9 rounded-full border border-white/10 flex justify-center p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-1 h-1 rounded-full bg-accent"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      <AboutSection />

      <div className="section-divider" />

      <ServicesSection />

      <div className="section-divider" />

      <ProductsSection />

      <div className="section-divider" />

      <TechStackSection />

      <div className="section-divider" />

      <ContactSection />
    </main>
  );
}
