"use client";
import Navigation from "@/components/portofolio/Navigation";
import HeroSection from "@/components/portofolio/HeroSection";
import OverviewSection from "@/components/portofolio/OverviewSection";
import ExperienceSection from "@/components/portofolio/ExperienceSection";
import CertificateSection from "@/components/portofolio/CertificateSection";
import ContactSection from "@/components/portofolio/ContactSection";
import Footer from "@/components/portofolio/Footer";
import ProjectsSection from "@/components/portofolio/Project";

export default function Portofolio() {
  return (
    <div className="min-h-screen text-gray-900 dark:text-white relative">
      <Navigation />
      <div className="max-w-6xl mx-auto px-6 pt-24">
        <HeroSection />
        <OverviewSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificateSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
