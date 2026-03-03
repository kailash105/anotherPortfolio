import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function Projects() {
  return (
    <section className="min-h-screen bg-white text-gray-900 py-32 px-6 md:px-12 relative overflow-hidden font-sans">
      {/* Mesh Gradients */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50rem] h-[50rem] bg-cyan-100/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[45rem] h-[45rem] bg-violet-100/50 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <header className="mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="text-rose-500" size={24} />
              <span className="text-sm font-bold tracking-[0.3em] text-gray-400 uppercase">Portfolio</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-extrabold mb-10 tracking-tighter leading-[0.85]">
              Project <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-cyan-500 to-rose-500">Showcase.</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-gray-500 leading-tight max-w-2xl">
              High-impact solutions engineered with cutting-edge technology and precision.
            </p>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          {projects.map((proj, index) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/40 backdrop-blur-3xl rounded-[2.5rem] border border-gray-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] overflow-hidden transition-all duration-500 hover:shadow-[0_40px_100px_-15px_rgba(139,92,246,0.15)] hover:border-violet-100 h-full flex flex-col">
                {/* Visual Preview */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-50">
                  {proj.video ? (
                    <video
                      src={proj.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                  ) : (
                    <img
                      src={proj.img}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                  )}
                  <div className="absolute inset-0 bg-violet-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Info */}
                <div className="p-10 md:p-14 flex flex-col grow">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-10 h-[1px] bg-gray-200" />
                    <span className="text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase">
                      PROJECT {index + 1}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight group-hover:text-violet-600 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-lg font-medium text-gray-500 leading-relaxed mb-10 line-clamp-3">
                    {proj.desc}
                  </p>

                  <Link
                    to={`/projects/${proj.slug}`}
                    className="mt-auto inline-flex items-center gap-3 text-sm font-bold tracking-widest text-violet-600 uppercase hover:text-black transition-colors"
                  >
                    View Details <ArrowUpRight size={20} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional Navigation to Freelancing */}
        <div className="mt-48 text-center bg-gray-50/50 backdrop-blur-sm rounded-[3rem] py-24 border border-gray-100">
          <Link
            to="/freelancing"
            className="inline-flex flex-col items-center group"
          >
            <span className="text-xs font-bold tracking-[0.4em] text-violet-400 mb-6 group-hover:text-rose-500 transition-colors uppercase">
              Professional Experience
            </span>
            <span className="text-4xl md:text-7xl font-extrabold tracking-tighter leading-none group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-cyan-500 transition-all duration-300">
              Freelance Works
            </span>
            <div className="mt-8 p-4 rounded-full border border-gray-200 group-hover:border-violet-300 group-hover:bg-white transition-all">
              <ArrowUpRight size={32} className="text-gray-300 group-hover:text-violet-600" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
