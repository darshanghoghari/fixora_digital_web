"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  Briefcase,
  UserCircle,
  Search,
  Calendar,
  CreditCard,
  Bell,
  MapPin,
  Star,
  History,
  Shield,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const clientPortalFeatures = [
    {
      icon: UserCircle,
      title: "Account Management",
      description: "Quick registration with Phone/Email and secure OTP verification for instant access",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Search,
      title: "Service Discovery",
      description: "Browse through comprehensive service categories with advanced search and filters",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Calendar,
      title: "Smart Booking",
      description: "Select preferred date, time, and location with real-time availability checking",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: CreditCard,
      title: "Flexible Payments",
      description: "Multiple payment options including UPI, Credit/Debit Cards, and Cash on Delivery",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Bell,
      title: "Instant Notifications",
      description: "Receive SMS and Push notifications for booking confirmations and updates",
      color: "from-yellow-500 to-amber-500",
    },
    {
      icon: MapPin,
      title: "Live Tracking",
      description: "Track booking status in real-time: Accepted, In Progress, Completed",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: Star,
      title: "Reviews & Ratings",
      description: "Share your experience and help build a trusted service community",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: History,
      title: "Service Archive",
      description: "Access complete booking history and receipts anytime, anywhere",
      color: "from-teal-500 to-cyan-500",
    },
  ];

  const businessHubFeatures = [
    {
      icon: Shield,
      title: "Verified Registration",
      description: "Secure KYC verification process to build trust and credibility",
      color: "from-blue-600 to-indigo-600",
    },
    {
      icon: Briefcase,
      title: "Service Portfolio",
      description: "Create and manage your service offerings with detailed descriptions",
      color: "from-purple-600 to-violet-600",
    },
    {
      icon: CheckCircle2,
      title: "Booking Management",
      description: "Efficiently accept or reject booking requests with smart notifications",
      color: "from-green-600 to-teal-600",
    },
    {
      icon: TrendingUp,
      title: "Status Updates",
      description: "Update service status: On the way, In progress, Completed",
      color: "from-orange-600 to-amber-600",
    },
    {
      icon: CreditCard,
      title: "Earnings Dashboard",
      description: "Track earnings, view payment history, and manage financials",
      color: "from-emerald-600 to-green-600",
    },
  ];

  const benefits = [
    {
      title: "Seamless User Experience",
      description: "Intuitive interface designed for effortless navigation and smooth interactions across all devices",
      icon: Sparkles,
      stat: "99.9%",
      statLabel: "Uptime",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Real-time Notifications",
      description: "Instant SMS and push notifications keep you informed at every step of the booking process",
      icon: Bell,
      stat: "< 2s",
      statLabel: "Response Time",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Bank-Level Security",
      description: "Enterprise-grade encryption and secure payment processing for all transactions",
      icon: Shield,
      stat: "100%",
      statLabel: "Secure",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "24/7 Platform Access",
      description: "Round-the-clock availability - access your account and services anytime, anywhere",
      icon: History,
      stat: "24/7",
      statLabel: "Available",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Advanced Analytics",
      description: "Comprehensive insights and performance metrics to track growth and optimize operations",
      icon: TrendingUp,
      stat: "50%+",
      statLabel: "Growth",
      color: "from-yellow-500 to-amber-500",
    },
    {
      title: "Dedicated Support",
      description: "Expert support team available round-the-clock to assist with any queries or issues",
      icon: UserCircle,
      stat: "24/7",
      statLabel: "Support",
      color: "from-indigo-500 to-blue-500",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg shadow-primary/30">
                <Smartphone className="w-10 h-10 text-white" />
              </div>
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
              Complete Platform Solution
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Powerful applications designed for seamless service booking and business management
            </p>
          </motion.div>

          <div className="space-y-24 md:space-y-32">
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-1 h-12 bg-gradient-to-b from-primary to-primary/0 rounded-full"></div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                      Client Portal
                    </h2>
                    <p className="text-muted-foreground mt-2">
                      User-friendly mobile application for seamless service booking experience
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {clientPortalFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  const isHovered = hoveredIndex === index;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      onHoverStart={() => setHoveredIndex(index)}
                      onHoverEnd={() => setHoveredIndex(null)}
                      whileHover={{ y: -8, transition: { duration: 0.3 } }}
                      className="relative group cursor-pointer"
                    >
                      <div className="relative h-full bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden">
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                        />
                        <motion.div
                          animate={{
                            scale: isHovered ? 1.1 : 1,
                            rotate: isHovered ? 5 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <h3 className="text-lg font-semibold mb-2 text-foreground">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: isHovered ? 1 : 0 }}
                          className="absolute bottom-4 right-4"
                        >
                          <ArrowRight className="w-5 h-5 text-primary" />
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center py-8"
            >
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg"
              >
                <ArrowRight className="w-8 h-8 text-white rotate-90" />
              </motion.div>
            </motion.div>

            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-1 h-12 bg-gradient-to-b from-primary to-primary/0 rounded-full"></div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                      Business Hub
                    </h2>
                    <p className="text-muted-foreground mt-2">
                      Comprehensive platform for service providers to manage and grow their business
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
                {businessHubFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  const isHovered = hoveredIndex === clientPortalFeatures.length + index;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      onHoverStart={() =>
                        setHoveredIndex(clientPortalFeatures.length + index)
                      }
                      onHoverEnd={() => setHoveredIndex(null)}
                      whileHover={{ y: -8, transition: { duration: 0.3 } }}
                      className="relative group cursor-pointer"
                    >
                      <div className="relative h-full bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden">
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                        />
                        <motion.div
                          animate={{
                            scale: isHovered ? 1.1 : 1,
                            rotate: isHovered ? 5 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <h3 className="text-lg font-semibold mb-2 text-foreground">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: isHovered ? 1 : 0 }}
                          className="absolute bottom-4 right-4"
                        >
                          <ArrowRight className="w-5 h-5 text-primary" />
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>
          </div>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-24 md:mt-32"
          >
            <div className="relative overflow-hidden bg-gradient-to-br from-card via-card to-background rounded-3xl p-8 md:p-12 border border-border">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="inline-block mb-6"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg shadow-primary/30">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                    Platform Benefits
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Experience the advantages of our comprehensive service platform designed for success
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {benefits.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        className="relative group"
                      >
                        <div className="relative h-full bg-background rounded-xl p-6 md:p-8 border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden">
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                          />
                          <div className="relative">
                            <motion.div
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              transition={{ duration: 0.3 }}
                              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4 shadow-lg`}
                            >
                              <Icon className="w-7 h-7 text-white" />
                            </motion.div>
                            <div className="flex items-start justify-between mb-3">
                              <h3 className="text-xl font-bold text-foreground flex-1">
                                {benefit.title}
                              </h3>
                              <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                                className="text-right"
                              >
                                <div className="text-2xl font-bold text-primary">
                                  {benefit.stat}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {benefit.statLabel}
                                </div>
                              </motion.div>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {benefit.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </section>
    </div>
  );
}
