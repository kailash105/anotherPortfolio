import React, { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaRocket
} from "react-icons/fa6";

export default function About() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const roles = ["AI Engineer", "Frontend Dev", "Cloud Architect"];

  return (
    <section id="about" className="relative w-full overflow-hidden bg-white py-16 sm:py-24 lg:py-32 font-sans selection:bg-[#e62429] selection:text-white">
      {/* --- BACKGROUND EFFECTS --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-red-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gray-50 rounded-full blur-3xl opacity-80" />
      </div>

      <Particles
        id="about-particles"
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

      {/* --- CONTAINER --- */}
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Mobile Section Title (Visible only on small screens) */}
        <div className="lg:hidden flex items-center gap-3 mb-10">
          <div className="h-[2px] w-8 bg-[#e62429]"></div>
          <span className="text-[#e62429] font-bold uppercase tracking-widest text-sm">About Me</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* --- LEFT / TOP: IMAGE --- */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center relative w-full mt-4 lg:mt-0"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[360px] xl:max-w-[420px]">
              {/* Decorative background curve */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[115%] bg-gradient-to-b from-[#e62429]/5 to-gray-100/50 rounded-t-full rounded-b-[40px] -z-10 shadow-sm border border-white/50 backdrop-blur-sm" />
              
              <img
                src="/KailashKK.png"
                alt="Kailash Khadarabad"
                className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 z-10 relative saturate-[1.1]"
              />

              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute bottom-4 sm:bottom-8 -left-4 sm:-left-10 bg-white/90 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-2xl border border-gray-100/50 z-20 flex items-center gap-3 sm:gap-4 pointer-events-none"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-tr from-[#e62429] to-red-400 rounded-full flex flex-shrink-0 items-center justify-center text-white shadow-inner">
                  <FaRocket size={18} />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-gray-500 uppercase font-bold tracking-wider leading-tight">Co-Founder</p>
                  <p className="text-xs sm:text-sm font-extrabold text-zinc-900 leading-tight">TechProjectsHub</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* --- RIGHT / BOTTOM: CONTENT --- */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8"
          >
            {/* Desktop Section Title */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="h-[2px] w-12 bg-[#e62429]"></div>
              <span className="text-[#e62429] font-bold uppercase tracking-widest text-sm">About Me</span>
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-zinc-900 tracking-tight leading-[1.15]">
                Transforming ideas into <br className="hidden xl:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e62429] to-red-500">
                  Intelligent Systems.
                </span>
              </h2>
              
              {/* Role Chips */}
              <div className="flex flex-wrap gap-2 sm:gap-3 pt-2">
                {roles.map((role, idx) => (
                  <span 
                    key={idx} 
                    className="px-4 py-2 bg-white text-zinc-700 text-xs sm:text-sm font-semibold rounded-full border border-zinc-200 shadow-sm transition-colors hover:border-[#e62429] hover:bg-red-50 cursor-pointer"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* Typography for Readability on Mobile & Desktop */}
            <div className="space-y-5 text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl">
              <p>
                I am an <strong className="text-zinc-900 font-semibold">AI Engineer</strong> and <strong className="text-zinc-900 font-semibold">Co-Founder</strong> passionate about crafting systems that blend artificial intelligence with modern web technologies. My focus lies in building <span className="text-[#e62429] font-medium">scalable, interactive, and intelligent</span> solutions that redefine digital experiences.
              </p>
              <p>
                Currently leading <strong className="text-zinc-900 font-semibold">TechProjectsHub</strong>, empowering students and startups through AI-driven automation, cloud innovation, and next-generation digital tools.
              </p>
            </div>

            {/* Actions & Social Links */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-6 pt-4 z-20 relative">
              <a
                href="https://docs.google.com/document/d/1w4D0hfszwdzpvnPcLBIDOA_qQcXDJmQAiBcckSn1Tt4/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 bg-[#e62429] text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-red-500/30 hover:shadow-red-500/50 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden w-full sm:w-auto justify-center"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Resume <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 h-full w-0 bg-white/20 group-hover:w-full transition-[width] duration-300 ease-out z-0"></div>
              </a>

              <div className="flex items-center gap-4 sm:gap-5 w-full sm:w-auto justify-center">
                {[
                  { icon: FaLinkedin, link: "https://www.linkedin.com/in/kailash-khadarabad-149660156/", label: "LinkedIn" },
                  { icon: FaGithub, link: "https://github.com/kailash105", label: "GitHub" },
                  { icon: FaEnvelope, link: "mailto:kailashkbc2@gmail.com", label: "Email" }
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.link}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 sm:w-14 sm:h-14 flex flex-shrink-0 items-center justify-center rounded-2xl bg-white text-zinc-600 border border-zinc-100 hover:bg-[#e62429] hover:text-white hover:border-[#e62429] transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-sm hover:shadow-md"
                    >
                      <Icon size={20} className="sm:w-6 sm:h-6" />
                    </a>
                  )
                })}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
