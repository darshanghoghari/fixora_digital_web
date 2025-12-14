"use client";

import { motion } from "framer-motion";
import { SITE_NAME } from "@/constants/navigation";

export default function Features() {
  const features = [
    {
      title: "Real-Time Analytics",
      description:
        "Track your business performance with comprehensive analytics and insights.",
      icon: "📊",
    },
    {
      title: "Smart Scheduling",
      description:
        "Automated scheduling system that manages your availability and bookings.",
      icon: "📅",
    },
    {
      title: "Secure Payments",
      description:
        "Multiple payment options with secure, encrypted transactions.",
      icon: "💳",
    },
    {
      title: "Customer Reviews",
      description:
        "Build trust with customer reviews and ratings on your profile.",
      icon: "⭐",
    },
    {
      title: "Push Notifications",
      description:
        "Stay updated with instant notifications for bookings and messages.",
      icon: "🔔",
    },
    {
      title: "Multi-Language Support",
      description:
        "Access the platform in multiple languages for global reach.",
      icon: "🌐",
    },
    {
      title: "Offline Mode",
      description:
        "Continue working even without internet connectivity.",
      icon: "📱",
    },
    {
      title: "Custom Branding",
      description:
        "Personalize your profile with custom branding and colors.",
      icon: "🎨",
    },
    {
      title: "API Integration",
      description:
        "Integrate with your existing tools and systems via our API.",
      icon: "🔌",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Powerful Features
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Everything you need to run a successful provider business
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
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

