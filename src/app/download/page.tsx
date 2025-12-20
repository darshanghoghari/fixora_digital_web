"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Smartphone, Check } from "lucide-react";
import { Button } from "@heroui/react";
import { SITE_NAME } from "@/constants/navigation";
import contentData from "@/data/content.json";

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
              {contentData.download.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              {contentData.download.subtitle}
            </p>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              {contentData.download.description}
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
                  {contentData.download.description}
                </p>
                <div className="space-y-4">
                  <Button
                    size="lg"
                    variant="bordered"
                    radius="full"
                    className="w-full md:w-auto !border-border border-2 text-foreground bg-card hover:!bg-primary hover:!text-white transition-all duration-300"
                    isDisabled
                  >
                    <div className="inline-flex items-center">
                      <svg
                        className="w-6 h-6 mr-3"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.96-3.24-1.44-2.24-1.08-3.8-2.47-4.15-4.38-.11-.6-.11-1.19 0-1.79.37-2.01 1.93-3.39 4.15-4.38 1.16-.48 2.15-.94 3.24-1.44 1.03-.47 2.1-.55 3.08.4.43.42.74.93.97 1.5.24.58.35 1.21.35 1.85v6.64c0 .64-.11 1.27-.35 1.85-.23.57-.54 1.08-.97 1.5zM12.03 3.5c-2.46 0-4.5 2.04-4.5 4.5s2.04 4.5 4.5 4.5 4.5-2.04 4.5-4.5-2.04-4.5-4.5-4.5z" />
                      </svg>
                      <span className="flex items-center gap-2">
                        Download for iOS
                        <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                          Coming Soon
                        </span>
                      </span>
                    </div>
                  </Button>
                  <Button
                    as={Link}
                    href="#"
                    size="lg"
                    color="primary"
                    radius="full"
                    className="w-full md:w-auto"
                  >
                    <div className="inline-flex items-center">
                      <svg
                        className="w-6 h-6 mr-3"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm-.96-4.19L6.05 2.66l10.76 6.27-2.27 2.27zM6.05 2.66L3.84 4.87l8.49 8.49-2.27 2.27L6.05 2.66z" />
                      </svg>
                      Download for Android
                    </div>
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
                    {contentData.download.features.map((feature, index) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.1,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="flex items-center text-muted-foreground"
                      >
                        <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Why Download {SITE_NAME}?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience the power of managing your service provider business
                from anywhere with our feature-rich mobile application.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-card p-6 rounded-xl border border-border"
              >
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Real-Time Business Management
                </h3>
                <p className="text-muted-foreground">
                  Stay connected with your business 24/7. Receive instant
                  notifications for new bookings, manage your schedule, and
                  track earnings in real-time from your mobile device.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card p-6 rounded-xl border border-border"
              >
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Secure & Reliable
                </h3>
                <p className="text-muted-foreground">
                  Your data is protected with enterprise-grade security. Process
                  payments securely, communicate with customers safely, and
                  access your account with confidence.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
