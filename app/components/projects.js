"use client";

import React from "react";
import LogoLoop from "@/components/LogoLoop";
import Image from "next/image";
import { Flower } from "lucide-react";
import { Phone } from "lucide-react";
import { Laptop, ChevronRight } from "lucide-react";
import Link from "next/link";
import { projects } from "../data/projects.data";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";


const SvgTemplate = ({ image }) => {
  return (
    <Image
      src={image}
      alt="Project Image"
      width={200}
      height={200}
      className="w-7 h-7 fill-neutral-200"
    />
  );
};

export default function Projects({show = true}) {

  const router = useRouter();

  const techLogos = [
    {
      node: <SvgTemplate image="/icon/html-124-svgrepo-com.svg" />,
      title: "Next.js",
      href: "https://nextjs.org",
    },
    {
      node: <SvgTemplate image="/icon/flutter-svgrepo-com.svg" />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
    {
      node: <SvgTemplate image="/icon/nextjs-svgrepo-com.svg" />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
    {
      node: <SvgTemplate image="/icon/typescript-svgrepo-com.svg" />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: <SvgTemplate image="/icon/java-svgrepo-com.svg" />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },

    {
      node: <SvgTemplate image="/icon/python-127-svgrepo-com.svg" />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
    {
      node: <SvgTemplate image="/icon/javascript-svgrepo-com.svg" />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
    {
      node: <SvgTemplate image="/icon/nodejs02-svgrepo-com.svg" />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  const fadeInDown = {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div id="projects" className="cursor-pointer relative z-5 flex flex-col justify-center mt-20">
      <div className="max-w-220 mx-auto px-6 flex flex-col items-center">
        <motion.div
          variants={fadeInDown}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="w-full flex flex-col items-center"
        >
        <div className="w-42 cursor-default relative overflow-hidden h-full">
          <LogoLoop
            logos={techLogos}
            containerHeight={80}
            speed={20}
            direction="left"
            itemWidth={82}
            itemHeight={80}
            objectFit="cover"
            //aspectRatio="16/9"
            gap={-46}
            fadeOut
            pauseOnHover={false}
          />
        </div>

        <h1 className="text-3xl max-sm:text-2xl font-[satoshi-bold] tracking-tight -mt-2 mb-2 relative z-20">
          Here’s What I’ve Been Up To.
        </h1>

        </motion.div>

        <motion.div
          id="work"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2, delay: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }} className="grid grid-cols-2 max-md:grid-cols-1 gap-6 mt-10">
          {projects &&
            projects.map((project) => (
              <div onClick={() => router.push(`/projects/${project.id}`)} key={project.id} className="border flex flex-col items-start gap-4 bg-white border-neutral-200/90 p-4 rounded-3xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1000}
                  height={1000}
                  className="object-cover min-w-full w-200 h-56 rounded-2xl border border-neutral-200/90 shadow-[0_8px_20px_0_rgba(0,0,0, 0.8)]"
                />

                <h1 className="text-[1.35rem] font-[satoshi-bold] mb-2 tracking-tighter ml-2 ">
                  {project.title}
                </h1>
                <p className="text-[1rem] line-clamp-2 mb-2 leading-tight text-neutral-500/95 font-[satoshi-medium] max-w-sm tracking ml-2 -mt-2">
                  {project.longDescription}
                </p>

                <Link href={`/projects/${project.id}`} className="whitespace-nowrap bg-neutral-100 px-5 py-3 text-md cursor-pointer rounded-xl font-[satoshi-medium] flex justify-between w-40 transition hover:scale-x-108 active:scale-x-108 hover:bg-neutral-200/80 origin-left items-center">
                  View Project
                  <ChevronRight size={18} />
                </Link>
              </div>
            ))}
        </motion.div>
        <div className={`${show ? 'block' : 'hidden'} mt-10`}>
          <Link
            href="/projects"
            className="group whitespace-nowrap flex gap-2 items-center bg-[#191919] tracking-tight text-white px-6 py-3 text-md cursor-pointer rounded-xl font-[satoshi-bold] hover:bg-neutral-800 transition-colors duration-300"
          >
            View All
            <span className="flex items-center overflow-hidden w-0 group-hover:w-5 transition-all duration-300 ease-out">
              <span className="translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-active:translate-y-0 group-active:opacity-100 transition-all duration-300 ease-out">
                <ChevronRight size={18} />
              </span>
            </span>
          </Link>
        </div>
      </div>
      {/* <div className="w-full h-px bg-neutral-200/90 "></div> */}
    </div>
  );
}
