import React, { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export default function About() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#f8f9fa] text-[#111] font-sans">
      {/* === RED DIAGONAL BACKGROUND === */}
      <div className="absolute top-0 right-[-25%] w-[55vw] h-full transform -skew-x-[22deg] origin-top-right overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-[#e62429]" />
        <div className="absolute left-0 top-0 h-full w-[35%] bg-gradient-to-l from-[#e62429] via-[#e62429]/70 to-transparent"></div>

        {/* 🕸️ Particle Layer */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
            background: { color: { value: "transparent" } },
            fpsLimit: 60,
            interactivity: {
              events: { onHover: { enable: true, mode: "grab" }, resize: true },
              modes: { grab: { distance: 180, links: { opacity: 0.35 } } },
            },
            particles: {
              number: { value: 60, density: { enable: true, area: 800 } },
              color: { value: "#ffffff" },
              links: {
                enable: true,
                color: "#ffffff",
                distance: 130,
                opacity: 0.25,
                width: 1,
              },
              move: { enable: true, speed: 1.6 },
              opacity: { value: 0.3 },
              size: { value: 1.4 },
            },
          }}
          className="absolute inset-0 z-10"
        />
      </div>

      {/* === MAIN CONTENT === */}
      <div className="relative z-20 container mx-auto px-6 lg:px-20 py-28 grid grid-cols-1 md:grid-cols-2 items-center gap-20">
        {/* LEFT — TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-7 order-2 md:order-1"
        >
          {/* 🕷️ Animated Breadcrumb + Hero Title */}
          <motion.div
            className="mb-4 space-y-2"
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.15 }}
            variants={{
              hidden: {},
              visible: {},
            }}
          >
            {/* Breadcrumb Line */}
            <motion.p
              className="text-base text-gray-500 tracking-wide"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
            >
              <motion.span
                className="text-[#111] font-medium inline-block"
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.3 }}
              >
                Home
              </motion.span>
              <motion.span
                className="mx-1 text-gray-400 inline-block"
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              >
                /
              </motion.span>
              <motion.span
                className="font-medium text-[#111] inline-block"
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.3 }}
              >
                About
              </motion.span>
              <motion.span
                className="mx-1 text-gray-400 inline-block"
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              >
                /
              </motion.span>
              <motion.span
                className="font-semibold text-[#111] inline-block"
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.3 }}
              >
                AI Engineer <span className="text-gray-400">|</span> Frontend Dev{" "}
                <span className="text-gray-400">|</span> Cloud Architect
              </motion.span>
            </motion.p>

            {/* Hero Title */}
            <motion.h2
              className="text-5xl md:text-6xl font-extrabold text-[#e62429] uppercase tracking-tight"
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Kailash Khadarabad
            </motion.h2>
          </motion.div>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed max-w-md">
            He is an <strong>AI Engineer</strong> and{" "}
            <strong>Co-Founder</strong> passionate about crafting systems that
            blend <strong>artificial intelligence</strong> with{" "}
            <strong>modern web technologies</strong>. His focus lies in building{" "}
            <span className="font-semibold text-[#111]">
              scalable, interactive, and intelligent
            </span>{" "}
            solutions that redefine digital experiences.
          </p>

          <p className="text-gray-600 text-sm leading-relaxed max-w-md">
            Currently leading <strong>TechProjectsHub</strong>, empowering
            students and startups through AI-driven automation, cloud
            innovation, and next-generation digital tools.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-6 mt-6">
            <a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#111] hover:text-[#e62429] transition-colors"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#111] hover:text-[#e62429] transition-colors"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="mailto:kailashkbc2@gmail.com"
              className="text-[#111] hover:text-[#e62429] transition-colors"
            >
              <FaEnvelope size={22} />
            </a>
            <a href="#" className="text-[#111] hover:text-[#e62429] transition-colors">
              <FaXTwitter size={22} />
            </a>
            <a href="#" className="text-[#111] hover:text-[#e62429] transition-colors">
              <FaYoutube size={22} />
            </a>
          </div>

          {/* Resume Button */}
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            className="inline-block mt-10 bg-[#e62429] text-white px-10 py-3 rounded-md font-semibold shadow-lg hover:shadow-xl hover:bg-[#c01f23] transition-all duration-300 tracking-wide"
          >
            Download Resume
          </motion.a>
        </motion.div>

        {/* RIGHT — IMAGE ONLY */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center md:justify-end order-1 md:order-2 z-30"
        >
          <div className="relative group">
            <img
              src="/KailashKK.png"
              alt="Kailash Khadarabad"
              className="relative z-20 w-[430px] h-auto object-contain drop-shadow-[0_15px_45px_rgba(0,0,0,0.35)] group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>
      </div>

      {/* Background 'ABOUT' Text */}
      <h1 className="absolute top-28 left-0 w-full text-[8.5rem] md:text-[10.5rem] font-extrabold text-[#e62429]/10 uppercase text-center tracking-[0.25em] select-none">
        ABOUT
      </h1>
    </section>
  );
}
