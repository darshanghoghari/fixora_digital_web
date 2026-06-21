"use client";

import { motion } from "framer-motion";
import { 
  UserPlus, Briefcase, CalendarCheck, TrendingUp,
  ClipboardList, Calendar, LineChart, MessageSquare, UserCog,
  CheckCircle2, PlusCircle, User, BarChart2
} from "lucide-react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { AppleStoreButton, GooglePlayButton } from "@/components/StoreButtons";

export default function HowItWorksPage() {
  const steps = [
    {
      num: "01",
      title: "Register & Choose Your Role",
      desc: "Sign up and select your role as a Service Provider. Complete your profile and business details.",
      icon: UserPlus,
      mockupTitle: "Setup your profile",
      mockupDesc: "and business information",
      mockupIcon: User,
      mockupIconBg: "bg-gray-100",
      mockupIconColor: "text-gray-400",
      mockupBadge: <CheckCircle2 className="w-5 h-5 text-[#ff5e14] fill-white" />
    },
    {
      num: "02",
      title: "Manage Your Services",
      desc: "Add your services, set pricing, availability, and service areas to attract more customers.",
      icon: Briefcase,
      mockupTitle: "Add your services",
      mockupDesc: "and set your pricing",
      mockupIcon: ClipboardList,
      mockupIconBg: "bg-gray-100",
      mockupIconColor: "text-gray-600",
      mockupBadge: <PlusCircle className="w-5 h-5 text-[#ff5e14] fill-white" />
    },
    {
      num: "03",
      title: "Receive & Manage Bookings",
      desc: "Customers can discover and book your services. Manage bookings, update status, and communicate with customers.",
      icon: CalendarCheck,
      mockupTitle: "Get booking",
      mockupDesc: "requests and manage easily",
      mockupIcon: Calendar,
      mockupIconBg: "bg-[#111]",
      mockupIconColor: "text-white",
      mockupBadge: <PlusCircle className="w-5 h-5 text-[#ff5e14] fill-white" />
    },
    {
      num: "04",
      title: "Grow Your Business",
      desc: "Track earnings, analyze performance, get reviews, and grow your business with FIXORA.",
      icon: TrendingUp,
      mockupTitle: "Track performance",
      mockupDesc: "and grow your business",
      mockupIcon: BarChart2,
      mockupIconBg: "bg-[#ff5e14]",
      mockupIconColor: "text-white",
      mockupBadge: null
    }
  ];

  const appFeatures = [
    {
      icon: ClipboardList,
      title: "Service Management",
      desc: "Add, edit, and manage your services with ease"
    },
    {
      icon: Calendar,
      title: "Booking Management",
      desc: "View, accept, and manage all incoming bookings"
    },
    {
      icon: LineChart,
      title: "Earnings & Reports",
      desc: "Track your earnings and business performance"
    },
    {
      icon: MessageSquare,
      title: "Customer Communication",
      desc: "Chat with customers and provide better support"
    },
    {
      icon: UserCog,
      title: "Profile & Settings",
      desc: "Update your profile and manage preferences"
    }
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      
      {/* 1. Hero Section */}
      <section className="bg-[#fff6f0] pt-28 pb-32 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            <div className="lg:w-1/2">
              <span className="text-[#ff5e14] font-bold tracking-wider text-sm md:text-base uppercase mb-4 block">HOW IT WORKS</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Manage Your Service <br className="hidden md:block" />
                Business in <span className="text-[#ff5e14]">4 Simple <br className="hidden md:block" /> Steps</span>
              </h1>
              <p className="text-gray-600 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
                Join FIXORA and grow your service business. From registration to managing services and bookings — everything is in one place.
              </p>
            </div>
            
            {/* Image Placeholder */}
            <div className="lg:w-1/2 relative w-full aspect-square md:aspect-video lg:aspect-square flex justify-center lg:justify-end items-center lg:pr-8 xl:pr-12">
              
              {/* Background Blob */}
              <div className="absolute right-0 w-[80%] h-[80%] bg-[#ffddcc]/50 rounded-full blur-3xl z-0"></div>

              <div className="relative z-10 w-full max-w-md h-[400px] md:h-[500px] bg-white/50 backdrop-blur-sm rounded-3xl border-4 border-dashed border-[#ff5e14]/30 flex flex-col items-center justify-center text-center p-8 overflow-hidden shadow-xl">
                <p className="text-[#ff5e14] font-bold text-xl mb-2">Image Placeholder</p>
                <p className="text-gray-600 text-sm">Add your phone & role card image here</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 2. Steps Timeline Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="relative">
            {/* Vertical Dashed Line */}
            <div className="absolute left-[40px] md:left-[52px] top-[40px] bottom-[40px] w-0.5 border-l-2 border-dashed border-[#ffddcc] z-0 hidden sm:block"></div>

            <div className="space-y-16 lg:space-y-24 relative z-10">
              {steps.map((step, i) => (
                <div key={i} className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">
                  
                  {/* Left: Icon & Dashed Line Connection */}
                  <div className="flex-shrink-0 flex items-center justify-center w-24 h-24 md:w-28 md:h-28 rounded-full bg-white relative">
                    {/* Circle Background */}
                    <div className="absolute inset-0 rounded-full border border-gray-100 shadow-sm bg-white z-10"></div>
                    <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#fff0e6] flex items-center justify-center z-20 mx-auto mt-[16px]">
                      <step.icon className="w-8 h-8 md:w-10 md:h-10 text-[#ff5e14]" />
                    </div>
                  </div>

                  {/* Middle: Content */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-4 mb-3">
                      <span className="text-2xl md:text-3xl font-extrabold text-[#ff5e14]">{step.num}</span>
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-lg max-w-md mx-auto md:mx-0">
                      {step.desc}
                    </p>
                  </div>

                  {/* Right: Small Mockup Card */}
                  <div className="flex-shrink-0 w-full sm:w-80 bg-white rounded-3xl p-6 border border-gray-100 shadow-lg shadow-gray-100/50 flex items-center gap-5 hover:-translate-y-1 transition-transform duration-300">
                    <div className="relative">
                      <div className={`w-16 h-14 rounded-xl flex items-center justify-center ${step.mockupIconBg}`}>
                        <step.mockupIcon className={`w-8 h-8 ${step.mockupIconColor}`} />
                        {/* Placeholder inner elements to look like a UI component */}
                        {i === 0 && <div className="absolute bottom-2 w-8 h-1 bg-gray-300 rounded-full"></div>}
                        {i === 1 && (
                           <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                              <div className="w-6 h-1 bg-gray-400 rounded-full"></div>
                              <div className="w-4 h-1 bg-gray-300 rounded-full"></div>
                              <div className="w-6 h-1 bg-gray-400 rounded-full"></div>
                           </div>
                        )}
                        {i === 2 && (
                           <div className="absolute inset-0 flex flex-col items-center justify-center pt-2">
                             <div className="flex gap-1 mb-1">
                               <div className="w-2 h-2 bg-white rounded-sm"></div>
                               <div className="w-2 h-2 bg-white rounded-sm"></div>
                               <div className="w-2 h-2 bg-white rounded-sm"></div>
                             </div>
                             <div className="flex gap-1">
                               <div className="w-2 h-2 bg-white rounded-sm"></div>
                               <div className="w-2 h-2 bg-[#ff5e14] rounded-sm"></div>
                               <div className="w-2 h-2 bg-white rounded-sm"></div>
                             </div>
                           </div>
                        )}
                      </div>
                      {step.mockupBadge && (
                        <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-0.5">
                          {step.mockupBadge}
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 leading-tight">{step.mockupTitle}</p>
                      <p className="text-gray-500 text-sm leading-tight mt-1">{step.mockupDesc}</p>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Everything You Need Inside the App */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="bg-white rounded-[2.5rem] border border-gray-200 shadow-xl shadow-gray-100/50 p-10 md:p-14">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center mb-12">
              Everything You Need Inside the App
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
              {appFeatures.map((feat, i) => (
                <div key={i} className="flex flex-col items-center text-center px-4 pt-6 sm:pt-0 group cursor-pointer hover:-translate-y-1 transition-transform">
                  <div className="w-16 h-16 rounded-2xl bg-[#fff0e6] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <feat.icon className="w-8 h-8 text-[#ff5e14]" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3 text-sm md:text-base leading-tight">
                    {feat.title}
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA Section (Orange Background) */}
      <section className="py-12 container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-r from-[#ff5e14] to-[#f04f05] rounded-3xl overflow-hidden relative shadow-2xl shadow-[#ff5e14]/20">
          {/* Subtle background pattern/texture placeholder */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[length:20px_20px]"></div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between p-10 md:p-16 gap-10 relative z-10">
            
            <div className="lg:w-3/5 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to Grow Your Service Business?
              </h2>
              <p className="text-white/90 text-lg mb-0 max-w-lg mx-auto lg:mx-0">
                Join thousands of service providers who are already growing with FIXORA.
              </p>
            </div>

            <div className="lg:w-2/5 flex justify-center lg:justify-end gap-4 flex-wrap sm:flex-nowrap">
              <AppleStoreButton className="!px-6 !py-3 !w-44 h-14" />
              <GooglePlayButton className="!px-6 !py-3 !w-44 h-14" />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
