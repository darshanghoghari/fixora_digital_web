"use client";

import { motion } from "framer-motion";
import { SITE_NAME } from "@/constants/navigation";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Sign Up",
      description:
        "Create your account in minutes. Simply download the app and complete your profile with business information.",
    },
    {
      number: "02",
      title: "Set Up Your Profile",
      description:
        "Add your services, pricing, availability, and business details to start attracting customers.",
    },
    {
      number: "03",
      title: "Get Discovered",
      description:
        "Customers can find and book your services through our platform. You'll receive notifications for new bookings.",
    },
    {
      number: "04",
      title: "Manage & Grow",
      description:
        "Use our dashboard to manage bookings, track earnings, communicate with customers, and grow your business.",
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
              How It Works
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Get started with {SITE_NAME} in four simple steps
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col md:flex-row items-start gap-8"
                >
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-orange-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Join thousands of providers already using our platform
            </p>
            <a
              href="/download"
              className="inline-block px-8 py-4 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl"
            >
              Download Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

