"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-32 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-primary">
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Together</span>
          </h2>
          <p className="text-secondary max-w-2xl mx-auto text-base sm:text-lg">
            Have a project in mind? We&apos;d love to hear about it. Reach out and let&apos;s discuss how we can help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass rounded-2xl p-6 card-glow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-accent" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-1">Email Us</h4>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=business.development@swarajyaconsultancy.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-secondary hover:text-accent transition-colors break-all"
                  >
                    business.development@swarajyaconsultancy.in
                  </a>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 card-glow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Linkedin size={18} className="text-accent" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-1">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/company/swarajya-consultancy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-secondary hover:text-accent transition-colors"
                  >
                    Follow Swarajya Consultancy
                  </a>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 card-glow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-accent" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-1">Location</h4>
                  <p className="text-sm text-secondary">
                    Mumbai, India — Serving PAN India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form
              action="https://formsubmit.co/business.development@swarajyaconsultancy.in"
              method="POST"
              className="glass rounded-3xl p-6 sm:p-8 lg:p-10 space-y-5"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input
                type="hidden"
                name="_next"
                value="https://swarajyaconsultancy.in"
              />

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-medium text-secondary mb-2 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-secondary/5 border border-primary/5 text-primary text-sm placeholder:text-secondary focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-medium text-secondary mb-2 uppercase tracking-wider">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-secondary/5 border border-primary/5 text-primary text-sm placeholder:text-secondary focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-medium text-secondary mb-2 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="Project enquiry"
                  className="w-full px-4 py-3 rounded-xl bg-secondary/5 border border-primary/5 text-primary text-sm placeholder:text-secondary focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-medium text-secondary mb-2 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell us about your project..."
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-secondary/5 border border-primary/5 text-primary text-sm placeholder:text-secondary focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-white btn-gradient rounded-full flex items-center justify-center gap-2"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
