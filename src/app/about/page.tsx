"use client";

import { useCallback } from "react";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import {
  ClipboardCheck, Users, MapPin, Star,
  Target, Eye, ShieldCheck, Lock, Zap, Tag,
  Lightbulb, Code, Rocket, BarChart2,
  Linkedin, Mail, ArrowRight, ArrowLeft, Download
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { AppleStoreButton, GooglePlayButton } from "@/components/StoreButtons";
import useEmblaCarousel from "embla-carousel-react";

export default function AboutPage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start", skipSnaps: false });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
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
      year: "2025",
      title: "Idea Born",
      desc: "We identified the gaps in the home services industry and came up with a solution.",
      icon: Lightbulb,
    },
    {
      year: "2025",
      title: "Platform Development",
      desc: "Built a robust platform focused on trust, quality and experience.",
      icon: Code,
    },
    {
      year: "2026",
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
      name: "Vipin Meshram",
      title: "Founder & CEO",
      desc: "The driving force behind Fixora, dedicated to revolutionizing the home services industry through technology and seamless customer experiences.",
      image: "/images/team/vipin-founder.png",
      linkedin: "",
      email: "",
    },
    {
      name: "Arun Gupta",
      title: "Co-Founder & CTO",
      desc: "Technology architect behind Fixora's platform, passionate about building robust, scalable solutions that connect customers with trusted professionals.",
      image: "/images/team/arun-cto.png",
      linkedin: "",
      email: "",
    },
    {
      name: "Darshan Ghoghari",
      title: "Lead Developer",
      desc: "The technical expert responsible for developing, managing, and maintaining the Fixora application to ensure a flawless user experience.",
      image: "/images/team/darshan-lead.png",
      linkedin: "http://www.linkedin.com/in/darshan-ghoghari-2840322a6",
      email: "darshanghoghari5657@gmail.com",
    }
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">

      {/* 1. Hero Section */}
      <section className="bg-[#fff6f0] pt-28 pb-32 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-between gap-12 lg:gap-20">

            {/* Text Side (Right on Desktop) */}
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
            </div>

            {/* Banner Image Side (Left on Desktop) */}
            <div className="lg:w-1/2 relative w-full flex justify-center lg:justify-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative w-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[#ff5e14]/10"
              >
                <div className="scale-[1.04] origin-center w-full h-full">
                  <Image
                    src="/images/banner/about-banner-image.png"
                    alt="About Fixora Marketplace"
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

          {/* Mission & Vision Image */}
          <div className="lg:w-1/2 relative w-full flex justify-center lg:justify-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full rounded-[2.5rem] overflow-hidden shadow-xl shadow-gray-200"
            >
              <div className="scale-[1.04] origin-center w-full h-full">
                <Image
                  src="/images/banner/about-banner-2.png"
                  alt="Our Mission and Vision"
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain mix-blend-multiply"
                />
              </div>
            </motion.div>
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
                    <span className="text-[#ff5e14]">{step.year}</span>
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

          <div className="overflow-hidden cursor-grab active:cursor-grabbing pb-8" ref={emblaRef}>
            <div className="flex -ml-4">
              {leadership.map((leader, i) => (
                <div key={i} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4">
                  <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm text-center h-full hover:-translate-y-1 transition-transform duration-300">
                    {/* Image or Placeholder */}
                    <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full mx-auto bg-gray-100 border-4 border-white shadow-md mb-6 relative overflow-hidden flex items-center justify-center">
                      {leader.image ? (
                        <Image src={leader.image} alt={leader.name} width={400} height={400} className="w-full h-full object-cover" />
                      ) : (
                        <UserPlaceholder />
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                    <p className="text-[#ff5e14] font-medium text-sm mb-4">{leader.title}</p>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                      {leader.desc}
                    </p>

                    {(leader.linkedin || leader.email) && (
                      <div className="flex items-center justify-center gap-3">
                        {leader.linkedin && (
                          <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#0a66c2] hover:text-white hover:border-[#0a66c2] transition-colors text-gray-600">
                            <Linkedin className="w-4 h-4" />
                          </a>
                        )}
                        {leader.email && (
                          <a href={leader.email.startsWith('mailto:') ? leader.email : `mailto:${leader.email}`} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#ea4335] hover:text-white hover:border-[#ea4335] transition-colors text-gray-600">
                            <Mail className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#ff5e14] hover:text-white hover:border-[#ff5e14] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#ff5e14] hover:text-white hover:border-[#ff5e14] transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. CTA Section */}
      <section className="py-12 container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full flex justify-center"
        >
          <Image
            src="/images/banner/about-banner-3.png"
            alt="Ready to experience better home services?"
            width={1920}
            height={600}
            className="w-full h-auto rounded-3xl shadow-2xl object-cover"
            priority
          />
        </motion.div>
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
