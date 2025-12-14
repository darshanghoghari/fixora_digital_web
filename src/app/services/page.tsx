"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
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
      <section className="py-24 bg-gradient-to-br from-accent/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to run and grow your provider business
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
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
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: featureIndex * 0.05, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-center text-muted-foreground"
                    >
                      <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      {feature}
                    </motion.li>
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

