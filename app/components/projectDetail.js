"use client";

import React, { useState, useEffect } from "react";
import { projects } from "../data/projects.data";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import {
  ChevronRight,
  ExternalLink,
  Github,
  ArrowLeft,
  ChevronLeft,
  ArrowRight,
} from "lucide-react";

export default function ProjectDetail() {
  const { id } = useParams();
  const router = useRouter();

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const project = projects.find((p) => p.id === id);
  const currentIndex = projects.findIndex((p) => p.id === id);
  const previousProject = projects[currentIndex - 1];
  const nextProject = projects[currentIndex + 1];

  // Lightbox state
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center font-[satoshi-medium] text-lg">
        Project not found
      </div>
    );
  }

  // Build images array
  const images =
    project.images && project.images.length
      ? [project.image, ...project.images]
      : [project.image];

  const openLightbox = (index = 0) => {
    setPhotoIndex(index);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
  };

  const prevPhoto = () =>
    setPhotoIndex((p) => (p - 1 + images.length) % images.length);
  const nextPhoto = () => setPhotoIndex((p) => (p + 1) % images.length);

  useEffect(() => {
    const onKey = (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevPhoto();
      if (e.key === "ArrowRight") nextPhoto();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, images.length]);

  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <div className="pt-32 pb-10 px-6 max-w-3xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={() => router.push("/projects")}
            className="group flex items-center text-sm font-[satoshi-medium] text-neutral-500 hover:text-black transition-colors mb-8 mt-2 cursor-pointer"
          >
            <ArrowLeft
              size={16}
              className="mr-2 group-hover:-translate-x-1 transition-transform"
            />{" "}
            Back to Projects
          </button>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-[satoshi-bold] tracking-tighter text-neutral-900 mb-6 leading-[1.1]">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-neutral-500 font-[satoshi-medium] leading-relaxed tracking-tight">
            {project.description}
          </p>
        </motion.div>
      </div>

      {/* Main Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-3xl mx-auto px-6 mb-10"
      >
        <div
          onClick={() => openLightbox(0)}
          className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden cursor-zoom-in group shadow-xdatel border border-neutral-100"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
            priority
          />
          <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="max-w-3xl mx-auto px-6 w-full pb-24">
        <div className="flex flex-col gap-16">
          {/* Top Block - Details */}
          <div className="flex flex-col gap-12">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-[satoshi-bold] mb-6 tracking-tight">
                Overview
              </h2>
              <div className="prose prose-lg text-neutral-600 font-[satoshi-normal] leading-relaxed">
                {project.longDescription.split("\n").map((p, i) => {
                  if (!p.trim()) return <div key={i} className="h-4" />;

                  const isHeader = [
                    "Problem:",
                    "Solution:",
                    "Experience:",
                  ].some((h) => p.startsWith(h));

                  if (isHeader) {
                    return (
                      <h3
                        key={i}
                        className="text-xl font-[satoshi-bold] text-neutral-900 mt-8 mb-4 uppercase tracking-wider"
                      >
                        {p}
                      </h3>
                    );
                  }

                  return (
                    <p key={i} className="mb-4">
                      {p}
                    </p>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-wrap gap-4 pt-6 border-t border-neutral-200"
            >
              <Link
                href={project.link}
                target="_blank"
                className="flex items-center gap-2 bg-neutral-900 text-white px-8 py-4 rounded-xl font-[satoshi-medium] hover:bg-neutral-800 transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                Launch Project <ExternalLink size={18} />
              </Link>
              {project.githubLink && (
                <Link
                  href={project.githubLink}
                  target="_blank"
                  className="flex items-center gap-2 bg-neutral-100 text-neutral-900 px-8 py-4 rounded-xl font-[satoshi-medium] hover:bg-neutral-200 transition-all hover:-translate-y-1"
                >
                  <Github size={18} /> View Code
                </Link>
              )}
            </motion.div>
          </div>

          {/* Bottom Block - Meta Data */}
          <div className="relative">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-neutral-50 p-4 rounded-3xl border border-neutral-100 shadow-sm"
            >
              <h3 className="text-xl font-[satoshi-bold] mb-8 pb-4 border-b border-neutral-200">
                Project Info
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm text-neutral-400 font-[satoshi-medium] mb-2 uppercase tracking-wider">
                    Role
                  </h4>
                  <p className="text-neutral-900 font-[satoshi-medium] text-lg">
                    {project.role}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm text-neutral-400 font-[satoshi-medium] mb-2 uppercase tracking-wider">
                    Timeline
                  </h4>
                  <p className="text-neutral-900 font-[satoshi-medium] text-lg">
                    {project.completionDate}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm text-neutral-400 font-[satoshi-medium] mb-2 uppercase tracking-wider">
                    Category
                  </h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.category.map((cat, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white border border-neutral-200 text-neutral-600 rounded-full text-sm font-[satoshi-medium]"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm text-neutral-400 font-[satoshi-medium] mb-2 uppercase tracking-wider">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#191919] text-white rounded-md text-sm font-[satoshi-medium]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Gallery */}
      {project.images && project.images.length > 0 && (
        <div className="max-w-3xl mx-auto px-6 w-full pb-32">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-[satoshi-bold] tracking-tight mb-12"
          >
            Gallery
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.images.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => openLightbox(idx + 1)}
                className="relative aspect-video rounded-2xl overflow-hidden cursor-zoom-in group shadow-sm border border-neutral-100"
              >
                <Image
                  src={img}
                  alt={`${project.title} - Image ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Custom Next/Prev Pagination */}
      <div className="w-full border-t border-neutral-200 bg-neutral-50/50">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row w-full divide-y sm:divide-y-0 sm:divide-x divide-neutral-200">
          <div className="flex-1 w-full flex">
            {previousProject ? (
              <Link
                href={`/projects/${previousProject.id}`}
                className="group w-full flex flex-col items-start justify-center p-12 lg:p-16 hover:bg-neutral-100/80 transition-colors h-full"
              >
                <span className="flex items-center text-neutral-400 font-[satoshi-medium] mb-4 text-sm tracking-widest uppercase">
                  <ArrowLeft
                    size={16}
                    className="mr-2 group-hover:-translate-x-2 transition-transform duration-300"
                  />
                  Previous Project
                </span>
                <span className="text-3xl lg:text-4xl font-[satoshi-bold] text-neutral-900 group-hover:text-neutral-600 transition-colors">
                  {previousProject.title}
                </span>
              </Link>
            ) : (
              <div className="w-full p-12 lg:p-16 h-full flex flex-col items-start justify-center text-neutral-300">
                <span className="flex items-center font-[satoshi-medium] mb-4 text-sm tracking-widest uppercase">
                  Previous Project
                </span>
                <span className="text-3xl lg:text-4xl font-[satoshi-bold] text-neutral-300">
                  End of list
                </span>
              </div>
            )}
          </div>

          <div className="flex-1 w-full flex">
            {nextProject ? (
              <Link
                href={`/projects/${nextProject.id}`}
                className="group w-full flex flex-col items-end justify-center p-12 lg:p-16 hover:bg-neutral-100/80 transition-colors text-right h-full"
              >
                <span className="flex items-center text-neutral-400 font-[satoshi-medium] mb-4 text-sm tracking-widest uppercase">
                  Next Project
                  <ArrowRight
                    size={16}
                    className="ml-2 group-hover:translate-x-2 transition-transform duration-300"
                  />
                </span>
                <span className="text-3xl lg:text-4xl font-[satoshi-bold] text-neutral-900 group-hover:text-neutral-600 transition-colors">
                  {nextProject.title}
                </span>
              </Link>
            ) : (
              <div className="w-full p-12 lg:p-16 h-full flex flex-col items-end justify-center text-neutral-300 text-right">
                <span className="flex items-center font-[satoshi-medium] mb-4 text-sm tracking-widest uppercase">
                  Next Project
                </span>
                <span className="text-3xl lg:text-4xl font-[satoshi-bold] text-neutral-300">
                  End of list
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-5000 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeLightbox}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <div className="relative z-50 max-w-[100vw] max-h-[100vh] w-full h-full flex items-center justify-center p-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevPhoto();
                }}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 p-4 rounded-full backdrop-blur-md transition-all z-50 cursor-pointer"
              >
                <ChevronLeft size={32} />
              </button>

              <motion.div className="relative w-full h-full flex items-center justify-center max-w-[80vw]">
                <motion.img
                  key={photoIndex}
                  src={images[photoIndex]}
                  alt={project.title}
                  initial={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="object-contain max-h-[85vh] max-w-full drop-shadow-2xl rounded-sm"
                  onClick={(e) => e.stopPropagation()}
                />
              </motion.div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextPhoto();
                }}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 p-4 rounded-full backdrop-blur-md transition-all z-50 cursor-pointer"
              >
                <ChevronRight size={32} />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  closeLightbox();
                }}
                className="absolute top-6 right-6 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 p-4 px-5.5 rounded-full backdrop-blur-md transition-all z-50 cursor-pointer"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
