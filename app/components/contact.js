import ContactForm from "@/components/contactForm";
import React from "react";

export default function Contact() {
  return (
    <div className=" flex flex-col mt-30 mb-0">
      <div className=" max-w-3xl mx-auto px-6">
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
        </p>{" "}
        <ContactForm />
      </div>
    </div>
  );
}
