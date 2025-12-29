import { Github, Linkedin, Send } from 'lucide-react';
import { Project, SocialLink } from './types';

// Импортируем изображения, чтобы Vite корректно упаковал их и учитывал base-путь (/portfolio/)
import botNewsImg from './design/bot_news.png';
import botFinImg from './design/bot_fin.png';
import botHypothesisImg from './design/bot_hypothesis.png';
import botCryptoImg from './design/bot_crypto.png';
import botMlImg from './design/bot_ml.png';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'Telegram',
    url: 'https://t.me/Int9ns9',
    icon: Send,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/1NT9NS9',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/dmitriy-glotka/',
    icon: Linkedin,
  },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'News Assistant',
    category: 'AI',
    description: 'An AI assistant for creating news summaries from your sources.',
    imageUrl: botNewsImg,
    projectUrl: 'https://t.me/FAST_NEWS_Al_BOT',
    githubUrl: 'https://github.com/1NT9NS9/fast-news-ai',
    tags: ['Product', 'AI', 'NLP'],
    color: 'bg-blue-200',
  },
  {
    id: '2',
    title: 'Financial Assistant',
    category: 'Fintech | AI',
    description: 'Real-time financial analytics dashboard and AI assistant for creating investment portfolios exceeding market benchmarks.',
    imageUrl: botFinImg,
    githubUrl: 'https://github.com/1NT9NS9/finance-ai',
    tags: ['Technical Analysis', 'Macroeconomic indicators', 'AI'],
    color: 'bg-emerald-500',
  },
  {
    id: '3',
    title: 'Assistant hypothesis',
    category: 'Hypothesis | AI',
    description: 'Testing the hypothesis with different agents and strategies.',
    imageUrl: botHypothesisImg,
    githubUrl: 'https://github.com/1NT9NS9/agentic-01',
    tags: ['Agentic', 'Hypothesis', 'AI'],
    color: 'bg-purple-500',
  },
  {
    id: '4',
    title: 'Cryptocurrency channel',
    category: 'Cryptocurrency',
    description: 'This is a channel where I talk about cryptocurrency projects in which I participate.',
    imageUrl: botCryptoImg,
    projectUrl: 'https://t.me/ROADPROFIT',
    tags: ['Crypto', 'Trading', 'Investments'],
    color: 'bg-amber-500',
  },
  {
    id: '5',
    title: 'Portfolio of ML projects',
    category: 'ML',
    description: 'Various machine learning projects are collected in one place.',
    imageUrl: botMlImg,
    githubUrl: 'https://github.com/1NT9NS9/1NT9NS9/blob/main/README(finance).md',
    tags: ['ML', 'NLP', 'AI'],
    color: 'bg-indigo-500',
  },
];

export const SKILLS_CATEGORIES = [
  {
    id: 'frontend',
    title: "Frontend",
    description: "Immersive UI & Modern Tech",
    skills: ["UI/UX Design", "React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"]
  },
  {
    id: 'backend',
    title: "Backend",
    description: "Python, ML & AI Logic",
    skills: ["Python developer", "ML", "NLP", "AI"]
  },
  {
    id: 'production',
    title: "Production",
    description: "Deployment & DevOps",
    skills: ["GitHub Actions", "Docker Compose", "Deployment [Hosting | Domain]", "Telegram bot", "Sandbox"]
  },
  {
    id: 'knowledge',
    title: "Knowledge base",
    description: "Documentation & Intelligence",
    skills: ["Obsidian", "Cline", "Memory bank"]
  },
  {
    id: 'ai_models',
    title: "AI models",
    description: "LLMs & Model Integration",
    skills: ["GPT-5.2", "Gemini-3.0 Pro", "Sonnet 4.5", "API", "OpenRouter", "Hugging Face"]
  },
  {
    id: 'tools_ai',
    title: "Tools AI",
    description: "Development Accelerators",
    skills: ["CLI", "IDE", "Cloud", "Cursor", "Claude Code", "Antigravity"]
  },
  {
    id: 'agentic',
    title: "Agentic Systems",
    description: "Autonomous Workflows",
    skills: ["Memory bank", "RAG", "Context Engineering", "Prompt Engineering", "Concept Engineering", "Tools", "Multi-Agent"]
  },
  {
    id: 'automation',
    title: "Automation",
    description: "No-code & Build Systems",
    skills: ["n8n", "Lovable", "AIstudio"]
  },
  {
    id: 'ai_soft',
    title: "AI soft",
    description: "Creative & Utility Apps",
    skills: ["Granola", "Handy", "ElevenLabs", "Nano banano", "Veo", "Sora"]
  },
];

export const INTRO_TEXT = {
  greeting: "Hello, I'm Dima.",
  role: "AI Engineer | Product",
  bio: "I work on creating products based on artificial intelligence. I am passionate about programming and product development. My mission is to create maximum value for users.",
};

export const CONTACT_URL = 'https://t.me/Int9ns9';
export const LETS_TALK_URL = 'https://t.me/Int9ns9';
