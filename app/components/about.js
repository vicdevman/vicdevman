"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      id="about"
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className=" flex flex-col mt-100"
    >
      <div className=" max-w-3xl mx-auto px-6">
        <h1 className="text-2xl font-[satoshi-bold] mb-2 tracking-tight">
          About
        </h1>
        <p className="text-[1rem] mb-2 leading-tight text-neutral-500/95 font-[satoshi-medium] max-w-lg tracking">
           I build interactive,
          production-ready applications that combine clean frontend experience
          with intelligent backend systems.
          <br /> <br />
          My work sits at the intersection of full-stack engineering, AI
          automation, and Web3 integration. I focus on turning complex ideas
          into working products fast, without sacrificing structure,
          scalability, or long-term maintainability.
          <br /> <br />
          I am especially interested in helping Web3 startups and SaaS founders
          embed AI directly into their platforms, automate operational
          workflows, and launch systems that feel modern, intelligent, and
          reliable.
          <br /> <br />
          I approach engineering with product thinking. Clean interfaces matter.
          Scalable architecture matters. Shipping fast matters.
        </p>{" "}
        <motion.div
          id="about"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2, delay: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="group p-2 mt-18 flex justify-center absolute left-1/2 -translate-x-1/2 cursor-pointer"
        >
          <div className="absolute -right-8 w-48 flex flex-col gap-2 bg-white rounded-xl shadow-[0_2px_10px_0_rgba(0,0,0,0.2)] p-1.5 rotate-350 transition duration-300 group-hover:-translate-x-8 group-hover:-translate-y-4 group-hover:rotate-345">
            <Image
              src="/victor.jpeg"
              alt="victor"
              width={400}
              height={500}
              className="rounded-lg h-48 object-cover object-top"
            />

            <p className="text-center -mt-1 font-[satoshi-light-italic] text-md tracking-tight">
              @victor adeiza
            </p>
          </div>

          <div className="absolute z-2 -top-6 -left-8 w-48 flex flex-col gap-2 bg-white rounded-xl shadow-[0_2px_10px_0_rgba(0,0,0,0.3)] p-1.5 rotate-12 transition duration-300 group-hover:translate-x-8 group-hover:-translate-y-4 group-hover:rotate-17">
            <Image
              src="/vicdevman.webp"
              alt="vicdevman avartar"
              width={400}
              height={500}
              className="rounded-lg h-48 object-cover"
            />

            <p className="text-center -mt-1 font-[satoshi-light-italic] text-md tracking-tight">
              @vicdevman
            </p>
          </div>
        </motion.div>
      </div>

      {/* <div className="w-full h-px bg-neutral-200/90 mt-100"></div> */}
    </motion.div>
  );
}
