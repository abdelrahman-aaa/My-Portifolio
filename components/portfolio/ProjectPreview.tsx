"use client";

import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Web Application",
    slug: "Fresh-Cart",
    description:
      "A web app for browsing products, managing cart and wishlist, and completing purchases with authentication.",
    tags: ["Next.js", "TypeScript", "Redux", "Tailwind CSS"],
    liveDemo: "https://fresh-cart-ten-virid.vercel.app",
    github: "https://github.com/abdelrahman-aaa/Fresh-Cart",
    image: "/ecommerce.png",
  },
  {
    title: "Social Media App",
    slug: "social-Hub-app",
    description:
      "A platform for creating posts, interacting with content, and managing user profiles.",
    tags: ["React", "TanStack Query", "Tailwind CSS"],
    liveDemo: "https://social-hub-app-iota.vercel.app",
    github: "https://github.com/abdelrahman-aaa/Social-Hub-App",
    image: "/social.png",
  },
  {
    title: "Quiz App",
    slug: "Quiz-Master-App",
    description:
      "An interactive quiz application that allows users to answer multiple-choice questions, track their progress, and view their final score in a clean and engaging interface.",
    tags: ["JavaScript", "Tailwind CSS"],
    liveDemo: "https://quiz-app-lyart-beta-23.vercel.app",
    github: "https://github.com/abdelrahman-aaa/Quiz--App",
    image: "/quiz.png",
  },
];

const ProjectPreview = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto"
      style={{ willChange: 'opacity, transform' }}
    >
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 font-mono text-xs font-medium tracking-widest text-primary uppercase">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Projects/Review
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
          Project <span className="text-primary text-glow">Review.</span>
        </h2>
        <p className="text-foreground/60 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
          A curated selection of high-performance interfaces, system
          architectures, and creative experiments built with precision.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="group relative flex flex-col bg-background/60 border border-border/50 rounded-2xl overflow-hidden hover:bg-white/5 hover:border-primary/30 hover:shadow-[0_15px_40px_oklch(0.8_0.15_190/0.12)] cursor-pointer"
            style={{ willChange: 'transform' }}
          >
            {/* Image Placeholder */}
            <div className="relative aspect-16/10 w-full overflow-hidden bg-black/50 border-b border-white/5">
              <Image
                src={project.image}
                alt={`${project.title} Preview`}
                fill
                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute top-5 right-5 z-20 font-mono text-[10px] tracking-widest text-white/40 uppercase bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10">
                Preview / 0{index + 1}
              </div>
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-80" />
              <Link
                href={`/projects/${project.slug}`}
                className="absolute inset-0 z-30"
                aria-label={`View ${project.title} details`}
              />
            </div>

            {/* Content Area */}
            <div className="flex flex-col grow p-8">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-mono text-primary font-semibold uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title & Description */}
              <Link
                href={`/projects/${project.slug}`}
                className="inline-block relative z-10 w-fit"
              >
                <h3 className="text-2xl lg:text-3xl font-bold tracking-tight mb-3 text-foreground hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
              </Link>
              <p className="text-foreground/60 text-base leading-relaxed mb-8 grow font-light">
                {project.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-6 border-t border-border/50">
                <a
                  href={project.liveDemo}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary/90 text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary hover:shadow-[0_0_20px_oklch(0.8_0.15_190/0.4)] transition-all duration-300 transform active:scale-95"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
                <a
                  href={project.github}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-white/5 border border-white/10 text-foreground text-sm font-semibold rounded-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform active:scale-95 group/btn"
                >
                  <svg
                    className="w-4 h-4 text-foreground/70 group-hover/btn:text-foreground transition-colors fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ProjectPreview;
