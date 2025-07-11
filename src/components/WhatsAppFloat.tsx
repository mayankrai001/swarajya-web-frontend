"use client";

import React from "react";

const WhatsAppFloat = () => {
  console.log("WhatsAppFloat component rendered");
  return (
    <a
      href="https://wa.link/g2fvot"
      className="fixed bottom-6 right-6 z-50 group"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <a
        href="https://wa.link/g2fvot"
        className="fixed bottom-5 right-5 z-50"
        target="_blank"
        rel="noopener noreferrer"
      ></a>
      <span className="absolute bottom-20 right-0 bg-green-600 text-white text-xs px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppFloat;
