import React, { useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa6";
import profileImg from "../assets/kailash.jpg";

export default function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section id="home" className="relative flex items-center justify-center min-h-[100svh] w-full overflow-hidden bg-white font-sans pt-24 lg:pt-0 selection:bg-[#e62429] selection:text-white">
      {/* --- BACKGROUND EFFECTS (Same as About) --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-red-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gray-50 rounded-full blur-3xl opacity-80" />
      </div>

      <Particles
        id="hero-particles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          particles: {
            number: { value: 20, density: { enable: true, area: 800 } },
            color: { value: ["#e62429", "#cbd5e1"] },
            shape: { type: "circle" },
            opacity: { value: 0.3 },
            size: { value: 3, random: true },
            move: { enable: true, speed: 0.8, direction: "none", random: true, straight: false, outModes: "out" },
          },
        }}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* --- CONTENT ALIGNMENT --- */}
      <div className="container mx-auto px-6 max-w-7xl relative z-10 py-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT: TEXT CONTENT */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8 order-2 lg:order-1 mt-6 lg:mt-0"
          >
            {/* Pill/badge */}
            <div className="inline-flex items-center gap-3 self-center sm:self-start px-4 py-2 bg-red-50 border border-red-100 rounded-full shadow-sm relative overflow-hidden group">
               <div className="absolute inset-0 bg-red-100/50 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
               <span className="relative flex h-2.5 w-2.5">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e62429] opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#e62429]"></span>
               </span>
               <span className="text-[11px] sm:text-xs font-bold text-[#e62429] uppercase tracking-widest relative z-10">Available for Work</span>
            </div>

            <div className="space-y-4 text-center sm:text-left text-zinc-900">
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-tight leading-[1.1] pb-1">
                Hi, I'm <br className="hidden lg:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e62429] to-red-500">
                  Kailash Khadarabad
                </span> <span className="inline-block animate-[wave_2s_ease-in-out_infinite] origin-[70%_70%]">👋</span>
              </h1>
              
              <p className="text-lg sm:text-xl xl:text-2xl font-bold text-zinc-700 mt-2">
                Co-Founder &nbsp;|&nbsp; Full Stack & AI Developer
              </p>
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl font-medium text-center sm:text-left">
              I design and develop <span className="text-[#e62429] font-bold">AI-driven web applications</span>, automation systems, and cloud-native platforms that connect intelligence with usability. Passionate about merging design, data, and deep learning to build scalable, human-centered digital experiences.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 sm:gap-5 pt-4">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-3 bg-[#e62429] text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-red-500/30 hover:shadow-red-500/50 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                    View My Work <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 h-full w-0 bg-white/20 group-hover:w-full transition-[width] duration-300 ease-out z-0"></div>
              </a>
              
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-zinc-200 bg-white text-zinc-700 font-bold hover:border-[#e62429] hover:text-[#e62429] hover:bg-red-50 hover:-translate-y-0.5 shadow-sm transition-all duration-300 w-full sm:w-auto"
              >
                Get In Touch
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex items-center justify-center sm:justify-start gap-4 pt-4 sm:pt-2">
              {[
                { icon: FaEnvelope, link: "mailto:kailashkbc2@gmail.com", label: "Email" },
                { icon: FaGithub, link: "https://github.com/kailash105", label: "GitHub" },
                { icon: FaLinkedin, link: "https://www.linkedin.com/in/kailash-khadarabad-149660156/", label: "LinkedIn" }
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.link}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-xl bg-white text-zinc-600 border border-zinc-100 hover:bg-[#e62429] hover:text-white hover:border-[#e62429] transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-sm hover:shadow-md"
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </motion.div>

          {/* RIGHT: IMAGE CARD */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative order-1 lg:order-2"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[340px] xl:max-w-[420px]">
              {/* Backglow border-like effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#e62429] to-red-400 rounded-3xl blur-[40px] opacity-20 transform rotate-3" />
              
              {/* Image Frame */}
              <div className="relative rounded-[2rem] p-3 bg-white border border-gray-100 shadow-2xl z-10 w-full group">
                <div className="overflow-hidden rounded-[1.5rem] relative">
                    <img
                    src={profileImg}
                    alt="Kailash Khadarabad"
                    className="w-full h-auto aspect-[4/5] object-cover rounded-[1.5rem] group-hover:scale-105 transition-all duration-700 cursor-pointer"
                    loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
              </div>

              {/* Floating Element */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -bottom-4 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-gray-100 z-20 flex items-center gap-3 pointer-events-none"
              >
                <div className="w-10 h-10 bg-gradient-to-tr from-[#e62429] to-red-400 rounded-xl flex items-center justify-center shadow-inner">
                  <span className="text-white text-xl font-bold translate-y-0.5">⚡</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] sm:text-sm font-extrabold text-zinc-900 leading-tight">Full Stack & AI</span>
                  <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-wider">Developer</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Wave animation utility */}
      <style>{`
        @keyframes wave {
          0% { transform: rotate( 0.0deg) }
          10% { transform: rotate(14.0deg) }
          20% { transform: rotate(-8.0deg) }
          30% { transform: rotate(14.0deg) }
          40% { transform: rotate(-4.0deg) }
          50% { transform: rotate(10.0deg) }
          60% { transform: rotate( 0.0deg) }
          100% { transform: rotate( 0.0deg) }
        }
      `}</style>
    </section>
  );
}
