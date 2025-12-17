"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BarChart3, Rocket, Lock } from "lucide-react";
import { Button } from "@heroui/react";
import contentData from "@/data/content.json";
import HeroSlider from "@/components/HeroSlider";

const features = contentData.home.features;

const heroImages = [
  "/fixora_app_icon.png",
  "/fixora_app_icon.png",
  "/fixora_app_icon.png",
];

export default function Home() {
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden py-8 sm:py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 text-center lg:text-left"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-900 leading-tight"
              >
                {contentData.home.hero.title}{" "}
                <span className="text-primary">{contentData.home.hero.titleHighlight}</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 lg:mb-10"
              >
                {contentData.home.hero.description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              >
                <Button
                  as={Link}
                  href={contentData.home.hero.cta.primary.href}
                  color="primary"
                  size="lg"
                  radius="full"
                  className="px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-semibold w-full sm:w-auto"
                >
                  {contentData.home.hero.cta.primary.text}
                </Button>
                <Button
                  as={Link}
                  href={contentData.home.hero.cta.secondary.href}
                  variant="bordered"
                  size="lg"
                  radius="full"
                  className="px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-semibold border-primary text-primary bg-transparent hover:bg-primary hover:text-white w-full sm:w-auto"
                >
                  {contentData.home.hero.cta.secondary.text}
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2 w-full"
            >
              <HeroSlider images={heroImages} autoPlayInterval={5000} />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage and grow your provider business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const IconComponent = 
                feature.icon === "BarChart3" ? BarChart3 :
                feature.icon === "Rocket" ? Rocket :
                feature.icon === "Lock" ? Lock : BarChart3;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="bg-white p-8 rounded-lg border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="mb-6">
                    <IconComponent className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
            >
              {contentData.home.cta.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 mb-10"
            >
              {contentData.home.cta.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                as={Link}
                href={contentData.home.cta.button.href}
                color="primary"
                size="lg"
                radius="full"
                className="px-8 py-6 text-base font-semibold"
              >
                {contentData.home.cta.button.text}
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
