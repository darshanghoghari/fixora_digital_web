"use client";

import { motion } from "framer-motion";

export default function HeroVideo() {
  return (
    <div className="relative w-full h-full min-h-[400px] sm:min-h-[500px] flex items-center justify-center p-4 md:p-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="relative w-full max-w-md aspect-[9/16] md:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-border/50 bg-muted"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video/hero-banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Shape layer to hide the watermark logo in the bottom right */}
        <div className="absolute bottom-0 right-0 w-36 h-14 bg-background/95 backdrop-blur-md rounded-tl-2xl z-10 flex items-center justify-center border-t border-l border-border/50">
          <span className="text-primary font-bold tracking-widest text-sm">FIXORA</span>
        </div>
      </motion.div>
    </div>
  );
}
