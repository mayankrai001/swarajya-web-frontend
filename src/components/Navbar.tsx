"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "AboutUs", href: "#about" },
  { name: "Services", href: "#services" },
  // { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 border-b transition-all duration-300 ${
        scrolling
          ? "bg-white/90 shadow-md backdrop-blur-lg border-gray-200"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        <Link
          href="/"
          className={`text-2xl font-extrabold tracking-wide flex items-center gap-1 ${
            scrolling ? "text-gray-800" : "text-white"
          }`}
        >
          Swarajya Consultancy
          {/* <span className="text-[#FF7F11]">.</span> */}
        </Link>

        <div className="hidden md:flex gap-6 lg:gap-10 items-center text-sm font-medium">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`${
                scrolling ? "text-gray-800" : "text-white"
              } hover:text-[#FF7F11] transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#FF7F11] hover:after:w-full after:transition-all after:duration-300`}
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${
              scrolling ? "text-gray-800" : "text-white"
            } focus:outline-none`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4 text-sm font-medium shadow-md border-t">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-gray-800 hover:text-[#FF7F11] transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
}
