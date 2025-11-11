import React from "react";
import Hero from "../components/Hero";
import FeaturedProjects from "../components/FeaturedProjects";

export default function Home() {
  return (
    <main className="relative min-h-screen text-white bg-transparent overflow-hidden">
      {/* 🏁 Hero Section */}
      <Hero />

      {/* 🎞️ Featured Projects Section */}
      <FeaturedProjects />
    </main>
  );
}
