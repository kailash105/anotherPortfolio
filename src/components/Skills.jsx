import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaJava,
  FaCloud,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiTensorflow,
  SiScikitlearn,
  SiKubernetes,
  SiVercel,
  SiFlask,
} from "react-icons/si";

const skillCategories = [
  {
    title: "💻 Full Stack Development",
    skills: [
      { icon: <FaReact size={38} />, name: "ReactJS" },
      { icon: <SiNextdotjs size={38} />, name: "Next.js" },
      { icon: <FaNodeJs size={38} />, name: "Node.js" },
      { icon: <SiMongodb size={38} />, name: "MongoDB" },
      { icon: <SiTailwindcss size={38} />, name: "TailwindCSS" },
      { icon: <FaJava size={38} />, name: "Java" },
      { icon: <FaPython size={38} />, name: "Python" },
      { icon: <SiFlask size={38} />, name: "Flask" },
    ],
  },
  {
    title: "🧠 AI / Machine Learning",
    skills: [
      { icon: <SiTensorflow size={38} />, name: "TensorFlow" },
      { icon: <SiScikitlearn size={38} />, name: "Scikit-Learn" },
      { icon: <FaCloud size={38} />, name: "Generative AI" },
      { icon: <FaPython size={38} />, name: "NLP & LLMs" },
      { icon: <FaCloud size={38} />, name: "Prompt Engineering" },
    ],
  },
  {
    title: "☁️ Cloud & DevOps",
    skills: [
      { icon: <FaCloud size={38} />, name: "Microsoft Azure" },
      { icon: <SiKubernetes size={38} />, name: "Kubernetes" },
      { icon: <FaDocker size={38} />, name: "Docker" },
      { icon: <SiVercel size={38} />, name: "Vercel Cloud" },
      { icon: <FaGitAlt size={38} />, name: "Git & GitHub" },
    ],
  },
];

export default function Skills() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center py-24 bg-[#f8f4ec] text-[#1a1a1a] font-serif overflow-hidden">
      {/* === Content === */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-14 text-[#e62429] uppercase tracking-tight"
        >
          Technical Skills
        </motion.h2>

        <div className="space-y-20">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-10 border-b border-[#e62429]/40 inline-block pb-1">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex flex-col items-center justify-center bg-white/70 backdrop-blur-md border border-[#c9c2b5] text-[#111] p-6 rounded-xl shadow-[0_3px_0_#c9c2b5] hover:shadow-[0_5px_0_#e62429] hover:scale-105 transition-all duration-300 group"
                  >
                    <div className="text-[#e62429] mb-3 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <p className="font-medium tracking-wide text-[#1a1a1a]">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
