import React from "react";
import Hero from "../components/Hero";
import FeaturedProjects from "../components/FeaturedProjects";

export default function Home() {
  return (
    <main className="text-white">
      <Hero />
      <FeaturedProjects />
    </main>
  );
}
