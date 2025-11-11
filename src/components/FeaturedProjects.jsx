import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function FeaturedProjects() {
  const videoRef = useRef(null);

  // 🧠 Ensure autoplay works in browsers that block it
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((err) => {
        console.error("Video autoplay blocked:", err);
      });
    }
  }, []);

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
      title: "AI Email Generator",
      desc: "LLM-powered email creation with auto-send.",
      bg: "#24523b",
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
    <section
      id="projects"
      className="relative min-h-screen flex flex-col justify-center py-24 overflow-hidden bg-transparent"
    >
      {/* 🎞️ PaperCrush Background */}
      <video
        ref={videoRef}
        src="/PaperCrush.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{
          filter: "brightness(1.3) contrast(1.25) saturate(1.15)",
        }}
        onLoadedData={() => console.log("✅ PaperCrush video loaded")}
      />

      {/* 🧱 Content Section */}
      <div className="relative z-[2] max-w-7xl mx-auto px-6 md:px-12 space-y-10">
        {/* Heading */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h2 className="text-5xl font-bold text-gray-900 drop-shadow-lg">
            Featured <span className="text-[#ff6b6b]">Projects</span>
          </h2>
          <Link
            to="/projects"
            className="text-gray-700 hover:text-[#ff6b6b] underline underline-offset-4 transition drop-shadow-md"
          >
            View all projects →
          </Link>
        </div>

        {/* Project Grid */}
        <div
          className="
            grid grid-cols-1 md:grid-cols-3 gap-6
            auto-rows-[240px] md:auto-rows-[280px]
          "
        >
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="relative rounded-3xl overflow-hidden shadow-xl group transition-all duration-300"
              style={{ backgroundColor: proj.bg }}
            >
              {/* Subtle dark overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>

              {/* Project Info */}
              <div className="absolute bottom-5 left-5 right-5 text-white drop-shadow-md">
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
