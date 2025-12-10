import React from "react";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Slightly darker gray background with large, slow-falling black dots */}
      <div className="absolute inset-0 bg-[#e0e0e0] bg-[radial-gradient(circle,_#000000_3px,_transparent_3px)] [background-size:60px_60px] animate-bgFallSlower"></div>

      {/* Floating accent blobs */}
      <div className="absolute top-[15%] left-[10%] w-24 h-24 bg-accent/20 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-[10%] right-[15%] w-28 h-28 bg-accent/20 rounded-full blur-3xl animate-float-fast"></div>
    </div>
  );
}
