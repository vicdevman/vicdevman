export const projects = [
   {
    id: "ticky",
    title: "Ticky Game",
    image: "/project-image/ticky-macbook-game.jpg",
    description:
      "A premium, real-time multiplayer Tic-Tac-Toe arena built for competitive play and tactical training.",
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
  },
  {
    id: "whalesight",
    title: "WhaleSight",
    image: "/project-image/whalesight-c.png",
    description:
      "A high-performance Solana whale tracking platform with real-time Telegram alerts and deep wallet analytics.",
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
    ],
    link: "https://t.me/WhaleSightBot",
    githubLink: "https://github.com/vicdevman/whaleSight",
    demoLink: "https://t.me/WhaleSightBot",
    category: ["Web App", "Web3", "Telegram Bot", "Blockchain", "Analytics"],
    featured: true,
    completionDate: "2025-01",
    role: "Full Stack Developer",
    images: [
      "/image/whalesight-wallet-scan.png",
      "/image/whalesight-telegram-bot.png",
      "/image/whalesight-alert.png",
    ],
  },
  {
    id: "walletscan",
    title: "Wallet Scan",
    image: "/project-image/wallet-scan.png",
    description:
      "Automated real-time Proof of Funds PDF generator and portfolio analytics dashboard.",
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
  },
];
