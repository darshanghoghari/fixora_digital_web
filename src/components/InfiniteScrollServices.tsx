"use client";

import { useState, useEffect } from "react";
import { motion, PanInfo, useMotionValue, animate } from "framer-motion";
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(5);
  const [isPaused, setIsPaused] = useState(false);
  const x = useMotionValue(0);
  const itemWidth = 160;

  useEffect(() => {
    const updateItemsPerView = () => {
      setItemsPerView(window.innerWidth >= 768 ? 5 : 3);
    };
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, services.length - itemsPerView);

  // Auto-scroll functionality
  useEffect(() => {
    if (isPaused) return;
    if (maxIndex <= 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        if (next > maxIndex) {
          return 0; // Loop back to start
        }
        return next;
      });
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const threshold = 50;
    let newIndex = currentIndex;

    if (info.offset.x < -threshold && currentIndex < maxIndex) {
      newIndex = Math.min(currentIndex + 1, maxIndex);
    } else if (info.offset.x > threshold && currentIndex > 0) {
      newIndex = Math.max(currentIndex - 1, 0);
    }

    setCurrentIndex(newIndex);
    setIsPaused(false);

    animate(x, -newIndex * itemWidth, {
      type: "spring",
      stiffness: 400,
      damping: 35,
      mass: 0.8,
    });
  };

  useEffect(() => {
    const controls = animate(x, -currentIndex * itemWidth, {
      type: "spring",
      stiffness: 400,
      damping: 35,
      mass: 0.8,
    });
    return controls.stop;
  }, [currentIndex, itemWidth, x]);

  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-50"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="overflow-hidden cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            drag="x"
            dragConstraints={{ left: -maxIndex * itemWidth, right: 0 }}
            dragElastic={0.15}
            dragMomentum={false}
            onDragStart={() => setIsPaused(true)}
            onDragEnd={handleDragEnd}
            style={{ x }}
            className="flex will-change-transform"
            whileDrag={{ cursor: "grabbing" }}
            transition={{ type: "spring", stiffness: 400, damping: 35 }}
          >
            {services.map((service) => {
              const IconComponent = service.icon;

              return (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 mx-4 md:mx-6 group"
                  style={{ width: itemWidth }}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white border-2 border-border group-hover:border-primary/50 flex items-center justify-center transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/20 group-hover:scale-105 mb-3">
                      <IconComponent className="w-12 h-12 md:w-14 md:h-14 text-black group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-foreground group-hover:text-primary transition-colors text-center">
                      {service.name}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({
            length: Math.ceil(services.length / itemsPerView),
          }).map((_, index) => {
            const pageIndex = index * itemsPerView;
            return (
              <button
                key={index}
                onClick={() => setCurrentIndex(Math.min(pageIndex, maxIndex))}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex >= pageIndex &&
                  currentIndex < pageIndex + itemsPerView
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/50 hover:bg-muted-foreground/75"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
