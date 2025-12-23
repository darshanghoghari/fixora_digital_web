"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@heroui/react";
import { SITE_NAME } from "@/constants/navigation";

const faqs = [
  {
    question: "How do I get started?",
    answer:
      "Simply download the app from the App Store or Google Play, create an account, and complete your provider profile. You can start accepting bookings within minutes.",
  },
  {
    question: "What are the commission rates?",
    answer:
      "Our commission rates vary by plan. Please contact our sales team for detailed pricing information.",
  },
  {
    question: "How do I receive payments?",
    answer:
      "Payments are processed securely through our platform. You can choose from multiple payment methods including bank transfer, PayPal, and other options. Payments are typically processed within 2-3 business days.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "Yes! We have native mobile apps for both iOS and Android. You can download them from the App Store or Google Play Store. The apps include all the features of the web platform.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We offer 24/7 customer support via live chat, email, and phone. Professional and Enterprise plan users get priority support. We also have a comprehensive knowledge base with tutorials and guides.",
  },
  {
    question: "Can I customize my profile?",
    answer:
      "Yes! You can customize your profile with photos, descriptions, service offerings, and availability. Contact us for information about additional branding customization options.",
  },
  {
    question: "How secure is my data?",
    answer:
      "We use enterprise-grade security measures including encryption, secure payment processing, and regular security audits. Your data is protected and we comply with all relevant data protection regulations.",
  },
  {
    question: "Can I integrate with other tools?",
    answer:
      "Enterprise plan users have access to our API for custom integrations. We also offer integrations with popular business tools. Contact our sales team to discuss your specific integration needs.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about {SITE_NAME}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/30"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-accent transition-colors"
                  >
                    <span className="font-semibold text-foreground pr-4">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <ChevronDown className="w-5 h-5 flex-shrink-0 text-primary" />
                    </motion.div>
                  </button>
                  <AnimatePresence mode="wait">
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 py-5 text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
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
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Can't find the answer you're looking for? Contact our support team.
            </p>
            <Button
              as={Link}
              href="/contact"
              variant="bordered"
              size="lg"
              radius="full"
              className="px-8 py-6 text-base font-semibold !border-[hsl(var(--color-primary))] border-2 text-[hsl(var(--color-primary))] bg-transparent hover:!bg-[hsl(var(--color-primary))] hover:!text-white transition-all duration-300"
            >
              Contact Support
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

