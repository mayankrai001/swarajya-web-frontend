"use client";

import React from "react";
import ServicesSection from "@/components/ServicesSection";
// import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import AboutSection from "@/components/AboutUs";
import { ContainerTextFlip } from "@/components/ui/ContainerTextFlip";

export default function HomePage() {
  return (
    <main>
      <section
        id="home"
        className="relative h-[90vh] w-full bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{ backgroundImage: "url('/swarajya-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Your One-Stop Solution for <br />{" "}
            <ContainerTextFlip
              words={[
                "Frontend",
                "Backend",
                "CyberSecurity",
                "ISO 27001 Consulting",
                "Analytics",
                "Power BI",
              ]}
            />{" "}
            Work
          </h1>
          <p className="text-xl md:text-2xl font-light drop-shadow mb-2">
            Frontend | Backend | CyberSecurity | ISO 27001 | Power BI |
            Analytics
          </p>
          <p className="text-sm md:text-base text-gray-200">
            📍 Based in Mumbai | Serving PAN India
          </p>
        </div>
      </section>

      <AboutSection />

      <ServicesSection />

      {/* <ProjectsSection /> */}

      <ContactSection />
    </main>
  );
}
