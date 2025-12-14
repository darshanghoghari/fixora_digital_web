"use client";

import { motion } from "framer-motion";
import { Smartphone, Check } from "lucide-react";
import { SITE_NAME } from "@/constants/navigation";
import { Button } from "@/components/ui/button";

export default function Download() {
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
              Download {SITE_NAME}
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              Get started today on iOS or Android
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-center md:text-left"
              >
                <h2 className="text-3xl font-bold mb-6 text-foreground">
                  Available on All Platforms
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Download our app on your preferred platform and start managing
                  your provider business from anywhere, anytime.
                </p>
                <div className="space-y-4">
                  <Button asChild size="lg" variant="default" className="w-full md:w-auto">
                    <a href="#" className="inline-flex items-center">
                      <svg
                        className="w-6 h-6 mr-3"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.96-3.24-1.44-2.24-1.08-3.8-2.47-4.15-4.38-.11-.6-.11-1.19 0-1.79.37-2.01 1.93-3.39 4.15-4.38 1.16-.48 2.15-.94 3.24-1.44 1.03-.47 2.1-.55 3.08.4.43.42.74.93.97 1.5.24.58.35 1.21.35 1.85v6.64c0 .64-.11 1.27-.35 1.85-.23.57-.54 1.08-.97 1.5zM12.03 3.5c-2.46 0-4.5 2.04-4.5 4.5s2.04 4.5 4.5 4.5 4.5-2.04 4.5-4.5-2.04-4.5-4.5-4.5z" />
                      </svg>
                      Download for iOS
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="default" className="w-full md:w-auto">
                    <a href="#" className="inline-flex items-center">
                      <svg
                        className="w-6 h-6 mr-3"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm-.96-4.19L6.05 2.66l10.76 6.27-2.27 2.27zM6.05 2.66L3.84 4.87l8.49 8.49-2.27 2.27L6.05 2.66z" />
                      </svg>
                      Download for Android
                    </a>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-xl border border-border">
                  <div className="text-6xl mb-6">📱</div>
                  <h3 className="text-2xl font-semibold mb-6 text-foreground">
                    Mobile App Features
                  </h3>
                  <ul className="space-y-4 text-left">
                    {[
                      "Manage bookings on the go",
                      "Real-time notifications",
                      "Offline mode support",
                      "Secure payment processing",
                      "Customer communication",
                    ].map((feature, index) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="flex items-center text-muted-foreground"
                      >
                        <span className="text-primary mr-3">✓</span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-8 text-foreground">
              System Requirements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mt-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="bg-card p-6 lg:p-8 rounded-xl shadow-md border border-border"
              >
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  iOS
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>iOS 13.0 or later</li>
                  <li>iPhone, iPad, or iPod touch</li>
                  <li>50 MB available space</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="bg-card p-6 lg:p-8 rounded-xl shadow-md border border-border"
              >
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Android
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Android 7.0 or later</li>
                  <li>50 MB available space</li>
                  <li>Internet connection required</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

