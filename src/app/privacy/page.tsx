"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, UserCheck, Database } from "lucide-react";
import { SITE_NAME } from "@/constants/navigation";

export default function Privacy() {
  const sections = [
    {
      icon: FileText,
      title: "Information We Collect",
      content: [
        "We collect information that you provide directly to us, including your name, email address, phone number, business information, and payment details when you register for our service.",
        "We automatically collect certain information about your device and how you interact with our platform, including IP address, browser type, device information, and usage patterns.",
        "We may collect location information if you enable location services on your device.",
      ],
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        "To provide, maintain, and improve our services and platform functionality.",
        "To process transactions, send notifications, and manage your account.",
        "To communicate with you about your account, updates, and promotional offers.",
        "To detect, prevent, and address technical issues and security threats.",
        "To comply with legal obligations and enforce our terms of service.",
      ],
    },
    {
      icon: Shield,
      title: "Data Security",
      content: [
        "We implement industry-standard security measures to protect your personal information, including encryption, secure servers, and regular security audits.",
        "Your payment information is processed through secure, PCI-compliant payment processors. We do not store your full payment card details.",
        "While we strive to protect your data, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.",
      ],
    },
    {
      icon: Lock,
      title: "Data Sharing and Disclosure",
      content: [
        "We do not sell your personal information to third parties.",
        "We may share your information with service providers who assist us in operating our platform, conducting business, or serving users, subject to confidentiality agreements.",
        "We may disclose information if required by law, court order, or government regulation, or to protect our rights, property, or safety.",
      ],
    },
    {
      icon: UserCheck,
      title: "Your Rights and Choices",
      content: [
        "You have the right to access, update, or delete your personal information through your account settings.",
        "You can opt-out of marketing communications by following the unsubscribe instructions in our emails.",
        "You may request a copy of your data or request data deletion by contacting us.",
        "You can disable location services or other permissions through your device settings.",
      ],
    },
    {
      icon: Database,
      title: "Data Retention",
      content: [
        "We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy.",
        "We may retain certain information for legal, accounting, or business purposes even after you close your account.",
        "You can request deletion of your data, and we will comply with your request subject to legal obligations.",
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
            <div className="inline-block mb-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg shadow-primary/30">
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last Updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </motion.div>
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
              className="mb-12"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                At {SITE_NAME}, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service provider platform and mobile applications.
              </p>
            </motion.div>

            <div className="space-y-8">
              {sections.map((section, index) => {
                const IconComponent = section.icon;
                return (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-card rounded-xl p-8 border border-border hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground">
                        {section.title}
                      </h2>
                    </div>
                    <ul className="space-y-4 ml-16">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-muted-foreground leading-relaxed flex items-start">
                          <span className="text-primary mr-3 mt-1.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 bg-card rounded-xl p-8 border border-border"
            >
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Contact Us
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <p className="text-muted-foreground">
                Email: <a href="mailto:support@fixora.com" className="text-primary hover:text-primary/80 transition-colors">support@fixora.com</a>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 text-center"
            >
              <p className="text-sm text-muted-foreground">
                We reserve the right to update this Privacy Policy at any time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}



