import { ProjectItem } from '../types';

export const ABOUT_ME_DATA = {
  name: "Anushka Gupta",
  handle: "@anushka_5266",
  age: "20-year-old",
  title: "CSE-AI Student & Product Builder",
  location: "Delhi, India",
  bio: `hi, i'm anushka — an engineering student interested in AI, problem solving, and building products that people can actually use. i enjoy taking an idea from "could this work?" to something that actually does. these days, that means building AI applications, working with ML, and spending an unreasonable amount of time solving DSA problems in C++.`,
  figuringOut: {
    subheading: "i'm still figuring things out.",
    paragraph2: "I don't have my entire career mapped out — and I don't think I want to. I'm exploring research, product building, hackathons, and everything in between, trying to understand what kind of problems I enjoy solving and what kind of engineer I want to become.",
    paragraph3: "What I do know is that I want to keep learning, keep building, and keep putting myself in rooms where I have something new to figure out.",
    tagline: "20 years in. still figuring it out."
  },
  whatsNext: {
    title: "what's next?",
    line1: "more things to build. more problems to solve. probably more tabs open than necessary.",
    line2: "i'm still early in the journey, but i'm excited to see where it takes me."
  },
  highlights: [
    "Machine Learning & Deep Learning Pipelines",
    "Data Structures & Algorithms in C++",
    "Full-Stack Web Development (React / TS / FastAPI)",
    "Audio Processing & Self-Supervised Contrastive Learning"
  ],
  focusAreas: [
    {
      icon: "🧠",
      title: "ai applications",
      description: "taking models out of jupyter notebooks and putting them into the hands of real people. building ai that is actually intuitive and usable."
    },
    {
      icon: "📦",
      title: "product",
      description: "figuring out what to build before writing a single line of code. bridging the gap between complex architecture and human empathy."
    },
    {
      icon: "📊",
      title: "analytics",
      description: "finding the actual story hidden inside raw data. turning noise, metrics, and user feedback into clear direction."
    },
    {
      icon: "🌱",
      title: "growth & consulting",
      description: "scaling impact. whether it's building a community from scratch or strategizing how a tech solution actually reaches its target audience."
    }
  ],
  skills: [
    { name: "C++", category: "Languages" },
    { name: "Python", category: "Languages" },
    { name: "TypeScript", category: "Languages" },
    { name: "PyTorch", category: "AI/ML" },
    { name: "FastAPI", category: "Backend" },
    { name: "React", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Git & Linux", category: "Tools" }
  ]
};

export const BEYOND_THE_CODE_DATA = {
  title: "🌱 beyond the code",
  subtitle: "because not everything worth building involves code.",
  organization: "Karuna — The Compassion NGO",
  role: "Community & Education Volunteer",
  period: "Volunteer Work",
  lastEdited: "Today at 10:14 AM",
  openingParagraphs: [
    "there's obviously a lot of code on this website.",
    "but some of the experiences that stayed with me the most had very little to do with it."
  ],
  narrativeIntro: "During my time with Karuna — The Compassion NGO, I got the opportunity to work closely with children in local underserved communities, helping conduct educational outreach drives, stationery kit distributions, and interactive workshops. What started as an opportunity to contribute ended up teaching me a very different kind of problem-solving — one that doesn't always have a neat input, output, or optimal solution.",
  whatIDid: {
    heading: "what i actually did",
    intro: "Working on the ground meant stepping away from IDEs and benchmark metrics, focusing instead on real human interaction, listening, and consistent effort.",
    bullets: [
      "Organized and conducted child education drives & interactive learning sessions",
      "Distributed essential stationery kits, learning materials, and books to children in local communities",
      "Hosted creative workshops and activity sessions encouraging teamwork, expression, and curiosity",
      "Supported community outreach initiatives, listening to local mentors to understand on-ground needs"
    ]
  },
  photoJournal: {
    heading: "some things are better documented in pictures.",
    featuredMain: {
      src: "/photos/karuna_ngo_team.jpg",
      alt: "Karuna NGO Team",
      caption: "one of those days that doesn't look like much on paper, but stayed with me."
    },
    gridPhotos: [
      {
        src: "/photos/education_drive_children.jpg",
        alt: "Education drive with children",
        caption: "learning & mentorship drive with the kids."
      },
      {
        src: "/photos/ngo_distribution.jpg",
        alt: "Educational kit distribution",
        caption: "distributing books, stationery & educational kits."
      }
    ],
    featuredSecondary: {
      src: "/photos/community_stickers_workshop.jpg",
      alt: "Activity & Workshop Session",
      caption: "the people, energy & smiles that made it memorable."
    }
  },
  whatStayedWithMe: {
    heading: "what stayed with me",
    intro1: "The things I learned here aren't straightforward to put on a resume.",
    
    reflections: [
      { title: "Listening before solving", text: "Understanding people's actual situation matters far more than rushing to offer quick technical or surface-level fixes." },
      { title: "Patience & showing up consistently", text: "Real impact with people is built on quiet, persistent presence rather than one-off gestures." },
      { title: "Communicating across backgrounds", text: "Learning how to connect, empathize, and speak effectively with people outside my usual technical environment." },
      { title: "Impact isn't always measurable", text: "Realizing that sometimes the most valuable outcome isn't captured by a metric — it's making someone feel heard and supported." }
    ],
    videoLink: "https://drive.google.com/file/d/1CH5yEuGsDZw6Q4vT0DtC7budHTHS21l0/view?usp=sharing",
    videoTitle: "Video Archive (edited by Aditee 🫶)",
    videoText: "some moments i couldn't put into words 🎥 →"
  },
  footer: {
    line1: "some things are better documented in pictures than bullet points.",
    line2: "thanks for scrolling this far :) anyway, back to the code."
  }
};

export const EXPERIENCE_DATA = {
  role: "AI/ML Research Intern",
  organization: "Delhi Technological University (DTU)",
  period: "Recent / Ongoing",
  description: "Developed an audio processing and self-supervised contrastive learning pipeline for infant cry classification using PyTorch.",
  details: [
    "Architected end-to-end audio signal preprocessing scripts (spectrogram generation, noise reduction, and feature extraction).",
    "Implemented self-supervised contrastive learning algorithms in PyTorch to maximize feature representation accuracy on limited labeled datasets.",
    "Benchmarked classification performance against baseline CNN architectures, achieving significant improvements in validation metrics."
  ],
  techUsed: ["PyTorch", "Python", "Librosa", "Audio Processing", "Contrastive Learning", "Git"]
};

export const ACHIEVEMENTS_DATA = {
  title: "🏆 little wins",
  introParagraph1: "I've always been the kind of person who gets a little too excited about learning something new — and over the years, that curiosity has brought along a few opportunities I’m really grateful for.",
  introParagraph2: "From being selected for national scholarship programs and mentorship initiatives to building projects at hackathons, I've been fortunate to learn, build, compete, and meet some incredible people along the way.",
  scholarships: [
    { name: "Marvell Technology M-STEM Scholar", detail: "Top 100 nationwide. Awarded $2000" },
    { name: "Cisco Women in Tech Scholar", detail: "Top 50" },
    { name: "Ericsson Empowering Girl Scholar", detail: "Top 200" },
    { name: "Amazon ML Summer School", detail: "Top 3,000 students nationwide" }
  ],
  hackathons: [
    { title: "3rd Place, Hack4Delhi", description: "Municipal Corporation of Delhi", folderId: "hack4delhi" as const },
    { title: "3rd Place, Phantom Agents", description: "Oblivion 2025 (D'Code NSUT)", folderId: "oblivion-nsut" as const },
    { title: "2nd Place, BizIgnite Case Study Competition", description: "DTU", folderId: "bizignite-dtu" as const },
    { title: "2nd Place, Innoquest Ideathon", description: "Microsoft Azure Community", folderId: "innoquest-ideathon" as const },
    { title: "1st Place, Innovation Mela", description: "MAIT, Delhi", folderId: "innovation-mela-mait" as const }
  ],
  driveLink: "https://drive.google.com/drive/u/0/folders/1u84pFlPb-E8cKmpZ9qu12TPePQhd0oZA"
};

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "resumate",
    title: "ResuMate",
    subtitle: "AI-Driven Resume Analysis & Internship Matcher",
    tagline: "smart resume parsing, ATS scoring, and automated internship recommendations.",
    description: "an AI-driven resume analysis and internship assistant designed to help students evaluate resume keywords, extract core technical competencies, score against ATS benchmarks, and deliver tailored internship recommendations.",
    techStack: ["React", "TypeScript", "Python", "FastAPI", "NLP", "Tailwind CSS"],
    placeholderImage: "/assets/placeholders/resumate_preview.png"
  },
  {
    id: "bharatmat",
    title: "BharatMat",
    subtitle: "Civic Engagement & Electoral Integrity Platform",
    tagline: "safeguarding democratic processes through AI-powered fact-checking and deepfake detection.",
    description: "a comprehensive civic engagement and electoral integrity platform designed to safeguard democratic processes through AI-powered fact-checking, deepfake detection, and ground-level voter transparency.",
    techStack: ["React", "TypeScript", "Python", "Deepfake Detection", "AI/ML", "Tailwind CSS"],
    placeholderImage: "/photos/bharatmat_team.jpg"
  },
  {
    id: "legalaipro",
    title: "LegalAIPro",
    subtitle: "AI-Powered Legal Technology Platform",
    tagline: "empowering professionals with contract analysis, legal assistance, and case prediction.",
    description: "a comprehensive AI-powered legal technology platform empowering professionals with automated contract analysis, intelligent legal assistance, and data-driven case outcome prediction.",
    techStack: ["React", "TypeScript", "Python", "FastAPI", "NLP", "Contract Analysis"],
    placeholderImage: "/photos/code_czars_policy_integration.jpg"
  }
];

