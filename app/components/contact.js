"use client";

import ContactForm from "@/components/contactForm";
import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  const fadeInDown = {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
  };
  return (
    <div className=" flex flex-col mt-30 mb-0">
      <div className=" max-w-3xl mx-auto px-6">
        <motion.div
          variants={fadeInDown}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <h1 className="text-2xl font-[satoshi-bold] mb-3 tracking-tight">
            Get in touch
          </h1>
          <p className="text-[1rem] mb-3 leading text-neutral-500/95 font-[satoshi-medium] max-w-lg tracking-tight">
            I’m always interested in exploring new opportunities, collaborating,
            or exchanging ideas with like-minded individuals. Feel free to book a
            call or{" "}
            <a
              href="mailto:vicdevmanx@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-neutral-600 cursor-pointer"
            >
              email
            </a>{" "}
            me if you'd like to see my portfolio deck or to discuss a potential
            project.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </div>
  );
}
