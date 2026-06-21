"use client";

import { useState, useEffect, useRef } from "react";
import {
  Sparkles,
  Wrench,
  Zap,
  Droplets,
  Wind,
  Paintbrush,
  Hammer,
  Flower2,
  Refrigerator,
  Bug,
  SquareStack,
} from "lucide-react";

const services = [
  { name: "Cleaning", icon: Sparkles },
  { name: "Repairing", icon: Wrench },
  { name: "Electric", icon: Zap },
  { name: "Plumbing", icon: Droplets },
  { name: "AC", icon: Wind },
  { name: "Painting", icon: Paintbrush },
  { name: "Carpentry", icon: Hammer },
  { name: "Gardening", icon: Flower2 },
  { name: "Appliance", icon: Refrigerator },
  { name: "Pest Control", icon: Bug },
  { name: "Flooring", icon: SquareStack },
];

export default function InfiniteScrollServices() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const duplicatedServices = [...services, ...services, ...services];
  const itemWidth = 176;
  const scrollDistance = services.length * itemWidth;

  useEffect(() => {
    if (!scrollRef.current || isPaused) return;

    let animationFrameId: number;
    let position = 0;

    const animate = () => {
      if (isPaused) return;

      position += 0.5;
      if (position >= scrollDistance) {
        position = 0;
      }

      if (scrollRef.current) {
        scrollRef.current.style.transform = `translateX(-${position}px)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPaused, scrollDistance]);

  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-50"></div>

      <div className="relative w-full">
        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={scrollRef}
            className="flex will-change-transform"
            style={{
              width: `${duplicatedServices.length * itemWidth}px`,
            }}
          >
            {duplicatedServices.map((service, index) => {
              const IconComponent = service.icon;

              return (
                <div
                  key={`${service.name}-${index}`}
                  className="flex-shrink-0 mx-4 md:mx-6 group"
                  style={{ width: "160px" }}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white border-2 border-border group-hover:border-primary/50 flex items-center justify-center transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/20 group-hover:scale-105 mb-3">
                      <IconComponent className="w-12 h-12 md:w-14 md:h-14 text-primary" />
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-foreground group-hover:text-primary transition-colors text-center">
                      {service.name}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
