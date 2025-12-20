"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import QuotesSlider from "./QuotesSlider";

export default function PosterSection() {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 z-0 opacity-20">
              <svg
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 600"
                preserveAspectRatio="xMidYMid slice"
              >
                <defs>
                  <linearGradient
                    id="posterGrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      stopColor="hsl(var(--color-primary))"
                      stopOpacity="0.3"
                    />
                    <stop
                      offset="100%"
                      stopColor="hsl(var(--color-primary))"
                      stopOpacity="0.1"
                    />
                  </linearGradient>
                </defs>

                <motion.g
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <circle cx="200" cy="150" r="100" fill="url(#posterGrad)">
                    <animate
                      attributeName="r"
                      values="100;120;100"
                      dur="8s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </motion.g>

                <motion.g
                  animate={{
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <polygon
                    points="800,100 900,200 800,300 700,200"
                    fill="url(#posterGrad)"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values="0 800 200;360 800 200"
                      dur="25s"
                      repeatCount="indefinite"
                    />
                  </polygon>
                </motion.g>

                <motion.g
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <rect
                    x="1000"
                    y="400"
                    width="140"
                    height="140"
                    fill="url(#posterGrad)"
                    rx="20"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values="0 1070 470;360 1070 470"
                      dur="30s"
                      repeatCount="indefinite"
                    />
                  </rect>
                </motion.g>

                <motion.path
                  d="M 100 500 Q 300 400 500 500 T 900 500"
                  stroke="url(#posterGrad)"
                  strokeWidth="4"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: 1,
                    opacity: 0.5,
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.g
                  animate={{
                    x: [0, 40, 0],
                    y: [0, -25, 0],
                  }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <circle
                    cx="400"
                    cy="450"
                    r="70"
                    fill="url(#posterGrad)"
                    opacity="0.4"
                  >
                    <animate
                      attributeName="opacity"
                      values="0.4;0.8;0.4"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </motion.g>
              </svg>
            </div>

            <div className="relative z-10">
              <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/fixora_app_icon.png"
                  alt="FIXORA Application"
                  fill
                  className="object-contain p-6 md:p-8 bg-gradient-to-br from-card to-background"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10"
          >
            <div className="h-[300px] md:h-[400px] lg:h-[450px] flex items-center">
              <QuotesSlider />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
