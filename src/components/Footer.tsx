"use client";

import Link from "next/link";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Products", href: "#products" },
  { name: "Contact", href: "#contact" },
];

const products = [
  { name: "XpenseControl", href: "https://xpensecontrol.com" },
  {
    name: "AskIT",
    href: "https://help-desk-frontend-three.vercel.app/login",
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      {/* Gradient top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold text-primary">Swarajya</span>
              <span className="text-xl font-light text-secondary">
                Consultancy
              </span>
            </Link>
            <p className="text-sm text-secondary leading-relaxed mb-6">
              Premium software solutions & digital products. Engineering
              excellence from Mumbai, serving businesses across India.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/swarajya-consultancy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-secondary/5 border border-primary/5 flex items-center justify-center text-secondary hover:text-accent hover:border-accent/30 transition-all duration-300"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=business.development@swarajyaconsultancy.in"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="w-9 h-9 rounded-lg bg-secondary/5 border border-primary/5 flex items-center justify-center text-secondary hover:text-accent hover:border-accent/30 transition-all duration-300"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-secondary hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
              Products
            </h4>
            <ul className="space-y-2.5">
              {products.map((product) => (
                <li key={product.name}>
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-secondary hover:text-primary transition-colors duration-200 inline-flex items-center gap-1"
                  >
                    {product.name}
                    <ArrowUpRight size={12} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-secondary">
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=business.development@swarajyaconsultancy.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors break-all"
                >
                  business.development
                  <br />
                  @swarajyaconsultancy.in
                </a>
              </li>
              <li className="text-secondary/80">Mumbai, India</li>
              <li className="text-secondary/80">Serving PAN India</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-primary/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-secondary/60">
            © {new Date().getFullYear()} Swarajya Consultancy. All rights
            reserved.
          </p>
          <p className="text-xs text-secondary/60">
            Crafted with precision ✦ Mumbai, India
          </p>
        </div>
      </div>
    </footer>
  );
}
