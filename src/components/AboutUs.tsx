"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="px-4 py-16 max-w-5xl mx-auto text-center md:text-left"
    >
      <h2 className="text-3xl font-bold mb-4 text-accent">
        About Swarajya Consultancy
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed">
        With over <span className="font-semibold">2+ years of experience</span>,
        Swarajya Consultancy has been delivering high-quality engineering
        services. We specialize in FullStack Solutions.
      </p>
    </motion.section>
  );
}
