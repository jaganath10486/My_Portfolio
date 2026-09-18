import type {
  Bio as BioType,
  Capability,
  ServiceGroup,
  Education,
  Experience,
  Principle,
  Project,
  ProjectCategory,
  SkillGroup,
} from "@/types";

export const Bio: BioType = {
  name: "Naga Jaganath Reddy",
  shortName: "Naga Jaganath",
  roles: ["AI Full Stack Engineer", "Full Stack Engineer", "Backend Engineer"],
  description:
    "AI full stack engineer with close to three years of experience taking products from an empty repository to something running in production — SEO-ready Next.js frontends that load fast, APIs and queues that stay correct under load, LLMs, AI agents and RAG pipelines wired into real workflows, and the payments, authentication and booking plumbing in between. Recent work includes real-time QR ticketing that handled 20,000+ scans at a live concert with zero duplicate entries, payout automation that removed 90% of a finance team's manual work, and a threefold cut in First Contentful Paint.",
  availability: "Available for freelance work",
  email: "jaganathsegi104@gmail.com",
  github: "https://github.com/jaganath10486",
  resume:
    "https://drive.google.com/file/d/1ISkZAhHTFst0rO3UmHMdLq3aROtmqbsN/view?usp=drive_link",
  linkedin: "https://www.linkedin.com/in/naga-jaganath-9b81ba240/",
  insta: "https://www.instagram.com/jaganath_104/",
  whatsapp: "+919550045232",
};

/**
 * The offer. Every claim is a compressed statement of work that shipped, and
 * every `proof` line traces back to an entry in `experiences` or `projects` —
 * so nothing here is a capability that cannot be evidenced in conversation.
 */
export const capabilities: readonly Capability[] = [
  {
    claim: "Two taps, one charge.",
    title: "Payments and payouts",
    proof:
      "Automated payout workflows for 500+ event organizers on Easebuzz webhooks with idempotency checks, eliminating 90% of manual finance operations.",
  },
  {
    claim: "20,000 scans, zero double entries.",
    title: "Ticketing and entry at scale",
    proof:
      "Real-time QR ticketing that processed 20,000+ scans at the Ilaiyaraaja concert with zero duplicate entries under concurrent peak load.",
  },
  {
    claim: "One slot, one booking.",
    title: "Booking and subscriptions",
    proof:
      "A Redis-cached booking backend with idempotent booking logic and BullMQ job processing, plus a subscription lifecycle with overdue auto-cancellation and PDF invoicing.",
  },
  {
    claim: "A provider goes down, the request still lands.",
    title: "LLMs inside product flows",
    proof:
      "A FastAPI service streaming Gemini output into a live publish flow, cutting publish time from 15 minutes to 8, and an LLM gateway that masks PII before egress and fails over between providers.",
  },
];

/**
 * The plain-language menu. Written so someone buying an outcome can point at a
 * line and say "that one" without knowing what a queue is — the claims above
 * are the differentiator, this is the part that lets a visitor self-identify.
 *
 * The section that renders this says "I have shipped it before", so every line
 * is a claim of delivered work, not just an offer.
 *
 * OUTSTANDING: RAG, OCR and web scraping are shipped work, but as of the
 * October 2026 edit there is still no entry in `projects` or `experiences`
 * describing them. Everything else on this list can be pointed at. Add those
 * three to the record so a client asking "show me one" gets an answer instead
 * of a promise.
 */
