import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa6";
import profileImg from "../assets/kailash.jpg";
import AnimatedBackground from "./AnimatedBackground";

export default function Hero() {
  return (
    <section id="home" className="relative flex items-center justify-center min-h-[100svh] w-full overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100 font-sans pt-24 lg:pt-0 selection:bg-cyan-500 selection:text-white">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* --- CONTENT ALIGNMENT --- */}
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-12 lg:py-0">
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-[30px] bg-white/[0.08] border border-cyan-500/20 rounded-[2.5rem] p-6 sm:p-10 lg:p-16 shadow-[0_0_50px_rgba(34,211,238,0.15)] relative"
        >
          {/* Subtle inner dotted overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.08)_1.5px,_transparent_1.5px)] bg-[length:24px_24px] opacity-30 rounded-[2.5rem] pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          
          {/* LEFT: TEXT CONTENT */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8 order-2 lg:order-1 mt-6 lg:mt-0"
          >
            {/* Pill/badge */}
            <div className="inline-flex items-center gap-3 self-center sm:self-start px-4 py-2 bg-white/5 border border-white/10 rounded-full shadow-sm relative overflow-hidden backdrop-blur-md">
               <span className="relative flex h-2.5 w-2.5">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
               </span>
               <span className="text-[11px] sm:text-xs font-bold text-cyan-400 uppercase tracking-widest relative z-10">Available for Work</span>
            </div>

            <div className="space-y-4 text-center sm:text-left text-white">
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-tight leading-[1.1] pb-1">
                Hi, I'm <br className="hidden lg:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Kailash Khadarabad
                </span> <span className="inline-block animate-[wave_2s_ease-in-out_infinite] origin-[70%_70%]">👋</span>
              </h1>
              
              <p className="text-lg sm:text-xl xl:text-2xl font-bold text-black mt-2">
                Professional Freelancer &nbsp;|&nbsp; Full Stack & AI Developer
              </p>
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-black leading-relaxed max-w-2xl font-medium text-center sm:text-left">
              I design and develop <span className="text-cyan-600 font-bold">AI-driven web applications</span>, automation systems, and cloud-native platforms that connect intelligence with usability. Passionate about merging design, data, and deep learning to build scalable, human-centered digital experiences.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 sm:gap-5 pt-4">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-bold shadow-[0_5px_20px_rgba(34,211,238,0.4)] hover:shadow-[0_5px_25px_rgba(34,211,238,0.6)] hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center gap-2">
                    View My Work <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-cyan-400 bg-transparent text-cyan-400 font-bold hover:bg-cyan-400 hover:text-gray-900 hover:-translate-y-0.5 shadow-sm transition-all duration-300 w-full sm:w-auto"
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
                    className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 text-gray-300 border border-white/10 hover:bg-cyan-400 hover:text-gray-900 hover:border-cyan-400 transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-sm hover:shadow-md backdrop-blur-sm"
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
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-3xl blur-[40px] opacity-20 transform rotate-3" />
              
              {/* Image Frame */}
              <div className="relative rounded-[2rem] p-3 backdrop-blur-md bg-white/5 border border-white/10 shadow-[0_0_40px_rgba(34,211,238,0.15)] z-10 w-full group">
                <div className="overflow-hidden rounded-[1.5rem] relative">
                    <img
                    src={profileImg}
                    alt="Kailash Khadarabad"
                    className="w-full h-auto aspect-[4/5] object-cover rounded-[1.5rem] group-hover:scale-105 transition-all duration-700 cursor-pointer border border-cyan-500/30"
                    loading="lazy"
                    />
                </div>
              </div>

              {/* Floating Element */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -bottom-4 -left-4 sm:-left-8 bg-gray-900/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/10 z-20 flex items-center gap-3 pointer-events-none"
              >
                <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-xl flex items-center justify-center shadow-inner">
                  <span className="text-white text-xl font-bold translate-y-0.5">⚡</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] sm:text-sm font-extrabold text-white leading-tight">Full Stack & AI</span>
                  <span className="text-[10px] sm:text-xs text-gray-400 font-bold uppercase tracking-wider">Developer</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          </div>
        </motion.div>
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
