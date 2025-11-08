import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden text-[#1a1a1a]">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Hero Layout */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto px-6 md:px-12 gap-16">
        {/* Left Section - Image */}
        <div className="relative w-72 md:w-[22rem] rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(255,107,107,0.25)] flex-shrink-0">
          <img
            src="src/assets/kailash.jpg"
            alt="Kailash Khadarabad"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>

        {/* Right Section - Frosted Glass */}
        <div className="relative backdrop-blur-[30px] bg-white/30 border border-white/50 rounded-3xl p-8 md:p-10 max-w-xl shadow-[0_0_40px_rgba(0,0,0,0.08)]">
          {/* Dots visible through */}
          <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(0,0,0,0.08)_2px,_transparent_2px)] bg-[length:28px_28px] animate-bgMove opacity-40 rounded-3xl pointer-events-none"></div>

          {/* Text Content */}
          <div className="relative z-10 space-y-5">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#ff6b6b]">
              Hi, I’m Kailash Khadarabad 👋
            </h1>

            <p className="text-gray-700 font-medium">
              Cloud Engineer | AI/ML Enthusiast | Web Developer
            </p>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              A Computer Science student passionate about building intelligent systems,
              cloud-native apps, and creative web experiences. I love blending{" "}
              <span className="text-[#ff6b6b] font-medium">AI</span>,{" "}
              <span className="text-[#ff6b6b] font-medium">automation</span>, and{" "}
              <span className="text-[#ff6b6b] font-medium">design</span> to solve
              real-world problems.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-full bg-[#ff6b6b] text-white font-medium shadow-[0_5px_20px_rgba(255,107,107,0.4)] transition-all duration-300"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-full border border-[#ff6b6b] text-[#ff6b6b] font-medium transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-6 pt-4">
              <a
                href="mailto:kailashkbc2@gmail.com"
                className="text-gray-700 hover:text-[#ff6b6b] transition"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://github.com/kailash105"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-[#ff6b6b] transition"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/kailash-khadarabad-149660156/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-[#ff6b6b] transition"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
