"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Creative Solutions Ltd.",
    duration: "2024 - Present",
    description:
      "Leading the development of a customer relationship management (CRM) system using Next.js and TypeScript. Collaborating with cross-functional teams to design and implement scalable solutions, improving user engagement by 30%.",
  },
  {
    title: "Frontend Engr. Intern",
    company: "Guru Innovation hub",
    duration: "2023 - August 2023",
    description:
      "Contributed to the development of a real-time data analytics dashboard using React and Node.js. Implemented new features and optimized existing code, resulting in a 20% improvement in performance.",
  },
];

export default function Work() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col items-start mt-24 mb-16">
      <div className="max-w-3xl mx-auto px-6 w-full">
        <h1 className="text-2xl max-sm:text-2xl font-[satoshi-bold] mb-10 tracking-tight text-neutral-900">
          Work Experience
        </h1>

        <motion.div
          id="work"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2, delay: 0.1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col gap-4 w-full"
        >
          {experiences.map((experience, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={index}
                onClick={() => toggleExpand(index)}
                className={`group flex flex-col w-full rounded-2xl border transition-colors duration-300 cursor-pointer overflow-hidden
                  ${isExpanded ? "bg-white border-neutral-200 shadow-sm" : "bg-neutral-50/50 border-neutral-200/50 hover:bg-neutral-50 hover:border-neutral-200"}`}
              >
                {/* Header / Clickable Area */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 w-full p-6 md:p-6">
                  {/* Left Side: Role + Company */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 flex-1">
                    <h2 className="text-[1.1rem] font-[satoshi-bold] text-neutral-900 tracking-tight">
                      {experience.title}
                    </h2>

                    <span className="hidden sm:block text-neutral-300 font-[satoshi-normal] mr-2">
                      at
                    </span>

                    <div className="inline-flex w-fit -ml-2 items-center text-[0.9rem] font-[satoshi-bold] px-3 py-1 bg-blue-50 border border-blue-100/50 text-blue-600 rounded-lg">
                      {experience.company}
                    </div>
                  </div>

                  {/* Right Side: Duration + Chevron */}
                  <div className="flex items-center justify-between sm:justify-end gap-6 sm:min-w-[180px]">
                    <p className="text-sm font-[satoshi-bold] text-neutral-400 tracking-tight">
                      {experience.duration}
                    </p>

                    <div
                      className={`p-1 rounded-full transition-transform duration-300 ${isExpanded ? "rotate-180 bg-neutral-100 text-neutral-900" : "bg-transparent text-neutral-400 group-hover:text-neutral-900 group-hover:bg-neutral-100"}`}
                    >
                      <ChevronDown size={18} />
                    </div>
                  </div>
                </div>

                {/* Expandable Content Area */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 text-[1rem] leading-relaxed text-neutral-500 font-[satoshi-medium] border-t border-neutral-100/50">
                        {experience.description}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
