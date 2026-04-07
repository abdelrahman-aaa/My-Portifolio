"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7 }}
      className="mt-auto border-t border-white/5 relative bg-background"
    >
      <div className="absolute inset-0 bg-primary/5 blur-[100px] -z-10 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2" />

      {/* Contact CTA */}
      <div className="py-24 px-6 md:px-12 border-b border-white/5">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Ready to{" "}
            <span className="text-primary text-glow">build something</span>{" "}
            together?
          </h2>
          <p className="text-foreground/60 text-lg font-light max-w-2xl mx-auto">
            I'm currently available for freelance work and open to new
            opportunities. Let's discuss your next project.
          </p>
          <motion.a
            href="mailto:abdelrahmanalaa670@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all mx-auto"
          >
            <Mail className="w-5 h-5" />
            Send me an email
            <ArrowRight className="w-4 h-4 ml-2" />
          </motion.a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 py-8 px-6 md:px-12">
        {/* Copyright */}
        <p className="text-[10px] md:text-xs font-mono tracking-widest text-foreground/40 uppercase">
          © 2024 DIGITAL CURATOR. BUILT WITH PRECISION.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-6 text-[10px] md:text-xs font-mono tracking-widest text-foreground/40 uppercase">
          <Link
            href="https://github.com/abdelrahman-aaa/Abdelrahman-Alaa"
            className="hover:text-primary transition-colors"
          >
            GITHUB
          </Link>
          <Link
            href="https://www.linkedin.com/in/abdelrhman-alaa-5a19323a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            className="hover:text-primary transition-colors"
          >
            LINKEDIN
          </Link>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
