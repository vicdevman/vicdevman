import { House, Twitter, Linkedin, Github } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const header = [
    { icon: "Twitter", label: "About" },
    { icon: "Github", label: "Projects" },
    { icon: "LinkedIn", label: "Contact" },
  ];

  return (
    <div className="border border-neutral-200/90 shadow-[inset_0_2px_4px_rgba(250,250,250),_inset_0_-2px_4px_rgba(255,255,255)] bg-white/20 backdrop-blur-lg p-1.5 rounded-3xl fixed left-1/2 z-100 transform -translate-x-1/2 top-8 flex items-center gap-1">
      <div className="flex items-center text-neutral-900 gap-2 px-5 py-4 cursor-pointer hover:bg-neutral-400/20 transition-colors rounded-2xl">
        <House size={18} />
      </div>

      <div className="h-6 w-[1.5px] bg-neutral-200/90 mx-1"></div>
      {header.map((item, index) => (
        <div
          key={index}
          className="flex items-center text-neutral-900 px-4.5 py-4 cursor-pointer hover:bg-neutral-400/20 transition-colors rounded-2xl"
        >
          {item.icon === "Twitter" && <Twitter size={18} />}
          {item.icon === "Github" && <Github size={18} />}
          {item.icon === "LinkedIn" && <Linkedin  size={19} />}
        </div>
      ))}

      <div className="h-6 w-[1.5px] bg-neutral-200/90 mx-3"></div>

      <button className="bg-[#191919] hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] text-white px-6 py-3 text-md cursor-pointer rounded-xl font-[satoshi-bold] hover:bg-neutral-800 transition">
        Resume
      </button>
    </div>
  );
}
