"use client";

import { motion } from "framer-motion";
import { Code2, Shield, BarChart3, Zap } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export default function AboutSection() {
  const highlights = [
    {
      icon: <Code2 size={22} className="text-accent" />,
      title: "Full-Stack Engineering",
      desc: "End-to-end product development using modern frameworks and architectures.",
    },
    {
      icon: <Shield size={22} className="text-accent" />,
      title: "Security First",
      desc: "Bank-grade encryption and ISO 27001 compliance baked into every solution.",
    },
    {
      icon: <BarChart3 size={22} className="text-accent" />,
      title: "Data & Analytics",
      desc: "Transform raw data into actionable insights with Power BI and custom dashboards.",
    },
    {
      icon: <Zap size={22} className="text-accent" />,
      title: "Rapid Delivery",
      desc: "Agile processes that take you from concept to production in weeks, not months.",
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 px-5 sm:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-primary font-display">
              We Build Software That{" "}
              <span className="shimmer-text">Drives Results</span>
            </h2>
            <p className="text-secondary text-base sm:text-lg leading-relaxed mb-4">
              Swarajya Consultancy is a software engineering firm based in
              Mumbai, serving clients across India. We specialize in crafting
              premium digital products — from intuitive web applications and
              SaaS platforms to robust cybersecurity solutions and business
              intelligence dashboards.
            </p>
            <p className="text-secondary text-base sm:text-lg leading-relaxed">
              Our approach is simple: understand your business deeply, engineer
              solutions precisely, and deliver outcomes that exceed expectations.
              Every line of code we write is purpose-built for performance,
              security, and scale.
            </p>
          </motion.div>

          {/* Right — Spotlight Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <SpotlightCard className="glass rounded-2xl p-5 card-glow group h-full">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-primary font-semibold text-sm mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-secondary text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
