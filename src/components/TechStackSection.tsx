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

// Split technologies into two rows for dual marquee
const row1 = technologies.slice(0, Math.ceil(technologies.length / 2));
const row2 = technologies.slice(Math.ceil(technologies.length / 2));

export default function TechStackSection() {
  return (
    <section className="py-20 sm:py-28 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
            Tech Stack
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-primary font-display">
            Technologies We{" "}
            <span className="shimmer-text">Work With</span>
          </h2>
          <p className="text-secondary max-w-xl mx-auto text-base sm:text-lg">
            Industry-standard tools and frameworks powering our solutions.
          </p>
        </motion.div>
      </div>

      {/* Row 1 — Left to Right */}
      <div className="relative flex overflow-x-hidden group mb-4">
        <div className="animate-marquee flex whitespace-nowrap py-3">
          {[...row1, ...row1, ...row1, ...row1].map((tech, i) => (
            <div
              key={`r1-${tech.name}-${i}`}
              className="glass-elevated rounded-2xl mx-2.5 p-5 sm:p-6 flex flex-col items-center justify-center gap-3.5 w-[130px] sm:w-[150px] flex-shrink-0 cursor-default group/card hover:border-accent/15 transition-all duration-300 hover:scale-105"
            >
              <img
                src={tech.src}
                alt={tech.name}
                className={`w-10 h-10 sm:w-11 sm:h-11 object-contain transition-transform duration-300 group-hover/card:scale-110 ${
                  (tech as any).customClass || ""
                }`}
              />
              <span className="text-xs sm:text-sm font-semibold text-secondary group-hover/card:text-primary transition-colors text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Edge fades */}
        <div className="absolute top-0 bottom-0 left-0 w-28 bg-gradient-to-r from-[var(--bg-deep)] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-28 bg-gradient-to-l from-[var(--bg-deep)] to-transparent z-10 pointer-events-none" />
      </div>

      {/* Row 2 — Right to Left */}
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee-reverse flex whitespace-nowrap py-3">
          {[...row2, ...row2, ...row2, ...row2].map((tech, i) => (
            <div
              key={`r2-${tech.name}-${i}`}
              className="glass-elevated rounded-2xl mx-2.5 p-5 sm:p-6 flex flex-col items-center justify-center gap-3.5 w-[130px] sm:w-[150px] flex-shrink-0 cursor-default group/card hover:border-accent/15 transition-all duration-300 hover:scale-105"
            >
              <img
                src={tech.src}
                alt={tech.name}
                className={`w-10 h-10 sm:w-11 sm:h-11 object-contain transition-transform duration-300 group-hover/card:scale-110 ${
                  (tech as any).customClass || ""
                }`}
              />
              <span className="text-xs sm:text-sm font-semibold text-secondary group-hover/card:text-primary transition-colors text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Edge fades */}
        <div className="absolute top-0 bottom-0 left-0 w-28 bg-gradient-to-r from-[var(--bg-deep)] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-28 bg-gradient-to-l from-[var(--bg-deep)] to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
