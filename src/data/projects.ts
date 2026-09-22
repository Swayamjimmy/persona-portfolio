export interface Project {
  slug: string
  title: string
  shortDescription: string
  fullDescription: string
  challenge: string
  solution: string
  techStack: string[]
  githubUrl: string
  deployUrl?: string
  imageUrl: string
  featured: boolean
}

export const projects: Project[] = [
  {
    slug: "unbuilt",
    title: "Unbuilt",
    shortDescription: "An evidence-driven AI platform that discovers software ideas from real problems discussed across Reddit and Hacker News.",
    fullDescription: "Unbuilt is an AI-powered project discovery platform designed to help developers decide what to build next. Instead of asking an LLM to generate generic project ideas, Unbuilt researches real developer and user discussions, identifies recurring pain points and demand signals, and then uses AI to turn those findings into concrete, buildable project opportunities.The system combines community research, deterministic demand analysis, LangGraph orchestration, Gemini-powered synthesis, and an asynchronous AWS architecture to produce ideas backed by the discussions that inspired them.",
    challenge: `Most project generators start with the solution: "Give me something to build with React and Python". This often produces generic projects without evidence of real demand. Unbuilt instead starts with the problem like finding frustrations, repetitive workflows, missing tools, and unmet needs that people are already discussing.`,
    solution: "I built a research-first pipeline: Scout → Analyst → Architect. Scout researches relevant communities, Analyst deterministically filters and scores pain signals, and Architect uses Gemini to transform validated signals into concrete projects. The pipeline runs asynchronously through SQS + Lambda + DynamoDB, with LangGraph orchestrating the AI workflow.",
    techStack: ["Next.js", "Python", "Docker", "Langgraph", "AWS Lambda", "Amazon SQS", "Amazon API Gateway", "Github Actions"],
    githubUrl: "https://github.com/Swayamjimmy/Unbuilt",
    deployUrl: "https://unbuilt-ten.vercel.app/",
    imageUrl: "/images/projects/project-one.png",
    featured: true,
  },
  {
    slug: "rag",
    title: "SimplyRAG",
    shortDescription: "A production-grade document intelligence system that turns PDFs into searchable, cited, and context-aware conversations.",
    fullDescription: "SimplyRAG is a document intelligence system that lets users ask questions about PDF documents and receive answers grounded in the source material. Rather than relying on a single vector search step, it combines hybrid retrieval, cross-encoder reranking, agentic query routing, citation verification, conversation memory, and multimodal PDF understanding.The system processes documents through ingestion, retrieval, and generation stages, while RAGAS evaluation is used to measure the quality of the retrieval and generated responses.",
    challenge: "Basic RAG systems often rely on a single retrieval strategy and can return noisy or poorly ranked context. Even when the right passage is retrieved, generated answers can still contain unsupported claims. The challenge was to build a system that improves retrieval precision while keeping generated answers grounded and traceable to the document.",
    solution: "I combined semantic and keyword search to retrieve relevant document context, then used cross-encoder reranking to improve precision. LangGraph routes different query types, while citation verification keeps answers grounded in the source. I also added memory, streaming, and multimodal PDF support, with RAGAS used to evaluate the system.",
    techStack: [
  "Python",
  "FastAPI",
  "LangChain",
  "LangGraph",
  "ChromaDB",
  "Sentence Transformers",
  "BM25",
  "Cross-Encoder",
  "RAGAS",
  "Docker",
  "Hugging Face"
],
    githubUrl: "https://github.com/Swayamjimmy/SimplyRAG",
    deployUrl: "https://huggingface.co/spaces/swmi/SimplyRAG",
    imageUrl: "/images/projects/project-one.png",
    featured: true,
  },
  {
    slug: "rescue-net",
    title: "RescueNet",
    shortDescription: "A peer-to-peer chat system that discovers nearby devices and enables real-time messaging without a central server.",
    fullDescription: "RescueNet is a local-network P2P communication system built with Go and libp2p. Peers discover each other using mDNS and communicate through GossipSub, with an optional HTTP API and React interface for sending and viewing messages.",
    challenge: "Traditional chat applications depend on a centralized server to connect users and relay messages. For local environments, this adds unnecessary infrastructure and creates a dependency on a central service.",
    solution: "I built RescueNet around libp2p so each node can discover nearby peers using mDNS and exchange messages through GossipSub. An optional HTTP layer connects the P2P backend to a React interface, making the system usable from both the terminal and browser.",
    techStack: [ "Go", "libp2p", "mDNS", "GossipSub", "React", "TypeScript", "Tailwind CSS", "Vite", "REST API" ],
    githubUrl: "https://github.com/Swayamjimmy/RescueNet",
    imageUrl: "/images/projects/project-one.png",
    featured: true,
  },
    {
    slug: "reach-in-box",
    title: "ReachInBox",
    shortDescription: "A distributed email scheduling platform built for reliable delayed delivery, rate-limited sending, and automated recovery.",
    fullDescription: "ReachInbox is a full-stack email scheduling and automation platform that separates API ingestion from background email processing. It uses PostgreSQL as the source of truth, BullMQ and Redis for delayed jobs, Elasticsearch for email search, and independent workers for reliable asynchronous delivery.",
    challenge: "Email scheduling becomes difficult once reliability and scale are involved. Jobs can be lost during server restarts, multiple workers can process the same email, and providers impose sending limits that must be respected without dropping scheduled work.The challenge was to design a system where emails are delivered at the correct time while remaining recoverable, rate-limited, and safe across concurrent workers.",
    solution: "I separated request handling from email execution using BullMQ workers and Redis. PostgreSQL acts as the source of truth, allowing unfinished jobs to be recovered after restarts, while Redis-backed sliding-window rate limiting controls sender throughput. Sent emails are indexed in Elasticsearch for fast search, with Slack notifications surfacing rate-limit events.",
    techStack: [ "TypeScript", "Node.js", "Express.js", "React", "PostgreSQL", "Redis", "BullMQ", "Elasticsearch", "Docker", "Caddy", "Google OAuth", "Slack API" ],
    githubUrl: "https://github.com/Swayamjimmy/reach-inbox",
    deployUrl: "https://reachinbox-ebon-iota.vercel.app/",
    imageUrl: "/images/projects/project-one.png",
    featured: true,
  },
]