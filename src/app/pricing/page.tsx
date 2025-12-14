"use client";

import { motion } from "framer-motion";
import { SITE_NAME } from "@/constants/navigation";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      commission: "15%",
      price: "Free",
      description: "Perfect for new providers getting started",
      features: [
        "Basic dashboard",
        "Up to 50 bookings/month",
        "Email support",
        "Standard payment processing",
      ],
    },
    {
      name: "Professional",
      commission: "12%",
      price: "$29/month",
      description: "For growing businesses",
      features: [
        "Advanced dashboard",
        "Unlimited bookings",
        "Priority support",
        "Advanced analytics",
        "Custom branding",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      commission: "10%",
      price: "Custom",
      description: "For large-scale operations",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "API access",
        "Custom integrations",
        "White-label options",
      ],
    },
  ];

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
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Choose the plan that works best for your business
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 ${
                  plan.popular
                    ? "ring-2 ring-orange-500 dark:ring-orange-500"
                    : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {plan.description}
                  </p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-orange-500">
                      {plan.commission}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 ml-2">
                      commission
                    </span>
                  </div>
                  <div className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {plan.price}
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start text-gray-600 dark:text-gray-400"
                    >
                      <span className="text-orange-500 mr-2 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? "bg-orange-500 text-white hover:bg-orange-600"
                      : "bg-white dark:bg-gray-700 text-orange-500 border-2 border-orange-500 hover:bg-orange-50 dark:hover:bg-gray-600"
                  }`}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
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
              Have Questions?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Contact our sales team to discuss custom pricing options
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl"
            >
              Contact Sales
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

