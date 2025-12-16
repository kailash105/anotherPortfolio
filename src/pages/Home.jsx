import React from "react";
import Hero from "../components/Hero";
import FeaturedProjects from "../components/FeaturedProjects";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "./Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* 🏁 Hero Section */}
      <Hero />

      {/* 👤 About Section */}
      <About />

      {/* 💡 Skills Section */}
      <Skills />

      {/* 🎞️ Featured Projects Section */}
      <FeaturedProjects />

      {/* ✉️ Contact Section */}
      <Contact />

      {/* ⚓ Footer */}
      <Footer />
    </main>
  );
}
