import React from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowLeft, CheckCircle, Terminal } from "lucide-react";
import ReactMarkdown from 'react-markdown';

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-gray-700 font-sans">
        <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
        <Link
          to="/projects"
          className="text-[#ff6b6b] underline underline-offset-4 hover:text-red-400 flex items-center gap-2"
        >
          <ArrowLeft size={20} /> Back to Projects
        </Link>
      </div>
    );
  }

  // Animation Variants
  const fadeInUp = {
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
    <div className="min-h-screen bg-[#fafafa] text-[#333] font-sans selection:bg-[#ff6b6b] selection:text-white">
      {/* 🔹 Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image or Video with Overlay */}
        <div className="absolute inset-0 z-0">
          {project.video ? (
            <video
              src={project.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={project.heroImg}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/70 to-[#111]/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center text-white max-w-4xl mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 uppercase tracking-widest text-xs font-bold transition-colors"
            >
              <ArrowLeft size={16} /> Back to Projects
            </Link>

            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight tracking-tight">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {project.summary}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-transform hover:scale-105"
                >
                  <Github size={20} /> GitHub
                </a>
              )}
              {/* Add Live Demo button if available in future */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 🔹 Content Grid */}
      <main className="container mx-auto px-6 py-16 max-w-6xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
        >
          {/* LEFT: Main Content */}
          <div className="lg:col-span-2 space-y-12">

            {/* Overview */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-3">
                Overview
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {project.overview || project.desc}
              </p>
            </motion.div>

            {/* Features (If available) */}
            {project.features && (
              <motion.div variants={fadeInUp}>
                <h2 className="text-2xl font-bold mb-6 text-black">Core Features</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-3xl mb-4">{feature.icon}</div>
                      <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* How It Works (If available) */}
            {project.howItWorks && (
              <motion.div variants={fadeInUp}>
                <h2 className="text-2xl font-bold mb-6 text-black">How It Works</h2>
                <ul className="space-y-4">
                  {project.howItWorks.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-[#ff6b6b]/10 text-[#ff6b6b] rounded-full font-bold text-sm">
                        {idx + 1}
                      </div>
                      <p className="text-gray-700 leading-relaxed mt-1">{step}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Installation / Key Points */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl font-bold mb-6 text-black flex items-center gap-3">
                {project.installation ? 'Installation & Setup' : 'Key Highlights'}
              </h2>

              {project.installation ? (
                <div className="bg-[#1e1e1e] text-gray-300 p-6 rounded-xl overflow-x-auto font-mono text-sm leading-normal border border-gray-800 shadow-inner">
                  {/* Simple Markdown Rendering for Code Blocks */}
                  <ReactMarkdown
                    components={{
                      code({ node, inline, className, children, ...props }) {
                        return <code className={`${className} bg-transparent`} {...props}>{children}</code>
                      },
                      pre({ node, children, ...props }) {
                        return <pre className="bg-transparent p-0 m-0" {...props}>{children}</pre>
                      }
                    }}
                  >
                    {project.installation}
                  </ReactMarkdown>
                </div>
              ) : (
                <ul className="space-y-3">
                  {project.keyPoints?.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle className="text-[#ff6b6b] w-5 h-5 flex-shrink-0 mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>

          </div>

          {/* RIGHT: Sidebar Info */}
          <aside className="space-y-8">
            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-sm uppercase tracking-widest text-gray-500 font-bold mb-4">Project Details</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900">Role</h4>
                  <p className="text-gray-600">{project.role}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Duration</h4>
                  <p className="text-gray-600">{project.duration}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium border border-gray-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </aside>

        </motion.div>
      </main>

      {/* 🔹 Footer CTA */}
      <section className="bg-[#111] text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Interested in this project?</h2>
        <div className="flex gap-4 justify-center">
          <Link to="/contact" className="bg-[#ff6b6b] px-8 py-3 rounded-full font-bold hover:bg-[#ff4f4f] transition-colors">
            Contact Me
          </Link>
          <Link to="/projects" className="border border-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-black transition-colors">
            Explore More
          </Link>
        </div>
      </section>

    </div>
  );
}
