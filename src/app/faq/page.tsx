"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_NAME } from "@/constants/navigation";
import { Icons } from "@/config/icons";
import { theme } from "@/config/theme";

const faqs = [
  {
    question: "How do I get started?",
    answer:
      "Simply download the app from the App Store or Google Play, create an account, and complete your provider profile. You can start accepting bookings within minutes.",
  },
  {
    question: "What are the commission rates?",
    answer:
      "Our commission rates vary by plan. Starter plan charges 15%, Professional plan charges 12%, and Enterprise plan charges 10%. See our Pricing page for more details.",
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
      "Yes! You can customize your profile with photos, descriptions, service offerings, pricing, and availability. Professional and Enterprise plans offer additional branding customization options.",
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
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Find answers to common questions about {SITE_NAME}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 dark:text-white pr-4">
                      {faq.question}
                    </span>
                    <Icons.ChevronDown
                      className={`w-5 h-5 flex-shrink-0 transition-transform ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                      size={20}
                      style={{ color: theme.colors.primary }}
                    />
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 py-4 text-gray-600 dark:text-gray-400">
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
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Can't find the answer you're looking for? Contact our support team.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl"
            >
              Contact Support
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

