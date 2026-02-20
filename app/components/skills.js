import { FileText } from "lucide-react";
import React from "react";
import GlassIcons from "../../components/GlassIcons";
import { Layers } from "lucide-react";
import { Bot } from "lucide-react";
import { Link } from "lucide-react";
import { Network } from "lucide-react";

const portfolioSections = [
  {
    id: "fullstack-engineering",
    title: "Full-Stack Engineering",
    items: [{ icon: <Layers color='white' strokeWidth={2} size={22}/>, color: "#2563EB", label: "" }],
    positioning:
      "Designing and shipping production-ready full-stack systems using modern TypeScript architecture.",
    techstack: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "NestJS",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "shadcn/ui",
      "Redux",
      "REST APIs",
      "GraphQL",
      "WebSockets",
      "Socket.IO",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Prisma",
      "Supabase",
      "Firebase",
      "JWT",
      "OAuth",
      "Role-Based Access Control",
      "Stripe",
    ],
    valueProposition:
      "Build scalable, maintainable, and secure web applications with clean architecture and production standards.",
  },
  {
    id: "ai-automation-systems",
    title: "AI Automation & Agent Systems",
    items: [{ icon: <Bot color='white' strokeWidth={2} size={22}/>, color: "#9333EA", label: "" }],
    positioning:
      "Building intelligent systems that automate workflows and embed AI directly into digital products.",
    techstack: [
      "OpenAI API",
      "Claude (Anthropic)",
      "GPT-4",
      "LangChain",
      "AutoGen",
      "LlamaIndex",
      "Haystack",
      "Vector Databases (Pinecone, Weaviate)",
      "n8n",
      "Zapier",
      "Make.com",
      "FastAPI",
      "Python",
      "TensorFlow",
      "PyTorch",
      "Whisper",
      "Apache Airflow",
      "RAG Pipelines",
      "Python Async",
      "LangGraph",
    ],
    valueProposition:
      "Reduce manual processes, increase operational efficiency, and transform products with embedded AI capabilities.",
  },
  {
    id: "web3-blockchain-integration",
    title: "Web3 & Blockchain Integration",
    items: [{ icon: <Link color='white' strokeWidth={2} size={22}/>, color: "#14B8A6", label: "" }],
    positioning:
      "Integrating blockchain functionality into modern web applications.",
    techstack: [
      "Solidity",
      "Web3.js",
      "Ethers.js",
      "The Graph / Subgraphs",
      "Blockchain Protocols (Ethereum, Polygon, BNB Chain, Solana)",
      "Wallet Auth (Metamask, WalletConnect)",
      "Token Gating",
      "Smart Contract Interaction",
      "Decentralized Storage",
    ],
    valueProposition:
      "Bridge traditional web systems with decentralized infrastructure to create secure blockchain experiences.",
  },
  {
    id: "systems-product-thinking",
    title: "Systems & Product Thinking",
    items: [{ icon: <Network color='white' strokeWidth={2} size={22} />, color: "#F59E0B", label: "" }],
    positioning:
      "Approaching development with systems thinking, scalability, and long-term maintainability in mind.",
    techstack: [
      "Docker",
      "Kubernetes",
      "AWS",
      "GCP",
      "Azure",
      "CI/CD (GitHub Actions, GitLab CI)",
      "Terraform",
      "Vercel",
      "Netlify",
      "Postman",
      "ESLint",
      "Prettier",
      "Testing Tools (Jest, Playwright)",
      "Design Tools (Figma)",
    ],
    valueProposition:
      "Engineer solutions that are not only functional, but designed for growth, resilience, and long-term impact.",
  },
];

export default function Skills() {
  return (
    <div className=" flex flex-col mt-110">
      <div className=" max-w-3xl mx-auto px-6">
        <h1 className="text-3xl text-center font-[satoshi-bold] mb-2 tracking-tight">
          How Can I Help?
        </h1>
        <p className="text-lg text-center text-neutral-500 font-[satoshi-medium] tracking-tight">
          Let’s turn your vision into something amazing.
        </p>

        <div className="grid grid-cols-2 max-md:grid-cols-1 w-full gap-4 mt-8">
          {portfolioSections &&
            portfolioSections.map((section) => (
              <div
                key={section.id}
                className="w-full rounded-xl relative bg-neutral-100/80 p-4 flex items-start justify-center border border-neutral-200/40 shadow-[inset_0_2px_4px_rgba(255,2550,255),_inset_0_-2px_4px_rgba(255,255,255)]"
              >
                {/* <div className="min-w-2 min-h-2 absolute bg-linear-30 from-neutral-200 to-neutral-300 border border-neutral-300 rounded-full mr-2 top-3.5 left-4"></div>
            <div className="min-w-2 min-h-2 absolute bg-linear-30 from-neutral-200 to-neutral-300 border border-neutral-300 rounded-full mr-2 top-3.5 right-2"></div>
            <div className="min-w-2 min-h-2 absolute bg-linear-30 from-neutral-200 to-neutral-300 border border-neutral-300 rounded-full mr-2 bottom-3.5 right-2"></div>
            <div className="min-w-2 min-h-2 absolute bg-linear-30 from-neutral-200 to-neutral-300 border border-neutral-300 rounded-full mr-2 bottom-3.5 left-4"></div> */}
                <div className="flex flex-col justify-between gap-2">
                  <div style={{ height: "140px", position: "relative", marginTop: '-30px' }}>
                    <GlassIcons
                      items={section.items}
                      className=""
                      
                    />
                  </div>
                  <h1 className="text-[1.2rem] font-[satoshi-bold]  tracking-tight">
                    {section.title}
                  </h1>
                  <p className="text-[1rem] text-neutral-400 font-[satoshi-medium] tracking-tight">
                    {section.positioning}
                  </p>
                  {/* <div className="flex flex-wrap gap-2 mt-3">
                  {section.techstack.map((tech, index) => (
                    <div key={index} className="text-xs font-[satoshi-medium] p-1.5 px-3 border tracking-tight bg-neutral-200 border-neutral-300/60 text-neutral-500 rounded-xl">
                        {tech}
                    </div>
                  ))}
                </div> */}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
