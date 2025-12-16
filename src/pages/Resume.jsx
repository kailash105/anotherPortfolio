import React from "react";
import { motion } from "framer-motion";
import { Download, Briefcase, GraduationCap, Code, Award, ScrollText, User } from "lucide-react";

export default function Resume() {
  const experiences = [
    {
      role: "Co-Founder and Full Stack Developer",
      company: "TechProjectsHub",
      period: "06/2025 – Present",
      location: "Hyderabad, India",
      desc: [
        "Co-founded an EdTech and IT solutions platform empowering students and startups through AI-driven learning and project-based innovation.",
        "Led the technical architecture and product development using ReactJS, Node.js, Express, MongoDB, and Tailwind CSS with scalable deployment on Vercel Cloud.",
        "Designed and integrated AI-powered chatbots, automation pipelines, and secure payment gateways to enhance workflow efficiency and client satisfaction.",
        "Conducted mentorship programs and workshops in Full Stack, Cloud, and AI/ML, training over 50 students and early-stage developers."
      ]
    },
    {
      role: "Frontend development and AI Engineer",
      company: "Freelancer",
      period: "09/2024 – Present",
      location: "Remote",
      desc: [
        "Provided full-stack and AI-integrated solutions for clients in EdTech and enterprise domains.",
        "Next.js RBAC Auth System: Designed a Role-Based Access Control (RBAC) authentication system with Next.js, MongoDB, and JWT.",
        "AI Workflow Builder: Developed a low-code AI workflow automation tool enabling users to visually design and chain AI tasks.",
        "AI Email App: Built an AI-powered email drafting assistant using GPT APIs for contextual auto-reply.",
        "Task Manager Web App: Created a ReactJS-based productivity platform supporting task creation, sorting, and progress tracking."
      ]
    },
  ];

  const projects = [
    {
      title: "Agro-Aura",
      period: "08/2024 - 11/2024",
      desc: [
        "Developed a CNN model achieving 94% accuracy in classifying wheat leaf diseases using image processing and data augmentation.",
        "Built an interactive, responsive ReactJS frontend for seamless image upload, prediction, and result visualization.",
        "Optimized model performance and integrated the application for real-time disease detection in agricultural environments."
      ]
    },
    {
      title: "Sentiment Analysis",
      period: "01/2024 - 02/2024",
      desc: [
        "Developed a sentiment analysis model using NLP techniques and machine learning algorithms to classify text data.",
        "Preprocessed datasets with tokenization, stopword removal, and TF-IDF vectorization to improve model accuracy.",
        "Achieved a classification accuracy of 90% and deployed the model within a user-friendly web interface."
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelors of Technology in Computer Science",
      school: "Mohan Babu University, Tirupati, India",
      period: "07/2022 - 05/2026",
      desc: "Specialization in AI/ML from IBM-ICE"
    },
  ];

  const skills = {
    "Languages and Frameworks": ["Java", "Python", "JavaScript", "C#", "HTML/CSS", "Tailwind", "ReactJS", "Flask", "SQL", "REST APIs"],
    "AI/ML and Data Analytics": ["NLP", "TensorFlow", "Scikit-Learn", "Deep Learning", "Neural Networks", "Pandas", "Numpy", "Matplotlib", "Seaborn", "CNN", "RNN", "Transformers"],
    "Cloud and DevOps": ["Azure", "Docker", "Kubernetes", "Microsoft Fabric", "Vercel"],
    "Tools and Technologies": ["Power BI", "VS Code", "Git", "Generative AI", "ChatGPT", "Prompt Design", "Framer Motion", "Lucide-React", "Linux", "DSA"]
  };

  const certifications = [
    "Oracle Cloud Infrastructure 2024 - Generative AI Certified Professional",
    "GitHub Foundations",
    "Prompt Engineering for ChatGPT - By Vanderbilt University (Coursera)",
    "Many Badges from GDC in Google Cloud",
    "BCG GenAI Job Simulation – Forage",
    "Develop GenAI Apps with Gemini and Streamlit – Google Cloud Skills Boost"
  ];

  const achievements = [
    "Solved 100+ DSA questions on Leetcode and HackerRank (Combined)",
    "Completed 5+ industry Recognized Certifications",
    "Successfully completed 8+ Major Projects across AI, Cloud and Web domains"
  ];

  return (
    <section className="min-h-screen bg-[#f8f4ec] text-[#1a1a1a] font-serif pt-28 pb-20 px-6">
      <div className="max-w-4xl mx-auto border-2 border-[#1a1a1a] p-8 md:p-12 shadow-[8px_8px_0px_#1a1a1a] bg-white relative">
        {/* Decor */}
        <div className="absolute top-4 right-4 w-4 h-4 bg-[#ff6b6b] rounded-full border border-black"></div>
        <div className="absolute top-4 right-10 w-4 h-4 bg-[#5e4ae3] rounded-full border border-black"></div>

        {/* 📄 Header */}
        <header className="border-b-2 border-dashed border-[#ccc] pb-10 mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
              Kailash Khadarabad
            </h1>
            <p className="font-mono text-[#555] text-lg mb-4">
              Co-Founder | Full Stack Developer | AI Engineer
            </p>
            <div className="font-sans text-sm text-[#444] space-y-1">
              <p>📍 Tirupati, India | ✉️ kailashkbc2@gmail.com</p>
              <p>🔗 <a href="https://linkedin.com/in/Kailash Khadarabad" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#5e4ae3]">LinkedIn</a> | <a href="https://github.com/Kailash Khadarabad" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#5e4ae3]">GitHub</a></p>
            </div>
            <p className="mt-4 text-gray-700 max-w-2xl font-sans leading-relaxed">
              Co-Founder and Full Stack Developer with hands-on experience in AI-driven web applications, prompt engineering, and cloud deployment. Skilled in ReactJS, Next.js, Node.js, and Python, with a strong focus on integrating AI workflows into scalable systems. Passionate about machine learning, generative AI, and automation.
            </p>
          </div>

          <a
            href="https://docs.google.com/document/d/1w4D0hfszwdzpvnPcLBIDOA_qQcXDJmQAiBcckSn1Tt4/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-[#1a1a1a] text-[#f8f4ec] px-6 py-3 rounded-none font-mono text-sm uppercase hover:bg-[#5e4ae3] transition-colors whitespace-nowrap"
          >
            <Download className="w-4 h-4 group-hover:animate-bounce" />
            Download CV
          </a>
        </header>

        {/* 💼 Experience */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-6 h-6 text-[#5e4ae3]" />
            <h2 className="text-2xl font-bold uppercase tracking-wider border-b-4 border-[#ff6b6b]/30 inline-block">
              Experience
            </h2>
          </div>

          <div className="space-y-10 pl-2 border-l-2 border-[#ddd]">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-8"
              >
                <div className="absolute -left-[9px] top-1 w-4 h-4 bg-[#f8f4ec] border-2 border-[#1a1a1a] rounded-full"></div>
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <p className="font-mono text-sm text-[#5e4ae3] mb-2">{exp.company} • {exp.location} • {exp.period}</p>
                <ul className="list-disc list-outside ml-4 space-y-1 text-gray-700 font-sans">
                  {exp.desc.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 🚀 Projects */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Code className="w-6 h-6 text-[#5e4ae3]" />
            <h2 className="text-2xl font-bold uppercase tracking-wider border-b-4 border-[#ff6b6b]/30 inline-block">
              Key Projects
            </h2>
          </div>

          <div className="space-y-8 pl-2 border-l-2 border-[#ddd]">
            {projects.map((proj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-8"
              >
                <div className="absolute -left-[9px] top-1 w-4 h-4 bg-[#f8f4ec] border-2 border-[#1a1a1a] rounded-full"></div>
                <h3 className="text-xl font-bold">{proj.title}</h3>
                <p className="font-mono text-sm text-[#5e4ae3] mb-2">{proj.period}</p>
                <ul className="list-disc list-outside ml-4 space-y-1 text-gray-700 font-sans">
                  {proj.desc.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>


        {/* 🎓 Education */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-6 h-6 text-[#5e4ae3]" />
            <h2 className="text-2xl font-bold uppercase tracking-wider border-b-4 border-[#ff6b6b]/30 inline-block">
              Education
            </h2>
          </div>

          <div className="space-y-8 pl-2 border-l-2 border-[#ddd]">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-8"
              >
                <div className="absolute -left-[9px] top-1 w-4 h-4 bg-[#f8f4ec] border-2 border-[#1a1a1a] rounded-full"></div>
                <h3 className="text-xl font-bold">{edu.degree}</h3>
                <p className="font-mono text-sm text-[#5e4ae3] mb-2">{edu.school} • {edu.period}</p>
                <p className="text-gray-700 leading-relaxed font-sans">{edu.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 🛠 Skills */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Code className="w-6 h-6 text-[#5e4ae3]" />
            <h2 className="text-2xl font-bold uppercase tracking-wider border-b-4 border-[#ff6b6b]/30 inline-block">
              Technical Skills
            </h2>
          </div>

          <div className="space-y-4">
            {Object.entries(skills).map(([category, items], i) => (
              <div key={i}>
                <h3 className="font-bold text-lg mb-2">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 border border-[#1a1a1a] bg-[#f2f2f2] font-mono text-xs hover:bg-[#1a1a1a] hover:text-white transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🏅 Certifications & Achievements */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <ScrollText className="w-6 h-6 text-[#5e4ae3]" />
              <h2 className="text-1xl font-bold uppercase tracking-wider border-b-4 border-[#ff6b6b]/30 inline-block">
                Certifications
              </h2>
            </div>
            <ul className="list-disc list-outside ml-4 space-y-2 text-gray-700 font-sans text-sm">
              {certifications.map((cert, i) => (
                <li key={i}>{cert}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-[#5e4ae3]" />
              <h2 className="text-1xl font-bold uppercase tracking-wider border-b-4 border-[#ff6b6b]/30 inline-block">
                Achievements
              </h2>
            </div>
            <ul className="list-disc list-outside ml-4 space-y-2 text-gray-700 font-sans text-sm">
              {achievements.map((ach, i) => (
                <li key={i}>{ach}</li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}