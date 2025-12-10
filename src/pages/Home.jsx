import React from "react";
import Hero from "../components/Hero";
import FeaturedProjects from "../components/FeaturedProjects";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "./Contact"; // already in pages
import Footer from "../components/Footer";

export default function Home() {
return ( <main className="relative min-h-screen text-white bg-gray-950 overflow-hidden">
{/* 🏁 Hero Section */} <Hero />

```
  {/* 👤 About Section */}
  <section id="about" className="py-20 bg-gray-900">
    <About />
  </section>

  {/* 💡 Skills Section */}
  <section id="skills" className="py-20 bg-gray-950">
    <Skills />
  </section>

  {/* 🎞️ Featured Projects Section */}
  <section id="projects" className="py-20 bg-gray-900">
    <FeaturedProjects />
  </section>

  {/* ✉️ Contact Section */}
  <section id="contact" className="py-20 bg-gray-950">
    <Contact />
  </section>

  {/* ⚓ Footer */}
  <Footer />
</main>
);
}
