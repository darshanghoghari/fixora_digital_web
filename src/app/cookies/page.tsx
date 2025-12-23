"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Cookie, Settings, Shield, BarChart3, Target, ToggleLeft, ToggleRight } from "lucide-react";
import { SITE_NAME } from "@/constants/navigation";
import { Button } from "@heroui/react";

export default function Cookies() {
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
    functional: false,
  });

  const cookieTypes = [
    {
      icon: Shield,
      title: "Essential Cookies",
      description: "These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.",
      required: true,
      key: "essential" as keyof typeof cookiePreferences,
    },
    {
      icon: BarChart3,
      title: "Analytics Cookies",
      description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website performance.",
      required: false,
      key: "analytics" as keyof typeof cookiePreferences,
    },
    {
      icon: Target,
      title: "Marketing Cookies",
      description: "These cookies are used to deliver advertisements that are more relevant to you and your interests. They may also be used to limit the number of times you see an advertisement.",
      required: false,
      key: "marketing" as keyof typeof cookiePreferences,
    },
    {
      icon: Settings,
      title: "Functional Cookies",
      description: "These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings to provide a better user experience.",
      required: false,
      key: "functional" as keyof typeof cookiePreferences,
    },
  ];

  const handleToggle = (key: keyof typeof cookiePreferences) => {
    if (key === "essential") return;
    setCookiePreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookiePreferences", JSON.stringify(cookiePreferences));
    alert("Your cookie preferences have been saved!");
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    setCookiePreferences(allAccepted);
    localStorage.setItem("cookiePreferences", JSON.stringify(allAccepted));
    alert("All cookies have been accepted!");
  };

  const handleRejectAll = () => {
    const onlyEssential = {
      essential: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    setCookiePreferences(onlyEssential);
    localStorage.setItem("cookiePreferences", JSON.stringify(onlyEssential));
    alert("Only essential cookies have been accepted!");
  };

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
                <Cookie className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Cookie Settings
            </h1>
            <p className="text-xl text-muted-foreground">
              Manage your cookie preferences and control how we use cookies on our platform.
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
              className="mb-12 bg-card rounded-xl p-8 border border-border"
            >
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                What Are Cookies?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners. We use cookies to enhance your experience, analyze site usage, and assist in our marketing efforts.
              </p>
            </motion.div>

            <div className="space-y-6 mb-8">
              {cookieTypes.map((cookieType, index) => {
                const IconComponent = cookieType.icon;
                const isEnabled = cookiePreferences[cookieType.key];
                return (
                  <motion.div
                    key={cookieType.key}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold text-foreground">
                              {cookieType.title}
                            </h3>
                            {cookieType.required && (
                              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-semibold">
                                Required
                              </span>
                            )}
                          </div>
                          <p className="text-muted-foreground leading-relaxed text-sm">
                            {cookieType.description}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleToggle(cookieType.key)}
                        disabled={cookieType.required}
                        className={`flex-shrink-0 ${
                          cookieType.required ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                        }`}
                        aria-label={`Toggle ${cookieType.title}`}
                      >
                        {isEnabled ? (
                          <ToggleRight className="w-10 h-10 text-primary" />
                        ) : (
                          <ToggleLeft className="w-10 h-10 text-muted-foreground" />
                        )}
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-card rounded-xl p-8 border border-border mb-8"
            >
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Cookie Policy
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We use cookies to improve your browsing experience, analyze site traffic, and personalize content. By clicking "Accept All", you consent to our use of cookies. You can also choose to customize your cookie preferences or reject non-essential cookies.
                </p>
                <p>
                  You can change your cookie preferences at any time by visiting this page. Please note that disabling certain cookies may affect the functionality of our website.
                </p>
                <p>
                  For more information about how we use cookies and your privacy rights, please review our <a href="/privacy" className="text-primary hover:text-primary/80 transition-colors">Privacy Policy</a>.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                onClick={handleAcceptAll}
                size="lg"
                radius="full"
                className="px-8 py-6 text-base font-semibold bg-primary text-white hover:bg-primary/90 transition-all duration-300"
              >
                Accept All
              </Button>
              <Button
                onClick={handleRejectAll}
                size="lg"
                radius="full"
                variant="bordered"
                className="px-8 py-6 text-base font-semibold border-2 border-border hover:border-primary transition-all duration-300"
              >
                Reject All
              </Button>
              <Button
                onClick={handleSavePreferences}
                size="lg"
                radius="full"
                variant="bordered"
                className="px-8 py-6 text-base font-semibold !border-white border-2 text-white bg-transparent hover:!bg-white hover:!text-black transition-all duration-300"
              >
                Save Preferences
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}



