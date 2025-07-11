"use client";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4 bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-accent">
          Contact Us
        </h2>

        <p className="text-center text-gray-700 mb-8">
          Ready to start your project or have a question? Reach out to us
          anytime.
        </p>

        <form
          action="https://formsubmit.co/business.development@swarajyaconsultancy.in"
          method="POST"
          className="bg-white shadow rounded-lg p-6 space-y-4"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://swarajyaconsultancy.in"
          />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded px-4 py-2"
            rows={4}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-2 rounded transition duration-300"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
}
