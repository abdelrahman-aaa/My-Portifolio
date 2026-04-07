"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
      {/* Background radial glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[80px] -z-10"
        style={{ willChange: 'opacity', transform: 'translateZ(0) translateX(-50%)' }}
      />

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="px-3 py-1 rounded-full bg-accent/20 border border-accent/20 text-[10px] md:text-xs font-mono text-foreground/60 flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          HOME/INTRO
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-7xl font-bold tracking-tight leading-[1.1]"
        >
          Hi, I&apos;m{" "}
          <span className="text-primary text-glow">Abdelrahman</span>
          <br />
          <span className="inline-block mt-2 h-[40px] md:h-[80px]">
            <TypeAnimation
              sequence={[
                "Frontend Developer.",
                2000,
                "React Developer.",
                2000,
                "Next.js Developer.",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-foreground/90 font-bold"
            />
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl text-base md:text-lg text-foreground/60 leading-relaxed font-light"
        >
          Specialized in building accessible, high-performance web applications
          with a focus on editorial design and technical precision.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-4"
        >
          <Link
            href="#projects"
            className="px-8 py-3 bg-primary text-secondary-foreground font-semibold rounded-md shadow-[0_0_20px_oklch(0.8_0.15_190/0.2)] hover:shadow-[0_0_30px_oklch(0.8_0.15_190/0.4)] hover:scale-105 transition-all duration-300 active:scale-95 flex items-center gap-2"
          >
            View Projects
          </Link>
          <Link
            href="#contact"
            className="px-8 py-3 border border-border/50 text-foreground font-semibold rounded-md hover:bg-white/5 transition-all duration-300 flex items-center gap-2 hover:border-white/20 active:scale-95"
          >
            Let&apos;s Talk
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
