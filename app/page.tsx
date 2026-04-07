import React from "react";
import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import TechStack from "@/components/portfolio/TechStack";
import ProjectPreview from "@/components/portfolio/ProjectPreview";
import Footer from "@/components/portfolio/Footer";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col bg-background relative overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TechStack />
      <ProjectPreview />
      <Footer />
    </main>
  );
}
