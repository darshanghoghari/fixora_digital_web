"use client";

import { motion } from "framer-motion";
import { SITE_NAME } from "@/constants/navigation";

export default function About() {
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
              About {SITE_NAME}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Empowering service providers to connect, grow, and succeed
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                At {SITE_NAME}, we believe that every service provider deserves
                the tools and platform to succeed in today's digital economy. Our
                mission is to create a seamless, intuitive, and powerful
                application that connects providers with customers while
                streamlining operations and driving growth.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                We are committed to building a platform that is not just
                functional, but transformative—helping providers reach new
                heights in their business journey.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Our Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Innovation",
                    description:
                      "We continuously evolve our platform with cutting-edge technology and user feedback.",
                  },
                  {
                    title: "Reliability",
                    description:
                      "We ensure our platform is stable, secure, and always available when you need it.",
                  },
                  {
                    title: "Support",
                    description:
                      "We provide comprehensive support to help you succeed every step of the way.",
                  },
                  {
                    title: "Growth",
                    description:
                      "We're committed to your success and provide tools that scale with your business.",
                  },
                ].map((value, index) => (
                  <div
                    key={value.title}
                    className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl"
                  >
                    <h3 className="text-xl font-semibold mb-3 text-orange-500">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Our Team
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Our team consists of passionate developers, designers, and
                business experts who are dedicated to creating the best possible
                experience for service providers. We combine technical expertise
                with deep industry knowledge to deliver solutions that truly
                make a difference.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

