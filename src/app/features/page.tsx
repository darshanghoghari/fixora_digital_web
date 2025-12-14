"use client";

import { motion } from "framer-motion";
import { 
  BarChart3, 
  Calendar, 
  CreditCard, 
  Star, 
  Bell, 
  Globe, 
  Smartphone, 
  Palette, 
  Plug 
} from "lucide-react";
import { SITE_NAME } from "@/constants/navigation";

export default function Features() {
  const features = [
    {
      title: "Real-Time Analytics",
      description:
        "Track your business performance with comprehensive analytics and insights.",
      icon: BarChart3,
    },
    {
      title: "Smart Scheduling",
      description:
        "Automated scheduling system that manages your availability and bookings.",
      icon: Calendar,
    },
    {
      title: "Secure Payments",
      description:
        "Multiple payment options with secure, encrypted transactions.",
      icon: CreditCard,
    },
    {
      title: "Customer Reviews",
      description:
        "Build trust with customer reviews and ratings on your profile.",
      icon: Star,
    },
    {
      title: "Push Notifications",
      description:
        "Stay updated with instant notifications for bookings and messages.",
      icon: Bell,
    },
    {
      title: "Multi-Language Support",
      description:
        "Access the platform in multiple languages for global reach.",
      icon: Globe,
    },
    {
      title: "Offline Mode",
      description:
        "Continue working even without internet connectivity.",
      icon: Smartphone,
    },
    {
      title: "Custom Branding",
      description:
        "Personalize your profile with custom branding and colors.",
      icon: Palette,
    },
    {
      title: "API Integration",
      description:
        "Integrate with your existing tools and systems via our API.",
      icon: Plug,
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="py-24 bg-gradient-to-br from-accent/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Powerful Features
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to run a successful provider business
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-card p-8 lg:p-10 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-border"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.05 + 0.2,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                  className="mb-6"
                >
                  <feature.icon className="w-12 h-12 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