export const services: readonly ServiceGroup[] = [
  {
    title: "Payments and money",
    items: [
      "Payment gateway integration",
      "Automated payouts and settlements",
      "Subscription billing and renewals",
      "Invoices, receipts and statements",
      "Refunds and reconciliation",
    ],
  },
  {
    title: "Sign-in and accounts",
    items: [
      "WhatsApp OTP login",
      "Phone and email OTP",
      "Google and social sign-in",
      "Roles and permissions",
    ],
  },
  {
    title: "Bookings, tickets and entry",
    items: [
      "Booking and scheduling",
      "Availability and slot management",
      "QR code generation",
      "QR scanning and gate validation",
    ],
  },
  {
    title: "AI features",
    items: [
      "LLM integration",
      "AI agents and automated workflows",
      "RAG and chat over your own documents",
      "Search in plain English",
      "AI-generated copy and images",
      "Document data extraction (OCR)",
      "Recommendation systems",
    ],
  },
  {
    title: "Dashboards and internal tools",
    items: [
      "Admin panels",
      "CRM systems",
      "Analytics dashboards",
      "Excel and PDF exports",
    ],
  },
  {
    title: "The plumbing underneath",
    items: [
      "Third-party API integration",
      "Web scraping and data collection",
      "Background jobs and queues",
      "Real-time updates and notifications",
      "Transactional email",
      "File uploads and storage",
      "Database design",
      "Google Maps and location features",
      "SEO and page-speed work",
    ],
  },
];

/**
 * How he works. Each point is anchored to a specific piece of shipped work
 * rather than being process language for its own sake.
 */
export const principles: readonly Principle[] = [
  {
    title: "I start with what breaks",
    body: "Before the happy path: what happens when the webhook arrives twice, the scanner loses signal mid-queue, or two people take the same slot in the same second. That list is where the architecture comes from — it is why the payout and booking paths I have shipped are idempotent rather than patched later.",
  },
  {
    title: "I own the whole path",
    body: "Schema through to deploy — API, queues, background jobs, the screens on top, and the caching and metadata that make it fast. Across the ticketing, payouts and publishing work I have built both sides, so a feature is one person's responsibility instead of a handoff you have to project-manage.",
  },
  {
    title: "Fast is a decision, not a cleanup task",
    body: "Lighthouse 60 to 90 and First Contentful Paint cut threefold on a live product, through SSR, server and browser caching, lazy loading and metadata work. Performance built in during the work costs a fraction of performance retrofitted after launch.",
  },
];

/**
 * Grouped by the job each set does on a project rather than by language family,
 * and cut back hard. The previous version listed fifty technologies including
 * the editor — a list that long reads as a keyword dump and invites the
 * assumption that none of it runs deep.
 */
export const skills: readonly SkillGroup[] = [
  {
    title: "Product frontends",
    skills: [
      "TypeScript",
      "Next.js",
      "React",
      "React Native",
      "Tailwind CSS",
      "Zustand",
      "TanStack Query",
    ],
  },
  {
    title: "APIs and services",
    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "Python",
      "REST",
      "GraphQL",
      "WebSockets",
      "Microservices",
    ],
  },
  {
    title: "Data and queues",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "BullMQ"],
  },
  {
    title: "AI in product",
    skills: [
      "Gemini API",
      "OpenAI API",
      "LangChain",
      "Streaming responses",
      "PII masking",
    ],
  },
  {
    title: "Ship and run",
    skills: ["AWS", "Docker", "Kubernetes", "Vercel", "CI/CD", "Jest"],
  },
];

