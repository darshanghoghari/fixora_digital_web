"use client";

import { motion } from "framer-motion";
import { SITE_NAME } from "@/constants/navigation";
import { Target, Lightbulb, Rocket, Users, Award, Heart, Code, Briefcase, Linkedin, Mail, Github } from "lucide-react";
import Image from "next/image";
import Logo from "@/components/Logo";

export default function About() {
  const visionPoints = [
    {
      icon: Target,
      title: "Empower Service Providers",
      description: "Create opportunities for service providers to grow and succeed in the digital economy",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Continuously evolve with cutting-edge technology to deliver the best user experience",
    },
    {
      icon: Rocket,
      title: "Scale Globally",
      description: "Build a platform that connects millions of customers with trusted service providers worldwide",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Foster a thriving community where both customers and providers benefit from seamless interactions",
    },
  ];

  const storyTimeline = [
    {
      year: "2023",
      title: "The Beginning",
      description: "The idea was born from recognizing the challenges service providers face in connecting with customers and managing their businesses efficiently.",
    },
    {
      year: "2024",
      title: "Development Phase",
      description: "Months of research, development, and testing led to the creation of a comprehensive platform that simplifies service booking and management.",
    },
    {
      year: "2024",
      title: "Launch",
      description: "FIXORA was launched with a mission to revolutionize how service providers connect with customers and grow their businesses.",
    },
    {
      year: "Future",
      title: "Our Journey Continues",
      description: "We continue to innovate and expand, bringing new features and capabilities to help service providers reach new heights.",
    },
  ];

  const teamMembers = {
    founders: [
      {
        name: "[Founder Name 1]",
        role: "Founder & CEO",
        image: "/placeholder-founder.jpg",
        bio: "Visionary leader with a passion for transforming the service industry through innovative technology solutions.",
        linkedin: "#",
        email: "founder1@fixora.com",
        github: "#",
      },
      {
        name: "[Founder Name 2]",
        role: "Co-Founder & CTO",
        image: "/placeholder-founder.jpg",
        bio: "Technical expert driving innovation and ensuring our platform delivers exceptional performance and user experience.",
        linkedin: "#",
        email: "founder2@fixora.com",
        github: "#",
      },
    ],
    coFounders: [
      {
        name: "[Co-Founder Name 1]",
        role: "Co-Founder & COO",
        image: "/placeholder-cofounder.jpg",
        bio: "Operations specialist focused on scaling the business and ensuring smooth day-to-day operations.",
        linkedin: "#",
        email: "cofounder1@fixora.com",
        github: "#",
      },
      {
        name: "[Co-Founder Name 2]",
        role: "Co-Founder & CMO",
        image: "/placeholder-cofounder.jpg",
        bio: "Marketing strategist building brand awareness and connecting with our community of service providers.",
        linkedin: "#",
        email: "cofounder2@fixora.com",
        github: "#",
      },
    ],
    developers: [
      {
        name: "[Developer Name 1]",
        role: "Senior Full Stack Developer",
        image: "/placeholder-dev.jpg",
        bio: "Expert in building scalable applications with expertise in modern web technologies.",
        linkedin: "#",
        email: "dev1@fixora.com",
        github: "#",
      },
      {
        name: "[Developer Name 2]",
        role: "Frontend Developer",
        image: "/placeholder-dev.jpg",
        bio: "Creating beautiful and intuitive user interfaces that enhance user experience.",
        linkedin: "#",
        email: "dev2@fixora.com",
        github: "#",
      },
      {
        name: "[Developer Name 3]",
        role: "Backend Developer",
        image: "/placeholder-dev.jpg",
        bio: "Building robust and secure backend systems that power our platform.",
        linkedin: "#",
        email: "dev3@fixora.com",
        github: "#",
      },
      {
        name: "[Developer Name 4]",
        role: "Mobile Developer",
        image: "/placeholder-dev.jpg",
        bio: "Developing native mobile applications for iOS and Android platforms.",
        linkedin: "#",
        email: "dev4@fixora.com",
        github: "#",
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-card via-background to-card overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <Logo size="lg" className="pointer-events-none" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              About {SITE_NAME}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Empowering service providers to connect, grow, and succeed in the digital economy
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-12"
            >
              <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 mb-10">
                <div className="flex-shrink-0">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 md:mb-0">
                    Our Vision
                  </h2>
                </div>
                <div className="flex-1">
                  <div className="space-y-6">
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="text-xl md:text-2xl text-foreground leading-relaxed font-light"
                    >
                      At {SITE_NAME}, we envision a world where every service provider has the tools and platform to succeed in today's digital economy.
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-lg md:text-xl text-muted-foreground leading-relaxed"
                    >
                      Our mission is to create a seamless, intuitive, and powerful application that connects providers with customers while streamlining operations and driving growth.
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="text-lg md:text-xl text-muted-foreground leading-relaxed"
                    >
                      We are committed to building a platform that is not just functional, but transformative—helping providers reach new heights in their business journey and creating lasting value for both service providers and customers.
                    </motion.p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
              {visionPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="inline-block mb-6"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-[#122E46] flex items-center justify-center shadow-lg shadow-primary/30">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </motion.div>
                    <h3 className="text-lg md:text-xl font-bold mb-3 text-primary group-hover:text-primary/80 transition-colors">
                      {point.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-br from-background via-card/20 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-12"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
                className="inline-block mb-6"
              >
                <div className="w-20 h-20 rounded-2xl bg-[#122E46] flex items-center justify-center shadow-2xl shadow-primary/40">
                  <Rocket className="w-10 h-10 text-white" />
                </div>
              </motion.div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Our Story
              </h2>
              <div className="w-40 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6"></div>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                The journey of {SITE_NAME} began with a simple yet powerful vision: to bridge the gap between service providers and customers, making service booking and management effortless and efficient.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
              {storyTimeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
                  className="relative group"
                >
                  <div className="relative h-full bg-gradient-to-br from-card to-background rounded-2xl p-8 md:p-10 border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-2 group">
                    {/* Year Badge - Top Right */}
                    <div className="absolute top-6 right-6 w-16 h-16 rounded-xl bg-[#122E46] flex items-center justify-center shadow-lg z-10 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-sm md:text-base text-center leading-tight">{item.year}</span>
                    </div>

                    {/* Status Badge - Top Left */}
                    <div className="mb-6 pr-20">
                      <span className="inline-block text-xs font-bold text-primary uppercase tracking-widest">
                        {index === 0 && "Started"}
                        {index === 1 && "Building"}
                        {index === 2 && "Launched"}
                        {index === 3 && "Growing"}
                      </span>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Decorative Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Our Team
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Meet the passionate team behind {SITE_NAME} - dedicated to transforming the service industry
              </p>
            </motion.div>

            {/* Founders Section */}
            <div className="mb-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
              >
                <div className="inline-flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#122E46] flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                    Founders
                  </h3>
                </div>
                <p className="text-lg text-muted-foreground">The visionaries who started it all</p>
              </motion.div>
              <div className="space-y-16 max-w-6xl mx-auto">
                {teamMembers.founders.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center md:items-start gap-8 md:gap-12 relative`}
                  >
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent hidden md:block"></div>
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      transition={{ duration: 0.3 }}
                      className="relative flex-shrink-0"
                    >
                      <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-[#122E46] flex items-center justify-center shadow-2xl">
                        <Users className="w-20 h-20 md:w-24 md:h-24 text-white" />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-[#122E46] flex items-center justify-center shadow-xl">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                    </motion.div>
                    <div className={`flex-1 ${index % 2 === 0 ? 'text-center md:text-left' : 'text-center md:text-right'}`}>
                      <div className="inline-block mb-4">
                        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Founder</span>
                      </div>
                      <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary leading-tight group-hover:text-primary/80 transition-colors">
                        {member.name}
                      </h4>
                      <p className="text-xl md:text-2xl text-primary font-semibold mb-6">{member.role}</p>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto md:mx-0">
                        {member.bio}
                      </p>
                      <div className={`flex gap-4 justify-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                        <a
                          href={member.linkedin}
                          className="w-12 h-12 rounded-full bg-background border-2 border-primary/30 hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all duration-300 group"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="w-5 h-5 text-primary group-hover:text-primary/80 transition-colors" />
                        </a>
                        <a
                          href={`mailto:${member.email}`}
                          className="w-12 h-12 rounded-full bg-background border-2 border-primary/30 hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all duration-300 group"
                          aria-label="Email"
                        >
                          <Mail className="w-5 h-5 text-primary group-hover:text-primary/80 transition-colors" />
                        </a>
                        <a
                          href={member.github}
                          className="w-12 h-12 rounded-full bg-background border-2 border-primary/30 hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all duration-300 group"
                          aria-label="GitHub"
                        >
                          <Github className="w-5 h-5 text-primary group-hover:text-primary/80 transition-colors" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Co-Founders Section */}
            <div className="mb-20 relative">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16 mt-16"
              >
                <div className="inline-flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#122E46] flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                    Co-Founders
                  </h3>
                </div>
                <p className="text-lg text-muted-foreground">The strategic minds driving growth</p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
                {teamMembers.coFounders.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="text-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.3 }}
                      className="relative inline-block mb-8"
                    >
                      <div className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-[#122E46] flex items-center justify-center shadow-xl">
                        <Briefcase className="w-16 h-16 md:w-18 md:h-18 text-white" />
                      </div>
                    </motion.div>
                    <div className="inline-block mb-3">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">Co-Founder</span>
                    </div>
                    <h4 className="text-2xl md:text-3xl font-bold mb-3 text-primary">{member.name}</h4>
                    <p className="text-lg text-primary font-semibold mb-5">{member.role}</p>
                    <p className="text-muted-foreground leading-relaxed mb-4">{member.bio}</p>
                    <div className="flex gap-3 justify-center">
                      <a
                        href={member.linkedin}
                        className="w-11 h-11 rounded-full bg-background border-2 border-primary/30 hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all duration-300 group"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5 text-primary group-hover:text-[hsl(var(--color-secondary))] transition-colors" />
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="w-11 h-11 rounded-full bg-background border-2 border-primary/30 hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all duration-300 group"
                        aria-label="Email"
                      >
                        <Mail className="w-5 h-5 text-primary group-hover:text-[hsl(var(--color-secondary))] transition-colors" />
                      </a>
                      <a
                        href={member.github}
                        className="w-11 h-11 rounded-full bg-background border-2 border-primary/30 hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all duration-300 group"
                        aria-label="GitHub"
                      >
                        <Github className="w-5 h-5 text-primary group-hover:text-[hsl(var(--color-secondary))] transition-colors" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Developers Section */}
            <div className="relative">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16 mt-16"
              >
                <div className="inline-flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#122E46] flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                    Development Team
                  </h3>
                </div>
                <p className="text-lg text-muted-foreground">The talented developers building the future</p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {teamMembers.developers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#122E46] flex items-center justify-center shadow-lg group-hover:shadow-primary/30 transition-shadow">
                        <Code className="w-8 h-8 md:w-10 md:h-10 text-white" />
                      </div>
                    </motion.div>
                    <div className="flex-1 pt-2">
                      <div className="inline-block mb-2">
                        <span className="text-xs font-semibold text-primary/80 uppercase tracking-wider">Developer</span>
                      </div>
                      <h4 className="text-xl md:text-2xl font-bold mb-2 text-primary group-hover:text-primary/80 transition-colors">{member.name}</h4>
                      <p className="text-base md:text-lg text-primary font-semibold mb-3">{member.role}</p>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">{member.bio}</p>
                      <div className="flex gap-3">
                        <a
                          href={member.linkedin}
                          className="w-9 h-9 rounded-full bg-background border border-primary/30 hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all duration-300 group"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="w-4 h-4 text-primary group-hover:text-primary/80 transition-colors" />
                        </a>
                        <a
                          href={`mailto:${member.email}`}
                          className="w-9 h-9 rounded-full bg-background border border-primary/30 hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all duration-300 group"
                          aria-label="Email"
                        >
                          <Mail className="w-4 h-4 text-primary group-hover:text-primary/80 transition-colors" />
                        </a>
                        <a
                          href={member.github}
                          className="w-9 h-9 rounded-full bg-background border border-primary/30 hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all duration-300 group"
                          aria-label="GitHub"
                        >
                          <Github className="w-4 h-4 text-primary group-hover:text-primary/80 transition-colors" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
