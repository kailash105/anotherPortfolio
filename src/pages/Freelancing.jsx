import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";

// Mario Theme Colors
// Red: #E52521
// Blue: #049CD8
// Yellow: #FBD000
// Green: #43B047
// Brown: #f8c070 (Question Block)

const freelanceProjects = [
    {
        id: 1,
        title: "Gas Station App",
        description: "A comprehensive management system for gas stations, featuring real-time fuel tracking, sales reporting, and staff management.",
        link: "https://gas-station-app-v2.web.app/",
        type: "question", // Question block
        icon: "⛽"
    },
    {
        id: 2,
        title: "Tech Projects Hub",
        description: "An innovative platform showcasing a collection of technical projects, providing a centralized location for developers to explore and share work.",
        link: "https://www.techprojectshub.in",
        type: "brick", // Brick block
        icon: "💻"
    }
];

const ProjectBlock = ({ project }) => {
    const [bouncing, setBouncing] = useState(false);
    const [coins, setCoins] = useState([]);

    const handleInteraction = () => {
        if (bouncing) return;
        setBouncing(true);

        // Add a coin
        const newCoin = { id: Date.now() };
        setCoins([...coins, newCoin]);

        // Reset bounce and remove coin after animation
        setTimeout(() => {
            setBouncing(false);
        }, 200);

        setTimeout(() => {
            setCoins(prev => prev.filter(c => c.id !== newCoin.id));
        }, 600);
    };

    return (
        <div
            className="relative flex flex-col items-center"
            onMouseEnter={handleInteraction}
            onClick={handleInteraction}
        >
            {/* Pop-up Coins */}
            {coins.map(coin => (
                <div key={coin.id} className="absolute -top-12 text-3xl animate-coin-pop z-10">
                    🪙
                </div>
            ))}

            {/* Mario Style Block */}
            <div className={`
        w-full max-w-sm aspect-square relative cursor-pointer transition-transform
        ${bouncing ? 'animate-brick-bounce' : ''}
        ${project.type === 'question'
                    ? 'bg-[#f8c070] mario-block-shadow border-4 border-black'
                    : 'bg-[#ab4a2e] mario-border-pixel border-4 border-black border-r-[#7d331d] border-b-[#7d331d] border-l-[#d26b4d] border-t-[#d26b4d]'}
      `}>
                {/* Decorative dots for Question Block */}
                {project.type === 'question' && (
                    <>
                        <div className="absolute top-2 left-2 w-2 h-2 bg-black opacity-20" />
                        <div className="absolute top-2 right-2 w-2 h-2 bg-black opacity-20" />
                        <div className="absolute bottom-2 left-2 w-2 h-2 bg-black opacity-20" />
                        <div className="absolute bottom-2 right-2 w-2 h-2 bg-black opacity-20" />
                        <div className="absolute inset-0 flex items-center justify-center text-7xl font-mario text-black opacity-40">
                            ?
                        </div>
                    </>
                )}

                {/* Decorative lines for Brick Block */}
                {project.type === 'brick' && (
                    <div className="absolute inset-0 grid grid-rows-3 grid-cols-2 gap-1 border-t-2 border-l-2 border-black/20">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="border-r-2 border-b-2 border-black/20" />
                        ))}
                    </div>
                )}

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center z-20">
                    <span className="text-5xl mb-4 drop-shadow-md">{project.icon}</span>
                    <h3 className="font-mario text-sm md:text-base leading-relaxed tracking-tighter text-black bg-white/10 px-2 py-1 italic">
                        {project.title}
                    </h3>
                </div>
            </div>

            {/* Description under block (more readable) */}
            <div className="mt-8 p-6 bg-white mario-border-pixel border-4 border-black max-w-sm">
                <p className="text-xs md:text-sm leading-relaxed text-slate-800 mb-6 font-mono font-bold">
                    {project.description}
                </p>
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#43B047] text-white py-3 font-mario text-[8px] md:text-[10px] mario-border-pixel border-4 border-black hover:bg-[#348b37] transition-colors"
                >
                    SELECT PROJECT <ExternalLink size={14} />
                </a>
            </div>
        </div>
    );
};

export default function Freelancing() {
    return (
        <div className="min-h-screen bg-[#5c94fc] relative overflow-hidden flex flex-col">
            {/* Retro Clouds Background */}
            <div className="absolute top-20 left-10 text-white text-6xl opacity-40 select-none animate-float-slow">☁️</div>
            <div className="absolute top-40 right-20 text-white text-8xl opacity-30 select-none animate-float-fast">☁️</div>
            <div className="absolute bottom-60 left-1/4 text-white text-7xl opacity-40 select-none animate-float-slow">☁️</div>

            <div className="z-10 pt-32 pb-40 px-6 md:px-12 flex-grow">
                <div className="max-w-6xl mx-auto">
                    {/* Navigation */}
                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 font-mario text-[10px] text-white hover:text-[#FBD000] transition-colors mb-12 drop-shadow-[2px_2px_0px_#000]"
                    >
                        <ArrowLeft size={16} /> GO BACK
                    </Link>

                    {/* Header */}
                    <header className="mb-20 text-center">
                        <h1 className="font-mario text-3xl md:text-5xl text-white drop-shadow-[4px_4px_0px_#E52521] mb-8 leading-tight">
                            WORLD 1-Freelance
                        </h1>
                        <p className="font-mario text-[10px] md:text-xs text-white leading-loose max-w-3xl mx-auto drop-shadow-[2px_2px_0px_#000]">
                            COLLECT COINS BY EXPLORING RECENT WORKS!<br />
                            EVERY PROJECT IS A POWER-UP FOR BUSINESS.
                        </p>
                    </header>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-32 items-start justify-items-center">
                        {freelanceProjects.map((project) => (
                            <ProjectBlock key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Mario Ground/Floor */}
            <div className="fixed bottom-0 left-0 w-full h-16 bg-[#ab4a2e] border-t-8 border-black z-30">
                <div className="flex h-full">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className="flex-grow border-r-4 border-black flex flex-col">
                            <div className="h-1/2 border-b-4 border-black opacity-20" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
