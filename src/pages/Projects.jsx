import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Temporary project data
const projects = [
  {
    id: "agro-aura",
    title: "Agro Aura",
    category: "Frontend",
    desc: "Farm management dashboard with real-time analytics & marketplace features.",
    tech: ["React", "Tailwind", "Node.js", "MongoDB"],
    img: "/src/assets/agroaura.jpg",
  },
  {
    id: "ai-email-app",
    title: "AI Email Generator",
    category: "Machine Learning",
    desc: "AI-powered email generator that crafts context-aware professional emails.",
    tech: ["React", "Express", "Groq LLM"],
    img: "/src/assets/aiemail.jpg",
  },
  {
    id: "whatsapp-clone",
    title: "WhatsApp Clone",
    category: "Frontend",
    desc: "Real-time chat app with authentication, search, and live updates.",
    tech: ["React", "Socket.io", "MongoDB"],
    img: "/src/assets/whatsapp.jpg",
  },
  {
    id: "cloud-monitor",
    title: "Cloud Monitor",
    category: "Cloud Engineering",
    desc: "Monitor and visualize cloud metrics with AWS + Grafana integration.",
    tech: ["React", "AWS", "Grafana"],
    img: "/src/assets/cloud.jpg",
  },
  {
    id: "data-pipeline",
    title: "Data Pipeline Builder",
    category: "Data Engineering",
    desc: "Visual ETL builder to orchestrate real-time pipelines and analytics.",
    tech: ["Python", "Airflow", "MongoDB"],
    img: "/src/assets/data.jpg",
  },
];

export default function Projects() {
  // Group by category
  const grouped = projects.reduce((acc, p) => {
    acc[p.category] = acc[p.category] || [];
    acc[p.category].push(p);
    return acc;
  }, {});

  return (
    <main className="bg-[#0d0d0d] text-white min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl font-extrabold text-center mb-16"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          All <span className="text-accent">Projects</span>
        </motion.h1>

        {Object.entries(grouped).map(([category, items], index) => (
          <motion.section
            key={category}
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.8 }}
          >
            {/* Category Header */}
            <h2 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <span className="w-10 h-[2px] bg-accent"></span>
              <span>{category}</span>
            </h2>

            {/* Project Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {items.map((p) => (
                <motion.div
                  key={p.id}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#141414] to-[#1b1b1b] border border-gray-800 hover:border-accent hover:shadow-[0_0_25px_rgba(255,107,107,0.3)] transition-all duration-300"
                >
                  {/* Image */}
                  <div className="h-52 overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Details */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-semibold group-hover:text-accent transition">
                      {p.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {p.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {p.tech.map((t, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/projects/${p.id}`}
                      className="inline-block mt-3 text-accent text-sm font-medium hover:underline"
                    >
                      View Details →
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>
    </main>
  );
}
