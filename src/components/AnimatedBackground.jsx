import React from "react";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Bigger moving dots pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_#1a1a1a_2px,_transparent_2px)] [background-size:40px_40px] animate-bgFall"></div>

      {/* Floating accent blobs */}
      <div className="absolute top-[15%] left-[10%] w-20 h-20 bg-accent/30 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-[10%] right-[15%] w-28 h-28 bg-accent/20 rounded-full blur-3xl animate-float-fast"></div>
    </div>
  );
}
