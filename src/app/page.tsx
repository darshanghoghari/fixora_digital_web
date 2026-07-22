"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  Users, ShieldCheck, MapPin, Star, Zap, Wind, Droplets, Paintbrush, Hammer, MonitorSmartphone, Leaf,
  Shield, Lock, Search, CalendarDays, Award, Briefcase, ClipboardList, Bell, TrendingUp, UserPlus,
  Headphones, IndianRupee, ChevronLeft, ChevronRight
} from "lucide-react";
import contentData from "@/data/content.json";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { DisplayLg, H2, H3, H4, H5, H6, BodyLg, BodyMd, BodySm } from "@/components/ui/Typography";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

// Dynamic imports for below-the-fold components to improve performance
const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), { ssr: false });

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-gray-900">
        {/* Background Video - Optimized */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            poster="/images/banner/hero-banner-1.png"
            className="w-full h-full object-cover opacity-60"
          >
            <source src="/video/hero-banner.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-background" />

          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-black/70 blur-[100px] rounded-full z-0 -translate-x-1/4 -translate-y-1/4 pointer-events-none"></div>
        </div>

        <Container className="relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-between pt-[var(--spacing-20)] md:pt-0">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-3xl"
          >
            <DisplayLg className="mb-[var(--spacing-6)] text-white drop-shadow-2xl whitespace-pre-line">
              {contentData.home.hero.title}{" "}
              <span className="text-primary">
                {contentData.home.hero.titleHighlight}
              </span>
            </DisplayLg>

            <BodyLg className="mb-[var(--spacing-10)] text-gray-200 max-w-xl font-medium drop-shadow-lg">
              {contentData.home.hero.description} We offer top-tier solutions in Home Maintenance, providing you the best Electricians, Plumbers, and more.
            </BodyLg>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-[var(--spacing-4)]"
            >
              <Button asChild size="lg" className="w-full sm:w-auto text-[length:var(--text-btn)]">
                <Link href={contentData.home.hero.cta.primary.href}>
                  {contentData.home.hero.cta.primary.text}
                </Link>
              </Button>

              <Button asChild variant="white" size="lg" className="w-full sm:w-auto bg-white/10 text-white hover:bg-white hover:text-gray-900 backdrop-blur-sm border-white/50">
                <Link href={contentData.home.hero.cta.secondary.href}>
                  {contentData.home.hero.cta.secondary.text}
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Stats Section */}
      <Section spacing="none" className="relative z-20">
        <Container>
          <Card className="p-[var(--spacing-8)] flex flex-wrap lg:flex-nowrap justify-between items-center gap-[var(--spacing-8)] bg-surface border-border">
            <div className="flex items-center gap-[var(--spacing-4)] w-full md:w-auto justify-center md:justify-start">
              <div className="w-[var(--spacing-16)] h-[var(--spacing-16)] rounded-full bg-primary-100 flex items-center justify-center text-primary">
                <Users className="w-[var(--spacing-8)] h-[var(--spacing-8)]" />
              </div>
              <div>
                <H3>50,000+</H3>
                <BodySm>Bookings Completed</BodySm>
              </div>
            </div>
            <div className="hidden lg:block w-px h-[var(--spacing-16)] bg-border"></div>
            <div className="flex items-center gap-[var(--spacing-4)] w-full md:w-auto justify-center md:justify-start">
              <div className="w-[var(--spacing-16)] h-[var(--spacing-16)] rounded-full bg-primary-100 flex items-center justify-center text-primary">
                <ShieldCheck className="w-[var(--spacing-8)] h-[var(--spacing-8)]" />
              </div>
              <div>
                <H3>5,000+</H3>
                <BodySm>Verified Providers</BodySm>
              </div>
            </div>
            <div className="hidden lg:block w-px h-[var(--spacing-16)] bg-border"></div>
            <div className="flex items-center gap-[var(--spacing-4)] w-full md:w-auto justify-center md:justify-start">
              <div className="w-[var(--spacing-16)] h-[var(--spacing-16)] rounded-full bg-primary-100 flex items-center justify-center text-primary">
                <MapPin className="w-[var(--spacing-8)] h-[var(--spacing-8)]" />
              </div>
              <div>
                <H3>100+</H3>
                <BodySm>Cities Served</BodySm>
              </div>
            </div>
            <div className="hidden lg:block w-px h-[var(--spacing-16)] bg-border"></div>
            <div className="flex items-center gap-[var(--spacing-4)] w-full md:w-auto justify-center md:justify-start">
              <div className="w-[var(--spacing-16)] h-[var(--spacing-16)] rounded-full bg-primary-100 flex items-center justify-center text-primary">
                <Star className="w-[var(--spacing-8)] h-[var(--spacing-8)] fill-current" />
              </div>
              <div>
                <H3>4.8</H3>
                <BodySm>Customer Rating</BodySm>
              </div>
            </div>
          </Card>
        </Container>
      </Section>

      {/* Our Services SEO Optimized */}
      <Section spacing="lg" background="default" className="text-center">
        <Container>
          <H2 className="mb-[var(--spacing-2)]">Professional <span className="text-primary">Home Services</span></H2>
          <BodyMd className="mb-[var(--spacing-12)] mx-auto max-w-2xl">
            Whether you need a reliable Electrician, a certified Plumber, or expert AC Repair, our comprehensive Home Maintenance platform connects you with trusted professionals. We also offer Cleaning, Painting, Carpentry, and Appliance Repair.
          </BodyMd>

          <div className="flex flex-wrap justify-center gap-[var(--spacing-6)]">
            {[
              { icon: Droplets, name: "Plumber" },
              { icon: Zap, name: "Electrician" },
              { icon: Wind, name: "AC Repair" },
              { icon: Paintbrush, name: "Cleaning" },
              { icon: Paintbrush, name: "Painting" },
              { icon: Hammer, name: "Carpenter" },
              { icon: MonitorSmartphone, name: "Appliance Repair" },
              { icon: Leaf, name: "Gardening" }
            ].map((srv, i) => (
              <div key={i} className="flex flex-col items-center gap-[var(--spacing-4)] group cursor-pointer w-[var(--spacing-24)] sm:w-[var(--spacing-30)]">
                <div className="w-[var(--spacing-20)] h-[var(--spacing-20)] sm:w-[var(--spacing-24)] sm:h-[var(--spacing-24)] rounded-[var(--radius-2xl)] bg-surface border border-border shadow-[var(--shadow-sm)] flex items-center justify-center group-hover:border-primary group-hover:shadow-[var(--shadow-md)] transition-all">
                  <srv.icon className="w-[var(--spacing-10)] h-[var(--spacing-10)] text-primary" />
                </div>
                <BodySm className="font-bold text-text-primary">{srv.name}</BodySm>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* How Fixora Works */}
      <Section spacing="lg" background="surface" className="text-center relative">
        <Container>
          <H2 className="mb-[var(--spacing-2)]">How <span className="text-primary">Fixora</span> Works</H2>
          <BodyMd className="mb-[var(--spacing-20)]">Simple steps to get your work done or grow your business</BodyMd>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-[var(--spacing-16)] max-w-7xl mx-auto">
            {/* For Customers */}
            <Card className="p-[var(--spacing-6)] sm:p-[var(--spacing-10)] border-primary-200 shadow-[var(--shadow-lg)] relative flex flex-col justify-start">
              <Badge variant="default" className="absolute -top-4 left-1/2 -translate-x-1/2 px-[var(--spacing-6)] py-[var(--spacing-2)] text-[length:var(--text-body-sm)]">
                <Users className="w-5 h-5 mr-2 fill-current" />
                FOR CUSTOMERS
              </Badge>

              <div className="mt-[var(--spacing-12)] mb-[var(--spacing-4)] relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden sm:block absolute top-[3rem] sm:top-[3.75rem] left-[15%] right-[15%] h-[2px] border-t-[2px] border-dashed border-primary-300 z-0 opacity-60"></div>

                <div className="flex flex-col sm:flex-row justify-between gap-[var(--spacing-10)] sm:gap-2 relative z-10">
                  {[
                    { num: "01", icon: Search, title: "Search", desc: "Find the service you need" },
                    { num: "02", icon: ShieldCheck, title: "Choose", desc: "Select a verified professional" },
                    { num: "03", icon: CalendarDays, title: "Book", desc: "Pick a time that suits you" },
                    { num: "04", icon: Award, title: "Get It Done", desc: "Relax and enjoy quality service" }
                  ].map((step, i) => (
                    <div key={i} className="flex flex-col items-center flex-1 text-center group relative mt-2 sm:mt-0">
                      {/* Icon Container with Badge */}
                      <div className="relative mb-[var(--spacing-5)]">
                        <div className="w-[var(--spacing-20)] h-[var(--spacing-20)] sm:w-[var(--spacing-24)] sm:h-[var(--spacing-24)] rounded-[1.75rem] bg-white border border-primary-100 shadow-[var(--shadow-sm)] flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300 group-hover:shadow-[var(--shadow-md)] group-hover:-translate-y-1">
                          <step.icon strokeWidth={1.5} className="w-[var(--spacing-8)] h-[var(--spacing-8)] sm:w-[var(--spacing-10)] sm:h-[var(--spacing-10)] text-primary group-hover:text-white transition-colors duration-300" />
                        </div>
                        {/* Number Badge */}
                        <div className="absolute -top-3 -right-3 w-[var(--spacing-8)] h-[var(--spacing-8)] rounded-full bg-primary text-white flex items-center justify-center font-medium text-[length:var(--text-body-sm)] shadow-md border-2 border-white group-hover:scale-110 transition-transform">
                          {step.num}
                        </div>
                      </div>

                      <H4 className="mb-[var(--spacing-2)] text-gray-900 group-hover:text-primary transition-colors">{step.title}</H4>
                      <BodySm className="text-gray-500 max-w-[140px] leading-relaxed mx-auto">{step.desc}</BodySm>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* For Providers */}
            <Card className="p-[var(--spacing-6)] sm:p-[var(--spacing-10)] border-border relative mt-[var(--spacing-16)] xl:mt-0 flex flex-col justify-start shadow-[var(--shadow-lg)]">
              <Badge variant="dark" className="absolute -top-4 left-1/2 -translate-x-1/2 px-[var(--spacing-6)] py-[var(--spacing-2)] text-[length:var(--text-body-sm)] bg-secondary hover:bg-secondary-light">
                <Briefcase className="w-5 h-5 mr-2 fill-current" />
                FOR PROVIDERS
              </Badge>

              <div className="mt-[var(--spacing-12)] mb-[var(--spacing-4)] relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden sm:block absolute top-[3rem] sm:top-[3.75rem] left-[15%] right-[15%] h-[2px] border-t-[2px] border-dashed border-gray-300 z-0"></div>

                <div className="flex flex-col sm:flex-row justify-between gap-[var(--spacing-10)] sm:gap-2 relative z-10">
                  {[
                    { num: "01", icon: UserPlus, title: "Register", desc: "Sign up and create your profile" },
                    { num: "02", icon: ClipboardList, title: "Add Services", desc: "List your services and pricing" },
                    { num: "03", icon: Bell, title: "Receive Bookings", desc: "Get booking requests from customers" },
                    { num: "04", icon: TrendingUp, title: "Earn & Grow", desc: "Track earnings and grow your business" }
                  ].map((step, i) => (
                    <div key={i} className="flex flex-col items-center flex-1 text-center group relative mt-2 sm:mt-0">
                      {/* Icon Container with Badge */}
                      <div className="relative mb-[var(--spacing-5)]">
                        <div className="w-[var(--spacing-20)] h-[var(--spacing-20)] sm:w-[var(--spacing-24)] sm:h-[var(--spacing-24)] rounded-[1.75rem] bg-surface border border-border shadow-[var(--shadow-sm)] flex items-center justify-center group-hover:bg-secondary group-hover:border-secondary transition-all duration-300 group-hover:shadow-[var(--shadow-md)] group-hover:-translate-y-1">
                          <step.icon strokeWidth={1.5} className="w-[var(--spacing-8)] h-[var(--spacing-8)] sm:w-[var(--spacing-10)] sm:h-[var(--spacing-10)] text-secondary group-hover:text-white transition-colors duration-300" />
                        </div>
                        {/* Number Badge */}
                        <div className="absolute -top-3 -right-3 w-[var(--spacing-8)] h-[var(--spacing-8)] rounded-full bg-secondary text-white flex items-center justify-center font-medium text-[length:var(--text-body-sm)] shadow-md border-2 border-white group-hover:scale-110 transition-transform">
                          {step.num}
                        </div>
                      </div>

                      <H4 className="mb-[var(--spacing-2)] text-gray-900 group-hover:text-secondary transition-colors">{step.title}</H4>
                      <BodySm className="text-gray-500 max-w-[140px] leading-relaxed mx-auto">{step.desc}</BodySm>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Why Choose Us? */}
      <Section spacing="lg" background="default" className="text-center">
        <Container>
          <H2 className="mb-[var(--spacing-16)]">Why Choose <span className="text-primary">Us</span>?</H2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[var(--spacing-6)] max-w-7xl mx-auto">
            {[
              { icon: Shield, title: "Verified Professionals", desc: "Background checked and trusted experts" },
              { icon: Lock, title: "Secure Payments", desc: "Safe and secure payment system" },
              { icon: Zap, title: "Instant Bookings", desc: "Book services in just a few taps" },
              { icon: MapPin, title: "Real-Time Tracking", desc: "Track your bookings in real-time" },
              { icon: Headphones, title: "24/7 Support", desc: "We're here to help you anytime" },
              { icon: IndianRupee, title: "Transparent Pricing", desc: "No hidden charges. 100% transparency" }
            ].map((feat, i) => (
              <Card key={i} className="flex flex-col items-center p-[var(--spacing-6)] hover:border-primary transition-all">
                <div className="w-[var(--spacing-16)] h-[var(--spacing-16)] rounded-full bg-primary-100 flex items-center justify-center mb-[var(--spacing-4)]">
                  <feat.icon className="w-[var(--spacing-8)] h-[var(--spacing-8)] text-primary" />
                </div>
                <H5 className="mb-[var(--spacing-2)]">{feat.title}</H5>
                <BodySm className="text-center">{feat.desc}</BodySm>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Full Width Banner using Dynamic Import */}
      <Section spacing="md" background="default">
        <Container maxWidth="2xl">
          {MotionDiv && (
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full flex justify-center relative"
            >
              <Image
                src="/images/banner/hero-banner-1.png"
                alt="Fixora Best Home Service App Banner"
                width={1920}
                height={1080}
                className="w-full h-auto rounded-[var(--radius-3xl)] shadow-[var(--shadow-xl)] object-cover"
                loading="lazy"
              />
            </MotionDiv>
          )}
        </Container>
      </Section>

      {/* Testimonials */}
      <Section spacing="lg" background="surface" className="text-center">
        <Container>
          <H2 className="mb-[var(--spacing-16)]">
            What People Say About <span className="text-primary">Fixora</span>
          </H2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--spacing-6)] w-full max-w-7xl mx-auto">
            {[
              { name: "Ravi Mehta", role: "Homeowner", quote: "Fixora made it so easy to find trusted professionals. The service was quick and hassle-free!" },
              { name: "Ankit Sharma", role: "Service Provider", quote: "As a service provider, Fixora helps me get more customers and grow my business every day." },
              { name: "Priya Patel", role: "Homeowner", quote: "Great platform with excellent support and smooth booking experience." }
            ].map((t, i) => (
              <Card key={i} className="p-[var(--spacing-8)] text-left relative flex flex-col justify-between h-full">
                <div>
                  <span className="text-primary text-[length:var(--text-display-lg)] font-serif leading-none absolute top-4 left-6 opacity-20">"</span>
                  <BodyMd className="relative z-10 pl-6 pt-2 mb-[var(--spacing-8)] font-medium text-gray-700 italic">
                    {t.quote}
                  </BodyMd>
                </div>
                <div>
                  <div className="flex gap-1 mb-[var(--spacing-4)] pl-6">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-warning fill-warning" />
                    ))}
                  </div>
                  <div className="flex items-center gap-[var(--spacing-4)] pl-6">
                    <div className="w-[var(--spacing-12)] h-[var(--spacing-12)] rounded-full bg-border flex items-center justify-center overflow-hidden">
                      <Users className="w-[var(--spacing-6)] h-[var(--spacing-6)] text-gray-400" />
                    </div>
                    <div>
                      <H6 className="text-text-primary">{t.name}</H6>
                      <BodySm className="text-xs">{t.role}</BodySm>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Footer Banner */}
      <Section spacing="lg" background="default" className="mb-[var(--spacing-12)]">
        <Container maxWidth="2xl">
          {MotionDiv && (
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full flex justify-center"
            >
              <Image
                src="/images/banner/hero-banner-2.png"
                alt="Ready to Grow Your Home Services Business"
                width={1920}
                height={600}
                className="w-full h-auto rounded-[var(--radius-3xl)] shadow-[var(--shadow-xl)] object-cover"
                loading="lazy"
              />
            </MotionDiv>
          )}
        </Container>
      </Section>
    </>
  );
}
