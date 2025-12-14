"use client";

import { motion } from "framer-motion";
import { SITE_NAME } from "@/constants/navigation";

export default function Services() {
  const services = [
    {
      title: "Provider Dashboard",
      description:
        "Comprehensive dashboard to manage your business, track performance, and monitor analytics in real-time.",
      features: [
        "Real-time analytics",
        "Performance tracking",
        "Business insights",
      ],
    },
    {
      title: "Customer Management",
      description:
        "Efficiently manage customer relationships, bookings, and communications all in one place.",
      features: [
        "Customer database",
        "Booking management",
        "Communication tools",
      ],
    },
    {
      title: "Payment Processing",
      description:
        "Secure and seamless payment processing with multiple payment options and automated invoicing.",
      features: [
        "Multiple payment methods",
        "Automated invoicing",
        "Transaction history",
      ],
    },
    {
      title: "Marketing Tools",
      description:
        "Built-in marketing tools to help you reach more customers and grow your business.",
      features: [
        "Promotional campaigns",
        "Customer engagement",
        "Growth analytics",
      ],
    },
    {
      title: "Mobile App",
      description:
        "Full-featured mobile application to manage your business on the go, anytime, anywhere.",
      features: [
        "iOS and Android support",
        "Offline capabilities",
        "Push notifications",
      ],
    },
    {
      title: "24/7 Support",
      description:
        "Round-the-clock customer support to help you whenever you need assistance.",
      features: [
        "Live chat support",
        "Email support",
        "Knowledge base",
      ],
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
              Our Services
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Everything you need to run and grow your provider business
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-gray-600 dark:text-gray-400"
                    >
                      <span className="text-orange-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

