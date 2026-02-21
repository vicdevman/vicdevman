"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Loader } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "Message sent successfully! Check your email for confirmation.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 flex flex-col gap-4 max-sm:gap-2 min-full"
    >
      <AnimatePresence mode="wait">
        {submitStatus.type && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`p-4 rounded-xl text-sm font-medium ${
              submitStatus.type === "success"
                ? "bg-green-500/10 text-green-500 border border-green-500/20"
                : "bg-red-500/10 text-red-500 border border-red-500/20"
            }`}
          >
            {submitStatus.message}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex gap-4 max-sm:gap-2">
        <Input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your Name"
          className="border border-neutral-200 bg-neutral-100/60 h-12 placeholder:text-neutral-400 p-4 font-[satoshi-medium] rounded-xl"
          required
          disabled={isSubmitting}
        />
        <Input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your Email"
          className="border border-neutral-200 font-[satoshi-medium] placeholder:text-neutral-400 p-4 bg-neutral-100/60 h-12 rounded-xl"
          required
          disabled={isSubmitting}
        />
      </div>
      <Textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Write your Message"
        className="border border-neutral-200 font-[satoshi-medium] placeholder:text-neutral-400 p-4 bg-neutral-100/60 h-30 rounded-xl"
        required
        disabled={isSubmitting}
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-4 py-3 font-[satoshi-medium]  bg-[#191919] cursor-pointer text-white rounded-xl mt-2 disabled:opacity-60 disabled:cursor-not-allowed transition-opacity"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            {/* <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span> */}
            <Loader className="animate-spin text-white/50" size={18} />
            Sending...
          </span>
        ) : (
          <>
            Send Message <Send className="inline-block ml-2 mb-1" size={16} />
          </>
        )}
      </button>
    </form>
  );
}
