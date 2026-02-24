"use client";

import { ChevronRight } from "lucide-react";
import { House, Linkedin, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  const header = [
    { icon: "Twitter", label: "Twitter(X)", link: "https://x.com/vicdevman" },
    { icon: "Github", label: "Github", link: "https://github.com/vicdevman" },
    {
      icon: "LinkedIn",
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/vicdevman",
    },
  ];

  const fadeInDown = {
    initial: { opacity: 0, y: -80 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      id="about"
      variants={fadeInDown}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="border border-neutral-300/60 shadow-[inset_0_2px_8px_rgba(255,255,255,0.5),_inset_0_-2px_8px_rgba(255,255,255,0.5)] bg-white/20 backdrop-blur-lg p-1 px-1.5 rounded-3xl fixed left-1/2 z-100 transform -translate-x-1/2 top-8 max-w-sm:top-6 flex items-center gap-1"
    >
      <Link
        href="/"
        className="group flex items-center text-neutral-800 gap-2 px-5 py-4 cursor-pointer hover:bg-neutral-400/20 transition-colors rounded-2xl"
      >
        <div className="relative">
          <House size={18} />

          <div
            className="
            absolute left-1/2 top-full
            -translate-x-1/2 translate-y-4.5
            opacity-0 scale-95
            group-hover:opacity-100
            group-hover:translate-y-6
            group-hover:scale-100
            transition-all duration-300 ease-out
            pointer-events-none
            bg-neutral-700 text-white
            rounded-lg px-4 py-1.5
            text-sm font-[satoshi-bold] tracking-tight
            whitespace-nowrap
          "
          >
            {" "}
            Home
          </div>
        </div>
      </Link>

      <div className="h-6 w-[1.5px] bg-neutral-400/40"></div>
      {header.map((item, index) => {
        let Icon;
        let label;
        let fullIcon;

        if (item.icon === "Twitter") {
            fullIcon = (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                strokeWidth="1"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
                imageRendering="optimizeQuality"
                fillRule="evenodd"
                clipRule="evenodd"
                viewBox="0 0 512 462.799"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  fillRule="nonzero"
                  d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
                />
              </svg>
            );
          Icon = null
          label = "Twitter";
        }
        if (item.icon === "Github") {
          Icon = Github;
          label = "Github";
        }
        if (item.icon === "LinkedIn") {
          Icon = Linkedin;
          label = "LinkedIn";
        }

        return (
          <Link
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="group flex items-center text-neutral-800 px-4.5 max-sm:px-3 py-4 cursor-pointer hover:bg-neutral-400/20 transition-colors duration-300 rounded-2xl"
          >
            <div className="relative flex items-center justify-center">
              {Icon ? <Icon size={19} /> : fullIcon}

              {/* Tooltip */}
              <div
                className="
            absolute left-1/2 top-full
            -translate-x-1/2 translate-y-4.5
            opacity-0 scale-95
            group-hover:opacity-100
            group-hover:translate-y-6
            group-hover:scale-100
            transition-all duration-300 ease-out
            pointer-events-none
            bg-neutral-700 text-white
            rounded-lg px-4 py-1.5
            text-sm font-[satoshi-bold] tracking-tight
            whitespace-nowrap
          "
              >
                {label}
              </div>
            </div>
          </Link>
        );
      })}

      <div className="h-6 w-[1.5px] bg-neutral-400/20 mx-2"></div>

      <button className="bg-[#191919] hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] shadow text-white px-6 py-3 text-md cursor-pointer rounded-xl font-[satoshi-bold] hover:bg-neutral-800 transition">
        Resume
      </button>
    </motion.div>
  );
}
