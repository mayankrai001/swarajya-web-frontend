"use client";
import { motion } from "framer-motion";

const services = [
  "Frontend Development",
  "Backend Development",
  "CyberSecurity Solutions",
  "ISO 27001 Consulting",
  "Analytics Solutions",
  "Power BI Solutions",
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 px-4 bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-8 text-accent">
          Our Core Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold">{service}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
