"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  FileText, ShieldCheck, User, Settings, Calendar, 
  CreditCard, AlertCircle, MessageSquare, Clock, 
  RefreshCw, Scale, Mail, FileCheck, Lock, CheckCircle2, Headphones
} from "lucide-react";

const PolicySection = ({ id, icon: Icon, title, children }: any) => (
  <div id={id} className="scroll-mt-24 pt-12 mt-12 border-t border-gray-200">
    <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-[#fff0e6] flex items-center justify-center shadow-sm border border-[#ffddcc]">
          <Icon className="w-6 h-6 text-[#ff5e14]" />
        </div>
      </div>
      <div className="flex-1">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pt-2">
          {title}
        </h2>
        <div className="text-gray-600 space-y-4 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  </div>
);

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState("agreement");

  const sections = [
    { id: "agreement", title: "1. AGREEMENT TO TERMS", short: "Agreement", icon: FileText },
    { id: "ip", title: "2. INTELLECTUAL PROPERTY RIGHTS", short: "Intellectual Property", icon: ShieldCheck },
    { id: "representations", title: "3. USER REPRESENTATIONS", short: "User Representations", icon: User },
    { id: "registration", title: "4. USER REGISTRATION", short: "User Registration", icon: Settings },
    { id: "services", title: "5. SERVICES AND BOOKINGS", short: "Services & Bookings", icon: Calendar },
    { id: "payment", title: "6. PAYMENT AND FEES", short: "Payment & Fees", icon: CreditCard },
    { id: "prohibited", title: "7. PROHIBITED ACTIVITIES", short: "Prohibited Activities", icon: AlertCircle },
    { id: "contributions", title: "8. USER GENERATED CONTRIBUTIONS", short: "Contributions", icon: MessageSquare },
    { id: "termination", title: "9. TERM AND TERMINATION", short: "Term & Termination", icon: Clock },
    { id: "modifications", title: "10. MODIFICATIONS TO SERVICES", short: "Modifications", icon: RefreshCw },
    { id: "law", title: "11. GOVERNING LAW", short: "Governing Law", icon: Scale },
    { id: "contact", title: "12. CONTACT US", short: "Contact Us", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionElement = document.getElementById(sections[i].id);
        if (sectionElement && sectionElement.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const summaryPoints = [
    { q: "Who are we?", a: "We are Fixora Enterprises, operating the Fixora app and website to connect customers with service providers." },
    { q: "What is this document?", a: "These Terms and Conditions constitute a legally binding agreement made between you and Fixora Enterprises concerning your access to and use of our Services." },
    { q: "Do you have to register?", a: "Yes, you may be required to register with the Site/App to use most of our Services. You agree to keep your password confidential." },
    { q: "How are payments handled?", a: "Payments for services are processed securely through our payment partners (such as Razorpay). We ensure secure transactions for all bookings." },
    { q: "Can we change these terms?", a: "Yes. We reserve the right to make changes or modifications to these Terms and Conditions at any time and for any reason." },
    { q: "What happens if you violate these terms?", a: "We reserve the right to deny access, suspend, or terminate your account and use of the Services for violating any of these Terms." },
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#fff6f0] pt-24 pb-16 relative overflow-hidden border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
              <div className="w-16 h-1 bg-[#ff5e14] mb-6 rounded-full"></div>
              <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
                Please read these terms and conditions carefully before using Our Service. These terms govern your use of Fixora Enterprises and our platform.
              </p>
              <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2.5 shadow-sm">
                <Calendar className="w-5 h-5 text-[#ff5e14]" />
                <span className="text-sm font-semibold text-gray-700">Last Updated: June 21, 2026</span>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-72 h-72 sm:w-80 sm:h-80 bg-[#ffddcc] rounded-full flex items-center justify-center shadow-lg"
              >
                <FileText className="w-32 h-32 sm:w-40 sm:h-40 text-[#ff5e14]" />
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="absolute top-8 -left-6 sm:-left-10 bg-white p-3 sm:p-4 rounded-xl shadow-xl border border-gray-100"
                >
                  <Scale className="w-6 h-6 sm:w-8 sm:h-8 text-[#ff5e14]" />
                </motion.div>
                <motion.div 
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="absolute bottom-8 -right-6 sm:-right-10 bg-white p-3 sm:p-4 rounded-xl shadow-xl border border-gray-100"
                >
                  <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-[#ff5e14]" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar */}
          <div className="lg:w-1/4 hidden lg:block flex-shrink-0">
            <div className="sticky top-24">
              <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 mb-6">
                <h3 className="text-lg font-bold text-[#ff5e14] mb-4 pb-4 border-b border-gray-100">On This Page</h3>
                <ul className="space-y-1.5">
                  {sections.map((sec) => {
                    const isActive = activeSection === sec.id;
                    return (
                      <li key={sec.id}>
                        <a 
                          href={`#${sec.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById(sec.id)?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                            isActive 
                              ? 'bg-[#fff0e6] text-[#ff5e14]' 
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                          }`}
                        >
                          <sec.icon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-[#ff5e14]' : 'text-gray-400'}`} />
                          <span className="leading-tight">{sec.short}</span>
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
              
              {/* Have Questions Card */}
              <div className="bg-white border border-[#ffeadd] rounded-2xl shadow-sm p-6 text-center">
                <div className="w-14 h-14 bg-[#fff0e6] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#ffddcc]">
                  <Headphones className="w-7 h-7 text-[#ff5e14]" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-lg">Have Questions?</h4>
                <p className="text-sm text-gray-500 mb-6 leading-relaxed">We're here to help you with any terms related concerns.</p>
                <a href="mailto:fixoraenterprises@gmail.com" className="block w-full py-2.5 border-2 border-[#ff5e14] text-[#ff5e14] hover:bg-[#ff5e14] hover:text-white rounded-lg font-semibold transition-colors">
                  Contact Support
                </a>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:w-3/4">
            
            {/* Intro Text */}
            <div className="text-gray-600 space-y-5 text-base md:text-lg leading-relaxed mb-16">
              <p>
                These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Fixora Enterprises ("we," "us," or "our"), concerning your access to and use of our mobile application and website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site" and "App").
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-[#ff5e14] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">By accessing the Services, you agree that you have read, understood, and agree to be bound by all of these Terms and Conditions.</span>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-[#ff5e14] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">If you do not agree with all of these Terms and Conditions, then you are expressly prohibited from using the Services and you must discontinue use immediately.</span>
                </li>
              </ul>
              <div className="mt-8 p-6 bg-[#fff0e6] rounded-xl border border-[#ffddcc] flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100">
                  <Mail className="w-6 h-6 text-[#ff5e14]" />
                </div>
                <div>
                  <p className="text-gray-900 font-bold mb-1">Have any queries?</p>
                  <p className="text-sm text-gray-600">If you have any questions about these Terms, please contact us at <a href="mailto:fixoraenterprises@gmail.com" className="text-[#ff5e14] hover:underline font-medium">fixoraenterprises@gmail.com</a>.</p>
                </div>
              </div>
            </div>

            {/* Summary of Key Points */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">SUMMARY OF KEY TERMS</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">This summary provides key points from our Terms and Conditions. You can find out more details about any of these topics by clicking the links or scrolling down.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {summaryPoints.map((point, idx) => (
                  <div key={idx} className="p-5 border border-gray-200 rounded-xl bg-white hover:border-[#ff5e14]/50 hover:shadow-md transition-all">
                    <h4 className="font-bold text-gray-900 mb-2 leading-snug">{point.q}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{point.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sections */}
            <div className="space-y-0">
              <PolicySection id={sections[0].id} icon={sections[0].icon} title={sections[0].title}>
                <p>We are Fixora Enterprises. We operate the Fixora mobile application and the website https://fixora-digital-web.vercel.app/ (collectively, the "Services"). The Services connect customers looking for home services with skilled service providers.</p>
                <p>Supplemental terms and conditions or documents that may be posted on the Site/App from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms and Conditions at any time and for any reason.</p>
                <p>We will alert you about any changes by updating the "Last Updated" date of these Terms and Conditions, and you waive any right to receive specific notice of each such change.</p>
              </PolicySection>

              <PolicySection id={sections[1].id} icon={sections[1].icon} title={sections[1].title}>
                <p>Unless otherwise indicated, the Site and App are our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of India, foreign jurisdictions, and international conventions.</p>
                <p>Provided that you are eligible to use the Site/App, you are granted a limited license to access and use the Services and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use.</p>
              </PolicySection>

              <PolicySection id={sections[2].id} icon={sections[2].icon} title={sections[2].title}>
                <p>By using the Services, you represent and warrant that:</p>
                <ul className="space-y-3 mt-4">
                  {[
                    "All registration information you submit will be true, accurate, current, and complete.",
                    "You will maintain the accuracy of such information and promptly update such registration information as necessary.",
                    "You have the legal capacity and you agree to comply with these Terms and Conditions.",
                    "You are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the Services.",
                    "You will not access the Services through automated or non-human means, whether through a bot, script or otherwise.",
                    "You will not use the Services for any illegal or unauthorized purpose.",
                    "Your use of the Services will not violate any applicable law or regulation."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                      <CheckCircle2 className="w-5 h-5 text-[#ff5e14] flex-shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4">If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services.</p>
              </PolicySection>

              <PolicySection id={sections[3].id} icon={sections[3].icon} title={sections[3].title}>
                <p>You may be required to register with the Site/App. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.</p>
              </PolicySection>

              <PolicySection id={sections[4].id} icon={sections[4].icon} title={sections[4].title}>
                <p>Fixora acts as a platform connecting customers with service providers. While we strive to onboard quality professionals, we do not guarantee the perfection of every service. Both users and service providers are expected to maintain professional conduct.</p>
                
                <h4 className="font-bold text-gray-900 mt-6 mb-4 text-lg">Booking & Cancellations</h4>
                <div className="space-y-4 pl-4 border-l-2 border-[#ffeadd] mt-4 ml-2">
                  <div><strong className="text-gray-900">Making a Booking:</strong> Customers must provide accurate location and problem details when booking a service.</div>
                  <div><strong className="text-gray-900">Provider Acceptance:</strong> A booking is confirmed only when a service provider accepts the request.</div>
                  <div><strong className="text-gray-900">Cancellations:</strong> Users can cancel bookings before the service provider arrives. Frequent cancellations may result in account restrictions or cancellation fees as per our policies.</div>
                </div>
              </PolicySection>

              <PolicySection id={sections[5].id} icon={sections[5].icon} title={sections[5].title}>
                <p>We accept various forms of payment through our secure payment gateway partner, Razorpay. You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Site/App.</p>
                <div className="flex gap-4 bg-white p-5 rounded-xl border border-gray-100 shadow-sm mt-6">
                  <div className="w-10 h-10 rounded-full bg-[#fff0e6] flex items-center justify-center flex-shrink-0 mt-1">
                    <CreditCard className="w-5 h-5 text-[#ff5e14]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Pricing and Fees</h4>
                    <p className="text-sm md:text-base text-gray-600">All prices are subject to change. We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment. Additional fees for spare parts or extended labor may apply based on the service provider's assessment on-site.</p>
                  </div>
                </div>
              </PolicySection>

              <PolicySection id={sections[6].id} icon={sections[6].icon} title={sections[6].title}>
                <p>You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>
                <p className="mt-4">As a user of the Services, you agree not to:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                  {['Systematically retrieve data to create a database', 'Trick, defraud, or mislead us and other users', 'Circumvent, disable, or interfere with security features', 'Disparage, tarnish, or otherwise harm us or the Services', 'Use the Services to harass, abuse, or harm another person', 'Upload or transmit viruses or malicious material', 'Interfere with or disrupt the Services'].map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-[#ff5e14] flex-shrink-0 mt-1" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </PolicySection>

              <PolicySection id={sections[7].id} icon={sections[7].icon} title={sections[7].title}>
                <p>The Services may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality, and may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, "Contributions").</p>
                <p className="mt-4">Any Contributions you transmit may be treated as non-confidential and non-proprietary. By submitting Reviews and Ratings for service providers, you agree that they are genuine and reflect your actual experience.</p>
              </PolicySection>

              <PolicySection id={sections[8].id} icon={sections[8].icon} title={sections[8].title}>
                <p>These Terms and Conditions shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS AND CONDITIONS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON.</p>
                <p className="mt-4">If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party.</p>
              </PolicySection>

              <PolicySection id={sections[9].id} icon={sections[9].icon} title={sections[9].title}>
                <p>We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Services. We also reserve the right to modify or discontinue all or part of the Services without notice at any time.</p>
                <p className="mt-4">We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.</p>
              </PolicySection>

              <PolicySection id={sections[10].id} icon={sections[10].icon} title={sections[10].title}>
                <p>These terms shall be governed by and defined following the laws of India. Fixora Enterprises and yourself irrevocably consent that the courts of India shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.</p>
              </PolicySection>

              <PolicySection id={sections[11].id} icon={sections[11].icon} title={sections[11].title}>
                <p>In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:</p>
                <div className="bg-[#fff0e6] p-6 rounded-xl border border-[#ffddcc] mt-6 inline-block w-full sm:w-auto">
                  <p className="font-bold text-gray-900 text-lg mb-2">Fixora Enterprises</p>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Mail className="w-5 h-5 text-[#ff5e14]" />
                    <a href="mailto:fixoraenterprises@gmail.com" className="hover:text-[#ff5e14] transition-colors">fixoraenterprises@gmail.com</a>
                  </div>
                </div>
              </PolicySection>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
