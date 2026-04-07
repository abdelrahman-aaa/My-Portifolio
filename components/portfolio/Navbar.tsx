"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Me", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [activeSegment, setActiveSegment] = useState("/");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Prevent hydration mismatch
  useEffect(() => setMounted(true), []);

  // Scroll spy to sync active segment with scroll position
  useEffect(() => {
    const handleScrollTop = () => {
      if (window.scrollY < 100) {
        setActiveSegment("/");
      }
    };

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // triggers when section hits upper part of screen
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSegment(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    // Get all section IDs from navLinks
    const sectionIds = navLinks
      .filter((link) => link.href.startsWith("#"))
      .map((link) => link.href.substring(1));

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    window.addEventListener("scroll", handleScrollTop);

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
      window.removeEventListener("scroll", handleScrollTop);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 backdrop-blur-md bg-background/50 border-b border-border/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => {
            setActiveSegment("/");
            setIsMobileMenuOpen(false);
          }}
          className="flex items-center group relative outline-none hover:scale-105 transition-transform duration-300"
          aria-label="Home"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-br from-primary/20 to-primary/5 border border-primary/20 group-hover:border-primary/40 group-hover:shadow-[0_0_25px_oklch(0.8_0.15_190/0.4)] transition-all duration-300 group-active:scale-95 overflow-hidden">
            {/* Hover glare effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,oklch(0.8_0.15_190/0.4),transparent_60%)] transition-opacity duration-500" />

            {/* Isometric Cube SVG Logo */}
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-primary relative z-10 drop-shadow-[0_0_8px_oklch(0.8_0.15_190/0.5)] transition-transform duration-500 group-hover:rotate-12"
            >
              <path
                d="M12 2L3 7V17L12 22L21 17V7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M12 22V12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M21 7L12 12L3 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="12" r="2.5" fill="currentColor" />
            </svg>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex flex-row items-center gap-1 p-1.5 rounded-full bg-white/5 border border-white/10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setActiveSegment(link.href)}
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                activeSegment === link.href
                  ? "text-primary-foreground"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              {activeSegment === link.href && (
                <motion.div
                  layoutId="active-nav-pill"
                  className="absolute inset-0 bg-primary rounded-full z-[-1]"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right side Actions */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle Button */}
          <motion.button
            key={mounted ? theme : "loading"}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative flex items-center justify-center w-10 h-10 rounded-xl border border-border/50 bg-background/80 hover:border-primary/40 hover:shadow-[0_0_20px_oklch(0.8_0.15_190/0.2)] transition-all duration-300 overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mounted && theme === "dark" ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, opacity: 0, y: 10 }}
                  animate={{ rotate: 0, opacity: 1, y: 0 }}
                  exit={{ rotate: 90, opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute"
                >
                  <Sun className="w-5 h-5 text-primary" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90, opacity: 0, y: 10 }}
                  animate={{ rotate: 0, opacity: 1, y: 0 }}
                  exit={{ rotate: -90, opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute"
                >
                  <Moon className="w-5 h-5 text-primary" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Mobile Burger Button */}
          <button
            className="md:hidden p-2 text-foreground/80 hover:text-primary transition-colors focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[calc(100%+1rem)] left-4 right-4 p-4 bg-background/95 backdrop-blur-2xl border border-border/50 rounded-2xl shadow-2xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveSegment(link.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-4 py-3 rounded-xl text-center font-medium transition-colors ${
                    activeSegment === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/70 hover:bg-white/5 hover:text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/Abdelrahman_Alaa_Resume.pdf"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-4 py-3 text-center font-semibold text-primary border border-primary/30 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
                target="_blank"
              >
                Download Resume
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
