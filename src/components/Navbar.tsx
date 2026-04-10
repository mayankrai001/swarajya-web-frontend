"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Products", href: "#products" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--bg-card)] backdrop-blur-lg shadow-lg shadow-black/10 border-b border-transparent"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 overflow-hidden rounded-xl glass p-1 transition-transform group-hover:scale-105">
            <Image
              src="/swarajya-logo-new.png"
              alt="Swarajya Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="text-xl font-bold tracking-tight text-primary">
              Swarajya
            </span>
            <span className="text-xs font-light text-secondary uppercase tracking-[0.2em]">
              Consultancy
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative px-4 py-2 text-sm font-medium text-secondary hover:text-primary transition-colors duration-300 group"
            >
              {item.name}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-accent to-amber-accent group-hover:w-3/4 transition-all duration-300 rounded-full" />
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="ml-2 w-9 h-9 flex items-center justify-center rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-secondary hover:text-primary"
            aria-label="Toggle theme"
          >
            {mounted && (resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />)}
          </button>

          <a
            href="#contact"
            className="ml-4 px-5 py-2.5 text-sm font-semibold text-white btn-gradient rounded-full flex items-center gap-1.5"
          >
            Let&apos;s Talk
            <ArrowUpRight size={14} strokeWidth={2.5} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-secondary hover:text-primary"
            aria-label="Toggle theme"
          >
            {mounted && (resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />)}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-primary p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden glass border-t border-white/5"
          >
            <div className="px-6 py-5 space-y-1">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => {
                      setTimeout(() => setIsOpen(false), 200);
                    }}
                    className="block px-4 py-3 text-base font-medium text-secondary hover:text-primary hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-all duration-200"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block mt-3 px-4 py-3 text-center text-sm font-semibold text-white btn-gradient rounded-full"
              >
                Let&apos;s Talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
