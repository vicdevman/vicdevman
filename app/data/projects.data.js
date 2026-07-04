export const projects = [{
  id: "qleva",
  title: "Qleva",
  image: "/project-image/qleva-new.png",
  description: "Crypto automation that feels human. An AI-driven conversational agent executing scheduled, conditional, and recurring smart wallet automations.",
  longDescription: `Problem:
Setting up crypto automations (like recurring buys, scheduled transfers, DCA, profit-taking, and portfolio rebalancing) typically requires users to interact with complex smart contract interfaces, delegate full custody of their assets to third-party bots, or write custom scripts. This poses significant security risks and lacks user-friendly transparency or flexibility.

Solution:
Qleva is an AI-powered conversational web3 automation assistant that translates natural language intent into secure, human-readable execution plans. Built around MetaMask smart wallet delegation, secure permissions, and a LangGraph-driven conversational agent API, it allows users to specify actions in plain English (e.g., "Buy $20 of ETH every Friday"). Qleva parses these requests, simulates them to generate gas estimates, builds a structured plan for the user to review, and executes them trustlessly via smart wallet delegation and spending limits once approved.

Experience:
The user journey is simple, conversational, and highly secure. Users log in seamlessly using Privy and connect or deploy a Base smart wallet. In the Chat Workspace, they describe their desired automation. The backend LangGraph state machine determines intent and gathers missing details conversationally. Once complete, a structured preview card is rendered, displaying token details, execution schedules, and max gas limits. Users click "Confirm Automation" to grant the smart wallet the required permissions. The Dashboard and Portfolio view offer a high-level overview of portfolio balance, active automations, execution logs, and spending limits, ensuring users retain absolute control over their assets.`,
  techStack: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "LangGraph",
    "Privy",
    "MetaMask Delegation Toolkit",
    "MetaMask Smart Wallet",
    "Base (L2)",
    "Viem",
    "MongoDB",
  ],
  link: "https://www.qleva.cloud/",
  githubLink: "https://github.com/vicdevman/qleva-app",
  demoLink: "https://app.qleva.cloud/",
  category: ["Web3", "AI", "Automation", "DeFi", "Smart Wallet"],
  featured: true,
  completionDate: "Present",
  role: "Full Stack Web3 Developer",
  images: [],
}, {
  id: "shipstory",
  title: "ShipStory",
  image: "/project-image/shipstory-new.png",
  description: "An autonomous, adversarial multi-agent growth engine that translates GitHub commits into high-impact marketing and roadmap assets.",
  longDescription: `Problem:
Startups ship code at a rapid pace, but translating daily engineering progress into public-facing changelogs, newsletters, social media campaigns, and competitive roadmap updates is time-consuming and often gets neglected. Traditional developer tools only generate dry, markdown-based commit histories that fail to engage non-technical audiences or communicate business value.

Solution:
ShipStory is an autonomous, adversarial multi-agent startup growth loop that monitors repository events and turns them into high-fidelity marketing campaigns and deliverables. Powered by the Band SDK for WebSocket-based agent communication, ShipStory orchestrates six specialized Python agents that collaborate, debate, and review assets. An adversarial feedback loop ensures quality: drafts are audited by a product manager agent to grade feature business impact and intercept intellectual property leaks before designs are rendered and hosted.

Experience:
When a developer pushes to GitHub, Devin (the Engineering Agent) analyzes the diffs to draft a value statement. Simultaneously, Marshall (the Research Agent) runs Tavily searches to assess competitor gaps. Priscilla (the Product Manager Agent) audits their findings to verify compliance and feature scores. Gigi (the Marketing Agent) writes channel-specific drafts (Twitter, newsletters, changelogs), which are audited by Priscilla's compliance filter. Once approved, Vinci (the Design Agent) uses the AIML API (Flux 2 Pro) to render visual assets and upload them to Cloudinary. Connie (the Chief of Staff Agent) coordinates the workflow and updates the company milestones. Operators can monitor the entire active pipeline, review detailed agent interaction logs, and view final deliverables on a sleek Next.js visualization dashboard.`,
  techStack: [
    "Next.js",
    "TypeScript",
    "Python",
    "WebSockets",
    "Band SDK",
    "MongoDB",
    "AIML API (Flux 2 Pro)",
    "Cloudinary",
    "Tavily API",
    "Tailwind CSS",
    "goq (llama 3.3)",
    "monorepo"
  ],
  link: "https://shipstory.vercel.app/",
  githubLink: "https://github.com/vicdevman/shipstory",
  demoLink: "https://shipstory.vercel.app/",
  category: ["AI", "Agents", "Multi-Agent System", "Web App", "Developer Tools"],
  featured: true,
  completionDate: "2026-06",
  role: "Lead Architect & Developer",
  images: [],
}, {
  id: "whalesight",
  title: "WhaleSight",
  image: "/image/whalesight-landing.png",
  description: "A high-performance Solana whale tracking platform with real-time Telegram alerts and deep wallet analytics.",
  longDescription: `Problem:
Crypto traders often struggle to track whale movements and manage their own portfolios across multiple Solana wallets in real-time. Existing tools are either too complex or lack immediate alert systems, leading to missed opportunities and difficulty in analyzing PnL accurately.

Solution:
WhaleSight is a comprehensive Solana tracking platform that operates as both a Telegram Bot and a high-performance Mini App. It provides instant transaction alerts via webhooks and deep analytics on wallet performance. The backend, built with Node.js and Express, processes on-chain data to deliver real-time insights directly to the user's chat interface.

Experience:
Users enjoy a sleek, integrated dashboard within Telegram, allowing them to scan wallets and monitor swaps without leaving their primary communication tool. The experience is fast and intuitive, featuring a responsive UI built with React and Vite, and a robust data layer powered by PostgreSQL and Redis for low-latency updates.`,
  techStack: [
    "Node.js",
    "Express",
    "React",
    "Vite",
    "Tailwind CSS",
    "Framer Motion",
    "PostgreSQL",
    "Neon Serverless",
    "Redis",
    "Solana Web3.js",
    "Telegram Bot API",
    "Turborepo",
    "Monorepo",
  ],
  link: "https://whale-sight-web.vercel.app/",
  githubLink: "https://github.com/vicdevman/whaleSight",
  demoLink: "https://t.me/WhaleSightBot",
  category: ["Web App", "Web3", "Telegram Bot", "Blockchain", "Analytics"],
  featured: true,
  completionDate: "2025-01",
  role: "Full Stack Developer",
  images: [
    "/project-image/whalesight-c.png",
    "/image/whalesight-wallet-scan.png",
    "/image/whalesight-telegram-bot.png",
    "/image/whalesight-alert.png",
  ],
},{
  id: "zealy-quest-alert",
  title: "Zealy Quest Alert Bot",
  image: "/project-image/zealy-bot.png",
  description: "A real-time Telegram scraping agent and analytics dashboard that alerts users of new Zealy quest sprints, achieving an 80% win rate.",
  longDescription: `Problem:
Web3 projects use Zealy quest boards to engage communities, hosting competitive sprints with significant reward pools. To top the leaderboards and win these sprints, users must complete new quests the moment they go live. However, Zealy doesn't offer real-time push alerts for quest changes, requiring users to manually refresh pages constantly, resulting in missed opportunities and delayed submissions.

Solution:
Zealy Quest Alert Bot is an automated Telegram-facing monitoring agent and analytics service that tracks quest boards and pushes real-time notifications to users. By using the Jina AI Reader API for web scraping and an efficient diffing algorithm in the backend, the bot filters out metadata and timestamp changes, extracting only actual new content additions. The system also includes an administration backend and a dashboard to monitor user behavior, managing subscriptions and custom quest URL tracking.

Experience:
Users subscribe to the bot on Telegram via simple commands (e.g., /start, /add <url>, /list). The background service scrapes boards continuously, performing text diffs on content updates. When a new quest is published, the bot immediately parses the additions and alerts subscribers with clean, formatted Telegram messages. With immediate alerts, over 80% of active users successfully secure top ranks and win Zealy sprints. Behind the scenes, developers and administrators can access a RESTful API and a dedicated dashboard to monitor real-time user engagement and track scraper health.`,
  techStack: [
    "Node.js",
    "Express",
    "Telegram Bot API",
    "MongoDB",
    "Mongoose",
    "Jina AI Reader API",
    "Axios",
    "pnpm",
  ],
  link: "https://t.me/zealyquestalert_bot",
  githubLink: "https://github.com/vicdevman/zealy-quest-alert-bot",
  demoLink: "https://t.me/zealyquestalert_bot",
  category: ["Telegram Bot", "Scraping", "Automation", "Analytics", "Gaming"],
  featured: true,
  completionDate: "2024-12",
  role: "Creator & Lead Developer",
  images: [],
}, {
  id: "ticky",
  title: "Ticky Game",
  image: "/project-image/ticky-macbook-game.jpg",
  description: "A premium, real-time multiplayer Tic-Tac-Toe arena built for competitive play and tactical training.",
  longDescription: `Problem:
Traditional Tic-Tac-Toe often lacks excitement and competitive depth, especially in digital formats. Players struggle with lag in multiplayer modes, simplistic AI that offers no real challenge, and a lack of social features or persistent progression. Most versions are static, offering little reason for players to return or improve their tactics.

Solution:
Ticky is a premium, real-time multiplayer Tic-Tac-Toe application designed to bridge the gap between casual play and competitive strategy. Built with a "Modular Monolith" backend and a high-performance React frontend, it leverages Socket.IO for sub-millisecond game state updates and Redis for rapid "In-Match" data handling. Ticky introduces "Infinite Mode", a tactical twist where pieces vanish after three moves, and a multi-level AI "Training Ground" for offline skill-building. The platform also features a robust real-time chat system for pre-game and in-game communication.

Experience:
Players enter a sleek, glassmorphic arena that supports both global matchmaking and private rooms. The experience is seamless, featuring real-time typing indicators in chat, visual read receipts, and ambient music that adapts to the game state. Administrative oversight is maintained through a dedicated monitoring dashboard that provides real-time traffic analytics and system health insights. As an "Offline-First" PWA, Ticky ensures that the Training Ground remains accessible even without a connection, while the Global Leaderboard and XP system provide a continuous sense of growth and competition.`,
  techStack: [
    "React",
    "Vite",
    "Node.js",
    "Socket.IO",
    "Redis",
    "Neon (Postgres)",
    "Tailwind CSS",
    "Framer Motion",
    "PWA",
    "Postgres.js",
  ],
  link: "https://ticky-game.vercel.app/",
  githubLink: "https://github.com/vicdevman/ticky",
  demoLink: "https://ticky-game.vercel.app/",
  category: ["Web App", "Gaming", "Realtime", "Multiplayer"],
  featured: true,
  completionDate: "2024-06",
  role: "Full Stack Developer",
  images: [
    "/project-image/ticky-landing-page-dark.png",
    "/project-image/ticky-home.png",
    "/project-image/ticky-game-new.png",
    "/project-image/ticky-game-chat.png",
    "/project-image/ticky-game-end.png",
    "/project-image/ticky-messages.png",
    "/project-image/ticky-chat.png",
    "/project-image/ticky-players.png",
    "/project-image/ticky-leaderboard.png",
    "/project-image/ticky-admin.png",

    // "/project-image/ticky-xr-chat-game.png",
    // "/project-image/ticky-xr-chat.png",
    // "/project-image/ticky-xr-game-end.png",
    // "/project-image/ticky-xr-game-pause.png",
    // "/project-image/ticky-xr-game.png",
    // "/project-image/ticky-xr-home.png",
    // "/project-image/ticky-xr-leaderboard.png",
    // "/project-image/ticky-xr-msg-typing.png",
    // "/project-image/ticky-xr-msg.png",
    // "/project-image/ticky-xr-profile.png",
    // "/project-image/ticky.png",
  ],
},  {
  id: "walletscan",
  title: "Wallet Scan",
  image: "/project-image/wallet-scan.png",
  description: "Automated real-time Proof of Funds PDF generator and portfolio analytics dashboard.",
  longDescription: `Problem:
Investors frequently find it challenging to generate verified "Proof of Funds" reports and track their diverse crypto holdings across numerous exchanges and wallets. Manually compiling this data is error-prone and time-consuming, especially when real-time valuation and historical performance are required.

Solution:
WalletScan is a real-time portfolio management and PDF generation tool that automates the creation of professional Proof of Funds reports. By integrating with the Helius, Zapper, and CoinGecko APIs, it aggregates data across 5,000+ cryptocurrencies. The application uses Next.js and GraphQL for efficient data fetching and a modern, type-safe architecture.

Experience:
The interface is designed for speed and clarity, featuring a sophisticated dashboard with real-time price updates and customizable alerts. Users can generate and download secure PDF reports with a single click, enjoying a premium experience enhanced by Framer Motion animations and a consistent, professional design language.`,
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
  images: [],
}, {
  id: "aegis-ai",
  title: "Aegis AI",
  image: "/image/aegis-ai-dashboard.png",
  description: "Trustless, autonomous AI trading agent with real-time frontend telemetry, risk management, and on-chain trade intent.",
  longDescription: `Problem:
Most “AI trading bots” are demos that skip what makes trading systems trustworthy in production: auditable decision making, strict risk controls, recoverable state, and clear operator visibility. Teams end up with bots that trade without explainability, lose context after restarts, and provide frontends with developer-only logs.

Solution:
Aegis AI is an end-to-end trading engine built around explainability and safety. It generates trade candidates using an LLM (Groq), runs every decision through a dedicated risk layer (position sizing, stop-loss/take-profit, and daily-loss circuit breaker), and executes through Kraken CLI in paper or live mode. Positions are persisted in MongoDB and recovered on boot so monitoring continues after restarts. A Socket.IO event system emits human-readable, structured updates so a non-technical user can understand exactly what the bot is doing and why.

Why it’s valuable:
Aegis AI bridges “AI reasoning” with real execution constraints:
- Operators get real-time, user-friendly explanations (not JSON dev logs).
- Risk gating is explicit and measurable (dailyPnL + circuit breaker).
- The system is resilient (DB recovery + watcher lifecycle).
- Optional on-chain integration allows trade intents to be simulated/approved and then attested for validation/reputation tracking.`,
  techStack: [
    "Node.js",
    "TypeScript",
    "Express",
    "Socket.IO",
    "MongoDB",
    "Mongoose",
    "Groq SDK (LLM)",
    "Zod",
    "Viem",
    "Winston",
    "Execa (Kraken CLI integration)",
    "GitHub Actions",
    "PM2 (deployment/runtime)",
    'NGINX',
    'VPS',
    'Linux',
    'Ubuntu'
  ],
  link: "https://aegis-ai-mvp.vercel.app/",
  githubLink: "https://github.com/vicdevman/aegis_ai",
  demoLink: "https://aegis-ai-mvp.vercel.app/",
  category: ["AI", "Trading", "Web3", "Backend", "Realtime", "Finance"],
  featured: true,
  completionDate: "2026-04",
  role: "Lead Developer",
  images: ["/image/aegis-ai-history.png", "/image/aegis-ai-logs.png"],
}, ];