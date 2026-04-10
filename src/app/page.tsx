"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Shield, Database, BarChart } from "lucide-react";
import { ContainerTextFlip } from "@/components/ui/ContainerTextFlip";
import AboutSection from "@/components/AboutUs";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/ProductsSection";
import TechStackSection from "@/components/TechStackSection";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <main>
      {/* ═══════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════ */}
      <section
        id="home"
        className="relative min-h-screen w-full flex items-center justify-center overflow-hidden hero-mesh"
      >
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 grid-pattern opacity-40" />

        {/* Decorative orbs - opacity adjusted for better visibility in light mode */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 dark:bg-accent/5 rounded-full blur-[100px] animate-float pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-accent/20 dark:bg-amber-accent/5 rounded-full blur-[120px] animate-float-slow pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none" />

        {/* Floating Tech Badges (fills vacant space) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] left-[15%] w-14 h-14 rounded-2xl glass flex items-center justify-center text-accent shadow-lg shadow-accent/5"
          >
            <Code size={26} />
          </motion.div>

          <motion.div 
            animate={{ y: [0, 25, 0], rotate: [0, -10, 0] }} 
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-[25%] right-[15%] w-16 h-16 rounded-2xl glass flex items-center justify-center text-amber-accent shadow-lg shadow-amber-accent/5"
          >
            <Shield size={30} />
          </motion.div>

          <motion.div 
            animate={{ y: [0, -15, 0], rotate: [0, 8, 0] }} 
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[35%] left-[18%] w-12 h-12 rounded-2xl glass flex items-center justify-center text-indigo-500 shadow-lg shadow-indigo-500/5"
          >
            <Database size={22} />
          </motion.div>

          <motion.div 
            animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }} 
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute bottom-[25%] right-[22%] w-14 h-14 rounded-2xl glass flex items-center justify-center text-emerald-500 shadow-lg shadow-emerald-500/5"
          >
            <BarChart size={26} />
          </motion.div>
        </div>

        {/* Content */}
        <div className="relative z-10 px-5 sm:px-8 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs sm:text-sm font-medium text-secondary mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Crafting Premium Digital Experiences
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-6 text-primary"
          >
            Your Vision.{" "}
            <span className="gradient-text">Our Code.</span>
            <br />
            <span className="text-secondary font-light text-3xl sm:text-4xl md:text-5xl mt-2 block">
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-base sm:text-lg text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We design and build enterprise-grade software, solve complex security challenges,
            and deliver data-driven insights — all under one roof.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#products"
              className="px-8 py-3.5 text-sm font-semibold text-white btn-gradient rounded-full"
            >
              View Our Products
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 text-sm font-semibold text-primary btn-outline-glass rounded-full"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <div className="w-6 h-10 rounded-full border-2 border-primary/10 flex justify-center p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-accent"
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
