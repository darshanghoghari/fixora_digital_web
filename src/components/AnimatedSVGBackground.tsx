"use client";

import { motion } from "framer-motion";

export default function AnimatedSVGBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--color-primary))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(var(--color-primary))" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <circle cx="200" cy="150" r="80" fill="url(#grad1)">
            <animate
              attributeName="r"
              values="80;100;80"
              dur="8s"
              repeatCount="indefinite"
            />
          </circle>
        </motion.g>

        <motion.g
          initial={{ opacity: 0, x: -100 }}
          animate={{ 
            opacity: 1, 
            x: 0,
            y: [0, 20, 0]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <polygon
            points="800,100 900,200 800,300 700,200"
            fill="url(#grad1)"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 800 200;360 800 200"
              dur="20s"
              repeatCount="indefinite"
            />
          </polygon>
        </motion.g>

        <motion.g
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            x: [0, 30, 0]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <rect
            x="1000"
            y="400"
            width="120"
            height="120"
            fill="url(#grad1)"
            rx="20"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 1060 460;360 1060 460"
              dur="25s"
              repeatCount="indefinite"
            />
          </rect>
        </motion.g>

        <motion.path
          d="M 100 500 Q 300 400 500 500 T 900 500"
          stroke="url(#grad1)"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 0.5,
            d: ["M 100 500 Q 300 400 500 500 T 900 500", "M 100 500 Q 300 600 500 500 T 900 500", "M 100 500 Q 300 400 500 500 T 900 500"]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.g
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <circle cx="400" cy="450" r="60" fill="url(#grad1)" opacity="0.4">
            <animate
              attributeName="opacity"
              values="0.4;0.8;0.4"
              dur="6s"
              repeatCount="indefinite"
            />
          </circle>
        </motion.g>

        <motion.g
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            x: [0, 40, 0],
            y: [0, 25, 0]
          }}
          transition={{ 
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ellipse cx="600" cy="200" rx="70" ry="40" fill="url(#grad1)" opacity="0.3">
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 600 200;360 600 200"
              dur="22s"
              repeatCount="indefinite"
            />
          </ellipse>
        </motion.g>

        <motion.g
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <polygon
            points="300,100 350,180 250,180"
            fill="url(#grad1)"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 300 140;360 300 140"
              dur="16s"
              repeatCount="indefinite"
            />
          </polygon>
        </motion.g>
      </svg>
    </div>
  );
}


