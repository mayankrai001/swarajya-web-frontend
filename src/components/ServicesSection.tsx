"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Server,
  ShieldCheck,
  FileCheck2,
  BarChart3,
  Smartphone,
} from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { BorderBeam } from "@/components/ui/BorderBeam";

const services = [
  {
    icon: <Globe size={28} />,
    title: "Frontend Development",
    description:
      "Pixel-perfect, responsive interfaces built with React, Next.js, and Vue — optimized for speed and accessibility.",
    size: "large",
  },
  {
    icon: <Server size={28} />,
    title: "Backend Development",
    description:
      "Scalable APIs and microservices engineered with Node.js, Express, and MongoDB for high-performance applications.",
    size: "large",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "CyberSecurity Solutions",
    description:
      "End-to-end security audits, vulnerability assessments, and hardened architectures to protect your digital assets.",
    size: "small",
  },
  {
    icon: <FileCheck2 size={28} />,
    title: "ISO 27001 Consulting",
    description:
      "Complete guidance on achieving and maintaining ISO 27001 certification — from gap analysis to audit support.",
    size: "small",
  },
  {
    icon: <BarChart3 size={28} />,
    title: "Analytics & Power BI",
    description:
      "Interactive dashboards and data pipelines that turn complex datasets into clear, actionable business intelligence.",
    size: "small",
  },
  {
    icon: <Smartphone size={28} />,
    title: "Mobile Applications",
    description:
      "Cross-platform mobile apps built with modern frameworks, delivering native-like performance on iOS and Android.",
    size: "small",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-32 px-5 sm:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-primary font-display">
            Services We <span className="shimmer-text">Excel At</span>
          </h2>
          <p className="text-secondary max-w-2xl mx-auto text-base sm:text-lg">
            From concept to deployment, we provide end-to-end solutions
            tailored to your business needs.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={
                i < 2
                  ? "sm:col-span-1 lg:col-span-1"
                  : ""
              }
            >
              <SpotlightCard className="glass rounded-2xl card-glow group relative overflow-hidden h-full">
                {/* Premium Animated Border on Hover */}
                <div className="absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <BorderBeam size={120} duration={4} delay={i * 0.2} />
                </div>

                <div className="p-6 sm:p-8 h-full flex flex-col relative">
                  {/* Subtle corner glow */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent/0 group-hover:bg-accent/5 rounded-full blur-2xl transition-all duration-700 pointer-events-none" />

                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 text-accent group-hover:bg-accent/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2 font-display">
                    {service.title}
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
