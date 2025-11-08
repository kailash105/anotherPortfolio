import React from "react";
import Hero from "../components/Hero";
import FeaturedProjects from "../components/FeaturedProjects";

export default function Home() {
  return (
    <main className="bg-[#0d0d0d] text-white min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Featured Projects */}
      <FeaturedProjects />
    </main>
  );
}
