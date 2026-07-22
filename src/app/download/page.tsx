"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Smartphone, Download, Gauge, ShieldCheck, TrendingUp, Wrench, Zap, Droplets, Paintbrush } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@heroui/react";
import { AppleStoreButton, GooglePlayButton, AppleIcon, PlayStoreIcon } from "@/components/StoreButtons";

export default function DownloadPage() {
  const features = [
    "Manage bookings on the go",
    "Real-time notifications",
    "Offline mode support",
    "Secure payment processing",
    "Customer communication",
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      
      {/* 1. Hero Section */}
      <section className="bg-[#fff6f0] pt-28 pb-32 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <span className="text-[#ff5e14] font-bold tracking-wider text-sm md:text-base uppercase mb-4 block">DOWNLOAD FIXORA</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Manage Your Business <br />
                On The <span className="text-[#ff5e14]">Go</span>
              </h1>
              <p className="text-gray-600 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
                Download the Fixora app on your preferred platform and take your service business to the next level.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <AppleStoreButton className="!px-5 !py-3 !w-44 h-14" />
                <GooglePlayButton className="!px-5 !py-3 !w-44 h-14" />
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="lg:w-1/2 relative w-full flex justify-center lg:justify-end items-center mt-10 lg:mt-0">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative w-full max-w-lg rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[#ff5e14]/20"
              >
                <div className="scale-[1.04] origin-center w-full h-full">
                  <Image
                    src="/images/banner/download-hero-banner.png"
                    alt="Download Fixora App"
                    width={800}
                    height={800}
                    className="w-full h-auto object-contain mix-blend-multiply"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Available On All Platforms */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 max-w-6xl mx-auto">
            
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded bg-[#fff0e6] flex items-center justify-center">
                  <Smartphone className="w-4 h-4 text-[#ff5e14]" />
                </div>
                <span className="text-[#ff5e14] font-bold tracking-wider text-sm uppercase">AVAILABLE ON ALL PLATFORMS</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                Get Fixora On Your <br />
                Preferred Platform
              </h2>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-md">
                Download our app and start managing your provider business from anywhere, anytime.
              </p>
              
              <div className="space-y-4 max-w-sm w-full">
                {/* Download for iOS */}
                <button 
                  disabled
                  className="group relative w-full flex items-center justify-between p-1 bg-gradient-to-r from-secondary to-secondary-light rounded-2xl overflow-hidden cursor-not-allowed opacity-90 transition-all shadow-lg"
                >
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex items-center gap-4 p-3 pl-4 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-white backdrop-blur-sm">
                      <AppleIcon className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col items-start text-white">
                      <span className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">Download on the</span>
                      <span className="text-base font-bold tracking-tight">App Store</span>
                    </div>
                  </div>
                  <div className="pr-4 relative z-10">
                    <span className="bg-white/10 text-white border border-white/20 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md">
                      Coming Soon
                    </span>
                  </div>
                </button>

                {/* Download for Android */}
                <button 
                  className="group relative w-full flex items-center justify-between p-1 bg-gradient-to-r from-primary to-primary-light rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex items-center gap-4 p-3 pl-4 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 text-white backdrop-blur-sm border border-white/10 group-hover:scale-110 transition-transform duration-300">
                      <PlayStoreIcon className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col items-start text-white">
                      <span className="text-[10px] font-medium text-white/80 uppercase tracking-wider">GET IT ON</span>
                      <span className="text-base font-bold tracking-tight">Google Play</span>
                    </div>
                  </div>
                  <div className="pr-5 relative z-10 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-white">
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </div>
                </button>
              </div>
            </div>

            {/* Powerful Mobile Features Card */}
            <div className="lg:w-1/2 w-full">
              <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl shadow-gray-100/50">
                <div className="w-16 h-16 rounded-full bg-[#fff0e6] border border-[#ffddcc] flex items-center justify-center mb-8">
                  <Smartphone className="w-8 h-8 text-[#ff5e14]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Powerful Mobile Features</h3>
                <ul className="space-y-5">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white border border-[#ffddcc] shadow-sm flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-[#ff5e14]" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Why Download Fixora? */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#ff5e14] font-bold tracking-wider text-sm uppercase mb-3 block">WHY DOWNLOAD FIXORA?</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Built For Service Providers Like You
            </h2>
            <div className="w-16 h-1 bg-[#ff5e14] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Experience the power of managing your service provider business from anywhere with our feature-rich mobile application.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Real-Time Management */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-[#fff0e6] flex items-center justify-center flex-shrink-0">
                <Gauge className="w-10 h-10 text-[#ff5e14]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Real-Time Business Management</h3>
                <p className="text-gray-600 leading-relaxed">
                  Stay connected with your business 24/7. Receive instant notifications for new bookings, manage your schedule, and track earnings in real-time from your mobile device.
                </p>
              </div>
            </div>

            {/* Secure & Reliable */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-[#fff0e6] flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-10 h-10 text-[#ff5e14]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Secure & Reliable</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your data is protected with enterprise-grade security. Process payments securely, communicate with customers safely, and access your account with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="py-12 container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-[#111] rounded-3xl overflow-hidden relative">
          <div className="flex flex-col lg:flex-row items-center justify-between p-10 md:p-16 gap-10">
            
            <div className="lg:w-1/2 relative z-10 text-center lg:text-left">
              <span className="text-[#ff5e14] font-bold tracking-wider text-sm uppercase mb-3 block">GET THE APP</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to Grow Your Business?
              </h2>
              <p className="text-gray-400 text-lg mb-0 max-w-md mx-auto lg:mx-0">
                Download the Fixora app now and take control of your service business wherever you are.
              </p>
            </div>

            <div className="lg:w-1/2 relative w-full flex justify-center items-center mt-12 lg:mt-0 h-64 lg:h-80">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-secondary/50 rounded-full blur-3xl opacity-60"></div>
              
              <div className="relative w-full max-w-[280px] aspect-square flex items-center justify-center">
                {/* Center glowing element - Enhanced Mobile Shape */}
                <motion.div 
                  animate={{ y: [0, -12, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="relative z-20 w-24 h-48 bg-gradient-to-br from-gray-800 to-black rounded-[2rem] shadow-[0_0_40px_rgba(255,94,20,0.5)] border-4 border-gray-700 p-1 flex items-center justify-center"
                >
                  {/* Mobile Screen with gradient */}
                  <div className="w-full h-full bg-gradient-to-b from-primary-light via-primary to-primary-dark rounded-[1.6rem] relative overflow-hidden flex flex-col items-center justify-center">
                    
                    {/* Hardware Notch */}
                    <div className="absolute top-0 w-[45%] h-4 bg-black rounded-b-xl flex justify-center items-center shadow-inner">
                      <div className="w-1/3 h-[2px] bg-gray-700 rounded-full"></div>
                    </div>
                    
                    {/* Abstract App UI on screen */}
                    <div className="flex flex-col items-center gap-3 w-full px-3 mt-2">
                      {/* Logo / Main Icon */}
                      <div className="w-10 h-10 bg-white/20 rounded-xl backdrop-blur-md flex items-center justify-center shadow-inner border border-white/30">
                        <ShieldCheck className="w-6 h-6 text-white" />
                      </div>
                      
                      {/* Lines mimicking text */}
                      <div className="w-full space-y-1.5 mt-1">
                        <div className="w-full h-1.5 bg-white/40 rounded-full"></div>
                        <div className="w-5/6 h-1.5 bg-white/30 rounded-full mx-auto"></div>
                        <div className="w-4/6 h-1.5 bg-white/20 rounded-full mx-auto"></div>
                      </div>

                      {/* Mock Action Button */}
                      <div className="w-full h-7 bg-white text-primary-dark mt-2 rounded-lg flex items-center justify-center font-extrabold text-[9px] tracking-wider shadow-sm">
                        FIXORA
                      </div>
                    </div>
                    
                    {/* Bottom Home Indicator */}
                    <div className="absolute bottom-1.5 w-1/3 h-1 bg-white/40 rounded-full"></div>
                  </div>

                  {/* Verified Check Badge */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="absolute -bottom-4 -right-4 bg-white rounded-full p-1.5 shadow-2xl z-30"
                  >
                    <CheckCircle2 className="w-7 h-7 text-green-500 fill-green-50" />
                  </motion.div>
                </motion.div>

                {/* Inner Orbiting Elements */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                  className="absolute inset-4 z-10 border border-white/10 rounded-full border-dashed"
                >
                  {/* Item 1 */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gray-900 rounded-xl border border-white/10 flex items-center justify-center shadow-xl">
                    <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 25, ease: "linear" }}>
                      <TrendingUp className="w-6 h-6 text-primary-light" />
                    </motion.div>
                  </div>
                  {/* Item 2 */}
                  <div className="absolute bottom-[15%] -right-4 w-10 h-10 bg-gray-900 rounded-xl border border-white/10 flex items-center justify-center shadow-xl">
                    <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 25, ease: "linear" }}>
                      <Wrench className="w-5 h-5 text-blue-400" />
                    </motion.div>
                  </div>
                  {/* Item 3 */}
                  <div className="absolute bottom-[15%] -left-4 w-10 h-10 bg-gray-900 rounded-xl border border-white/10 flex items-center justify-center shadow-xl">
                    <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 25, ease: "linear" }}>
                      <Zap className="w-5 h-5 text-yellow-400" />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Outer Orbiting Elements */}
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
                  className="absolute inset-[-15%] z-0 border border-white/5 rounded-full border-dotted opacity-60"
                >
                  <div className="absolute top-1/4 -left-4 w-9 h-9 bg-gray-900 rounded-full border border-white/10 flex items-center justify-center shadow-xl">
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 35, ease: "linear" }}>
                      <Droplets className="w-4 h-4 text-cyan-400" />
                    </motion.div>
                  </div>
                  <div className="absolute bottom-0 right-1/4 w-9 h-9 bg-gray-900 rounded-full border border-white/10 flex items-center justify-center shadow-xl">
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 35, ease: "linear" }}>
                      <Paintbrush className="w-4 h-4 text-pink-400" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
