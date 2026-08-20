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
  const [activeSection, setActiveSection] = useState("home");
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setIsOpen(false);

      setTimeout(() => {
        const targetId = href.substring(1);
        const elem = document.getElementById(targetId);
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    } else {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    // Scroll spy for active section
    const sections = navItems
      .map((item) => document.getElementById(item.href.substring(1)))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 w-full z-[9999]"
    >
      {/* Floating bar container */}
      <div className="max-w-6xl mx-auto px-3 sm:px-4 pt-3">
        <div
          className={`relative rounded-2xl transition-all duration-500 ${
            scrolled || isOpen
              ? "bg-[var(--bg-card)] backdrop-blur-2xl shadow-lg shadow-black/10 border border-white/[0.06]"
              : "bg-transparent border border-transparent"
          }`}
        >
          {/* Border beam on scroll */}
          {(scrolled || isOpen) && (
            <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  padding: "1px",
                  background:
                    "conic-gradient(from var(--beam-angle, 0deg), transparent 0%, transparent 85%, rgba(255,107,43,0.15) 90%, rgba(245,158,11,0.1) 95%, transparent 100%)",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  maskComposite: "exclude" as string,
                  animation: "beam-rotate 6s linear infinite",
                }}
              />
            </div>
          )}

          <div className="relative px-4 sm:px-6 py-3.5 flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative w-9 h-9 overflow-hidden rounded-xl bg-white/5 border border-white/[0.06] p-0.5 transition-all duration-300 group-hover:shadow-glow-sm group-hover:border-accent/20">
                <Image
                  src="/swarajya-logo-new.png"
                  alt="Swarajya Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col -space-y-0.5">
                <span className="text-lg font-bold tracking-tight text-primary font-display">
                  Swarajya
                </span>
                <span className="text-[10px] font-medium text-secondary uppercase tracking-[0.2em]">
                  Consultancy
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-0.5">
              {navItems.map((item) => {
                const isActive =
                  activeSection === item.href.substring(1);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative px-3.5 py-2 text-sm font-medium transition-colors duration-300 group rounded-lg ${
                      isActive
                        ? "text-primary"
                        : "text-secondary hover:text-primary"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-accent/8 rounded-lg border border-accent/10"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </Link>
                );
              })}

              {/* Theme Toggle */}
              <button
                onClick={() =>
                  setTheme(resolvedTheme === "dark" ? "light" : "dark")
                }
                className="ml-1 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors text-secondary hover:text-primary"
                aria-label="Toggle theme"
              >
                {mounted &&
                  (resolvedTheme === "dark" ? (
                    <Sun size={16} />
                  ) : (
                    <Moon size={16} />
                  ))}
              </button>

              <Link
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="ml-3 px-5 py-2 text-sm font-semibold text-white btn-gradient rounded-full flex items-center gap-1.5 shadow-glow-sm"
              >
                Let&apos;s Talk
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </Link>
            </div>

            {/* Mobile Toggle */}
            <div className="flex items-center gap-1.5 md:hidden">
              <button
                onClick={() =>
                  setTheme(resolvedTheme === "dark" ? "light" : "dark")
                }
                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors text-secondary hover:text-primary"
                aria-label="Toggle theme"
              >
                {mounted &&
                  (resolvedTheme === "dark" ? (
                    <Sun size={16} />
                  ) : (
                    <Moon size={16} />
                  ))}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-primary p-2 hover:bg-white/5 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={22} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={22} />
                    </motion.div>
                  )}
                </AnimatePresence>
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
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="md:hidden overflow-hidden border-t border-white/5"
              >
                <div className="px-4 py-4 space-y-1">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 ${
                          activeSection === item.href.substring(1)
                            ? "text-primary bg-accent/8 border border-accent/10"
                            : "text-secondary hover:text-primary hover:bg-white/5"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Link
                      href="#contact"
                      onClick={(e) => handleNavClick(e, "#contact")}
                      className="block mt-3 px-4 py-3 text-center text-sm font-semibold text-white btn-gradient rounded-full"
                    >
                      Let&apos;s Talk
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
}
