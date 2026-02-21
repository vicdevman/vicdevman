import Image from "next/image";
import BlurText from "../../components/BlurText";
import LogoLoop from "../../components/LogoLoop";
import { Home } from "lucide-react";
import { Flower } from "lucide-react";
import { Phone } from "lucide-react";
import { Laptop } from "lucide-react";
import { ChevronRight } from "lucide-react";

function ImageCard({ src, alt = "alt thing", href = "#" }) {
  return (
    <div className="w-full rounded-2xl relative bg-neutral-100 px-8 py-6 flex items-center justify-center border border-neutral-200/40 shadow-[inset_0_2px_4px_rgba(255,2550,255),_inset_0_-2px_4px_rgba(255,255,255)]">
      <div className="min-w-2 min-h-2 absolute bg-linear-30 from-neutral-200 to-neutral-300 border border-neutral-300 rounded-full mr-2 top-3.5 left-4"></div>
      <div className="min-w-2 min-h-2 absolute bg-linear-30 from-neutral-200 to-neutral-300 border border-neutral-300 rounded-full mr-2 top-3.5 right-2"></div>
      <div className="min-w-2 min-h-2 absolute bg-linear-30 from-neutral-200 to-neutral-300 border border-neutral-300 rounded-full mr-2 bottom-3.5 right-2"></div>
      <div className="min-w-2 min-h-2 absolute bg-linear-30 from-neutral-200 to-neutral-300 border border-neutral-300 rounded-full mr-2 bottom-3.5 left-4"></div>
      <Image
        src={src}
        alt={alt}
        width={200}
        height={200}
        className="object-cover w-200 h-full rounded-lg shadow-[0_8px_20px_0_rgba(0,0,0,0.15)]"
      />
    </div>
  );
}

const techLogos = [
  {
    node: <ImageCard src="/image/landing-page.jpg" alt="React" />,
    title: "React",
    href: "https://react.dev",
  },
  {
    node: <ImageCard src="/image/podcast-dashboard.jpg" alt="Next.js" />,
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    node: <ImageCard src="/image/social-media-app.jpg" alt="TypeScript" />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <ImageCard src="/image/tour-planner.jpg" alt="Tailwind CSS" />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];

export default function Hero() {
  return (
    <div className="flex flex-col mt-40 mb-60">
      {/* <div class="fixed top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
<div class="fixed top-0 right-0 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div> */}

      {/* <div class="backdrop-blur-2xl bg-white/5 border border-white/30 
shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] 
rounded-3xl p-8"></div> */}

      <div className=" max-w-3xl mx-auto flex flex-col gap-4 px-6 items-start">
        <div className="w-26 h-26 overflow-hidden rounded-full">
          <Image
            src="/vic.jpeg"
            alt="vicdevman"
            className="-mt-2"
            width={1200}
            height={600}
          />
        </div>

        <h1 className="max-sm:text-[1.6rem] text-[2.4rem] leading-tight tracking-normal font-[satoshi-bold]">
          <BlurText
            text="Hey, I'm Victor Adeiza."
            delay={0}
            animateBy="words"
            direction="bottom"
          />

          <BlurText
            text="Software Engineer"
            delay={0}
            stepDuration={0.5}
            animateBy="words"
            direction="bottom"
          />
        </h1>
        <p className="text-[1.05rem] mb-2 leading-tight text-neutral-500 font-[satoshi-medium] max-w-lg tracking-tight">
          Crafting seamless experiences and bold visuals. High school student by
          day, creative thinker, and aspiring innovator by night.
        </p>
        <div className="flex items-center gap-4 flex-wrap">
   <button className="group whitespace-nowrap flex gap-2 items-center bg-[#191919] tracking-tight text-white px-6 py-3 text-md cursor-pointer rounded-xl font-[satoshi-bold] hover:bg-neutral-800 transition-colors duration-300">
  View my Work

  <span className="flex items-center overflow-hidden w-0 group-hover:w-5 transition-all duration-300 ease-out">
    <span className="translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
      <ChevronRight size={18} />
    </span>
  </span>
</button>
          <div className="text-[#178d00] whitespace-nowrap bg-[#178d00]/15 text-md tracking-tighter font-[satoshi-bold-italic] px-6 py-2.5 rounded-full flex items-center gap-2">
            <div className="w-2.5 h-2.5 bg-[#178d00] rounded-full mr-1 "></div>  
            Available for new projects
          </div>
        </div>
      </div>
      <div className="w-full relative z-10 overflow-hidden left-0 top-80 -mt-70 h-full">
        <LogoLoop
          logos={techLogos}
          containerHeight={400}
          speed={80}
          direction="left"
          itemWidth={450}
          itemHeight={200}
          objectFit="cover"
          //   aspectRatio="16/9"
          gap={30}
          fadeOut
          pauseOnHover
        />
      </div>
    </div>
  );
}