export const HACKATHONS_PAGE_DATA = {
  title: "👩‍💻 hackathons",
  subtitle: "late nights, demos & questionable amounts of caffeine",
  openingParagraphs: [
    "i really like the part where an idea goes from “what if...” to “wait, we actually built this.”",
    "hackathons are probably where i've had the most fun doing that. there's something about having a ridiculous amount of work to do, very little time to do it, and a team that's equally invested in making the idea work.",
    "i've participated in hackathons across different kinds of problems — from AI and social impact to building things simply because we thought they should exist.",
    "some of them ended with a win. others ended with a demo, a lot of caffeine, and a list of things we'd do differently next time.",
    "honestly, both were useful."
  ],
  featuredHackathon: {
    name: "Hack4Delhi",
    result: "3rd place",
    tagline: "one of the ones that stayed with me.",
    paragraph1:
      "for Hack4Delhi, we built BharatMat — a comprehensive civic engagement and electoral integrity platform designed to safeguard democratic processes through AI-powered fact-checking and deepfake detection.",
    journey:
      "we first made it through the top 200 teams at the MCD Civic Centre, then made the jump to the top 30 at Bharat Mandapam. from there, we ended up securing 3rd place.",
    paragraph3:
      "the project went through a lot of iterations along the way — narrowing the idea, figuring out what was actually feasible, dividing the work, and somehow turning all of it into something we could stand behind on demo day.",
    image: {
      src: "/photos/bharatmat_team.jpg",
      alt: "BharatMat Team at Hack4Delhi",
      caption: "3rd place at Hack4Delhi — and a very sleep-deprived team."
    }
  },
  otherCompetitions: {
    heading: "other times i said “yeah, we can build that.”",
    subheading: "a few more hackathons, projects, late nights and questionable amounts of caffeine:",
    items: [
      {
        name: "Oblivion 2025 (D'Code NSUT)",
        result: "3rd Place",
        description: "built ResuMate — an AI-powered resume analyzer and internship assistant designed to help students evaluate and optimize their ATS scoring."
      },
      {
        name: "Innoquest Ideathon (Microsoft Azure Community)",
        result: "2nd Place",
        description: "pitched an innovative AI-driven emergency response and IoT-integrated solution designed to enhance women's safety in urban public spaces."
      },
      {
        name: "Innovation Mela (MAIT, Delhi)",
        result: "1st Place",
        description: "built LegalAIPro — a comprehensive AI-powered legal technology platform empowering professionals with contract analysis, legal assistance, and case prediction."
      },
      {
        name: "BizIgnite Case Study Competition (DTU)",
        result: "2nd Place",
        description: "pitched an AI-powered financial management application focused on intelligent stock portfolio tracking, real-time emotion-based risk assessment, and personalized trading insights."
      }
    ]
  },
  whatILike: {
    heading: "what i like about hackathons",
    points: [
      {
        title: "build first, figure it out along the way.",
        text: "you rarely know everything you need to know when you start. you just need to know enough to take the first step."
      },
      {
        title: "the idea is only half the problem.",
        text: "a great idea that nobody can explain, build, or demo isn't much of a product."
      },
      {
        title: "teams make everything better.",
        text: "the best hackathon experiences i've had weren't because one person did everything. they were because everyone brought something different to the table."
      },
      {
        title: "constraints are weirdly motivating.",
        text: "give me a deadline, a half-formed idea, and 24 hours — apparently that's enough."
      }
    ]
  },
  closingLine: "still saying “we have time” at 2AM. probably will continue."
};

export const CONTACT_DATA = {
  heading: "💬 hit me up",
  bio: "i genuinely like talking to people — hearing perspectives i haven't considered, stress-testing ideas, and occasionally getting lost in a conversation that was supposed to last five minutes.",
  paragraph2: "if you're building something, want to talk AI, products, or tech, have an interesting idea to bounce around, or just want to trade notes, i'm always up for a conversation.",
  reasonsToReachOut: [
    "you're building something and want to bounce ideas",
    "you have an interesting problem you're trying to solve",
    "you want to talk AI, products, startups, or tech",
    "you want to give me some advice (i'm listening)",
    "you want to grab a coffee and have a good conversation",
    "you have an interesting opportunity 👀",
    "you want to tell me a completely random fact"
  ],
  footerNote: "no elaborate pitch required. just say hi.",
  links: {
    github: "https://github.com/anushkaaaguptaa",
    linkedin: "https://www.linkedin.com/in/anushka-gupta-0a251a193/",
    leetcode: "https://leetcode.com/u/anushka_5266/",
    x: "https://x.com/anushka_5266",
    email: "anushkagupta5266@gmail.com"
  }
};
