import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { ArrowUpRight } from "lucide-react";

export default function FeaturedProjects() {
  const bgVideoRef = useRef(null);

  useEffect(() => {
    if (bgVideoRef.current) {
      bgVideoRef.current.play().catch(() => { });
    }
  }, []);

  // Explicitly select projects for the Bento Grid
  // 1. Wide Top: AI Workflow Builder
  // 2. Wide Bottom: LLM Prompt Optimizer (TOON)
  // 3. Tall Right: Task Manager or Agro Aura
  const workflowProject = projects.find(p => p.slug === "ai-workflow-builder");
  const toonProject = projects.find(p => p.slug === "toon-generator"); // Based on slug in projects.js
  const agroProject = projects.find(p => p.slug === "agro-aura");

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background Video */}
      <video
        ref={bgVideoRef}
        src="/videos/PaperCrush.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ filter: "brightness(0.6) contrast(1.1)" }}
      />
      <div className="absolute inset-0 bg-black/40 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Selected Work
            </h2>
            <p className="text-gray-300 mt-2 text-lg">
              A showcase of my latest technical explorations.
            </p>
          </div>
          <Link
            to="/projects"
            className="hidden md:flex items-center gap-2 text-white font-medium hover:text-[#ff6b6b] transition-colors"
          >
            View all projects <ArrowUpRight size={18} />
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[800px]">

          {/* Left Column (Wide Cards) */}
          <div className="lg:col-span-2 flex flex-col gap-6 h-full">

            {/* Card 1: AI Workflow Builder (Top Left) */}
            {workflowProject && (
              <Link to={`/projects/${workflowProject.slug}`} className="group relative flex-1 overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 bg-gray-100 group-hover:scale-105 transition-transform duration-500">
                  <img src={workflowProject.img} alt={workflowProject.title} className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">{workflowProject.title}</h3>
                  <p className="text-gray-200 line-clamp-2 max-w-md">{workflowProject.summary}</p>
                </div>
              </Link>
            )}

            {/* Card 2: TOON Generator (Bottom Left) */}
            {toonProject && (
              <Link to={`/projects/${toonProject.slug}`} className="group relative flex-1 overflow-hidden rounded-3xl bg-[#e6f7ff] shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-500">
                  {toonProject.video ? (
                    <video src={toonProject.video} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center p-10">
                      <img src={toonProject.img} alt={toonProject.title} className="max-h-full object-contain" />
                    </div>
                  )}
                </div>
                {/* Overlay gradient for readability if video is present */}
                {toonProject.video && <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />}

                <div className="absolute bottom-0 left-0 p-8 w-full bg-white/90 backdrop-blur-md border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{toonProject.title}</h3>
                      <p className="text-gray-600 line-clamp-1">{toonProject.desc}</p>
                    </div>
                    <div className="bg-black text-white p-3 rounded-full">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>
              </Link>
            )}
          </div>

          {/* Right Column (Tall Card) */}
          <div className="lg:col-span-1 h-full">
            {/* Card 3: Agro Aura (Tall Right) */}
            {agroProject && (
              <Link to={`/projects/${agroProject.slug}`} className="group relative block h-full overflow-hidden rounded-3xl bg-gray-900 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 opacity-80 group-hover:opacity-60 transition-opacity duration-300">
                  {agroProject.video ? (
                    <video src={agroProject.video} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                  ) : (
                    <img src={agroProject.img} alt={agroProject.title} className="w-full h-full object-cover" />
                  )}
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-8 text-white">
                  <div className="self-end bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-sm font-medium border border-white/10">
                    {agroProject.duration}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-3">{agroProject.title}</h3>
                    <p className="text-gray-300 line-clamp-3 leading-relaxed">
                      {agroProject.desc}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {agroProject.techStack.slice(0, 3).map((tech, i) => (
                        <span key={i} className="text-xs font-mono bg-black/30 border border-white/20 px-2 py-1 rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            )}
          </div>

        </div>

        {/* Mobile View All Link */}
        <div className="mt-8 md:hidden text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-gray-900 font-medium hover:text-[#ff6b6b] transition-colors"
          >
            View all projects <ArrowUpRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}
