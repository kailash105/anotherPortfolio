import React from "react";
import AnimatedBackground from "./AnimatedBackground";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Background Animation */}
      <AnimatedBackground />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-6xl px-6 mx-auto w-full">
        {/* Left: Text */}
        <div className="space-y-6 max-w-xl">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Hello, <br />
            <span className="text-accent">Kailash here!</span> 👋
          </h1>

          <p className="text-gray-300">
            I’m a passionate{" "}
            <span className="text-accent">Frontend Developer</span> and{" "}
            <span className="text-accent">AI/ML & Cloud Enthusiast</span> crafting
            sleek, intelligent, and scalable web experiences.
          </p>

          <p className="text-gray-400 text-sm">
            Building experiences that merge <span className="text-accent">design</span>,{" "}
            <span className="text-accent">data</span>, and{" "}
            <span className="text-accent">automation</span> — making them both
            functional and inspiring.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="/resume"
              className="px-6 py-2 rounded-full border border-accent text-accent font-medium hover:bg-accent hover:text-white transition"
            >
              View Resume
            </a>
            <a
              href="/contact"
              className="px-6 py-2 rounded-full bg-accent text-white font-medium hover:bg-accent/80 transition"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 pt-6">
            <a
              href="mailto:kailashkbc2@gmail.com"
              className="text-gray-400 hover:text-accent transition"
            >
              <Mail size={22} />
            </a>
            <a
              href="https://github.com/kailash105"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent transition"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/kailash-khadarabad-149660156/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent transition"
            >
              <Linkedin size={22} />
            </a>
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className="mt-12 md:mt-0 md:ml-12 relative">
          <div className="relative w-72 md:w-96 rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(255,107,107,0.25)]">
            <img
              src="src/assets/kailash.jpg"
              alt="Kailash Khadarabad"
              className="w-full h-full object-cover rounded-3xl"
            />
            {/* Accent curve */}
            <div className="absolute -bottom-3 -right-4 w-20 h-20 bg-accent/40 rounded-full blur-2xl animate-float-fast"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
