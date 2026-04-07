"use client";

import { Code2, Layers, Palette, Wrench, Network, Brain } from "lucide-react";
import { motion } from "framer-motion";

const TechStack = () => {
  const categories = [
    {
      title: "Languages",
      icon: <Code2 className="w-6 h-6 text-primary" />,
      skills: ["JavaScript (ES6+)", "TypeScript", "C++"],
      highlight: false,
      colSpan: "md:col-span-1 lg:col-span-1",
    },
    {
      title: "Frontend Architecture",
      icon: <Layers className="w-6 h-6 text-white" />,
      skills: [
        "HTML5",
        "CSS3",
        "React",
        "Next.js",
        "Redux",
        "RESTful APIs",
        "Responsive Design",
        "Component-Based Architecture",
      ],
      highlight: true,
      colSpan: "md:col-span-2 lg:col-span-2",
    },
    {
      title: "Styling",
      icon: <Palette className="w-6 h-6 text-primary" />,
      skills: ["Tailwind CSS", "Bootstrap", "CSS Modules", "Sass"],
      highlight: false,
      colSpan: "md:col-span-1 lg:col-span-1",
    },
    {
      title: "Build & Deployment",
      icon: <Network className="w-6 h-6 text-primary" />,
      skills: ["Vite", "Webpack", "Next.js build tools", "Vercel", "Netlify"],
      highlight: false,
      colSpan: "md:col-span-1 lg:col-span-1",
    },
    {
      title: "Tools",
      icon: <Wrench className="w-6 h-6 text-primary" />,
      skills: [
        "Git",
        "GitHub",
        "WordPress",
        "VS Code",
        "Chrome DevTools",
        "Postman",
      ],
      highlight: false,
      colSpan: "md:col-span-1 lg:col-span-1",
    },
    {
      title: "CS Fundamentals",
      icon: <Brain className="w-6 h-6 text-primary" />,
      skills: ["OOP", "Data Structures", "Algorithms", "Design Patterns"],
      highlight: false,
      colSpan: "md:col-span-1 lg:col-span-1",
    },
  ];

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto"
      style={{ willChange: 'opacity, transform' }}
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 font-mono text-xs font-medium tracking-widest text-primary uppercase">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            TECH/SKILLS
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Technical <span className="text-primary text-glow">Skills</span>
          </h2>
          <p className="max-w-xl text-foreground/60 text-lg md:text-xl font-light leading-relaxed">
            A comprehensive breakdown of the languages, tools, and architectures
            I use to engineer robust digital solutions.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <motion.div
            key={category.title}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            style={{ willChange: 'transform' }}
            className={`
              relative p-8 rounded-2xl transition-colors duration-300 flex flex-col
              ${
                category.highlight
                  ? "bg-primary/10 border-2 border-primary/50 shadow-[0_0_30px_rgba(34,211,238,0.15)]"
                  : "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20"
              }
              ${category.colSpan}
            `}
          >
            {category.highlight && (
              <span className="absolute top-6 right-6 px-3 py-1 rounded-full bg-primary/20 text-[10px] font-bold text-primary tracking-wider uppercase">
                Core Stack
              </span>
            )}

            <div className="mb-6 inline-flex items-center justify-center p-3 rounded-lg bg-white/5 border border-white/10 w-fit">
              {category.icon}
            </div>

            <h3
              className={`text-2xl font-bold mb-6 tracking-tight ${category.highlight ? "text-white" : "text-foreground"}`}
            >
              {category.title}
            </h3>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className={`
                    px-3 py-1.5 rounded-md text-sm font-medium transition-colors
                    ${
                      category.highlight
                        ? "bg-primary/20 text-primary-foreground border border-primary/30"
                        : "bg-black/40 text-foreground/80 border border-white/5 hover:border-white/20"
                    }
                  `}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default TechStack;
