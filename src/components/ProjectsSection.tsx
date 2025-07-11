"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "GMP Cleanroom – Emil Pharma",
    description:
      "Cleanroom build with epoxy flooring, GMP partitions, and audit-ready finish.",
    image: "/projects/hero5.jpg",
  },
  {
    title: "Office Interior – Mumbai",
    description:
      "Complete turnkey interior with modular furniture and electricals.",
    image: "/projects/hero2.jpg",
  },
  {
    title: "Factory Construction – Boisar",
    description:
      "Civil + fabrication project including flooring, wiring, and sanitary.",
    image: "/projects/hero3.jpg",
  },
];

const ProjectsSection = () => {
  return (
    <motion.section
      id="projects"
      className="max-w-6xl mx-auto px-4 py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-center text-accent mb-10">
        Our Projects
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-lg overflow-hidden shadow border"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="relative w-full h-52">
              <Image
                src={proj.image}
                alt={proj.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-primary">
                {proj.title}
              </h3>
              <p className="text-sm text-gray-600">{proj.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
