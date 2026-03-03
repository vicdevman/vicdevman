import { Instagram } from "lucide-react";
import { Mail } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="text-center py-4 flex flex-col justify-center gap-6 max-sm:text-sm text-md text-neutral-500 font-[satoshi-medium] tracking-tight pt-10 border border-neutral-200 mt-10 mb-10 border-b-0">
      Copyright © {currentYear} Victor Adeiza. All rights reserved.
      <div className="flex mx-auto gap-8 text-center">
        <Link href="https://twitter.com/vicdevman" target="_blank">
      <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="#737373"
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
        </Link>
        {/* <Link href="https://instagram.com/vicdevman_" target="_blank">
          <Instagram size={20} />{" "}
        </Link> */}
        <Link href="https://linkedin.com/in/vicdevman" target="_blank">
          <Linkedin size={20} />{" "}
        </Link>
        <Link href="mailto:vicdevmanx@gmail.com" target="_blank">
          <Mail size={20} />
        </Link>
      </div>
    </div>
  );
}
