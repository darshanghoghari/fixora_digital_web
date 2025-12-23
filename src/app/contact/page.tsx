"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@heroui/react";
import { Star, MessageSquare } from "lucide-react";
import { SITE_NAME } from "@/constants/navigation";
import { submitFeedback, getReviews, getFeedbackList, type Review } from "@/lib/api";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 0,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [feedbackList, setFeedbackList] = useState<Review[]>([]);
  const [isLoadingReviews, setIsLoadingReviews] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [allReviews, setAllReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoadingReviews(true);
      const [reviewsData, feedbackData] = await Promise.all([
        getReviews(),
        getFeedbackList(),
      ]);
      setReviews(reviewsData);
      setFeedbackList(feedbackData);
      const combined = [...reviewsData, ...feedbackData];
      setAllReviews(combined);
      setIsLoadingReviews(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (allReviews.length <= 3) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 3;
        return next >= allReviews.length ? 0 : next;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [allReviews.length]);

  const getDisplayedReviews = () => {
    if (allReviews.length <= 3) return allReviews;
    const end = currentIndex + 3;
    if (end <= allReviews.length) {
      return allReviews.slice(currentIndex, end);
    }
    const firstPart = allReviews.slice(currentIndex);
    const remaining = 3 - firstPart.length;
    return [...firstPart, ...allReviews.slice(0, remaining)];
  };

  const displayedReviews = getDisplayedReviews();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.rating === 0) {
      alert("Please provide a rating");
      return;
    }
    setIsSubmitting(true);
    const result = await submitFeedback(formData);
    setIsSubmitting(false);
    if (result.success) {
      alert(result.message || "Thank you for your feedback! Your review has been submitted.");
      setFormData({ name: "", email: "", rating: 0, message: "" });
      const [reviewsData, feedbackData] = await Promise.all([
        getReviews(),
        getFeedbackList(),
      ]);
      setReviews(reviewsData);
      setFeedbackList(feedbackData);
      const combined = [...reviewsData, ...feedbackData];
      setAllReviews(combined);
    } else {
      alert(result.message || "Failed to submit feedback. Please try again.");
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
    <div className="min-h-screen">
      <section className="py-24 bg-gradient-to-br from-accent/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-block mb-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg shadow-primary/30">
                <MessageSquare className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Feedback Form
            </h1>
            <p className="text-xl text-muted-foreground">
              Share your experience and help us improve {SITE_NAME}
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
                className="order-2 lg:order-1"
              >
                <h2 className="text-3xl font-bold mb-8 text-foreground">
                  Recent Reviews
                </h2>
                <div className="space-y-6 relative min-h-[400px]">
                  {isLoadingReviews ? (
                    <div className="text-center py-8 text-muted-foreground">Loading reviews...</div>
                  ) : allReviews.length === 0 ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="flex flex-col items-center justify-center py-12"
                    >
                      <svg
                        width="200"
                        height="200"
                        viewBox="0 0 200 200"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mb-6"
                      >
                        <motion.circle
                          cx="100"
                          cy="100"
                          r="80"
                          fill="none"
                          stroke="hsl(var(--color-primary))"
                          strokeWidth="2"
                          strokeOpacity="0.2"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.g
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                        >
                          <motion.path
                            d="M60 80 L80 100 L140 60"
                            stroke="hsl(var(--color-primary))"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                          />
                          <motion.circle
                            cx="100"
                            cy="140"
                            r="15"
                            fill="hsl(var(--color-primary))"
                            initial={{ scale: 0 }}
                            animate={{ scale: [0, 1.2, 1] }}
                            transition={{ duration: 0.8, delay: 1 }}
                          />
                          <motion.path
                            d="M85 140 L100 155 L115 140"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.5, delay: 1.5 }}
                          />
                        </motion.g>
                        <motion.g
                          animate={{
                            rotate: [0, 10, -10, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <motion.circle
                            cx="50"
                            cy="50"
                            r="8"
                            fill="hsl(var(--color-primary))"
                            opacity="0.6"
                            animate={{
                              scale: [1, 1.3, 1],
                              opacity: [0.6, 0.3, 0.6],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                          <motion.circle
                            cx="150"
                            cy="50"
                            r="6"
                            fill="hsl(var(--color-primary))"
                            opacity="0.6"
                            animate={{
                              scale: [1, 1.4, 1],
                              opacity: [0.6, 0.2, 0.6],
                            }}
                            transition={{
                              duration: 2.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 0.3,
                            }}
                          />
                          <motion.circle
                            cx="50"
                            cy="150"
                            r="7"
                            fill="hsl(var(--color-primary))"
                            opacity="0.6"
                            animate={{
                              scale: [1, 1.35, 1],
                              opacity: [0.6, 0.25, 0.6],
                            }}
                            transition={{
                              duration: 2.2,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 0.6,
                            }}
                          />
                          <motion.circle
                            cx="150"
                            cy="150"
                            r="9"
                            fill="hsl(var(--color-primary))"
                            opacity="0.6"
                            animate={{
                              scale: [1, 1.25, 1],
                              opacity: [0.6, 0.3, 0.6],
                            }}
                            transition={{
                              duration: 1.8,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 0.9,
                            }}
                          />
                        </motion.g>
                      </svg>
                    </motion.div>
                  ) : (
                    <AnimatePresence mode="wait">
                      {displayedReviews.map((review, index) => (
                        <motion.div
                          key={`${review.id}-${currentIndex}`}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="bg-card p-6 rounded-xl border border-border hover:border-primary/30 transition-all duration-300"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-lg font-semibold text-foreground mb-1">
                                {review.name}
                              </h3>
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${
                                      i < review.rating
                                        ? "fill-yellow-400 text-yellow-400"
                                        : "text-muted-foreground"
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                            <span className="text-sm text-muted-foreground">
                              {review.date}
                            </span>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {review.comment}
                          </p>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  )}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="order-1 lg:order-2"
              >
                <h2 className="text-3xl font-bold mb-8 text-foreground">
                  Share Your Feedback
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
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-[hsl(var(--color-secondary))] transition-all duration-300"
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
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-[hsl(var(--color-secondary))] transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-3 text-foreground">
                      Rating <span className="text-primary">*</span>
                    </label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => handleStarClick(star)}
                          onMouseEnter={() => setHoveredStar(star)}
                          onMouseLeave={() => setHoveredStar(0)}
                          className="focus:outline-none"
                        >
                          <Star
                            className={`w-8 h-8 transition-all duration-200 ${
                              star <= (hoveredStar || formData.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-muted-foreground"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2 text-foreground"
                    >
                      Your Review
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Share your experience with us..."
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-[hsl(var(--color-secondary))] transition-all duration-300 resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="bordered"
                    size="lg"
                    radius="full"
                    className="w-full px-8 py-6 text-base font-semibold !border-[hsl(var(--color-primary))] border-2 text-[hsl(var(--color-primary))] bg-transparent hover:!bg-[hsl(var(--color-primary))] hover:!text-white transition-all duration-300"
                    isLoading={isSubmitting}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Feedback"}
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

