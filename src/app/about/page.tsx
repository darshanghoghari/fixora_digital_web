"use client";

import { motion } from "framer-motion";
import { SITE_NAME } from "@/constants/navigation";

export default function About() {
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
              About {SITE_NAME}
            </h1>
            <p className="text-xl text-muted-foreground">
              Empowering service providers to connect, grow, and succeed
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Our Vision
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                At {SITE_NAME}, we believe that every service provider deserves
                the tools and platform to succeed in today's digital economy. Our
                mission is to create a seamless, intuitive, and powerful
                application that connects providers with customers while
                streamlining operations and driving growth.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are committed to building a platform that is not just
                functional, but transformative—helping providers reach new
                heights in their business journey.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-8 text-foreground">
                Our Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
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
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -4, transition: { duration: 0.3 } }}
                    className="bg-card p-6 lg:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/30"
                  >
                    <h3 className="text-xl font-semibold mb-3 text-primary">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Our Team
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
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

