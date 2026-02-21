import { ChevronRight } from "lucide-react";
import { House, Twitter, Linkedin, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

  return (
    <div className="border border-neutral-200/90 shadow-[inset_0_2px_4px_rgba(250,250,250),_inset_0_-2px_4px_rgba(255,255,255)] bg-white/20 backdrop-blur-lg p-1 px-1.5 rounded-3xl fixed left-1/2 z-100 transform -translate-x-1/2 top-8 flex items-center gap-1">
      <Link
        href="/"
        className="group flex items-center text-neutral-900 gap-2 px-5 py-4 cursor-pointer hover:bg-neutral-400/20 transition-colors rounded-2xl"
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

      <div className="h-6 w-[1.5px] bg-neutral-200/90"></div>
      {header.map((item, index) => {
        let Icon;
        let label;

        if (item.icon === "Twitter") {
          Icon = Twitter;
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
            className="group flex items-center text-neutral-900 px-4.5  py-4 cursor-pointer hover:bg-neutral-400/20 transition-colors duration-300 rounded-2xl"
          >
            <div className="relative flex items-center justify-center">
              {Icon && <Icon size={19} />}

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

      <div className="h-6 w-[1.5px] bg-neutral-200/90 mx-2"></div>

      <button className="bg-[#191919] hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] shadow text-white px-6 py-3 text-md cursor-pointer rounded-xl font-[satoshi-bold] hover:bg-neutral-800 transition">
        Resume
      </button>
    </div>
  );
}
