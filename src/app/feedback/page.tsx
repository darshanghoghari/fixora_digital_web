"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { Star, User, Mail, MessageSquare, Send } from "lucide-react";
import { SITE_NAME } from "@/constants/navigation";
import { submitFeedback } from "@/lib/api";
import toast from "react-hot-toast";

export default function Feedback() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 0,
    note: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredStar, setHoveredStar] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.rating === 0) {
      toast.error("Please provide a rating");
      return;
    }
    setIsSubmitting(true);
    const result = await submitFeedback(formData);
    setIsSubmitting(false);
    if (result.success) {
      toast.success(result.message || "Thank you for your feedback! Your review has been submitted.");
      setFormData({ name: "", email: "", rating: 0, note: "" });
    } else {
      toast.error(result.message || "Failed to submit feedback. Please try again.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleStarClick = (rating: number) => {
    setFormData({ ...formData, rating });
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#fff7f0] to-white pointer-events-none" />
      
      {/* Background Icons */}
      <div className="absolute top-32 left-10 md:left-32 opacity-20 pointer-events-none">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 2L11 13" />
          <path d="M22 2L15 22L11 13L2 9L22 2Z" />
        </svg>
      </div>
      <div className="absolute top-20 left-60 opacity-20 pointer-events-none">
        <MessageSquare size={60} color="#f97316" strokeWidth={1} />
      </div>
      <div className="absolute top-64 right-10 md:right-32 opacity-20 pointer-events-none">
        <MessageSquare size={180} color="#f97316" strokeWidth={1} />
      </div>
      <div className="absolute top-40 right-60 opacity-20 pointer-events-none">
        <Star size={40} color="#f97316" strokeWidth={1} />
      </div>
      <div className="absolute top-96 left-40 opacity-20 pointer-events-none">
        <Star size={30} color="#f97316" strokeWidth={1} />
      </div>
      
      {/* Curved dashed line decoration */}
      <div className="absolute top-64 left-10 opacity-20 pointer-events-none">
        <svg width="200" height="100" fill="none">
          <path d="M 0 80 Q 100 100 200 0" stroke="#f97316" strokeWidth="2" strokeDasharray="5,5" />
        </svg>
      </div>

      <div className="relative z-10 pt-20 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1e293b]">
              We Value Your <span className="text-[#f97316]">Feedback</span>
            </h1>
            <p className="text-lg text-gray-600">
              Your feedback helps us improve FIXORA and deliver<br />
              a better experience for you.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-[#1e293b]">
                    Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <div className="bg-[#fff7f0] p-1.5 rounded-md">
                        <User className="h-5 w-5 text-[#f97316]" />
                      </div>
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-14 pr-4 py-3.5 rounded-xl border border-gray-200 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f97316]/20 focus:border-[#f97316] transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-[#1e293b]">
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <div className="bg-[#fff7f0] p-1.5 rounded-md">
                        <Mail className="h-5 w-5 text-[#f97316]" />
                      </div>
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-14 pr-4 py-3.5 rounded-xl border border-gray-200 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f97316]/20 focus:border-[#f97316] transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Rating Field */}
                <div>
                  <label className="block text-sm font-semibold mb-3 text-[#1e293b]">
                    Rating <span className="text-[#f97316]">*</span>
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleStarClick(star)}
                        onMouseEnter={() => setHoveredStar(star)}
                        onMouseLeave={() => setHoveredStar(0)}
                        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316] rounded-md p-0.5"
                      >
                        <Star
                          className={`w-8 h-8 transition-all duration-200 ${
                            star <= (hoveredStar || formData.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300 hover:text-gray-400"
                          }`}
                          fill={star <= (hoveredStar || formData.rating) ? "currentColor" : "none"}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Feedback Note Field */}
                <div>
                  <label htmlFor="note" className="block text-sm font-semibold mb-2 text-[#1e293b]">
                    Your Feedback
                  </label>
                  <div className="relative">
                    <div className="absolute top-4 left-4 pointer-events-none">
                      <div className="bg-[#fff7f0] p-1.5 rounded-md">
                        <MessageSquare className="h-5 w-5 text-[#f97316]" />
                      </div>
                    </div>
                    <textarea
                      id="note"
                      name="note"
                      placeholder="Share your experience with us..."
                      value={formData.note}
                      onChange={handleChange}
                      required
                      rows={5}
                      maxLength={500}
                      className="w-full pl-14 pr-4 py-4 rounded-xl border border-gray-200 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f97316]/20 focus:border-[#f97316] transition-all duration-300 resize-none"
                    />
                    <div className="absolute bottom-3 right-4 text-xs text-gray-400 font-medium">
                      {formData.note.length}/500
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full py-6 text-base font-semibold bg-[#f97316] hover:bg-[#ea580c] text-white border-none rounded-xl flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg"
                  isLoading={isSubmitting}
                  disabled={isSubmitting}
                >
                  {!isSubmitting && <Send className="w-5 h-5" />}
                  {isSubmitting ? "Submitting..." : "Submit Feedback"}
                </Button>
                
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
