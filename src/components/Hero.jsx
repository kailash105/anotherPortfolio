import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";
import profileImg from "../assets/kailash.jpg";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Hero Layout */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto px-6 md:px-12 gap-16">
        {/* Left Section - Profile Image with Glow */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-72 md:w-[22rem] rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.4)] flex-shrink-0"
        >
          <img
            src={profileImg}
            alt="Kailash Khadarabad"
            className="w-full h-full object-cover rounded-3xl border-2 border-cyan-500"
            loading="lazy"
          />
          <div className="absolute -bottom-5 -right-5 bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-4 py-1 rounded-lg text-sm shadow-lg">
            Full Stack & AI Developer
          </div>
        </motion.div>

        {/* Right Section - Glass Card with Glow */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative backdrop-blur-[30px] bg-white/10 border border-white/20 rounded-3xl p-8 md:p-10 max-w-xl shadow-[0_0_40px_rgba(34,211,238,0.15)]"
        >
          {/* Dotted Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.05)_2px,_transparent_2px)] bg-[length:28px_28px] opacity-20 rounded-3xl pointer-events-none"></div>

          {/* Text Content */}
          <div className="relative z-10 space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"
            >
              Hi, I’m Kailash Khadarabad 👋
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg font-medium text-black"
            >
              Co-Founder | Full Stack & AI Developer | Cloud Engineer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="text-black text-sm md:text-base leading-relaxed"
            >
              I design and develop{" "}
              <span className="text-cyan-400 font-medium">
                AI-driven web applications
              </span>
              ,{" "}
              <span className="text-cyan-400 font-medium">
                automation systems
              </span>
              , and{" "}
              <span className="text-cyan-400 font-medium">
                cloud-native platforms
              </span>{" "}
              that connect intelligence with usability. Passionate about merging
              design, data, and deep learning to build scalable, human-centered
              digital experiences.
            </motion.p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium shadow-[0_5px_20px_rgba(34,211,238,0.4)] hover:scale-105 transition-transform duration-300"
              >
                View My Work
              </a>
              <Link
                to="/contact"
                className="px-5 py-2.5 rounded-full border border-cyan-400 text-cyan-400 font-medium hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
              >
                Get In Touch
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-6 pt-4">
              <a
                href="mailto:kailashkbc2@gmail.com"
                className="text-gray-400 hover:text-cyan-400 transition"
              >
                <Mail size={22} />
              </a>
              <a
                href="https://github.com/kailash105"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition"
              >
                <Github size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/kailash-khadarabad-149660156/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition"
              >
                <Linkedin size={22} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
