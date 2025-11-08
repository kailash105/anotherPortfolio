import React from "react";

export default function FeaturedProjects() {
  const projects = [
    {
      id: 1,
      title: "Agro Aura",
      desc: "AI-powered disease detection for smart farming.",
      bg: "#1a1a1a",
    },
    {
      id: 2,
      title: "Task Manager WebApp",
      desc: "Beautifully animated productivity platform.",
      bg: "#2d4f8c",
    },
    {
      id: 3,
      title: "3D Printing Automation",
      desc: "Cloud-controlled printing workflow system.",
      bg: "#f04a4a",
    },
    {
      id: 4,
      title: "AI Email Generator",
      desc: "LLM-powered email creation with auto-send.",
      bg: "#24523b",
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col justify-center py-24 overflow-hidden"
    >
      {/* ✅ Background video */}
      <video
        src="/PaperCrush.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-[1.7] contrast-[1.4] saturate-[1.25] z-0"
      />

      {/* ✅ Transparent overlay for readability */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[0.5px] z-[1] pointer-events-none"></div>

      {/* ✅ Top fade to help blend with hero section */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent z-[1] pointer-events-none"></div>

      {/* ✅ Content section */}
      <div className="relative z-[2] max-w-7xl mx-auto px-6 md:px-12 space-y-10">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h2 className="text-5xl font-bold text-gray-900">
            Featured <span className="text-[#ff6b6b]">Projects</span>
          </h2>
          <a
            href="#"
            className="text-gray-700 hover:text-[#ff6b6b] underline underline-offset-4 transition"
          >
            View all projects →
          </a>
        </div>

        <div
          className="
            grid grid-cols-1 md:grid-cols-3 gap-6
            auto-rows-[240px] md:auto-rows-[280px]
          "
        >
          {projects.map((proj) => (
            <div
              key={proj.id}
              className={`relative rounded-3xl overflow-hidden shadow-lg group transition-all duration-300 ${proj.size}`}
              style={{ backgroundColor: proj.bg }}
            >
              <div className="absolute inset-0 bg-black/15 group-hover:bg-black/30 transition-all duration-300"></div>

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <h3 className="text-2xl font-semibold">{proj.title}</h3>
                <p className="text-sm text-gray-200">{proj.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
