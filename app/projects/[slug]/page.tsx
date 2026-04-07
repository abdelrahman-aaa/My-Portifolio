import React from "react";
import { ExternalLink, CheckCircle2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

const projectsData = {
  "Fresh-Cart": {
    badge: "PROJECTS/E-COMMERCE",
    title: "E-Commerce Web Application",
    description:
      "A web app for browsing products, managing cart and wishlist, and completing purchases with authentication.",
    features: [
      "Authentication (Sign up / Sign in)",
      "Cart & Wishlist",
      "Checkout & Orders",
      "User Profile & Address Management",
    ],
    techStack: ["Next.js", "Redux Toolkit", "Tailwind CSS", "Auth.js"],
    liveDemo: "https://fresh-cart-ten-virid.vercel.app",
    github: "https://github.com/abdelrahman-aaa/Fresh-Cart",
  },
  "social-Hub-app": {
    badge: "PROJECTS/SOCIAL-MEDIA",
    title: "Social Media App",
    description:
      "A platform where users can create posts, interact with content, and manage their profiles.",
    features: [
      "Create, Edit, Delete Posts",
      "Comments & Likes",
      "Profile Management",
      "Infinite Scroll",
    ],
    techStack: ["React", "TanStack Query", "Tailwind CSS", "REST API"],
    liveDemo: "https://social-hub-app-iota.vercel.app",
    github: "https://github.com/abdelrahman-aaa/Social-Hub-App",
  },
  "Quiz-Master-App": {
    badge: "PROJECTS/QUIZ-APP",
    title: "Quiz App",
    description:
      "An interactive quiz application that allows users to answer multiple-choice questions, track their progress, and view their final score in a clean and engaging interface.",
    features: [
      "Multiple-choice questions",
      "Score calculation",
      "Responsive design",
      "Progress tracking",
    ],
    techStack: ["JavaScript", "Tailwind CSS", "REST API"],
    liveDemo: "https://quiz-app-lyart-beta-23.vercel.app",
    github: "https://github.com/abdelrahman-aaa/Quiz--App",
  },
};

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData[slug as keyof typeof projectsData];

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground pb-24">
      {/* Navbar Minimal Override */}
      <nav className="absolute top-0 left-0 w-full z-50 p-6 md:p-12">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Projects
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 md:pt-48 md:pb-32 overflow-hidden border-b border-white/5 bg-background/50">
        <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent opacity-20 -z-10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] -z-10" />

        <div className="max-w-7xl mx-auto flex flex-col items-start lg:w-3/4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-[10px] md:text-xs tracking-widest text-primary uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            {project.badge}
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            {project.title}
          </h1>

          <p className="text-xl md:text-2xl text-foreground/70 font-light leading-relaxed max-w-3xl mb-12">
            {project.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href={project.liveDemo}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-[0_0_30px_oklch(0.8_0.15_190/0.3)] transition-all"
            >
              <ExternalLink className="w-5 h-5" />
              Live Demo
            </a>
            <a
              href={project.github}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-foreground font-semibold rounded-lg hover:bg-white/10 group/btn transition-all"
            >
              <svg
                className="w-5 h-5 text-foreground/70 group-hover/btn:text-foreground transition-colors fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View Source
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 flex flex-col lg:flex-row gap-16">
        {/* Left Column: Features */}
        <div className="lg:w-2/3 space-y-12">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="w-8 h-[1px] bg-primary" />
              <h2 className="text-3xl font-bold tracking-tight">
                Features Implemented
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/20 transition-colors duration-300"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <p className="font-medium text-foreground/80 leading-relaxed text-sm md:text-base">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="w-8 h-[1px] bg-primary" />
              <h2 className="text-3xl font-bold tracking-tight">
                Architecture Highlights
              </h2>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/5 text-foreground/60 leading-relaxed font-light">
              This application was engineered with a focus on high performance
              and clean architecture. Scalability was a priority, ensuring that
              components are decoupled and state is strictly managed using
              modern reactive principles.
            </div>
          </div>
        </div>

        {/* Right Column: Tech Stack & Navigation */}
        <div className="lg:w-1/3 space-y-8">
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 sticky top-32">
            <div className="font-mono text-xs tracking-[0.2em] text-foreground/40 uppercase mb-8">
              Tech Stack Used
            </div>
            <div className="flex flex-wrap gap-3 mb-12">
              {project.techStack.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary font-semibold tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="font-mono text-xs tracking-[0.2em] text-foreground/40 uppercase mb-6 pt-8 border-t border-white/5">
              Gallery Navigation
            </div>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-6 py-4 w-full bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 rounded-lg text-sm font-semibold transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Image Gallery Call to Action */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-8">
        <div className="relative w-full min-h-[400px] md:min-h-0 md:aspect-21/9 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center p-6 md:p-8 group overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[48px_48px] opacity-50" />

          <div className="relative z-10 flex flex-col items-center text-center space-y-4 md:space-y-6 max-w-2xl bg-background/80 p-6 md:p-12 rounded-2xl backdrop-blur-xl border border-white/10 group-hover:border-primary/30 transition-colors duration-500">
            <h3 className="text-2xl md:text-3xl font-bold">
              Interested in the architecture?
            </h3>
            <p className="text-sm md:text-base text-foreground/60 leading-relaxed font-light">
              Explore the full technical documentation, implementation details,
              and CI/CD pipelines directly on GitHub.
            </p>
            <a
              href={project.github}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-[0_0_30px_oklch(0.8_0.15_190/0.3)] transition-all"
            >
              Go to Repository
            </a>
          </div>

          {/* Decorative Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-3/4 h-3/4 bg-primary/20 blur-[100px] md:blur-[120px] rounded-full opacity-60 group-hover:bg-primary/30 transition-colors duration-500" />
        </div>
      </section>
    </main>
  );
}
