import React from "react";
import LogoLoop from "@/components/LogoLoop";
import Image from "next/image";
import { Flower } from "lucide-react";
import { Phone } from "lucide-react";
import { Laptop, ChevronRight } from "lucide-react";

const projects = [
  {
    id: "ticky",
    title: "Ticky",
    image: "/project-image/ticky-game.png",
    description: "Multiplayer Tic-Tac-Toe game with real-time updates",
    longDescription:
      "Ticky is a multiplayer Tic-Tac-Toe game with real-time updates. It features a responsive and intuitive interface, smooth animations, and a leaderboard to track player performance. The game is built using React, Node.js, and TypeScript, with a focus on performance and accessibility. It includes features like player authentication, game history, and a leaderboard to track player performance.",
    techStack: [
      "React",
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Vercel",
    ],
    link: "https://ticky-eta.vercel.app/",
    githubLink: "https://github.com/vicdevman/ticky",
    demoLink: "https://ticky-eta.vercel.app/",
    category: ["Web App", "Gaming", "Realtime", "Multiplayer"],
    featured: true,
    completionDate: "2024-06",
    role: "Full Stack Developer",
  },
  {
    id: "walletscan",
    title: "Wallet Scan",
    image: "/project-image/wallet-scan.png",
    description: "Real-time Proof of Funds PDF Generator",
    longDescription:
      "WalletScan is a comprehensive cryptocurrency portfolio management application that allows users to track their investments across multiple exchanges and wallets. It features real-time price updates, customizable alerts, detailed analytics, and historical performance tracking. The application integrates with major cryptocurrency exchanges via APIs and supports over 5000 cryptocurrencies.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Graphql",
      "Stripe(Test Mode)",
      "Appkit",
      "Wagmi",
      "Viem",
      "Web3/@Solana",
      "Helius API",
      "Zapper API",
      "CoinGecko API",
    ],
    link: "https://walletscan-staging.vercel.app",
    githubLink: "https://github.com/vicdevman/proof-of-funds-mvp",
    demoLink: "https://walletscan-staging.vercel.app",
    category: ["Web3", "DeFi", "Finance", "Blockchain"],
    featured: true,
    completionDate: "2023-11",
    role: "Lead Developer",
  },
];

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

export default function Projects() {
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

  return (
    <div className="relative z-5 flex flex-col justify-center mt-20">
      <div className="max-w-220 mx-auto px-6 flex flex-col items-center">
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

        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6 mt-10">
          {projects &&
            projects.map((project) => (
              <div className="border flex flex-col items-start gap-4 bg-white border-neutral-200/90 p-4 rounded-3xl">
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
                <p className="text-[1.05rem] line-clamp-2 mb-2 leading-tight text-neutral-500/95 font-[satoshi-medium] max-w-sm tracking ml-2 -mt-2">
                  {project.longDescription}
                </p>

                <button className="whitespace-nowrap bg-neutral-100 px-5 py-3 text-md cursor-pointer rounded-xl font-[satoshi-medium] flex justify-between w-40 transition hover:scale-x-108 hover:bg-neutral-200/80 origin-left items-center">
                  View Project
                  <ChevronRight size={18} />
                </button>
              </div>
            ))}
        </div>
      </div>
      {/* <div className="w-full h-px bg-neutral-200/90 "></div> */}
    </div>
  );
}
