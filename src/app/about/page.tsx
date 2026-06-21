"use client";

import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import {
  ClipboardCheck, Users, MapPin, Star,
  Target, Eye, ShieldCheck, Lock, Zap, Tag,
  Lightbulb, Code, Rocket, BarChart2,
  Linkedin, Mail, ArrowRight, Download
} from "lucide-react";
import Link from "next/link";
import { AppleStoreButton, GooglePlayButton } from "@/components/StoreButtons";
export default function AboutPage() {
  const stats = [
    { icon: ClipboardCheck, title: "50,000+", subtitle: "Bookings Completed" },
    { icon: Users, title: "5,000+", subtitle: "Verified Providers" },
    { icon: MapPin, title: "100+", subtitle: "Cities Served" },
    { icon: Star, title: "4.8★", subtitle: "Customer Rating" },
  ];

  const whyChooseUs = [
    {
      icon: ShieldCheck,
      title: "Verified Professionals",
      desc: "All service providers are background-verified and highly skilled.",
    },
    {
      icon: Lock,
      title: "Secure & Safe",
      desc: "Your safety and security are our top priorities always.",
    },
    {
      icon: Zap,
      title: "Fast & Reliable",
      desc: "Quick booking and on-time service delivery you can count on.",
    },
    {
      icon: Tag,
      title: "Transparent Pricing",
      desc: "No hidden charges. What you see is what you pay.",
    },
  ];

  const journey = [
    {
      year: "2023",
      title: "Idea Born",
      desc: "We identified the gaps in the home services industry and came up with a solution.",
      icon: Lightbulb,
    },
    {
      year: "2024",
      title: "Platform Development",
      desc: "Built a robust platform focused on trust, quality and experience.",
      icon: Code,
    },
    {
      year: "2025",
      title: "Public Launch",
      desc: "Launched Fixora to connect customers and service providers seamlessly.",
      icon: Rocket,
    },
    {
      year: "2026",
      title: "Nationwide Expansion",
      desc: "Expanding across India and adding more services every day.",
      icon: BarChart2,
    },
  ];

  const leadership = [
    {
      name: "Rohit Verma",
      title: "Founder & CEO",
      desc: "Visionary leader with a passion for innovation and building impactful technology solutions.",
    },
    {
      name: "Amit Singh",
      title: "Co-Founder & CTO",
      desc: "Tech enthusiast driving product innovation and platform excellence.",
    },
    {
      name: "Priya Sharma",
      title: "Co-Founder & CCO",
      desc: "Operations expert ensuring seamless service delivery and customer satisfaction.",
    },
    {
      name: "Kunal Patel",
      title: "Head of Growth",
      desc: "Growth strategist focused on scaling Fixora and building strong partnerships.",
    },
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">

      {/* 1. Hero Section */}
      <section className="bg-[#fff6f0] pt-28 pb-32 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <span className="text-[#ff5e14] font-bold tracking-wider text-sm md:text-base uppercase mb-4 block">ABOUT FIXORA</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                India's Trusted <br />
                Home Service <br />
                <span className="text-[#ff5e14]">Marketplace</span>
              </h1>
              <p className="text-gray-600 text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
                We connect customers with verified and skilled service providers, ensuring quality, reliability, and convenience at your doorstep.
              </p>
              {/* <div className="flex flex-wrap items-center gap-4">
                <Button
                  as={Link}
                  href="/services"
                  className="bg-[#ff5e14] text-white px-8 py-6 rounded-full font-bold text-base hover:bg-[#e04f0d] transition-colors shadow-lg shadow-[#ff5e14]/30"
                  endContent={<ArrowRight className="w-5 h-5" />}
                >
                  Book a Service
                </Button>
                <Button
                  as={Link}
                  href="/provider"
                  variant="bordered"
                  className="bg-white text-gray-900 border-2 border-gray-200 px-8 py-6 rounded-full font-bold text-base hover:border-[#ff5e14] hover:text-[#ff5e14] transition-all"
                  endContent={<ArrowRight className="w-5 h-5 text-gray-400" />}
                >
                  Become a Provider
                </Button>
              </div> */}
            </div>

            {/* Image Placeholder */}
            <div className="lg:w-1/2 relative w-full aspect-square md:aspect-video lg:aspect-square flex justify-end">
              <div className="w-full h-full bg-[#ffddcc]/50 rounded-3xl border-4 border-dashed border-[#ff5e14]/30 flex flex-col items-center justify-center text-center p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#ff5e14]/10 to-transparent"></div>
                <div className="z-10 bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-[#ff5e14]/20 shadow-xl">
                  <p className="text-[#ff5e14] font-bold text-xl mb-2">Image Placeholder</p>
                  <p className="text-gray-600 text-sm">Add hero illustration/image here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Section (Floating over background transition) */}
      <section className="relative z-20 -mt-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-xl shadow-gray-100/50 border border-gray-100 flex items-center gap-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 rounded-full bg-[#fff0e6] flex items-center justify-center flex-shrink-0">
                <stat.icon className="w-7 h-7 text-[#ff5e14]" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-gray-900">{stat.title}</h3>
                <p className="text-sm font-medium text-gray-500">{stat.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="py-24 bg-white container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Image Placeholder */}
          <div className="lg:w-1/2 w-full aspect-square md:aspect-[4/3] rounded-3xl bg-gray-50 border-4 border-dashed border-gray-200 flex flex-col items-center justify-center text-center p-8 relative overflow-hidden">
            <div className="z-10 bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 shadow-lg">
              <p className="text-gray-900 font-bold text-xl mb-2">Image Placeholder</p>
              <p className="text-gray-500 text-sm">Add phone mockup/illustration here</p>
            </div>
          </div>

          <div className="lg:w-1/2">
            <span className="text-[#ff5e14] font-bold tracking-wider text-sm uppercase mb-4 block">OUR MISSION & VISION</span>
            <div className="space-y-10 mt-8">

              <div className="flex gap-6">
                <div className="w-16 h-16 rounded-full bg-white border border-[#ffddcc] shadow-sm flex items-center justify-center flex-shrink-0">
                  <Target className="w-8 h-8 text-[#ff5e14]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    To simplify home services by creating a trusted platform where customers can easily find verified professionals and get things done with ease.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-16 h-16 rounded-full bg-white border border-[#ffddcc] shadow-sm flex items-center justify-center flex-shrink-0">
                  <Eye className="w-8 h-8 text-[#ff5e14]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    To become India's most reliable and innovative home service ecosystem, empowering communities and transforming everyday living.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Fixora? */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Why Choose Fixora?</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all text-center">
                <div className="w-16 h-16 rounded-full bg-[#fff0e6] flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-[#ff5e14]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Journey */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">Our Journey</h2>
            <div className="w-16 h-1 bg-[#ff5e14] mx-auto rounded-full mt-4"></div>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Dashed line connecting timeline */}
            <div className="absolute top-[45px] left-[10%] right-[10%] h-0.5 border-t-2 border-dashed border-[#ffddcc] hidden md:block"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
              {journey.map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-[#ff5e14] text-white flex items-center justify-center shadow-xl shadow-[#ff5e14]/20 mb-6 relative">
                    <step.icon className="w-10 h-10" />
                    {/* Small dot on the dashed line for mobile */}
                    <div className="absolute -top-6 w-3 h-3 rounded-full bg-[#ff5e14] md:hidden"></div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    <span className="text-[#ff5e14] mr-1">{step.year.substring(0, 2)}</span>
                    <span className="text-[#ff5e14]">{step.year.substring(2)}</span>
                  </h4>
                  <h5 className="font-bold text-gray-900 mb-3 text-lg">{step.title}</h5>
                  <p className="text-gray-500 text-sm leading-relaxed px-2">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Meet The Leadership */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">Meet The Leadership</h2>
            <div className="w-16 h-1 bg-[#ff5e14] mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm text-center hover:-translate-y-1 transition-transform duration-300">

                {/* Image Placeholder */}
                <div className="w-32 h-32 rounded-full mx-auto bg-gray-100 border-4 border-white shadow-md mb-6 relative overflow-hidden flex items-center justify-center">
                  <UserPlaceholder />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                <p className="text-[#ff5e14] font-medium text-sm mb-4">{leader.title}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {leader.desc}
                </p>

                <div className="flex items-center justify-center gap-3">
                  <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors text-gray-600">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors text-gray-600">
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA Section */}
      <section className="py-12 container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-[#111] rounded-3xl overflow-hidden relative">
          <div className="flex flex-col lg:flex-row items-center justify-between p-10 md:p-16 gap-10">

            <div className="lg:w-1/2 relative z-10 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to experience <br />
                better home services?
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto lg:mx-0">
                Download the Fixora app and book trusted professionals in just a few taps.
              </p>
              <Button
                as={Link}
                href="/download"
                className="bg-[#ff5e14] text-white px-8 py-6 rounded-full font-bold text-base hover:bg-[#e04f0d] transition-colors"
                startContent={<Download className="w-5 h-5" />}
              >
                Download App
              </Button>
            </div>

            <div className="lg:w-1/2 relative w-full flex justify-center lg:justify-end gap-6 h-64 lg:h-80 items-center">
              {/* Phone Mockup Placeholder */}
              <div className="w-48 h-full bg-white/10 rounded-3xl border-4 border-dashed border-white/20 flex items-center justify-center text-center p-4">
                <p className="text-white/50 text-sm font-medium">App Mockup</p>
              </div>

              {/* Stores Placeholder */}
              <div className="flex flex-col gap-4">
                <AppleStoreButton />
                <GooglePlayButton />
                <div className="w-36 h-36 mt-2 bg-white/10 rounded-xl border-4 border-dashed border-white/20 flex items-center justify-center">
                  <span className="text-white/50 text-xs font-bold">QR Code</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

// Simple placeholder SVG for user avatars
const UserPlaceholder = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-gray-300">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6ZM12 20.2C9.5 20.2 7.29 18.92 6 16.98C6.03 14.99 10 13.9 12 13.9C13.99 13.9 17.97 14.99 18 16.98C16.71 18.92 14.5 20.2 12 20.2Z" fill="currentColor" />
  </svg>
);
