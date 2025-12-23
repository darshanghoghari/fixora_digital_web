"use client";

import { motion } from "framer-motion";
import { FileText, Scale, AlertCircle, Shield, Users, Ban } from "lucide-react";
import { SITE_NAME } from "@/constants/navigation";

export default function Terms() {
  const sections = [
    {
      icon: FileText,
      title: "Acceptance of Terms",
      content: [
        "By accessing and using {SITE_NAME}, you accept and agree to be bound by the terms and provision of this agreement.",
        "If you do not agree to abide by the above, please do not use this service.",
        "We reserve the right to modify these terms at any time, and your continued use of the service constitutes acceptance of any changes.",
      ],
    },
    {
      icon: Users,
      title: "User Accounts and Registration",
      content: [
        "You must provide accurate, current, and complete information during the registration process.",
        "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
        "You agree to notify us immediately of any unauthorized use of your account or any other breach of security.",
        "We reserve the right to suspend or terminate accounts that violate these terms or engage in fraudulent activity.",
      ],
    },
    {
      icon: Scale,
      title: "Service Usage and Restrictions",
      content: [
        "You may use our platform solely for lawful purposes and in accordance with these Terms of Service.",
        "You agree not to use the service to transmit any harmful code, spam, or unsolicited communications.",
        "You shall not attempt to gain unauthorized access to any portion of the platform or any other accounts.",
        "You agree not to interfere with or disrupt the service or servers connected to the service.",
        "Commercial use of the platform is permitted only for registered service providers in accordance with our provider agreement.",
      ],
    },
    {
      icon: Shield,
      title: "Payment Terms",
      content: [
        "Service providers are responsible for all fees associated with their use of the platform as outlined in their service agreement.",
        "Payments must be made in accordance with the payment terms specified at the time of service booking.",
        "We reserve the right to change our pricing structure with reasonable notice to users.",
        "Refunds are subject to our refund policy and may vary based on the type of service and circumstances.",
        "All transactions are processed securely, and we are not responsible for issues arising from third-party payment processors.",
      ],
    },
    {
      icon: AlertCircle,
      title: "Intellectual Property",
      content: [
        "All content, features, and functionality of the platform are owned by {SITE_NAME} and are protected by international copyright, trademark, and other intellectual property laws.",
        "You may not reproduce, distribute, modify, or create derivative works of any content without our express written permission.",
        "Service providers retain ownership of their business information, logos, and content they upload to the platform.",
        "By uploading content, you grant us a license to use, display, and distribute that content as necessary to provide our services.",
      ],
    },
    {
      icon: Ban,
      title: "Termination",
      content: [
        "We may terminate or suspend your account immediately, without prior notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties.",
        "Upon termination, your right to use the service will immediately cease.",
        "We may delete your account and all associated data, subject to our data retention policies.",
        "You may terminate your account at any time by contacting our support team or through your account settings.",
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
                <Scale className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground">
              Please read these terms carefully before using our platform.
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
                These Terms of Service ("Terms") govern your access to and use of the {SITE_NAME} platform, including our website, mobile applications, and related services. By using our services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
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
                          <span>{item.replace("{SITE_NAME}", SITE_NAME)}</span>
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
                Limitation of Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {SITE_NAME} shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service. Our total liability for any claims arising from your use of the service shall not exceed the amount you paid us in the twelve months preceding the claim.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 bg-card rounded-xl p-8 border border-border"
            >
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Contact Us
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <p className="text-muted-foreground">
                Email: <a href="mailto:support@fixora.com" className="text-primary hover:text-primary/80 transition-colors">support@fixora.com</a>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 text-center"
            >
              <p className="text-sm text-muted-foreground">
                We reserve the right to update these Terms of Service at any time. We will notify you of any material changes by posting the new Terms on this page and updating the "Last Updated" date.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}



