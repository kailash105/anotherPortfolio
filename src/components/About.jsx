import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function About() {
return ( <section className="relative py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100"> <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-16">
{/* Left: Profile Image */}
<motion.div
initial={{ opacity: 0, x: -50 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 0.7 }}
className="flex justify-center md:justify-end"
> <div className="relative"> <img
           src="src/assets/kailash.jpg"
           alt="Kailash Khadarabad"
           className="rounded-2xl shadow-lg w-72 h-72 object-cover border-4 border-cyan-500 hover:shadow-cyan-500/40 hover:scale-105 transition-transform duration-500"
         /> <div className="absolute -bottom-5 -right-5 bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-4 py-1 rounded-lg text-sm shadow-lg">
AI Developer </div> </div>
</motion.div>


    {/* Right: Text Section */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="space-y-6 text-center md:text-left"
    >
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
        About Me
      </h2>

      <p className="text-gray-300 leading-relaxed">
        I’m <span className="text-cyan-400 font-semibold">Kailash Khadarabad</span>, 
        a Co-Founder and Full Stack Developer specializing in{" "}
        <strong>AI-driven web applications</strong>, <strong>cloud deployment</strong>, 
        and <strong>automation systems</strong>. I blend creativity with logic to build 
        modern, scalable solutions that make technology more accessible and intelligent.
      </p>

      <p className="text-gray-400">
        With experience in <strong>React.js, Next.js, Node.js, Python</strong> and 
        <strong>AI/ML frameworks</strong>, I enjoy designing systems that connect 
        front-end interactivity with machine learning intelligence. Currently, I’m 
        leading <strong>TechProjectsHub</strong> — empowering students and startups 
        through AI-driven learning and innovation.
      </p>

      <p className="text-gray-400">
        Passionate about <strong>Generative AI</strong>, <strong>Human-AI collaboration</strong>, 
        and <strong>intelligent cloud workflows</strong>, I aim to pursue research 
        in <strong>AI/ML-based systems</strong> to build adaptive, explainable, and 
        scalable automation tools.
      </p>

      <div className="flex flex-wrap justify-center md:justify-start gap-5 mt-6">
        <a
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-cyan-600 transition-colors duration-300"
        >
          <FaGithub /> GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourlinkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-cyan-600 transition-colors duration-300"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a
          href="mailto:kailashkbc2@gmail.com"
          className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-cyan-600 transition-colors duration-300"
        >
          <FaEnvelope /> Contact
        </a>
      </div>

      <motion.a
        href="/resume.pdf"
        download
        whileHover={{ scale: 1.05 }}
        className="inline-block mt-8 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-cyan-400/40 transition-all duration-300"
      >
        Download Resume
      </motion.a>
    </motion.div>
  </div>
</section>


);
}
