"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Users, CheckCircle2, MapPin, Star, Wrench, Zap, Wind, Droplets, Paintbrush, Hammer, MonitorSmartphone, Leaf,
  ShieldCheck, Clock, Navigation, Headphones, IndianRupee, ChevronLeft, ChevronRight, Download, Shield, Lock,
  Search, CalendarDays, Award, User, Briefcase, ClipboardList, Bell, TrendingUp, UserPlus
} from "lucide-react";
import { Button } from "@heroui/react";
import contentData from "@/data/content.json";
import { AppleStoreButton, GooglePlayButton } from "@/components/StoreButtons";

const features = contentData.home.features;

const heroSlides = [
  {
    image: "/fixora_app_icon.png",
    title: "Manage Your Business",
    subtitle: "Easy Management",
    description:
      "Streamline your operations with intuitive tools and dashboards.",
  },
  {
    image: "/fixora_app_icon.png",
    title: "Expand Your Network",
    subtitle: "Grow Your Reach",
    description:
      "Connect with more customers and expand your business network.",
  },
  {
    image: "/fixora_app_icon.png",
    title: "Secure & Protected",
    subtitle: "Enterprise Security",
    description:
      "Your data and transactions are protected with enterprise-grade security.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-70"
          >
            <source src="/video/hero-banner.mp4" type="video/mp4" />
          </video>
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />

          {/* Shape layer to hide the Gemini logo in bottom right */}
          <div className="absolute bottom-0 right-0 w-48 h-24 bg-background z-10" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}></div>

          {/* Top Left Black Shape */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-black/70 blur-[100px] rounded-full z-0 -translate-x-1/4 -translate-y-1/4 pointer-events-none"></div>

          {/* Bottom Right Black Shape */}
          <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-black/70 blur-[100px] rounded-full z-0 translate-x-[20%] translate-y-[20%] pointer-events-none"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-between pt-20 md:pt-0">

          {/* Left Side Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-3xl"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold mb-6 text-white leading-[1.1] drop-shadow-2xl whitespace-pre-line"
            >
              {contentData.home.hero.title}{" "}
              <span className="text-[#ff5e14]">
                {contentData.home.hero.titleHighlight}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-base sm:text-lg md:text-xl text-gray-200 mb-10 max-w-xl font-medium drop-shadow-lg leading-relaxed"
            >
              {contentData.home.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {/* Primary Button */}
              <Button
                as={Link}
                href={contentData.home.hero.cta.primary.href}
                variant="bordered"
                size="lg"
                radius="full"
                className="px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-semibold !border-[hsl(var(--color-primary))] border-2 text-[hsl(var(--color-primary))] bg-transparent hover:!bg-[hsl(var(--color-primary))] hover:!text-white transition-all duration-300 w-full sm:w-auto"
              >
                {contentData.home.hero.cta.primary.text}
              </Button>

              {/* Secondary Button */}
              <Button
                as={Link}
                href={contentData.home.hero.cta.secondary.href}
                variant="bordered"
                size="lg"
                radius="full"
                className="px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-semibold !border-[hsl(var(--color-secondary))] border-2 text-[hsl(var(--color-secondary))] bg-transparent hover:!bg-[hsl(var(--color-secondary))] hover:!text-white transition-all duration-300 w-full sm:w-auto"
              >
                {contentData.home.hero.cta.secondary.text}
              </Button>
            </motion.div>
          </motion.div>

        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center cursor-pointer hover:bg-black/60 transition-colors group">
            <svg className="w-5 h-5 text-white group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-16 z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8 flex flex-wrap lg:flex-nowrap justify-between items-center gap-8">
          <div className="flex items-center gap-4 w-full md:w-auto justify-center md:justify-start">
            <div className="w-16 h-16 rounded-full bg-[#fff0e6] flex items-center justify-center text-[#ff5e14]">
              <Users className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-gray-900">50,000+</h3>
              <p className="text-gray-500 font-medium text-sm">Bookings Completed</p>
            </div>
          </div>
          <div className="hidden lg:block w-px h-16 bg-gray-100"></div>
          <div className="flex items-center gap-4 w-full md:w-auto justify-center md:justify-start">
            <div className="w-16 h-16 rounded-full bg-[#fff0e6] flex items-center justify-center text-[#ff5e14]">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-gray-900">5,000+</h3>
              <p className="text-gray-500 font-medium text-sm">Verified Providers</p>
            </div>
          </div>
          <div className="hidden lg:block w-px h-16 bg-gray-100"></div>
          <div className="flex items-center gap-4 w-full md:w-auto justify-center md:justify-start">
            <div className="w-16 h-16 rounded-full bg-[#fff0e6] flex items-center justify-center text-[#ff5e14]">
              <MapPin className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-gray-900">100+</h3>
              <p className="text-gray-500 font-medium text-sm">Cities Served</p>
            </div>
          </div>
          <div className="hidden lg:block w-px h-16 bg-gray-100"></div>
          <div className="flex items-center gap-4 w-full md:w-auto justify-center md:justify-start">
            <div className="w-16 h-16 rounded-full bg-[#fff0e6] flex items-center justify-center text-[#ff5e14]">
              <Star className="w-8 h-8 fill-current" />
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-gray-900">4.8</h3>
              <p className="text-gray-500 font-medium text-sm">Customer Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">Our <span className="text-[#ff5e14]">Services</span></h2>
          <p className="text-gray-500 mb-12">Professional solutions for every home and business need</p>
          
          <div className="flex flex-wrap justify-center gap-6 relative">
            {[
              { icon: Droplets, name: "Plumbing" },
              { icon: Zap, name: "Electrical" },
              { icon: Wind, name: "AC Repair" },
              { icon: Paintbrush, name: "Cleaning" },
              { icon: Paintbrush, name: "Painting" },
              { icon: Hammer, name: "Carpentry" },
              { icon: MonitorSmartphone, name: "Appliance Repair" },
              { icon: Leaf, name: "Gardening" }
            ].map((srv, i) => (
              <div key={i} className="flex flex-col items-center gap-4 group cursor-pointer w-28 sm:w-36">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-white border border-gray-100 shadow-sm flex items-center justify-center group-hover:border-[#ff5e14] group-hover:shadow-md transition-all">
                  <srv.icon className="w-10 h-10 text-[#ff5e14]" />
                </div>
                <span className="font-bold text-gray-900 text-sm">{srv.name}</span>
              </div>
            ))}
            
            <button className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-600 hover:text-[#ff5e14] transition-colors hidden lg:flex">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* How Fixora Works */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">How <span className="text-[#ff5e14]">Fixora</span> Works</h2>
          <p className="text-gray-500 mb-20">Simple steps to get your work done or grow your business</p>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 max-w-7xl mx-auto">
            
            {/* For Customers */}
            <div className="bg-white rounded-[2rem] p-6 sm:p-10 border border-[#ffddcc] shadow-[0_8px_30px_rgb(255,94,20,0.06)] relative flex flex-col justify-start">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-6 py-3 bg-[#ff5e14] text-white font-bold text-sm sm:text-base uppercase tracking-wider rounded-xl shadow-lg shadow-[#ff5e14]/20 z-20">
                <Users className="w-5 h-5 fill-current" />
                FOR CUSTOMERS
              </div>
              
              <div className="relative mt-12 mb-4">
                {/* Connecting Line (Horizontal) */}
                <div className="absolute top-[28px] left-[12%] right-[12%] h-[2px] bg-transparent border-t-[2px] border-dashed border-[#ffddcc] z-0 hidden sm:block"></div>
                
                <div className="flex flex-col sm:flex-row justify-between gap-8 sm:gap-2 relative z-10">
                  {[
                    { num: "01", icon: Search, title: "Search", desc: "Find the service you need" },
                    { num: "02", icon: ShieldCheck, title: "Choose", desc: "Select a verified professional" },
                    { num: "03", icon: CalendarDays, title: "Book", desc: "Pick a time that suits you" },
                    { num: "04", icon: Award, title: "Get It Done", desc: "Relax and enjoy quality service" }
                  ].map((step, i) => (
                    <div key={i} className="flex flex-col items-center flex-1 text-center group relative">
                      {/* Vertical line for mobile connecting steps */}
                      {i !== 3 && <div className="absolute top-[56px] bottom-[-48px] left-1/2 w-[2px] -translate-x-1/2 border-l-[2px] border-dashed border-[#ffddcc] -z-10 sm:hidden"></div>}
                      
                      <div className="w-14 h-14 rounded-full bg-white border-[6px] border-[#fff0e6] text-[#ff5e14] flex items-center justify-center font-extrabold text-base relative z-10 group-hover:scale-110 transition-transform duration-300">
                        {step.num}
                      </div>

                      {/* Unique Vertical Connector */}
                      <div className="w-[2px] h-6 sm:h-8 border-l-[2px] border-dashed border-[#ffddcc] my-1 opacity-40 group-hover:opacity-100 group-hover:border-[#ff5e14] transition-all duration-300"></div>
                      
                      <div className="w-[72px] h-[72px] rounded-full bg-[#fff0e6] text-[#ff5e14] flex items-center justify-center mb-5 group-hover:bg-[#ff5e14] group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:-translate-y-1 relative z-10">
                        <step.icon className="w-8 h-8" />
                      </div>
                      
                      <h4 className="font-bold text-gray-900 text-base md:text-lg group-hover:text-[#ff5e14] transition-colors">{step.title}</h4>
                      <div className="w-6 h-[2px] bg-[#ff5e14] mx-auto mt-2 mb-3"></div>
                      <p className="text-gray-500 text-sm max-w-[140px] leading-relaxed">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* For Providers */}
            <div className="bg-white rounded-[2rem] p-6 sm:p-10 border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.05)] relative mt-16 xl:mt-0 flex flex-col justify-start">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-6 py-3 bg-[#111] text-white font-bold text-sm sm:text-base uppercase tracking-wider rounded-xl shadow-lg shadow-black/10 z-20">
                <Briefcase className="w-5 h-5 fill-current" />
                FOR PROVIDERS
              </div>
              
              <div className="relative mt-12 mb-4">
                {/* Connecting Line (Horizontal) */}
                <div className="absolute top-[28px] left-[12%] right-[12%] h-[2px] bg-transparent border-t-[2px] border-dashed border-gray-200 z-0 hidden sm:block"></div>
                
                <div className="flex flex-col sm:flex-row justify-between gap-8 sm:gap-2 relative z-10">
                  {[
                    { num: "01", icon: UserPlus, title: "Register", desc: "Sign up and create your profile" },
                    { num: "02", icon: ClipboardList, title: "Add Services", desc: "List your services and pricing" },
                    { num: "03", icon: Bell, title: "Receive Bookings", desc: "Get booking requests from customers" },
                    { num: "04", icon: TrendingUp, title: "Earn & Grow", desc: "Track earnings and grow your business" }
                  ].map((step, i) => (
                    <div key={i} className="flex flex-col items-center flex-1 text-center group relative">
                      {/* Vertical line for mobile connecting steps */}
                      {i !== 3 && <div className="absolute top-[56px] bottom-[-48px] left-1/2 w-[2px] -translate-x-1/2 border-l-[2px] border-dashed border-gray-200 -z-10 sm:hidden"></div>}

                      <div className="w-14 h-14 rounded-full bg-white border-[6px] border-gray-100 text-gray-900 flex items-center justify-center font-extrabold text-base relative z-10 group-hover:scale-110 transition-transform duration-300">
                        {step.num}
                      </div>

                      {/* Unique Vertical Connector */}
                      <div className="w-[2px] h-6 sm:h-8 border-l-[2px] border-dashed border-gray-200 my-1 opacity-40 group-hover:opacity-100 group-hover:border-[#111] transition-all duration-300"></div>
                      
                      <div className="w-[72px] h-[72px] rounded-full bg-gray-100 text-gray-800 flex items-center justify-center mb-5 group-hover:bg-[#111] group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:-translate-y-1 relative z-10">
                        <step.icon className="w-8 h-8" />
                      </div>
                      
                      <h4 className="font-bold text-gray-900 text-base md:text-lg group-hover:text-[#111] transition-colors">{step.title}</h4>
                      <div className="w-6 h-[2px] bg-[#111] mx-auto mt-2 mb-3"></div>
                      <p className="text-gray-500 text-sm max-w-[140px] leading-relaxed">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us? */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-16">Why Choose <span className="text-[#ff5e14]">Us</span>?</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
            {[
              { icon: Shield, title: "Verified Professionals", desc: "Background checked and trusted experts" },
              { icon: Lock, title: "Secure Payments", desc: "Safe and secure payment system" },
              { icon: Zap, title: "Instant Bookings", desc: "Book services in just a few taps" },
              { icon: MapPin, title: "Real-Time Tracking", desc: "Track your bookings in real-time" },
              { icon: Headphones, title: "24/7 Support", desc: "We're here to help you anytime" },
              { icon: IndianRupee, title: "Transparent Pricing", desc: "No hidden charges. 100% transparency" }
            ].map((feat, i) => (
              <div key={i} className="flex flex-col items-center p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-full bg-[#fff0e6] flex items-center justify-center mb-4">
                  <feat.icon className="w-8 h-8 text-[#ff5e14]" />
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-2">{feat.title}</h4>
                <p className="text-gray-500 text-xs">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Width Banner */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full flex justify-center relative"
          >
            <Image
              src="/images/banner/hero-banner-1.png"
              alt="Fixora Full Banner"
              width={1920}
              height={1080}
              className="w-full h-auto rounded-3xl shadow-2xl object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-16">
            What People Say About <span className="text-[#ff5e14]">Fixora</span>
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-8 max-w-7xl mx-auto">
            <button className="hidden md:flex w-12 h-12 bg-white rounded-full shadow-md border border-gray-100 items-center justify-center text-gray-600 hover:text-[#ff5e14] transition-colors flex-shrink-0">
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {[
                { name: "Ravi Mehta", role: "Homeowner", quote: "Fixora made it so easy to find trusted professionals. The service was quick and hassle-free!" },
                { name: "Ankit Sharma", role: "Service Provider", quote: "As a service provider, Fixora helps me get more customers and grow my business every day." },
                { name: "Priya Patel", role: "Homeowner", quote: "Great platform with excellent support and smooth booking experience." }
              ].map((t, i) => (
                <div key={i} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm text-left relative flex flex-col justify-between">
                  <div>
                    <span className="text-[#ff5e14] text-5xl font-serif leading-none absolute top-6 left-6 opacity-30">"</span>
                    <p className="text-gray-700 font-medium leading-relaxed mb-8 relative z-10 pl-6 pt-2">
                      {t.quote}
                    </p>
                  </div>
                  <div>
                    <div className="flex gap-1 mb-4 pl-6">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 text-[#ff5e14] fill-[#ff5e14]" />
                      ))}
                    </div>
                    <div className="flex items-center gap-4 pl-6">
                      <div className="w-12 h-12 rounded-full bg-gray-200 border-2 border-white shadow-sm flex items-center justify-center overflow-hidden">
                        <Users className="w-6 h-6 text-gray-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">{t.name}</h4>
                        <p className="text-gray-500 text-xs">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex md:hidden gap-4 mt-6">
              <button className="w-12 h-12 bg-white rounded-full shadow-md border border-gray-100 flex items-center justify-center text-gray-600 hover:text-[#ff5e14] transition-colors flex-shrink-0">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button className="w-12 h-12 bg-white rounded-full shadow-md border border-gray-100 flex items-center justify-center text-gray-600 hover:text-[#ff5e14] transition-colors flex-shrink-0">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <button className="hidden md:flex w-12 h-12 bg-white rounded-full shadow-md border border-gray-100 items-center justify-center text-gray-600 hover:text-[#ff5e14] transition-colors flex-shrink-0">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Footer Banner */}
      <section className="py-12 container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full flex justify-center"
        >
          <Image
            src="/images/banner/hero-banner-2.png"
            alt="Ready to Grow Your Business"
            width={1920}
            height={600}
            className="w-full h-auto rounded-3xl shadow-2xl object-cover"
            priority
          />
        </motion.div>
      </section>
    </>
  );
}