export const experiences: readonly Experience[] = [
  {
    id: 0,
    role: "Software Developer",
    company: "Kynhood Technologies",
    date: "April 2024 — October 2026",
    /**
     * Last day is 1 October 2026. Until then this is still the current role and
     * the marker is accurate; on 2 October flip this to false (or delete the
     * line) and the "Current role" dot disappears on its own.
     */
    current: true,
    highlights: [
      "Architected a real-time React and Express QR ticketing system that processed 20,000+ scans at the Ilaiyaraaja concert with zero duplicate entries under peak load.",
      "Automated payout workflows for 500+ event organizers in TypeScript and Node.js, processing Easebuzz payment webhooks with idempotency checks and eliminating 90% of manual finance operations.",
      "Shipped a FastAPI microservice on the Gemini API that streams AI-generated event descriptions and produces cover images in real time, cutting organizer publish time from 15 minutes to 8.",
      "Raised onboarding completion from 40% to 70% with a TypeScript React location picker built on GPS detection, drag-to-pin and Google Maps autocomplete, replacing manual address entry.",
      "Improved Lighthouse from 60 to 90 and cut First Contentful Paint threefold through Next.js SSR, lazy loading, server-side and browser-level caching, metadata optimisation and SVG sprite bundling.",
    ],
    stack: [
      "TypeScript",
      "Next.js",
      "React",
      "Node.js",
      "Express.js",
      "FastAPI",
      "Python",
      "MongoDB",
      "Redis",
      "Gemini API",
    ],
  },
  {
    id: 1,
    role: "Full Stack Developer Intern",
    company: "TensorGo",
    date: "December 2023 — January 2024",
    highlights: [
      "Built an Express.js subscription lifecycle system with automated due-date reminders, overdue auto-cancellation and PDF invoice generation, reducing manual follow-up by 80%.",
      "Delivered a self-service subscriber dashboard in TypeScript and React covering plan management, billing history and invoice downloads, enabling full account management without support involvement.",
    ],
    stack: [
      "TypeScript",
      "React",
      "Node.js",
      "Express.js",
      "Cassandra",
      "Stripe",
    ],
  },
  {
    id: 2,
    role: "Frontend Developer Intern",
    company: "COSGrid Networks",
    archived: true,
    date: "May 2023 — October 2023",
    highlights: [
      "Built a Real User Monitoring dashboard surfacing web performance metrics such as page load time and error rates, with geolocation filtering.",
      "Implemented a Node.js server for efficient storage and retrieval of the collected metrics.",
    ],
    stack: [
      "Angular",
      "Node.js",
      "Django REST framework",
      "Strapi CMS",
      "Material UI",
    ],
  },
  {
    id: 3,
    role: "Full Stack Developer Intern",
    company: "Coincent",
    archived: true,
    date: "December 2021 — January 2022",
    highlights: [
      "Designed and built a full stack job portal backed by PHP and MySQL.",
    ],
    stack: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
  },
];

export const education: readonly Education[] = [
  {
    id: 0,
    school: "IIITDM Kancheepuram, Chennai",
    date: "December 2020 — May 2024",
    grade: "8.71 CGPA",
    degree: "B.Tech, Computer Science and Engineering",
    primary: true,
  },
];

export const achievements: readonly string[] = [
  "Ranked in the top 2% nationally in JEE Main, among more than 1,000,000 candidates.",
  "First place in Reverse Engineering at the IIITDM Kancheepuram tech fest.",
];

export const categoryLabels: Readonly<Record<ProjectCategory, string>> = {
  web: "Web app",
  backend: "Backend",
  android: "Android app",
  ml: "Machine learning",
};

/**
 * Four projects carry pages; the rest are listed by name with a repo link.
 * The previous build gave a three-sentence CRUD exercise the same weight as the
 * LLM gateway, which cost more credibility than the extra entries earned.
 *
 * `image` is set only where a genuine screenshot exists — an earlier version
 * filled the gap with stock photography, including a padlock on a keyboard
 * standing in for the gateway.
 */
