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

const services = [
  {
    icon: <Globe size={28} />,
    title: "Frontend Development",
    description:
      "Pixel-perfect, responsive interfaces built with React, Next.js, and Vue — optimized for speed and accessibility.",
  },
  {
    icon: <Server size={28} />,
    title: "Backend Development",
    description:
      "Scalable APIs and microservices engineered with Node.js, Express, and MongoDB for high-performance applications.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "CyberSecurity Solutions",
    description:
      "End-to-end security audits, vulnerability assessments, and hardened architectures to protect your digital assets.",
  },
  {
    icon: <FileCheck2 size={28} />,
    title: "ISO 27001 Consulting",
    description:
      "Complete guidance on achieving and maintaining ISO 27001 certification — from gap analysis to audit support.",
  },
  {
    icon: <BarChart3 size={28} />,
    title: "Analytics & Power BI",
    description:
      "Interactive dashboards and data pipelines that turn complex datasets into clear, actionable business intelligence.",
  },
  {
    icon: <Smartphone size={28} />,
    title: "Mobile Applications",
    description:
      "Cross-platform mobile apps built with modern frameworks, delivering native-like performance on iOS and Android.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-32 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-primary">
            Services We <span className="gradient-text">Excel At</span>
          </h2>
          <p className="text-secondary max-w-2xl mx-auto text-base sm:text-lg">
            From concept to deployment, we provide end-to-end solutions tailored to your business needs.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 sm:p-8 card-glow group relative overflow-hidden"
            >
              {/* Hover gradient line at top */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent transition-all duration-500" />

              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 text-accent group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                {service.title}
              </h3>
              <p className="text-secondary text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
