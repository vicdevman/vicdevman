"use client";

import React from "react";
import { projects } from "../data/projects.data";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { Link2 } from "lucide-react";
import { ExternalLink } from "lucide-react";
import { Github } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

//  {
//     id: "ticky",
//     title: "Ticky",
//     image: "/project-image/ticky-game.png",
//     description: "Multiplayer Tic-Tac-Toe game with real-time updates",
//     longDescription:
//       "Ticky is a multiplayer Tic-Tac-Toe game with real-time updates. It features a responsive and intuitive interface, smooth animations, and a leaderboard to track player performance. The game is built using React, Node.js, and TypeScript, with a focus on performance and accessibility. It includes features like player authentication, game history, and a leaderboard to track player performance.",
//     techStack: [
//       "React",
//       "Node.js",
//       "TypeScript",
//       "Tailwind CSS",
//       "MongoDB",
//       "Vercel",
//     ],
//     link: "https://ticky-eta.vercel.app/",
//     githubLink: "https://github.com/vicdevman/ticky",
//     demoLink: "https://ticky-eta.vercel.app/",
//     category: ["Web App", "Gaming", "Realtime", "Multiplayer"],
//     featured: true,
//     completionDate: "2024-06",
//     role: "Full Stack Developer",
//   }

export default function ProjectDetail() {
  const { id } = useParams();
  const router = useRouter();

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  const fadeInDown = {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
  };

  const project = projects.find((project) => project.id === id);
  const currentIndex = projects.findIndex((project) => project.id === id);
  const previousProject = projects[currentIndex - 1];
  const nextProject = projects[currentIndex + 1];
  const length = projects.length;
  let showPrevious = true;
  let showNext = true;

  function handlePrevious() {
    if (previousProject) {
      router.push(`/projects/${previousProject.id}`);
    }
  }

  function handleNext() {
    if (nextProject) {
      router.push(`/projects/${nextProject.id}`);
    }
  }

  if ((length - 1) === currentIndex) {
    showNext = false;
    showPrevious = true;
  } else if (currentIndex === 0) {
    showPrevious = false;
    showNext = true;
  }

  return (
    <div className=" flex flex-col mt-30 mb-12">
      <div className=" max-w-3xl w-full mx-auto px-6">
        {" "}
        <motion.div
          className="flex flex-col gap-3"
          variants={fadeInDown}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {/* <div onClick={() => router.back()} className="flex gap-2 mb-4 cursor-pointer text-sm text-neutral-400 hover:text-neutral-600 transition items-center">
                <ArrowLeft size={18}/> Go back
            </div> */}
          <h1 className="max-sm:text-[1.8rem] text-[2.4rem] leading-tight tracking-tight font-[satoshi-bold]">
            {project.title}{" "}
          </h1>
          <p className="text-[1.1rem] mb-2 text-neutral-500 font-[satoshi-normal] tracking">
            {project.description}
          </p>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
        >
          <div className="border flex flex-col items-start gap-2 bg-neutral-100/50 border-neutral-200/50 p-6 rounded-3xl mt-6 mb-6">
            <h3 className="text-[1rem] font-[satoshi-bold] text-neutral-900 tracking-tight">
              Description
            </h3>
            {project.longDescription.split("\n").map((paragraph, index) => (
              <p
                key={index}
                className="text-[1rem] text-neutral-500 font-[satoshi-normal]"
              >
                {paragraph}
              </p>
            ))}

            <div className="border-neutral-200 border-b my-4 w-full"></div>

            <h3 className="text-[1rem] font-[satoshi-bold] text-neutral-900 tracking-tight">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.techStack.map((tech, index) => (
                <div
                  key={index}
                  className="text-sm font-[satoshi-normal] p-1.5 px-3 bg-[#e1f9dc] text-[#21930b] rounded-lg"
                >
                  {tech}
                </div>
              ))}
            </div>
            <div className="border-neutral-200 border-b my-4 w-full"></div>
            <div className="flex flex-wrap gap-8 justify-between w-full max-w-2xl">
              <div className="flex flex-col gap-2">
                <h3 className="text-[1rem] font-[satoshi-bold] text-neutral-900 tracking-tight">
                  Date
                </h3>
                <p className="text-[0.9rem] text-neutral-500 font-[satoshi-medium]">
                  {project.completionDate}
                </p>
              </div>{" "}
              <div className="flex flex-col gap-2">
                <h3 className="text-[1rem] font-[satoshi-bold] text-neutral-900 tracking-tight">
                  Role
                </h3>
                <p className="text-[0.9rem] text-neutral-500 font-[satoshi-medium]">
                  {project.role}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[1rem] font-[satoshi-bold] text-neutral-900 tracking-tight">
                  Category
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.category.map((tech, index) => (
                    <div
                      key={index}
                      className="text-sm font-[satoshi-normal] p-1.5 px-3 bg-[#e1f9dc] text-[#21930b] rounded-lg"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>{" "}
            </div>
          </div>
          <div className="flex flex-col justify-between max-[30rem]:justify-end flex-wrap gap-6 w-full">
            <div className="flex  gap-2">
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group whitespace-nowrap flex gap-2 items-center bg-[#191919] text-white px-5 py-3 text-md cursor-pointer rounded-xl font-[satoshi-medium] hover:bg-neutral-800 transition-colors duration-300"
              >
                Visit Project
                <ExternalLink size={20} />
              </Link>

              {project.githubLink && (
                <Link
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group whitespace-nowrap flex gap-2 items-center  bg-neutral-200/60 text-black px-5 py-3 text-md cursor-pointer rounded-xl font-[satoshi-medium] transition-colors duration-300"
                >
                  <Github size={20} />
                  Code
                </Link>
              )}
            </div>

            <div
              onClick={() => handlePrevious()}
              className="flex gap-8 flex-1 justify-between"
            >
              <button
                className={` group whitespace-nowrap gap-2 justify-center items-center bg-neutral-200/60 text-black px-6 py-3 text-md cursor-pointer rounded-xl font-[satoshi-medium] transition-colors duration-300 ${showPrevious ? "flex" : "hidden"}`}
              >
                <span className="flex items-center overflow-hidden w-0 group-hover:w-5 transition-all duration-300 ease-out">
                  <span className="translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-active:translate-y-0 group-active:opacity-100 transition-all duration-300 ease-out">
                    <ChevronLeft size={20} />{" "}
                  </span>
                </span>{" "}
                Previous
              </button>
              <button
                onClick={() => handleNext()}
                className={` group whitespace-nowrap justify-center gap-2 items-center bg-[#191919] text-white px-6 py-3 text-md cursor-pointer rounded-xl font-[satoshi-medium] transition-colors duration-300 ${showNext ? "flex" : "hidden"}`}
              >
                Next
                <span className="flex items-center overflow-hidden w-0 group-hover:w-5 transition-all duration-300 ease-out">
                  <span className="translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-active:translate-y-0 group-active:opacity-100 transition-all duration-300 ease-out">
                    <ChevronRight size={18} />
                  </span>
                </span>
              </button>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.15 }}
        >
          <div className="w-full cursor-pointer rounded-2xl relative mt-8 bg-neutral-100 p-4 flex items-center justify-center border border-neutral-200/40 shadow-[inset_0_2px_4px_rgba(255,2550,255),_inset_0_-2px_4px_rgba(255,255,255)]">
            {/* <div className="min-w-2 min-h-2 absolute bg-linear-30 from-neutral-200 to-neutral-300 border border-neutral-300 rounded-full mr-2 top-3.5 left-4"></div>
          <div className="min-w-2 min-h-2 absolute bg-linear-30 from-neutral-200 to-neutral-300 border border-neutral-300 rounded-full mr-2 top-3.5 right-2"></div>
          <div className="min-w-2 min-h-2 absolute bg-linear-30 from-neutral-200 to-neutral-300 border border-neutral-300 rounded-full mr-2 bottom-3.5 right-2"></div>
          <div className="min-w-2 min-h-2 absolute bg-linear-30 from-neutral-200 to-neutral-300 border border-neutral-300 rounded-full mr-2 bottom-3.5 left-4"></div> */}

            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={600}
              className="object-cover w-200 h-full rounded-lg shadow-[0_8px_20px_0_rgba(0,0,0,0.15)]"
            />
          </div>
        </motion.div>
        <div className="flex flex-wrap mt-8 gap-4">
          {project.images &&
            project.images.map((image, index) => (
              <div
                key={index}
                className="text-sm font-[satoshi-normal] rounded-xl"
              >
                <div className="w-full cursor-pointer rounded-2xl relative bg-neutral-100 px-4 py-4 flex items-center justify-center border border-neutral-200/40 shadow-[inset_0_2px_4px_rgba(255,2550,255),_inset_0_-2px_4px_rgba(255,255,255)]">
                  {/* <div className="min-w-2 min-h-2 absolute bg-linear-30 from-neutral-200 to-neutral-300 border border-neutral-300 rounded-full mr-2 top-3.5 left-4"></div>
              <div className="min-w-2 min-h-2 absolute bg-linear-30 from-neutral-200 to-neutral-300 border border-neutral-300 rounded-full mr-2 top-3.5 right-2"></div>
              <div className="min-w-2 min-h-2 absolute bg-linear-30 from-neutral-200 to-neutral-300 border border-neutral-300 rounded-full mr-2 bottom-3.5 right-2"></div>
              <div className="min-w-2 min-h-2 absolute bg-linear-30 from-neutral-200 to-neutral-300 border border-neutral-300 rounded-full mr-2 bottom-3.5 left-4"></div> */}

                  <Image
                    src={image}
                    alt={project.title}
                    width={1200}
                    height={600}
                    className="object-cover max-w-79 w-full h-full rounded-lg"
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
