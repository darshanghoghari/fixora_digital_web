"use client";

import { motion } from "framer-motion";
import { SITE_NAME } from "@/constants/navigation";

export default function Download() {
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
              Download {SITE_NAME}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
              Get started today on iOS or Android
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center md:text-left"
              >
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                  Available on All Platforms
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                  Download our app on your preferred platform and start managing
                  your provider business from anywhere, anytime.
                </p>
                <div className="space-y-4">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    <svg
                      className="w-6 h-6 mr-3"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.96-3.24-1.44-2.24-1.08-3.8-2.47-4.15-4.38-.11-.6-.11-1.19 0-1.79.37-2.01 1.93-3.39 4.15-4.38 1.16-.48 2.15-.94 3.24-1.44 1.03-.47 2.1-.55 3.08.4.43.42.74.93.97 1.5.24.58.35 1.21.35 1.85v6.64c0 .64-.11 1.27-.35 1.85-.23.57-.54 1.08-.97 1.5zM12.03 3.5c-2.46 0-4.5 2.04-4.5 4.5s2.04 4.5 4.5 4.5 4.5-2.04 4.5-4.5-2.04-4.5-4.5-4.5z" />
                    </svg>
                    Download for iOS
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    <svg
                      className="w-6 h-6 mr-3"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm-.96-4.19L6.05 2.66l10.76 6.27-2.27 2.27zM6.05 2.66L3.84 4.87l8.49 8.49-2.27 2.27L6.05 2.66z" />
                    </svg>
                    Download for Android
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
                  <div className="text-6xl mb-4">📱</div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                    Mobile App Features
                  </h3>
                  <ul className="space-y-3 text-left">
                    {[
                      "Manage bookings on the go",
                      "Real-time notifications",
                      "Offline mode support",
                      "Secure payment processing",
                      "Customer communication",
                    ].map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-gray-600 dark:text-gray-400"
                      >
                        <span className="text-orange-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
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
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              System Requirements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  iOS
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>iOS 13.0 or later</li>
                  <li>iPhone, iPad, or iPod touch</li>
                  <li>50 MB available space</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Android
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Android 7.0 or later</li>
                  <li>50 MB available space</li>
                  <li>Internet connection required</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

