import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="min-h-screen bg-[#E52521] text-white py-24 px-6 md:px-12 relative overflow-hidden">
      {/* 🕷️ Background Elements */}
      <div className="absolute inset-0 bg-halftone opacity-20 pointer-events-none" />

      {/* Large subtle web pattern in background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-[150%] h-[150%] -translate-x-1/4 -translate-y-1/4 stroke-white fill-none">
          <circle cx="100" cy="100" r="10" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="30" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="50" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="70" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="90" strokeWidth="0.5" />
          <line x1="100" y1="0" x2="100" y2="200" strokeWidth="0.5" />
          <line x1="0" y1="100" x2="200" y2="100" strokeWidth="0.5" />
          <line x1="30" y1="30" x2="170" y2="170" strokeWidth="0.5" />
          <line x1="170" y1="30" x2="30" y2="170" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* 🏁 Page Title */}
        <div className="text-center mb-16 px-4">
          <div className="inline-block relative">
            <h1 className="text-6xl md:text-8xl font-spidey tracking-wide drop-shadow-[6px_6px_0px_#000] mb-4">
              MY SUPER <span className="text-[#0032A0]">PROJECTS</span>
            </h1>
            <div className="absolute -top-10 -right-10 md:-top-16 md:-right-16 text-4xl md:text-6xl filter drop-shadow-[2px_2px_10px_rgba(255,255,255,0.8)] animate-spidey-sense">
              🕸️
            </div>
          </div>
          <p className="font-spidey text-xl md:text-2xl text-black drop-shadow-[2px_2px_0px_rgba(255,255,255,0.5)] mt-4">
            "With great code, comes great responsibility."
          </p>
        </div>

        {/* 🧩 Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="group animate-web-swing flex flex-col h-full"
            >
              <div className="spidey-card bg-white h-full relative group shadow-[12px_12px_0px_0px_#000] hover:shadow-[16px_16px_0px_0px_#0032A0] overflow-hidden">
                {/* Thumbnail */}
                <div className="w-full h-64 overflow-hidden relative border-b-4 border-black">
                  {proj.video ? (
                    <video
                      src={proj.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <img
                      src={proj.img}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  )}
                  {/* Subtle Web Overlay on Hover */}
                  <div className="absolute inset-0 bg-[#0032A0]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col grow">
                  <h3 className="text-3xl font-spidey text-black mb-3">
                    {proj.title}
                  </h3>
                  <p className="text-gray-700 font-bold font-mono text-sm leading-relaxed mb-8 grow">
                    {proj.desc}
                  </p>

                  <Link
                    to={`/projects/${proj.slug}`}
                    className="inline-block text-center bg-[#E52521] text-white font-spidey text-lg py-3 px-6 border-4 border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                  >
                    SELECT INTEL →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 🚀 Link to Freelancing Page */}
        <div className="mt-32 text-center pb-20">
          <Link
            to="/freelancing"
            className="group relative inline-flex items-center"
          >
            {/* Pulsing "THWIP!" Text */}
            <span className="absolute -left-16 md:-left-24 text-2xl md:text-3xl font-spidey text-black opacity-0 group-hover:opacity-100 -rotate-12 transition-all duration-300 group-hover:-translate-x-4">
              THWIP!
            </span>

            <div className="bg-white border-4 border-black px-10 py-5 shadow-[10px_10px_0px_0px_#0032A0] group-hover:shadow-[12px_12px_0px_0px_#000] transition-all overflow-hidden relative">
              <span className="relative z-10 text-2xl md:text-4xl font-spidey text-black group-hover:text-[#E52521] transition-colors">
                EXPLORE <span className="text-[#0032A0]">FREELANCERS HUB</span> →
              </span>
              <div className="absolute inset-0 bg-halftone opacity-0 group-hover:opacity-10 transition-opacity" />
            </div>

            <span className="absolute -right-16 md:-right-24 text-2xl md:text-3xl font-spidey text-black opacity-0 group-hover:opacity-100 rotate-12 transition-all duration-300 group-hover:translate-x-4">
              THWIP!
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
