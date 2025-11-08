import React from "react";
import { Link } from "react-router-dom";

// Temporary sample projects (we'll replace with data file later)
const featuredProjects = [
  {
    id: "agro-aura",
    title: "Agro Aura",
    desc: "Smart farm management dashboard with analytics & marketplace.",
    tech: ["React", "Node.js", "MongoDB"],
    img: "/src/assets/agroaura.jpg",
  },
  {
    id: "ai-email-app",
    title: "AI Email Generator",
    desc: "Full-stack AI-powered email generation and sending platform.",
    tech: ["React", "Express", "Groq LLM"],
    img: "/src/assets/aiemail.jpg",
  },
  {
    id: "whatsapp-clone",
    title: "WhatsApp Clone",
    desc: "Real-time chat app with authentication and Socket.io.",
    tech: ["React", "Socket.io", "MongoDB"],
    img: "/src/assets/whatsapp.jpg",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>

      {/* Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProjects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className="group block rounded-xl overflow-hidden border border-gray-800 bg-[#111] hover:border-accent hover:shadow-lg transition-all duration-300"
          >
            {/* Project image */}
            <div className="h-52 overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Text */}
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-3">{project.desc}</p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* View More button */}
      <div className="text-center mt-10">
        <Link
          to="/projects"
          className="text-accent font-medium hover:underline text-lg"
        >
          View More Projects →
        </Link>
      </div>
    </section>
  );
}
