import React from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Agro Aura",
      desc: "AI-powered wheat disease detection using CNN with React frontend.",
      img: "/projects/agro-aura.jpg",
      slug: "agro-aura",
    },
    {
      id: 2,
      title: "Task Manager WebApp",
      desc: "Beautiful React-based productivity dashboard with animations.",
      img: "/projects/taskmanager.jpg",
      slug: "task-manager",
    },
    {
      id: 3,
      title: "AI Email Generator",
      desc: "LLM-powered email creation and auto-sending app.",
      img: "/projects/ai-email.jpg",
      slug: "ai-email",
    },
    {
      id: 4,
      title: "Law Bot",
      desc: "AI-powered legal assistant chatbot built for document summarization, question answering, and law research.",
      img: "/projects/law-bot.jpg",
      slug: "law-bot",
    },
  ];

  return (
    <section className="min-h-screen bg-[#f7f7f7] text-gray-900 py-20 px-6 md:px-12">
      {/* 🏁 Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-3">
          My <span className="text-[#ff6b6b]">Projects</span>
        </h1>
        <p className="text-gray-600 text-lg">
          A showcase of my latest work across AI, Cloud, and Web Development.
        </p>
      </div>

      {/* 🧩 Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
          >
            {/* Thumbnail */}
            <img
              src={proj.img}
              alt={proj.title}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Content */}
            <div className="p-6 space-y-3">
              <h3 className="text-2xl font-semibold">{proj.title}</h3>
              <p className="text-gray-600">{proj.desc}</p>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <Link
                  to={`/projects/${proj.slug}`}
                  className="text-white border border-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition-all"
                >
                  View Details →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
