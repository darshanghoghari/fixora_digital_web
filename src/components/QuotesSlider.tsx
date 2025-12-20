"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const quotes = [
  {
    text: "FIXORA has transformed how I manage my service business. The platform is intuitive and helps me connect with more customers effortlessly.",
    author: "Rajesh Kumar",
    role: "Service Provider",
  },
  {
    text: "Best platform for service providers! Easy booking management, real-time updates, and excellent customer support. Highly recommended!",
    author: "Priya Sharma",
    role: "Business Owner",
  },
  {
    text: "The seamless experience and powerful features make FIXORA the perfect solution for growing my service business. Truly game-changing!",
    author: "Amit Patel",
    role: "Entrepreneur",
  },
  {
    text: "FIXORA has helped me expand my customer base significantly. The platform is user-friendly and the results speak for themselves.",
    author: "Sneha Desai",
    role: "Service Professional",
  },
];

export default function QuotesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <div className="mb-6">
            <Quote className="w-12 h-12 text-primary/50 mx-auto md:mx-0" />
          </div>
          <p className="text-lg md:text-xl lg:text-2xl text-foreground mb-6 leading-relaxed font-medium">
            {quotes[currentIndex].text}
          </p>
          <div>
            <p className="text-base md:text-lg font-bold text-foreground">
              {quotes[currentIndex].author}
            </p>
            <p className="text-sm md:text-base text-muted-foreground">
              {quotes[currentIndex].role}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-0 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 flex gap-2">
        {quotes.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-primary"
                : "w-2 bg-muted-foreground/50 hover:bg-muted-foreground/75"
            }`}
            aria-label={`Go to quote ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

