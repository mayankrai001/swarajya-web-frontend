"use client";

import { motion } from "framer-motion";

const technologies = [
  {
    name: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    customClass: "dark:invert",
  },
  {
    name: "Vue.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
  },
  {
    name: "TypeScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "Node.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    customClass: "dark:invert",
  },
  {
    name: "MongoDB",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Tailwind CSS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Power BI",
    src: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
  },
  {
    name: "Python",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    name: "Docker",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
  {
    name: "Git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
];

export default function TechStackSection() {
  return (
    <section className="py-20 sm:py-28 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
            Tech Stack
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-primary">
            Technologies We <span className="gradient-text">Work With</span>
          </h2>
          <p className="text-secondary max-w-xl mx-auto text-base sm:text-lg">
            Industry-standard tools and frameworks powering our solutions.
          </p>
        </motion.div>
      </div>

      {/* Marquee Row */}
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee flex whitespace-nowrap py-4">
          {[...technologies, ...technologies].map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="glass rounded-2xl mx-3 p-5 sm:p-6 flex flex-col items-center justify-center gap-4 card-glow w-[140px] sm:w-[160px] flex-shrink-0 cursor-default"
            >
              <img
                src={tech.src}
                alt={tech.name}
                className={`w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-110 transition-transform duration-300 ${
                  (tech as any).customClass || ""
                }`}
              />
              <span className="text-xs sm:text-sm font-semibold text-secondary hover:text-primary transition-colors text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Gradient overlays for smooth fading edges */}
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[var(--bg-deep)] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[var(--bg-deep)] to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
