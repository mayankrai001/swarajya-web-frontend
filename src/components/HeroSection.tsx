import React from "react";

const HeroSection = () => {
  return (
    <section
      className="w-full h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center">
        <div className="px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Your One-Stop Solution for <br /> Construction & Interior Work
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Industrial | Commercial | Residential | Pharmaceutical
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
