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
return ( <section className="py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100"> <div className="container mx-auto px-6 lg:px-12 text-center">
<motion.h2
initial={{ opacity: 0, y: -30 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
className="text-4xl font-bold mb-14 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"
>
Technical Skills
</motion.h2>
    <div className="space-y-16">
      {skillCategories.map((category, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
        >
          <h3 className="text-2xl font-semibold text-cyan-400 mb-8">
            {category.title}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {category.skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex flex-col items-center bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-md hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 group"
              >
                <div className="text-cyan-400 mb-3 group-hover:animate-pulse">
                  {skill.icon}
                </div>
                <p className="text-gray-200 font-medium tracking-wide">
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
