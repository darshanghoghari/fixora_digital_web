"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  User, Settings, Users, Cookie, Clock, ShieldCheck, 
  UserX, FileText, Sliders, RefreshCw, Mail, Edit, 
  Headphones, Calendar, Lock, FileCheck, CheckCircle2 
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

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("info-collect");

  const sections = [
    { id: "info-collect", title: "1. WHAT INFORMATION DO WE COLLECT?", short: "Information We Collect", icon: User },
    { id: "process", title: "2. HOW DO WE PROCESS YOUR INFORMATION?", short: "How We Process Info", icon: Settings },
    { id: "share", title: "3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?", short: "Information Sharing", icon: Users },
    { id: "cookies", title: "4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?", short: "Cookies & Tracking", icon: Cookie },
    { id: "keep", title: "5. HOW LONG DO WE KEEP YOUR INFORMATION?", short: "Data Retention", icon: Clock },
    { id: "safe", title: "6. HOW DO WE KEEP YOUR INFORMATION SAFE?", short: "Data Security", icon: ShieldCheck },
    { id: "minors", title: "7. DO WE COLLECT INFORMATION FROM MINORS?", short: "Children's Privacy", icon: UserX },
    { id: "rights", title: "8. WHAT ARE YOUR PRIVACY RIGHTS?", short: "Privacy Rights", icon: FileText },
    { id: "dnt", title: "9. CONTROLS FOR DO-NOT-TRACK FEATURES", short: "Do-Not-Track", icon: Sliders },
    { id: "updates", title: "10. DO WE MAKE UPDATES TO THIS NOTICE?", short: "Updates to Notice", icon: RefreshCw },
    { id: "contact", title: "11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?", short: "Contact Us", icon: Mail },
    { id: "review", title: "12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?", short: "Review or Delete Data", icon: Edit },
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
    { q: "What personal information do we process?", a: "When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use." },
    { q: "Do we process any sensitive personal information?", a: "Some of the information may be considered \"special\" or \"sensitive\" in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and religious beliefs. We may process sensitive personal information when necessary with your consent or as otherwise permitted by applicable law." },
    { q: "Do we collect any information from third parties?", a: "We do not collect any information from third parties." },
    { q: "How do we process your information?", a: "We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so." },
    { q: "In what situations and with which parties do we share personal information?", a: "We may share information in specific situations and with specific third parties." },
    { q: "How do we keep your information safe?", a: "We have adequate organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information." },
    { q: "What are your rights?", a: "Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information." },
    { q: "How do you exercise your rights?", a: "The easiest way to exercise your rights is by submitting a data subject access request, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws." },
    { q: "Want to learn more about what we do with any information we collect?", a: "Review the Privacy Notice in full." }
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#fff6f0] pt-24 pb-16 relative overflow-hidden border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
              <div className="w-16 h-1 bg-[#ff5e14] mb-6 rounded-full"></div>
              <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
                Your privacy is important to us. This Privacy Notice describes how and why we might access, collect, store, use, and/or share your personal information when you use our services.
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
                <ShieldCheck className="w-32 h-32 sm:w-40 sm:h-40 text-[#ff5e14]" />
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="absolute top-8 -left-6 sm:-left-10 bg-white p-3 sm:p-4 rounded-xl shadow-xl border border-gray-100"
                >
                  <Lock className="w-6 h-6 sm:w-8 sm:h-8 text-[#ff5e14]" />
                </motion.div>
                <motion.div 
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="absolute bottom-8 -right-6 sm:-right-10 bg-white p-3 sm:p-4 rounded-xl shadow-xl border border-gray-100"
                >
                  <FileCheck className="w-6 h-6 sm:w-8 sm:h-8 text-[#ff5e14]" />
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
                <p className="text-sm text-gray-500 mb-6 leading-relaxed">We're here to help you with any privacy related concerns.</p>
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
                This Privacy Notice for Fixora Enterprises ("we," "us," or "our"), describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-[#ff5e14] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Visit our website at <a href="https://fixora-digital-web.vercel.app/" className="text-[#ff5e14] hover:underline font-medium" target="_blank" rel="noopener noreferrer">https://fixora-digital-web.vercel.app/</a> or any website of ours that links to this Privacy Notice.</span>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-[#ff5e14] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Download and use our mobile application (Fixora), or any other application of ours that links to this Privacy Notice.</span>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-[#ff5e14] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Use Fixora Enterprises. We value your privacy and are committed to keeping your personal information safe. Our app collects basic details such as your name, contact information, location, and service booking data to help connect customers with service providers and deliver a smooth service experience. We do not sell your personal information and only share necessary details to complete requested services or comply with legal requirements. By using our application, you agree to the collection and use of your information as described, while we take reasonable steps to protect your data and maintain its security.</span>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-[#ff5e14] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Engage with us in other related ways, including any marketing or events.</span>
                </li>
              </ul>
              <div className="mt-8 p-6 bg-[#fff0e6] rounded-xl border border-[#ffddcc] flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100">
                  <Mail className="w-6 h-6 text-[#ff5e14]" />
                </div>
                <div>
                  <p className="text-gray-900 font-bold mb-1">Questions or concerns?</p>
                  <p className="text-sm text-gray-600">Reading this Privacy Notice will help you understand your privacy rights and choices. If you do not agree with our policies, please do not use our Services. Contact us at <a href="mailto:fixoraenterprises@gmail.com" className="text-[#ff5e14] hover:underline font-medium">fixoraenterprises@gmail.com</a>.</p>
                </div>
              </div>
            </div>

            {/* Summary of Key Points */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">SUMMARY OF KEY POINTS</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">This summary provides key points from our Privacy Notice. You can find out more details about any of these topics by clicking the links or scrolling down.</p>
              
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
                <p><strong>In Short:</strong> We collect personal information that you provide to us.</p>
                <p>We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>
                
                <h4 className="font-bold text-gray-900 mt-8 mb-4 text-lg">Personal Information Provided by You</h4>
                <p>The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
                  {['Names', 'Phone numbers', 'Email addresses', 'Mailing addresses', 'Job titles', 'Usernames', 'Passwords', 'Contact preferences', 'Contact or authentication data', 'Billing addresses', 'Debit/credit card numbers'].map(item => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#ff5e14] flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="font-bold text-gray-900 mt-8 mb-4 text-lg">Sensitive Information</h4>
                <p>When necessary, with your consent or as otherwise permitted by applicable law, we process the following categories of sensitive information:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                  {['Credit worthiness data', 'Information revealing trade union membership', 'Information revealing religious or philosophical beliefs', 'Bank details', 'Transaction details'].map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#ff5e14] flex-shrink-0 mt-1" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="font-bold text-gray-900 mt-8 mb-2 text-lg">Payment Data</h4>
                <p>We may collect data necessary to process your payment if you choose to make purchases, such as your payment instrument number, and the security code associated with your payment instrument. All payment data is handled and stored by Razorpay. You may find their privacy notice link(s) here: <a href="https://razorpay.com/privacy-policy/" className="text-[#ff5e14] hover:underline" target="_blank" rel="noopener noreferrer">https://razorpay.com/privacy-policy/</a>.</p>

                <h4 className="font-bold text-gray-900 mt-8 mb-4 text-lg">Application Data</h4>
                <p>If you use our application(s), we also may collect the following information if you choose to provide us with access or permission:</p>
                <div className="space-y-4 pl-4 border-l-2 border-[#ffeadd] mt-4 ml-2">
                  <div><strong className="text-gray-900">Geolocation Information.</strong> We may request access or permission to track location-based information from your mobile device, either continuously or while you are using our mobile application(s), to provide certain location-based services. If you wish to change our access or permissions, you may do so in your device's settings.</div>
                  <div><strong className="text-gray-900">Mobile Device Access.</strong> We may request access or permission to certain features from your mobile device, including your mobile device's and other features. If you wish to change our access or permissions, you may do so in your device's settings.</div>
                  <div><strong className="text-gray-900">Mobile Device Data.</strong> We automatically collect device information (such as your mobile device ID, model, and manufacturer), operating system, version information and system configuration information, device and application identification numbers, browser type and version, hardware model Internet service provider and/or mobile carrier, and Internet Protocol (IP) address (or proxy server). If you are using our application(s), we may also collect information about the phone network associated with your mobile device, your mobile device's operating system or platform, the type of mobile device you use, your mobile device's unique device ID, and information about the features of our application(s) you accessed.</div>
                  <div><strong className="text-gray-900">Push Notifications.</strong> We may request to send you push notifications regarding your account or certain features of the application(s). If you wish to opt out from receiving these types of communications, you may turn them off in your device's settings.</div>
                </div>
                <p className="mt-4">This information is primarily needed to maintain the security and operation of our application(s), for troubleshooting, and for our internal analytics and reporting purposes.</p>
                <p>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>

                <h4 className="font-bold text-gray-900 mt-8 mb-2 text-lg">Google API</h4>
                <p>Our use of information received from Google APIs will adhere to Google API Services User Data Policy, including the Limited Use requirements.</p>
              </PolicySection>

              <PolicySection id={sections[1].id} icon={sections[1].icon} title={sections[1].title}>
                <p><strong>In Short:</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</p>
                <p>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</p>
                <ul className="space-y-3 mt-4">
                  {[
                    "To facilitate account creation and authentication and otherwise manage user accounts.",
                    "To respond to user inquiries/offer support to users.",
                    "To fulfill and manage your orders.",
                    "To enable user-to-user communications.",
                    "To request feedback.",
                    "To post testimonials.",
                    "To protect our Services. We may process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention.",
                    "To administer prize draws and competitions.",
                    "To evaluate and improve our Services, products, marketing, and your experience.",
                    "To comply with our legal obligations, respond to legal requests, and exercise, establish, or defend our legal rights."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                      <CheckCircle2 className="w-5 h-5 text-[#ff5e14] flex-shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </PolicySection>

              <PolicySection id={sections[2].id} icon={sections[2].icon} title={sections[2].title}>
                <p><strong>In Short:</strong> We may share information in specific situations described in this section and/or with the following third parties.</p>
                <p>We may need to share your personal information in the following situations:</p>
                <div className="space-y-4 mt-6">
                  <div className="flex gap-4 bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-[#fff0e6] flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="w-5 h-5 text-[#ff5e14]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Business Transfers</h4>
                      <p className="text-sm md:text-base text-gray-600">We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-[#fff0e6] flex items-center justify-center flex-shrink-0 mt-1">
                      <Lock className="w-5 h-5 text-[#ff5e14]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">When we use Google Maps Platform APIs</h4>
                      <p className="text-sm md:text-base text-gray-600">We may share your information with certain Google Maps Platform APIs (e.g., Google Maps API, Places API). Google Maps uses GPS, Wi-Fi, and cell towers to estimate your location. GPS is accurate to about 20 meters, while Wi-Fi and cell towers help improve accuracy when GPS signals are weak, like indoors. This data helps Google Maps provide directions, but it is not always perfectly precise.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-[#fff0e6] flex items-center justify-center flex-shrink-0 mt-1">
                      <ShieldCheck className="w-5 h-5 text-[#ff5e14]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Business Partners</h4>
                      <p className="text-sm md:text-base text-gray-600">We may share your information with our business partners to offer you certain products, services, or promotions.</p>
                    </div>
                  </div>
                </div>
              </PolicySection>

              <PolicySection id={sections[3].id} icon={sections[3].icon} title={sections[3].title}>
                <p><strong>In Short:</strong> We may use cookies and other tracking technologies to collect and store your information.</p>
                <p>We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services and your account, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.</p>
                <p>We also permit third parties and service providers to use online tracking technologies on our Services for analytics and advertising, including to help manage and display advertisements, to tailor advertisements to your interests, or to send abandoned shopping cart reminders (depending on your communication preferences). The third parties and service providers use their technology to provide advertising about products and services tailored to your interests which may appear either on our Services or on other websites.</p>
                <p>Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.</p>
              </PolicySection>

              <PolicySection id={sections[4].id} icon={sections[4].icon} title={sections[4].title}>
                <p><strong>In Short:</strong> We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.</p>
                <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.</p>
                <p>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>
              </PolicySection>

              <PolicySection id={sections[5].id} icon={sections[5].icon} title={sections[5].title}>
                <p><strong>In Short:</strong> We aim to protect your personal information through a system of organizational and technical security measures.</p>
                <p>We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</p>
              </PolicySection>

              <PolicySection id={sections[6].id} icon={sections[6].icon} title={sections[6].title}>
                <p><strong>In Short:</strong> We do not knowingly collect data from or market to children under 18 years of age.</p>
                <p>We do not knowingly collect, solicit data from, or market to children under 18 years of age, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at <a href="mailto:fixoraenterprises@gmail.com" className="text-[#ff5e14] hover:underline font-medium">fixoraenterprises@gmail.com</a>.</p>
              </PolicySection>

              <PolicySection id={sections[7].id} icon={sections[7].icon} title={sections[7].title}>
                <p><strong>In Short:</strong> You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.</p>
                <p><strong>Withdrawing your consent:</strong> If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.</p>
                <p>However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</p>
                
                <h4 className="font-bold text-gray-900 mt-8 mb-4 text-lg">Account Information</h4>
                <p>If you would at any time like to review or change the information in your account or terminate your account, you can:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2 marker:text-[#ff5e14]">
                  <li>Log in to your account settings and update your user account.</li>
                  <li>Contact us using the contact information provided.</li>
                </ul>
                <p className="mt-4">Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.</p>

                <p className="mt-6"><strong>Cookies and similar technologies:</strong> Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services.</p>
                <p className="mt-6">If you have questions or comments about your privacy rights, you may email us at <a href="mailto:fixoraenterprises@gmail.com" className="text-[#ff5e14] hover:underline font-medium">fixoraenterprises@gmail.com</a>.</p>
              </PolicySection>

              <PolicySection id={sections[8].id} icon={sections[8].icon} title={sections[8].title}>
                <p>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.</p>
              </PolicySection>

              <PolicySection id={sections[9].id} icon={sections[9].icon} title={sections[9].title}>
                <p><strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>
                <p>We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Revised" date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.</p>
              </PolicySection>

              <PolicySection id={sections[10].id} icon={sections[10].icon} title={sections[10].title}>
                <p>If you have questions or comments about this notice, you may contact us by post at:</p>
                <div className="bg-[#fff0e6] p-6 rounded-xl border border-[#ffddcc] mt-6 inline-block w-full sm:w-auto">
                  <p className="font-bold text-gray-900 text-lg mb-2">Fixora Enterprises</p>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Mail className="w-5 h-5 text-[#ff5e14]" />
                    <a href="mailto:fixoraenterprises@gmail.com" className="hover:text-[#ff5e14] transition-colors">fixoraenterprises@gmail.com</a>
                  </div>
                </div>
              </PolicySection>

              <PolicySection id={sections[11].id} icon={sections[11].icon} title={sections[11].title}>
                <p>Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please fill out and submit a data subject access request.</p>
              </PolicySection>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
