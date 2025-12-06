import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProjectDetails() {
  const { slug } = useParams();

  // Universal Project Data
  const projects = [
    {
      slug: "agro-aura",
      title: "Agro Aura",
      heroImg: "/projects/agro-aura.jpg",
      summary:
        "AI-powered wheat disease detection using CNN with a React frontend and Flask backend API. Built for precision agriculture automation.",
      techStack: ["TensorFlow", "ReactJS", "Flask", "Material UI", "Docker"],
      duration: "Aug 2024 - Sept 2024",
      role: "AI Developer & Frontend Engineer",
      keyPoints: [
        "Achieved 94% accuracy with CNN on plant disease datasets.",
        "Built Flask API for real-time predictions.",
        "Developed a ReactJS UI for smooth image upload and visualization.",
        "Deployed full system on cloud for real-time usage.",
      ],
      repo: "https://github.com/kailash105/agro-aura",
    },
    {
      slug: "task-manager",
      title: "Task Manager WebApp",
      heroImg: "/projects/taskmanager.jpg",
      summary:
        "A clean, minimalist task management app with Framer Motion animations and local storage persistence.",
      techStack: ["ReactJS", "Framer Motion", "LocalStorage", "Tailwind CSS"],
      duration: "April 2025",
      role: "Frontend Developer",
      keyPoints: [
        "Task CRUD with smooth animations.",
        "Local storage for offline persistence.",
        "Fully responsive with Tailwind CSS.",
      ],
      repo: "https://github.com/kailash105/task-manager",
    },
    {
      slug: "ai-email",
      title: "AI Email Generator",
      heroImg: "/projects/ai-email.jpg",
      summary:
        "A full-stack AI-powered email writing and sending platform using LLaMA3 API and Nodemailer.",
      techStack: ["ReactJS", "Node.js", "Groq API", "Nodemailer", "TailwindCSS"],
      duration: "July 2025",
      role: "Full Stack AI Developer",
      keyPoints: [
        "Integrated LLaMA3 model via Groq API for email generation.",
        "Implemented secure Nodemailer email sending system.",
        "Deployed full-stack app on Render (React + Express).",
      ],
      repo: "https://github.com/kailash105/ai-email-generator",
    },
    {
      slug: "law-bot",
      title: "Law Bot",
      heroImg: "/projects/law-bot.jpg",
      summary:
        "An AI-powered legal assistant chatbot designed to help users summarize legal documents, provide law-based insights, and answer questions using LLMs and vector-based retrieval.",
      techStack: ["ReactJS", "ExpressJS", "LangChain", "Groq API", "MongoDB", "TailwindCSS"],
      duration: "October 2025",
      role: "AI Engineer & Full Stack Developer",
      keyPoints: [
        "Developed a conversational legal chatbot for real-time Q&A.",
        "Integrated LangChain for semantic retrieval and contextual responses.",
        "Implemented Groq API with LLaMA 3 for high-speed reasoning.",
        "Created intuitive chat-based UI using React and TailwindCSS.",
        "Deployed full stack on Render with MongoDB Atlas for data persistence.",
      ],
      repo: "https://github.com/kailash105/law-bot",
    },v 
  ];

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-gray-700">
        <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
        <Link
          to="/projects"
          className="text-[#ff6b6b] underline underline-offset-4 hover:text-red-400"
        >
          Back to Projects
        </Link>
      </div>
    );
  }

  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section className="min-h-screen bg-[#f8f8f8] text-gray-900">
      {/* 🔹 Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[70vh] overflow-hidden"
      >
        <img
          src={project.heroImg}
          alt={project.title}
          className="w-full h-full object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-6">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg"
          >
            {project.title}
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-lg md:text-xl text-gray-200 max-w-3xl"
          >
            {project.summary}
          </motion.p>
        </div>
      </motion.div>

      {/* 🔹 Project Info Section */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 md:px-12 py-16 space-y-10"
      >
        {/* Info Row */}
        <motion.div
          variants={fadeIn}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-1">
              Duration
            </h3>
            <p>{project.duration}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-1">Role</h3>
            <p>{project.role}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-1">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2 mt-1">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="bg-[#ff6b6b]/10 text-[#ff6b6b] px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Key Highlights */}
        <motion.div variants={fadeIn}>
          <h3 className="text-2xl font-bold mb-4">Key Highlights</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {project.keyPoints.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </motion.div>

        {/* Buttons */}
        <motion.div
          variants={fadeIn}
          className="flex flex-wrap gap-6 pt-6 justify-start"
        >
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ff6b6b] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#e45a5a] transition"
          >
            View on GitHub
          </a>
          <Link
            to="/projects"
            className="border border-gray-400 px-6 py-3 rounded-lg text-gray-700 hover:bg-gray-200 transition"
          >
            ← Back to Projects
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
