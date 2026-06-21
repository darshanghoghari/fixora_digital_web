"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Smartphone, Download, Gauge, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { AppleStoreButton, GooglePlayButton } from "@/components/StoreButtons";

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
            
            {/* Image Placeholder */}
            <div className="lg:w-1/2 relative w-full aspect-square md:aspect-video lg:aspect-[4/3] flex justify-end">
              <div className="w-full h-full bg-[#ffddcc]/50 rounded-3xl border-4 border-dashed border-[#ff5e14]/30 flex flex-col items-center justify-center text-center p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#ff5e14]/10 to-transparent"></div>
                <div className="z-10 bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-[#ff5e14]/20 shadow-xl">
                  <p className="text-[#ff5e14] font-bold text-xl mb-2">Image Placeholder</p>
                  <p className="text-gray-600 text-sm">Add double phone mockup here</p>
                </div>
              </div>
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
              
              <div className="space-y-4 max-w-sm">
                {/* Download for iOS */}
                <div className="w-full bg-[#ff5e14] text-white rounded-xl p-4 flex items-center justify-between font-bold cursor-not-allowed opacity-90">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 border-2 border-white/30 rounded-full flex items-center justify-center text-xs">
                      iOS
                    </div>
                    <span>Download for iOS</span>
                  </div>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold">
                    Coming Soon
                  </span>
                </div>

                {/* Download for Android */}
                <div className="w-full bg-white border-2 border-gray-200 text-gray-900 rounded-xl p-4 flex items-center gap-3 font-bold hover:border-[#ff5e14] hover:text-[#ff5e14] transition-colors cursor-pointer">
                  <div className="w-6 h-6 border-2 border-current rounded-full flex items-center justify-center text-xs">
                    GP
                  </div>
                  <span>Download for Android</span>
                </div>
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

            <div className="lg:w-1/2 relative w-full flex justify-center lg:justify-end gap-6 h-auto lg:h-32 items-center flex-wrap lg:flex-nowrap">
              {/* Stores Placeholder */}
              <div className="flex flex-col gap-4">
                <AppleStoreButton />
                <GooglePlayButton />
              </div>

              {/* Decorative dotted separator hidden on small screens */}
              <div className="hidden lg:block w-px h-full border-l border-dashed border-white/20 mx-2"></div>

              {/* QR Code Placeholder */}
              <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center flex-shrink-0 p-2">
                <div className="w-full h-full bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center rounded-lg">
                  <span className="text-gray-400 text-xs font-bold">QR Code</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
