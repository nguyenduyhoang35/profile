/* eslint-disable import/no-anonymous-default-export */
import { Logo, Icon } from "../assets";

export default {
  Careers: [
    {
      title: "Fetch",
      logo: Logo.Fetch,
      timeline: "Jun 2024 - Present",
      description: "Frontend Developer - Blockchain & Web3 Development",
      remark: `Currently working on cutting-edge Web3 and blockchain projects including DeFi platforms,
        crypto wallets, and NFT marketplaces. Building high-performance UIs with modern technologies.`,
      activities: [
        "LaunchPunks (BRC-20 Launchpad): Built animated UI with React/Next.js, Framer Motion & GSAP",
        "StableFlow (DeFi Platform): Developed interfaces for stablecoin swaps & staking",
        "W Wallet: Built Telegram WebApp wallet (40k+ users) with multi-chain support",
        "Laguna Network: Developed crypto cashback dashboard with NFT checkout via Stripe",
        "WizzTutor (EdTech): Built smart tutoring platform with AI-driven recommendations",
        "React Native mobile development with Firebase integration",
      ],
      techs: "React, Next.js, TypeScript, Web3.js, Ethers.js, Framer Motion, GSAP, React Native, Firebase",
    },
    {
      title: "SoTaTek",
      logo: Logo.SoTaTek,
      timeline: "Jan 2022 - Apr 2024",
      description: "Frontend Developer - Blockchain, GameFi & Web3 Product Development",
      remark: `Contributed to multiple Web3 projects including NFT marketplace, GameFi platforms,
        crypto wallets, and launchpads. Built core features like token minting, wallet integration, and staking.`,
      activities: [
        "Worked on LooksRare, Moongate, Seedbox, 0xBlock, and Webuynft",
        "Built token minting, wallet integration, staking features using React, Next.js, TypeScript",
        "DriftZone: Real-time Multiplayer Car Battle Game with leaderboard system",
        "BetterCast: Event Management System with Stripe integration",
        "Mina Protocol Tools: Wallet Selector, MinaPortal, MetaMask Snap",
        "Flostream: Decentralized Web3 Storage Protocol",
      ],
      techs: "React, Next.js, TypeScript, Web3.js, Ethers.js, ReScript, ElectronJS, Stripe",
    },
    {
      title: "Logivan",
      logo: Logo.Logivan,
      timeline: "Aug 2020 - Dec 2022",
      description: "Frontend Developer - Logistics & Fleet Management Platform",
      remark: `Developed comprehensive logistics management tools connecting truck drivers with shippers.
        Built real-time tracking systems and data analytics dashboards.`,
      activities: [
        "Ops Tool System: Fleet management, Driver, Documents, Price, Voucher management",
        "Shipper Web App: Connecting truck drivers with shippers using Google Maps",
        "Real-time chat with Firebase, direct contact with drivers and businesses",
        "Dashboard with Statistical Insight and Data Analysis for BOD",
        "Driver Performance System with Trip-based Rating and Trust Score",
        "Logi coin system development for driver rewards",
      ],
      techs: "React, Redux, Firebase, Google Maps API, WebSocket, Chart.js",
    },
    {
      title: "SSKPI",
      logo: Logo.Sskpi,
      timeline: "Jun 2019 - Jul 2020",
      description: "Frontend Developer - Performance & Goal Management Platform",
      remark: `Long-term development of internal HR & productivity suite with full ownership of product features.
        Built modules for surveys, KPIs, task tracking, OKRs, and performance reports.`,
      activities: [
        "SSKPI: Built responsive UI for KPI management system",
        "SSTask: Developed task and project management features",
        "SSOKR: Implemented OKR alignment tools for goal-setting",
        "Built modules for surveys, KPIs, task tracking with PDF & Excel export",
        "Designed dynamic document engine for contracts/invoices with e-signatures",
        "Optimized UI/UX using React, Zustand, and Ant Design",
      ],
      techs: "React, Zustand, Ant Design, PDF/Excel Export, E-signatures",
    },
    {
      title: "Sphinx Software",
      logo: Logo.Sphinx,
      timeline: "Sep 2017 - Jun 2019",
      description: "Intern & Frontend Developer",
      remark: `First professional experience gaining hands-on skills in OOP, React, PHP, and JavaScript.
        Collaborated with international clients from Japan and Thailand.`,
      activities: [
        "Contributed to Kiroku.ai, Micro Money, and Photo-ac.com using ReactJS",
        "Worked on features like surveys, loan lead generation, and stock photo transactions",
        "Gained experience in OOP, React, PHP, jQuery, HTML, CSS, and JavaScript",
        "Improved communication and project delivery skills with international clients",
      ],
      techs: "ReactJS, PHP, jQuery, HTML, CSS, JavaScript, OOP",
    },
  ],
  "Projects": [
    {
      title: "LaunchPunks",
      logo: Icon("about"),
      timeline: "2024",
      description: "BRC-20 Launchpad with gamified features",
      remark: `Built an animated, high-performance UI with React/Next.js, Framer Motion & GSAP.
        Integrated BRC-20 + TAP Protocol for token minting. Developed gamified features like leaderboards and marketplace.`,
      techs: "React, Next.js, TypeScript, Framer Motion, GSAP, BRC-20, TAP Protocol",
    },
    {
      title: "W Wallet",
      logo: Icon("about"),
      timeline: "2024",
      description: "Telegram-based Crypto Wallet (40k+ users)",
      remark: `Built a Telegram WebApp wallet with multi-chain (EVM + Solana) support,
        seed phrase recovery, Face ID (WebAuthn), and real-time transfers.`,
      techs: "React, TypeScript, Telegram API, WebAuthn, EVM, Solana",
    },
    {
      title: "StableFlow",
      logo: Icon("about"),
      timeline: "2024",
      description: "DeFi Platform for Stablecoin Operations",
      remark: `Developed responsive interfaces for stablecoin swaps & staking.
        Integrated wallet connect, real-time staking analytics, and optimized performance.`,
      techs: "React, Next.js, Web3.js, WalletConnect, DeFi",
      links: {
        $1: ["stableflow.org", "https://stableflow.org"],
      },
    },
    {
      title: "DriftZone",
      logo: Icon("about"),
      timeline: "2023",
      description: "Real-time Multiplayer Car Battle Game",
      remark: `Implemented battle mechanics, leaderboard system, and engaging animation
        with multi-language support.`,
      techs: "React, WebSocket, Canvas, Animation",
      links: {
        $1: ["Play DriftZone", "https://play.driftzone.io"],
      },
    },
    {
      title: "BetterCast",
      logo: Icon("about"),
      timeline: "2023",
      description: "Event Management System",
      remark: `Developed event setup flows with speaker bios, sponsor sections,
        Slido integration using ReScript, React, and Stripe.`,
      techs: "ReScript, React, Stripe, Slido Integration",
      links: {
        $1: ["app.bettercast.io", "https://app.bettercast.io"],
      },
    },
    {
      title: "Mina Protocol Tools",
      logo: Icon("about"),
      timeline: "2022 - 2023",
      description: "Wallet Selector, MinaPortal, MetaMask Snap",
      remark: `Developed UI and onboarding flows for interacting with Mina Network via Snap wallet.
        Built multi-chain support and advanced authentication.`,
      techs: "React, TypeScript, Mina Network, MetaMask Snap",
    },
  ],
};
