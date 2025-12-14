// "use client";

// import { motion } from "framer-motion";
// import { SITE_NAME } from "@/constants/navigation";

// export default function Pricing() {
//   const plans = [
//     {
//       name: "Starter",
//       commission: "15%",
//       price: "Free",
//       description: "Perfect for new providers getting started",
//       features: [
//         "Basic dashboard",
//         "Up to 50 bookings/month",
//         "Email support",
//         "Standard payment processing",
//       ],
//     },
//     {
//       name: "Professional",
//       commission: "12%",
//       price: "$29/month",
//       description: "For growing businesses",
//       features: [
//         "Advanced dashboard",
//         "Unlimited bookings",
//         "Priority support",
//         "Advanced analytics",
//         "Custom branding",
//       ],
//       popular: true,
//     },
//     {
//       name: "Enterprise",
//       commission: "10%",
//       price: "Custom",
//       description: "For large-scale operations",
//       features: [
//         "Everything in Professional",
//         "Dedicated account manager",
//         "API access",
//         "Custom integrations",
//         "White-label options",
//       ],
//     },
//   ];

//   return (
//     <div className="min-h-screen">
//       <section className="py-24 bg-gradient-to-br from-accent/20 to-background">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
//             className="max-w-3xl mx-auto text-center"
//           >
//             <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
//               Simple, Transparent Pricing
//             </h1>
//             <p className="text-xl text-muted-foreground">
//               Choose the plan that works best for your business
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       <section className="py-24 bg-background">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
//             {plans.map((plan, index) => (
//               <motion.div
//                 key={plan.name}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
//                 whileHover={{ y: -8, transition: { duration: 0.3 } }}
//                 className={`relative bg-card p-8 lg:p-10 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border ${
//                   plan.popular
//                     ? "ring-2 ring-primary border-primary/50"
//                     : "border-border hover:border-primary/30"
//                 }`}
//               >
//                 {plan.popular && (
//                   <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                     <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
//                       Most Popular
//                     </span>
//                   </div>
//                 )}
//                 <div className="text-center mb-10">
//                   <h3 className="text-2xl font-bold mb-3 text-foreground">
//                     {plan.name}
//                   </h3>
//                   <p className="text-muted-foreground mb-6">
//                     {plan.description}
//                   </p>
//                   <div className="mb-6">
//                     <span className="text-4xl font-bold text-primary">
//                       {plan.commission}
//                     </span>
//                     <span className="text-muted-foreground ml-2">
//                       commission
//                     </span>
//                   </div>
//                   <div className="text-2xl font-semibold text-foreground">
//                     {plan.price}
//                   </div>
//                 </div>
//                 <ul className="space-y-4 mb-10">
//                   {plan.features.map((feature) => (
//                     <li
//                       key={feature}
//                       className="flex items-start text-muted-foreground"
//                     >
//                       <span className="text-primary mr-2 mt-1">✓</span>
//                       <span>{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//                 <button
//                   className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 ${
//                     plan.popular
//                       ? "bg-primary text-white hover:bg-white hover:text-primary hover:border-2 hover:border-primary"
//                       : "bg-background text-primary border-2 border-primary hover:bg-primary hover:text-white"
//                   }`}
//                 >
//                   Get Started
//                 </button>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-24 bg-accent/10">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
//             className="max-w-3xl mx-auto text-center"
//           >
//             <h2 className="text-3xl font-bold mb-6 text-foreground">
//               Have Questions?
//             </h2>
//             <p className="text-lg text-muted-foreground mb-10">
//               Contact our sales team to discuss custom pricing options
//             </p>
//             <a
//               href="/contact"
//               className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-white hover:text-primary hover:border-2 hover:border-primary transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
//             >
//               Contact Sales
//             </a>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }

export default function Pricing() {
  return null;
}
