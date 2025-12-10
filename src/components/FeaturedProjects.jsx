import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function FeaturedProjects() {
const agroVideoRef = useRef(null);
const bgVideoRef = useRef(null);

useEffect(() => {
const playVideos = () => {
[agroVideoRef.current, bgVideoRef.current].forEach((v) => {
if (v) v.play().catch(() => {});
});
};
playVideos();
}, []);

const projects = [
{
id: 1,
title: "Agro Aura",
desc: "AI-powered plant disease detection using CNN models for smart farming and sustainability.",
video: "/videos/Agro-Aura.mp4",
},
{
id: 2,
title: "AI Workflow Builder",
desc: "Visual low-code AI workflow automation tool using GPT for chaining tasks and APIs.",
img: "/projects/workflow-builder.png",
bg: "#f3f3f3",
},
{
id: 3,
title: "AI Email Assistant",
desc: "Context-aware GPT email generation system with tone control and auto-suggestions.",
img: "/projects/ai-email.png",
bg: "#e8eefc",
},
{
id: 4,
title: "Task Manager",
desc: "Modern productivity app built with React, Tailwind, and Framer Motion animations.",
img: "/projects/task-manager.png",
bg: "#f1f8f6",
},
];

return ( <section
   id="projects"
   className="relative min-h-screen py-24 overflow-hidden"
 >
{/* 🎞️ PaperCrush Background */}
<video
ref={bgVideoRef}
src="/videos/PaperCrush.mp4"
autoPlay
loop
muted
playsInline
preload="auto"
className="absolute inset-0 w-full h-full object-cover z-0"
style={{
filter: "brightness(0.9) contrast(1.2) saturate(1.15)",
}}
/> <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] z-[1]" />

  {/* 💡 Content */}
  <div className="relative z-[2] max-w-7xl mx-auto px-6 md:px-12 space-y-16">
    {/* Header */}
    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
      <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
        Featured <span className="text-blue-500">Projects</span>
      </h2>
      <Link
        to="/projects"
        className="text-gray-700 hover:text-blue-500 underline underline-offset-4 transition"
      >
        View all projects →
      </Link>
    </div>

    {/* Projects Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {projects.map((proj) => (
        <div
          key={proj.id}
          className={`relative rounded-3xl overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_30px_rgba(0,0,0,0.12)] transition-transform duration-500 hover:-translate-y-2 bg-white`}
          style={{
            backgroundColor: proj.bg || "#fff",
          }}
        >
          {/* Video or Image */}
          {proj.video ? (
            <video
              ref={agroVideoRef}
              src={proj.video}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-64 object-cover"
            />
          ) : (
            <img
              src={proj.img}
              alt={proj.title}
              className="w-full h-64 object-cover"
            />
          )}

          {/* Overlay Info */}
          <div className="p-6 space-y-3 bg-white/80 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold text-gray-900">
              {proj.title}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {proj.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


);
}