export const projects: readonly Project[] = [
  {
    slug: "equipment-rental-platform",
    title: "AI-Powered Equipment Rental Platform",
    summary:
      "A peer-to-peer rental marketplace where the search is a language model and the booking path is idempotent.",
    description:
      "A marketplace for renting equipment between people, built end to end. An AI recommendation engine uses view history and booking categories to surface listings a renter is likely to want. Natural language search runs through LangChain orchestrating the Gemini API, converting a free-text query into structured MongoDB filters so nobody has to work a filter sidebar. Behind it, a Redis-cached booking backend with idempotent booking logic and BullMQ job processing.",
    hardPart:
      "Booking is a concurrency problem wearing a form's clothing. Two renters can hit the same slot in the same second, and a client that retries a request it thinks failed must not end up holding two reservations. The booking path is keyed so a repeat of the same intent resolves to the same reservation, and the slow work — confirmations, notifications — runs off a BullMQ queue, which keeps the response fast without letting the state drift.",
    image: "/equipment_rental.png",
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "BullMQ",
      "LangChain",
      "Gemini API",
      "Google OAuth",
    ],
    category: "web",
    github: "https://github.com/jaganath10486/EquipRent_Server",
    webapp: "https://equip-rent.vercel.app/",
    featured: 1,
  },
  {
    slug: "budgetwise",
    title: "BudgetWise",
    summary:
      "A personal finance app that forecasts a month in flight, with a Gemini assistant that explains the numbers but is never allowed to compute one.",
    description:
      "A personal finance app built end to end: what is safe to spend today, where the month ends up, and whether a purchase fits before it is made. One analytics pass loads a four-month window per request and derives everything downstream from it — recurring charges, the fixed versus variable split, the month-end projection, per-category pace and the line item behind each category shift — so the dashboard, budgets, commitments, planning and the assistant can never disagree with one another. Recurring commitments are detected from transaction history rather than kept as a list the user maintains: descriptions are normalised and grouped, then accepted as recurring only when the amount holds within 20% across two or more months and the billing date stays inside an eight-day window. Gemini runs three features on top of that — a monthly health check that ranks what to act on, the plain-English trade-off under a yes/tight/no affordability verdict, and a multi-turn assistant that answers questions about the user’s own spending and suggests the next one to ask. The assistant is grounded by construction: no tools and no query access, one server-assembled summary as its entire view of the data, a reply schema sent to the model and re-validated on the way back, and an explicit out-of-scope answer when the figure it was asked for is not in that summary. Every number the model talks about is computed in TypeScript first, so an outage costs the prose and not the answer — and the maths behind those numbers is covered by assert-based regression suites that run without a database.",
    hardPart:
      "A month in flight is not comparable to a month that finished, and the obvious fix makes it worse: multiplying spend-to-date by the days remaining extrapolates rent as though it were a daily habit, turning ₹32,706 of real spending on my test account into a ₹98,118 forecast against ₹62,000 of income. So charges that repeat are counted once and only variable spend gets the daily rate, which lands the same month at ₹41,026. The harder half is knowing when not to answer — telling rent apart from groceries needs at least one earlier month, and below that a single flag pulls the forecast out of the projection, the budget statuses, the summary copy and the model’s prompt together.",
    stack: [
      "Next.js",
      "TypeScript",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Zod",
      "Gemini API",
      "JWT",
      "Tailwind CSS",
    ],
    category: "web",
    image: "/budget-wise.png",
    github: "https://github.com/jaganath10486/BudgetWise",
    webapp: "https://budget-wise-ochre.vercel.app",
    featured: 2,
  },
  {
    slug: "sentinelai-gateway",
    title: "SentinelAI Gateway",
    summary:
      "A gateway that strips PII before a prompt ever reaches OpenAI or Gemini, then routes by task and fails over between providers.",
    description:
      "A gateway that sits between an application and its model providers. It uses 96 regex patterns alongside spaCy named-entity recognition to detect and mask 7+ categories of personally identifiable information, so no raw sensitive data is transmitted to OpenAI or Gemini. A task-aware router then picks a provider based on the kind of request, with retries and automatic fallback to the other provider.",
    hardPart:
      "A privacy gateway is only worth having if it fails safely in both directions. If detection misses, raw PII leaves the building — so masking happens before the outbound request is composed, not as a filter bolted on afterwards. And if a provider is down, a feature that depends on it should degrade rather than die, which is why the router retries and crosses over to the second provider instead of surfacing the error to the caller.",
    stack: ["FastAPI", "Python", "LangChain", "OpenAI", "Gemini", "spaCy"],
    category: "backend",
    github: "https://github.com/jaganath10486/SentinelAI-Gateway",
    featured: 3,
  },
  {
    slug: "web-chat",
    title: "Web Chat",
    summary:
      "Real-time messaging on the MERN stack, with socket.io keeping conversations in sync across connected clients.",
    description:
      "A messaging application built on the MERN stack, using socket.io over WebSockets to deliver messages in real time and keep conversations consistent across every connected client, with Google OAuth for sign-in.",
    stack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "WebSockets",
      "Google OAuth",
    ],
    category: "web",
    github: "https://github.com/jaganath10486/Web-Chat",
    webapp: "https://web-chat-beta-one.vercel.app/users/sign_up",
    featured: 4,
  },

  // Coursework and early side projects. Listed by name, no page of their own.
  {
    slug: "skin-cancer-classification",
    title: "Skin Cancer Classification",
    summary:
      "Transfer learning with focal loss to handle class imbalance in skin cancer image classification.",
    description:
      "Deep learning for skin cancer classification, using preprocessing and focal loss to address class imbalance, with transfer learning and fine-tuning of pre-trained models.",
    stack: ["Python", "Keras", "TensorFlow"],
    category: "ml",
    github: "https://github.com/jaganath10486/Skin-Cancer-Classification",
    archived: true,
  },
  {
    slug: "job-portal",
    title: "Job Portal",
    summary:
      "A Django REST job board with authentication, posting and filtering.",
    description:
      "A Django REST Framework job portal with secure authentication, job posting, candidate management and filtering.",
    stack: ["Python", "Django REST framework"],
    category: "backend",
    github: "https://github.com/jaganath10486/Job-Portal",
    archived: true,
  },
  {
    slug: "expenditure-management",
    title: "Expenditure Management",
    summary:
      "A React expense tracker with local persistence, search and sorting.",
    description:
      "A React application for tracking expenditure, with local storage, CRUD operations, dynamic search and sorting.",
    stack: ["React", "Bootstrap"],
    category: "web",
    github: "https://github.com/jaganath10486/React-Budget-App",
    webapp: "https://react-budget-app-rouge.vercel.app/",
    archived: true,
  },
  {
    slug: "electronic-note",
    title: "Electronic Note",
    summary: "Cloud storage for images and notes on Express and MySQL.",
    description:
      "An image and notes storage service built with Express.js and MySQL, using Multer for upload handling.",
    stack: ["Node.js", "Express.js", "MySQL", "Multer"],
    category: "web",
    github: "https://github.com/jaganath10486/Notes",
    archived: true,
  },
  {
    slug: "task-management",
    title: "Task Management",
    summary: "A Django REST task manager covering the full CRUD lifecycle.",
    description:
      "A task management service built with Django REST Framework, covering the full range of CRUD operations.",
    stack: ["Python", "Django REST framework"],
    category: "backend",
    github: "https://github.com/jaganath10486/Task-Management",
    archived: true,
  },
  {
    slug: "mobile-price-prediction",
    title: "Mobile Price Prediction",
    summary:
      "Price estimation for mobile phones from cleaned, dimension-reduced feature data.",
    description:
      "A model estimating mobile phone prices, using data cleaning, visualisation, dimension reduction and modelling techniques.",
    stack: ["Python", "Data Science"],
    category: "ml",
    github: "https://github.com/jaganath10486/Mobile_Price_Prediction",
    archived: true,
  },
  {
    slug: "balloon-popping-game",
    title: "Balloon Popping Game",
    summary: "An Android game in React Native.",
    description:
      "An Android game built with React Native, with balloons ascending from the bottom of the screen to be popped.",
    stack: ["React Native", "React"],
    category: "android",
    github: "https://github.com/jaganath10486/l2-mobile-developer-assessment",
    archived: true,
  },
];

/** Projects with pages of their own, in index order. */
export const liveProjects: readonly Project[] = projects.filter(
  (project) => !project.archived,
);

/** Coursework and early work — listed by name, linked to the repo. */
export const archivedProjects: readonly Project[] = projects.filter(
  (project) => project.archived,
);

export const featuredProjects: readonly Project[] = liveProjects
  .filter((project) => project.featured !== undefined)
  .sort((a, b) => (a.featured ?? 0) - (b.featured ?? 0));

/** Only non-archived slugs resolve to a page. */
export function getProject(slug: string): Project | undefined {
  return liveProjects.find((project) => project.slug === slug);
}

/** Rendered history. Matches the résumé, which omits the two 2021–23 stints. */
export const shownExperiences: readonly Experience[] = experiences.filter(
  (entry) => !entry.archived,
);

export const currentRole = experiences.find((entry) => entry.current);

/** Headline technologies, surfaced in the hero rather than only on /about. */
export const coreStack: readonly string[] = [
  "TypeScript",
  "Next.js",
  "React",
  "Node.js",
  "FastAPI",
  "MongoDB",
  "Redis",
  "AWS",
];
