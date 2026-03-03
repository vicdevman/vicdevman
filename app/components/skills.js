"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, Bot, Link as LinkIcon, Network, Command } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

export default function Skills() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  const fadeInDown = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
  };

  const skills = [
    {
      id: "fullstack",
      title: "Full-Stack Engineering",
      icon: <Layers size={18} className="text-neutral-700" />,
      description:
        "Clean frontend experiences merged with scalable, production-ready backend systems.",
      techs: "React, Next.js, Node.js, TypeScript, fastAPI",
    },
    {
      id: "ai",
      title: "AI Automation",
      icon: <Bot size={18} className="text-neutral-700" />,
      description:
        "Intelligent systems embedded directly into products to automate high-friction workflows.",
      techs: "OpenAI, LangChain, Python, Vector DBs",
    },
    {
      id: "web3",
      title: "Web3 Integration",
      icon: <LinkIcon size={18} className="text-neutral-700" />,
      description:
        "Decentralized architecture securely bridging traditional web and blockchain functionality.",
      techs: "Solidity, The Graph, Web3.js, Solana",
    },
    {
      id: "systems",
      title: "Systems Architecture",
      icon: <Network size={18} className="text-neutral-700" />,
      description:
        "Designing for growth, resilience, and maintainability. Not just code, but reliable systems.",
      techs: "Docker, AWS, CI/CD, Serverless",
    },
  ];

  return (
    <div className="flex flex-col mt-24 mb-10">
      <div className="max-w-3xl mx-auto px-6 w-full">
        <motion.div
          variants={fadeInDown}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-10 text-center"
        >
          {/* <div className="flex items-center justify-center gap-2 mb-3">
            <Command size={16} className="text-neutral-400" />
            <span className="text-xs uppercase tracking-widest text-neutral-400 font-[satoshi-bold]">
              Expertise
            </span>
          </div> */}
          <h1 className="text-3xl max-sm:text-2xl font-[satoshi-bold] tracking-tight text-neutral-900">
            How Can I Help?
          </h1>
          <p className="text-lg max-sm:text-[1rem] mt-2 text-neutral-500 font-[satoshi-medium] tracking-tight leading-relaxed max-w-xl mx-auto">
            Turning complex ideas into structured, scalable products without
            compromising maintainability.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="group flex flex-col justify-between rounded-3xl bg-neutral-100/60 p-6 border border-neutral-200/40 shadow-[inset_0_2px_4px_rgba(255,255,255,0.5),inset_0_-2px_4px_rgba(255,255,255,0.5)] hover:bg-neutral-100 transition-colors duration-300"
            >
              <div>
               <div className="flex justify-between items-start mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-neutral-100/80 border border-neutral-200/50 flex items-center justify-center group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-sm">
                    {skill.icon}
                  </div>
                  {/* <ArrowUpRight
                    size={20}
                    className="text-neutral-300 group-hover:text-neutral-900 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500"
                  /> */}
                </div>
                <h2 className="text-lg font-[satoshi-bold] tracking-tight text-neutral-900 mb-2">
                  {skill.title}
                </h2>
                <p className="text-[0.95rem] text-neutral-500 font-[satoshi-medium] leading-relaxed mb-6">
                  {skill.description}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-200/60">
                <p className="text-xs font-[satoshi-medium] tracking-wide text-neutral-400">
                  {skill.techs}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
