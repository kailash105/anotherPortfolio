import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, ShieldCheck, Zap, Layers } from "lucide-react";

const freelanceProjects = [
    {
        id: 1,
        title: "Gas Station Management",
        type: "Enterprise Solution",
        desc: "A comprehensive cloud platform for real-time inventory tracking, staff management, and automated financial reporting for gas station networks.",
        icon: <ShieldCheck className="text-violet-600" size={36} />,
        color: "bg-violet-50",
        border: "border-violet-100",
        link: "https://gas-station-app-v2.web.app/",
        metrics: ["+50% Efficiency", "Cloud Scale", "Secure Integration"]
    },
    {
        id: 2,
        title: "Innovation Hub",
        type: "Web Application",
        desc: "A modern collaborative platform designed for engineers to document workflows, share technical insights, and manage complex projects efficiently.",
        icon: <Zap className="text-cyan-500" size={36} />,
        color: "bg-cyan-50",
        border: "border-cyan-100",
        link: "https://www.techprojectshub.in",
        metrics: ["Microservices", "Strategic UX", "CI/CD Pipeline"]
    },
];

export default function Freelancing() {
    return (
        <div className="min-h-screen bg-white text-gray-900 overflow-hidden flex flex-col pt-32 pb-48 px-6 md:px-12 relative font-sans">
            {/* Background Mesh Blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[-10%] w-[45rem] h-[45rem] bg-violet-100/50 rounded-full blur-[120px]" />
                <div className="absolute bottom-[20%] left-[-10%] w-[40rem] h-[40rem] bg-rose-100/40 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10 w-full">
                <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 font-bold text-xs px-6 py-2.5 bg-gray-50 border border-gray-100 rounded-full hover:bg-white hover:shadow-lg transition-all mb-20 uppercase tracking-widest text-violet-600"
                >
                    <ArrowLeft size={16} /> Back to Projects
                </Link>

                <header className="mb-40">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-6xl md:text-9xl font-extrabold mb-10 tracking-tighter leading-[0.85]">
                            Freelance <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-cyan-500 to-rose-500">Engagements.</span>
                        </h1>
                        <p className="text-xl md:text-2xl font-medium text-gray-500 leading-relaxed max-w-2xl">
                            Engineering high-impact solutions through technical excellence and strategic architecture.
                        </p>
                    </motion.div>
                </header>

                <div className="grid grid-cols-1 gap-14">
                    {freelanceProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="bg-white/70 backdrop-blur-3xl p-10 md:p-14 border border-gray-50 rounded-[3rem] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.06)] hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 flex flex-col md:flex-row gap-12 items-center"
                        >
                            <div className={`flex-shrink-0 p-8 ${project.color} ${project.border} border rounded-[2.5rem] shadow-inner`}>
                                {project.icon}
                            </div>

                            <div className="flex-grow">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-[10px] font-bold tracking-[0.3em] text-violet-500 bg-violet-50 px-4 py-1.5 rounded-full uppercase border border-violet-100">
                                        {project.type}
                                    </span>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">
                                    {project.title}
                                </h3>
                                <p className="text-lg font-medium text-gray-400 mb-10 max-w-2xl leading-relaxed">
                                    {project.desc}
                                </p>

                                <div className="flex flex-wrap gap-x-10 gap-y-4 mb-14">
                                    {project.metrics.map((metric, mIndex) => (
                                        <span key={mIndex} className="text-xs font-bold text-gray-400 flex items-center gap-2 uppercase tracking-widest">
                                            <Layers size={14} className="text-violet-300" /> {metric}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 px-10 py-4 bg-gray-900 text-white font-bold text-xs tracking-widest hover:bg-violet-600 transition-all rounded-full uppercase shadow-xl"
                                >
                                    View Case Study <ExternalLink size={18} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Professional CTA */}
                <div className="mt-48 text-center bg-gray-900 py-24 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-violet-600/20 rounded-full blur-[100px] group-hover:scale-125 transition-transform duration-1000" />

                    <div className="relative z-10">
                        <p className="font-bold text-violet-400 uppercase tracking-[0.5em] text-xs mb-8">Professional Partnership</p>
                        <h2 className="text-5xl md:text-7xl font-extrabold mb-14 tracking-tighter leading-none italic">
                            Let's Build <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-cyan-300 underline underline-offset-[12px] decoration-rose-500/50">Excellence.</span>
                        </h2>
                        <Link
                            to="/contact"
                            className="px-16 py-5 bg-white text-gray-900 hover:bg-violet-400 hover:text-white transition-all font-bold text-sm tracking-widest rounded-full inline-block uppercase shadow-[0_10px_40px_-10px_rgba(255,255,255,0.3)]"
                        >
                            Get In Touch
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
