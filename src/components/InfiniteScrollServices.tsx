"use client";

import { motion } from "framer-motion";
import { CleaningIcon, RepairingIcon, ElectricIcon, PlumbingIcon } from "./ServiceIcons";

const services = [
  { name: "Cleaning", icon: CleaningIcon },
  { name: "Repairing", icon: RepairingIcon },
  { name: "Electric", icon: ElectricIcon },
  { name: "Plumbing", icon: PlumbingIcon },
];

export default function InfiniteScrollServices() {
  const duplicatedServices = [...services, ...services, ...services];

  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-50"></div>
      
      <div className="relative">
        <div className="flex animate-scroll-slow w-fit hover:[animation-play-state:paused]">
          {duplicatedServices.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <motion.div
                key={`${service.name}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 mx-6 md:mx-8 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white border-2 border-border group-hover:border-primary/50 flex items-center justify-center transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/20 group-hover:scale-105 mb-3">
                    <div className="w-12 h-12 md:w-14 md:h-14 text-black group-hover:text-primary transition-colors">
                      <IconComponent />
                    </div>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

