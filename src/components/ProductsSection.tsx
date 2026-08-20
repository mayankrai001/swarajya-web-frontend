"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Wallet,
  Users,
  Plane,
  Lock,
  Ticket,
  Activity,
  LayoutDashboard,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const products = [
  {
    name: "XpenseControl",
    tagline: "Smart Expense Tracker & Budget Manager",
    description:
      "A comprehensive finance management platform that helps users track expenses, manage debts, plan group trips, and take full control of their budgets — all protected with bank-grade encryption.",
    url: "https://xpensecontrol.com",
    image: "/projects/xpensecontrol-new.png",
    cta: "Visit XpenseControl",
    color: "from-accent to-amber-500",
    glowColor: "rgba(255, 107, 43, 0.1)",
    features: [
      { icon: <Wallet size={16} />, text: "Expense & Budget Tracking" },
      { icon: <Users size={16} />, text: "Debt Management" },
      { icon: <Plane size={16} />, text: "Group Trip Planning" },
      { icon: <Lock size={16} />, text: "Bank-grade Encryption" },
    ],
    tech: ["Vue.js", "Node.js", "MongoDB", "Capacitor"],
  },
  {
    name: "AskIT",
    tagline: "Intelligent Ticket Management System",
    description:
      "A modern helpdesk solution designed for teams to efficiently manage support tickets, track resolutions in real-time, and deliver exceptional customer service with built-in analytics.",
    url: "https://help-desk-frontend-three.vercel.app/login",
    image: "/projects/helpdesk-new.png",
    cta: "View AskIT Demo",
    color: "from-blue-500 to-cyan-400",
    glowColor: "rgba(59, 130, 246, 0.1)",
    features: [
      { icon: <Ticket size={16} />, text: "Ticket Management" },
      { icon: <Activity size={16} />, text: "Real-time Status Tracking" },
      { icon: <LayoutDashboard size={16} />, text: "Analytics Dashboard" },
      { icon: <MessageSquare size={16} />, text: "Team Collaboration" },
    ],
    tech: ["Vue.js", "Node.js", "MongoDB"],
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-24 sm:py-32 px-5 sm:px-8 relative">
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
            Our Products
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-primary font-display">
            Products We&apos;ve{" "}
            <span className="shimmer-text">Built & Shipped</span>
          </h2>
          <p className="text-secondary max-w-2xl mx-auto text-base sm:text-lg">
            Live, production-grade applications serving real users — a testament
            to our engineering capabilities.
          </p>
        </motion.div>

        {/* Product Cards */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{
                opacity: 0,
                x: i % 2 === 0 ? -40 : 40,
                filter: "blur(8px)",
              }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              <SpotlightCard
                className="glass rounded-3xl overflow-hidden card-glow group relative flex flex-col h-full"
                spotlightColor={product.glowColor}
              >
                {/* Image Container */}
                <div className="relative w-full h-56 sm:h-72 overflow-hidden border-b border-primary/5 bg-[#060a14]">
                  <div className="absolute -top-16 -left-4 -right-4 -bottom-8">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover object-top group-hover:scale-[1.06] transition-transform duration-1000 ease-out"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-500" />

                  {/* Product name overlay on image */}
                  <div className="absolute bottom-4 left-6 sm:left-8">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white font-display drop-shadow-lg">
                      {product.name}
                    </h3>
                  </div>
                </div>

                {/* Gradient top accent */}
                <div className={`h-1 bg-gradient-to-r ${product.color}`} />

                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  {/* Tagline */}
                  <p className="text-sm text-secondary font-medium mb-3">
                    {product.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-secondary text-sm sm:text-base leading-relaxed mb-6 flex-grow">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {product.features.map((feature) => (
                      <div
                        key={feature.text}
                        className="flex items-center gap-2.5 text-sm text-secondary group/feature"
                      >
                        <span className="text-accent flex-shrink-0 group-hover/feature:scale-110 transition-transform">
                          {feature.icon}
                        </span>
                        <span>{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {product.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-accent/5 border border-accent/10 text-secondary hover:text-primary hover:border-accent/25 transition-colors duration-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${product.color} shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-fit group/cta`}
                  >
                    {product.cta}
                    <ArrowUpRight
                      size={16}
                      strokeWidth={2.5}
                      className="group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform"
                    />
                  </a>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
