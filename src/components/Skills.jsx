import React from "react";
import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaPython, FaDocker, FaJava, FaCloud, FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs, SiMongodb, SiTailwindcss, SiTensorflow, SiScikitlearn,
  SiKubernetes, SiVercel, SiFlask,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Full Stack Development",
    accent: "from-violet-500 to-fuchsia-500",
    glow: "shadow-violet-200",
    skills: [
      { icon: <FaReact size={28} className="text-[#61DAFB]" />, name: "ReactJS" },
      { icon: <SiNextdotjs size={28} className="text-black" />, name: "Next.js" },
      { icon: <FaNodeJs size={28} className="text-[#339933]" />, name: "Node.js" },
      { icon: <SiMongodb size={28} className="text-[#47A248]" />, name: "MongoDB" },
      { icon: <SiTailwindcss size={28} className="text-[#06B6D4]" />, name: "Tailwind" },
      { icon: <FaJava size={28} className="text-[#007396]" />, name: "Java" },
      { icon: <FaPython size={28} className="text-[#3776AB]" />, name: "Python" },
    ],
  },
  {
    title: "Artificial Intelligence",
    accent: "from-cyan-500 to-blue-500",
    glow: "shadow-cyan-200",
    skills: [
      { icon: <SiTensorflow size={28} className="text-[#FF6F00]" />, name: "TensorFlow" },
      { icon: <SiScikitlearn size={28} className="text-[#F7931E]" />, name: "Scikit" },
      { icon: <FaCloud size={28} className="text-[#06B6D4]" />, name: "Generative AI" },
      { icon: <FaPython size={28} className="text-[#3776AB]" />, name: "NLP & LLMs" },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    accent: "from-rose-500 to-orange-500",
    glow: "shadow-rose-200",
    skills: [
      { icon: <FaCloud size={28} className="text-[#0089D6]" />, name: "Azure" },
      { icon: <SiKubernetes size={28} className="text-[#326CE5]" />, name: "K8s" },
      { icon: <FaDocker size={28} className="text-[#2496ED]" />, name: "Docker" },
      { icon: <SiVercel size={28} className="text-black" />, name: "Vercel" },
    ],
  },
];

export default function Skills() {
  return (
    <section className="relative min-h-screen py-32 bg-white text-gray-900 font-sans overflow-hidden">
      {/* Mesh Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[40rem] h-[40rem] bg-violet-200/40 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[10%] w-[35rem] h-[35rem] bg-cyan-200/40 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-rose-100/30 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-[0.2em] uppercase text-violet-600 bg-violet-50 rounded-full border border-violet-100">
            Technical Stack
          </span>
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 leading-none">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-cyan-500 to-rose-500">Expertise</span>
          </h2>
          <p className="max-w-xl mx-auto text-gray-500 text-lg font-medium leading-relaxed">
            Scalable architectures and modern development practices.
          </p>
        </motion.div>

        <div className="space-y-32">
          {skillCategories.map((category, i) => (
            <div key={i}>
              <div className="flex items-center gap-6 mb-12">
                <h3 className={`text-2xl font-extrabold tracking-tight bg-gradient-to-r ${category.accent} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
                <div className="h-[2px] grow bg-gray-100 rounded-full" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className={`group relative p-8 rounded-[2rem] bg-white/60 backdrop-blur-2xl border border-white transition-all duration-300 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:${category.glow} hover:shadow-2xl`}
                  >
                    <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/40 to-white/10 pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div className="p-4 rounded-2xl bg-white shadow-sm border border-gray-50 mb-4 group-hover:scale-110 transition-transform duration-500">
                        {skill.icon}
                      </div>
                      <p className="text-sm font-bold text-gray-900 tracking-tight uppercase">
                        {skill.name}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Floating Text */}
      <h1 className="absolute -bottom-20 left-0 w-full text-[15rem] md:text-[25rem] font-black text-gray-50 uppercase text-center tracking-tighter select-none pointer-events-none z-0 leading-none">
        SKILLS
      </h1>
    </section>
  );
}
