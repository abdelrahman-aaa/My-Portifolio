"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center"
        style={{ willChange: 'opacity, transform' }}
      >
        {/* Left: Decorative Elements */}
        <div className="w-full lg:w-1/2 relative aspect-square max-w-md">
          <div className="absolute inset-0 bg-linear-to-br from-primary/15 to-transparent rounded-full blur-3xl -z-10" style={{ willChange: 'transform', transform: 'translateZ(0)' }} />
          <div className="w-full h-full border border-white/10 rounded-3xl bg-white/5 overflow-hidden relative flex items-center justify-center p-6 md:p-8">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] z-0" />

            {/* Profile Image container */}
            <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/photo_2026-04-07_17-15-54.jpg"
                alt="Abdelrahman"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>

            <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20 font-mono text-[10px] tracking-widest text-white/70 uppercase bg-black/60 px-3 py-1.5 rounded-full border border-white/10 shadow-lg">
              Profile / Identity
            </div>
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 font-mono text-xs font-medium tracking-widest text-primary uppercase">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            ABOUT Me
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            I'm <span className="text-primary text-glow">Abdelrahman</span>
          </h2>

          <div className="space-y-6 text-foreground/60 text-lg font-light leading-relaxed">
            <p>
              I am a passionate frontend developer obsessed with building
              interactive, high-performance web applications. My focus bridges
              the gap between complex engineering and pixel-perfect design.
            </p>
            <p>
              By leveraging modern libraries like React, Next.js, and Framer
              Motion, I architect scalable user interfaces that are not only
              functional but feel beautifully fluid to end users.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/5">
            <div>
              <div className="text-3xl font-bold text-foreground mb-1">1+</div>
              <div className="font-mono text-[10px] text-foreground/40 tracking-widest uppercase">
                Years Experience
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-1">10+</div>
              <div className="font-mono text-[10px] text-foreground/40 tracking-widest uppercase">
                Projects Shipped
              </div>
            </div>
          </div>

          <div className="pt-8">
            <motion.a
              href="/Abdelrahman_Alaa_Resume.pdf"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary/10 border border-primary/20 text-primary font-bold rounded-lg hover:bg-primary/20 transition-[background-color,border-color,box-shadow] duration-200 shadow-lg shadow-primary/5"
            style={{ willChange: 'transform' }}
            >
              <Download className="w-5 h-5" />
              Download My Resume
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
