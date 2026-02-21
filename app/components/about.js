import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className=" flex flex-col mt-100 overflow-hidden">
      <div className=" max-w-3xl mx-auto px-6">
        <h1 className="text-2xl font-[satoshi-bold] mb-2 tracking-tight">About</h1>
        <p className="text-[1.05rem] mb-2 leading-tight text-neutral-500/95 font-[satoshi-medium] max-w-lg tracking-tight">
          I’m Mia Carter, a curious designer, coder, and storyteller. Currently
          a student at Springfield High School, but always exploring the
          limitless possibilities of creativity and technology.
          <br /> <br /> I thrive on transforming ideas into reality, whether
          it's crafting digital interfaces, designing immersive visuals, or
          building websites that feel effortless to use.
        </p>{" "}
        <div className="group p-2 mt-18 flex justify-center absolute left-1/2 -translate-x-1/2 cursor-pointer">
          <div className="absolute -right-8 w-50 flex flex-col gap-2 bg-white rounded-xl shadow-[0_8px_20px_0_rgba(0,0,0,0.2)] p-1.5 rotate-350 transition duration-300 group-hover:-translate-x-8 group-hover:-translate-y-4 group-hover:rotate-345">
            <Image
              src="/victor.jpeg"
              alt="victor"
              width={400}
              height={500}
              className="rounded-lg h-50 object-cover object-top"
            />

            <p className="text-center -mt-1 font-[satoshi-light-italic] text-md tracking-tight">
              @victor adeiza
            </p>
          </div>

             <div className="absolute z-2 -top-6 -left-8 w-50 flex flex-col gap-2 bg-white rounded-xl shadow-[0_8px_30px_0_rgba(0,0,0,0.3)] p-1.5 rotate-12 transition duration-300 group-hover:translate-x-8 group-hover:-translate-y-4 group-hover:rotate-17">
            <Image
              src="/vicdevman.webp"
              alt="vicdevman avartar"
              width={400}
              height={500}
              className="rounded-lg  h-50 object-cover"
            />

            <p className="text-center -mt-1 font-[satoshi-light-italic] text-md tracking-tight">
              @vicdevman
            </p>
          </div>
        </div>
      </div>

      {/* <div className="w-full h-px bg-neutral-200/90 mt-100"></div> */}
    </div>
  );
}
