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
          <Twitter size={20} />{" "}
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
