"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BarChart3, Rocket, Lock } from "lucide-react";
import { SITE_NAME, SITE_DESCRIPTION } from "@/constants/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-accent/20 to-background overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground"
            >
              Grow Your Business with{" "}
              <span className="text-primary">FIXORA</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8"
            >
              {SITE_DESCRIPTION}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }} 
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button asChild size="lg">
                  <Link href="/download">Get Started</Link>
                </Button>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }} 
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button asChild variant="outline" size="lg">
                  <Link href="/how-it-works">Learn More</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Why Choose Us?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage and grow your provider business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                title: "Easy Management",
                description:
                  "Streamline your operations with intuitive tools and dashboards.",
                icon: BarChart3,
              },
              {
                title: "Grow Your Reach",
                description:
                  "Connect with more customers and expand your business network.",
                icon: Rocket,
              },
              {
                title: "Secure Platform",
                description:
                  "Your data and transactions are protected with enterprise-grade security.",
                icon: Lock,
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-card p-8 lg:p-10 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/30"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1 + 0.2,
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

      <section className="py-24 bg-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl md:text-4xl font-bold mb-6 text-foreground"
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg text-muted-foreground mb-10"
            >
              Join thousands of providers already using our platform to grow
              their business.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <Button asChild size="lg">
                <Link href="/download">Download Now</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
