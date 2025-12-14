"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import contentData from "@/data/content.json";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you for your message! We'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      <section className="py-24 bg-gradient-to-br from-accent/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions? We'd love to hear from you
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2 className="text-3xl font-bold mb-8 text-foreground">
                  Contact Information
                </h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      Email
                    </h3>
                    <a
                      href={`mailto:${contentData.site.email}`}
                      className="text-primary hover:text-primary hover:bg-white px-3 py-1.5 rounded-md transition-all duration-300 inline-block"
                    >
                      {contentData.site.email}
                    </a>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      Phone
                    </h3>
                    <a
                      href={`tel:${contentData.site.phone.replace(/\s/g, "")}`}
                      className="text-primary hover:text-primary hover:bg-white px-3 py-1.5 rounded-md transition-all duration-300 inline-block"
                    >
                      {contentData.site.phone}
                    </a>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      Office Hours
                    </h3>
                    <p className="text-muted-foreground">
                      {contentData.site.officeHours.weekdays}<br />
                      {contentData.site.officeHours.saturday}<br />
                      {contentData.site.officeHours.sunday}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      Address
                    </h3>
                    <p className="text-muted-foreground">
                      {contentData.site.address.street}<br />
                      {contentData.site.address.suite}<br />
                      {contentData.site.address.city}, {contentData.site.address.state} {contentData.site.address.zip}
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2 className="text-3xl font-bold mb-8 text-foreground">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2 text-foreground"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2 text-foreground"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2 text-foreground"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2 text-foreground"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-white hover:text-primary hover:border-2 hover:border-primary transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary disabled:hover:text-white disabled:hover:border-0 disabled:hover:translate-y-0"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

