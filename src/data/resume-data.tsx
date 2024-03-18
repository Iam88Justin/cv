import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Justin Lin",
  initials: "JL",
  location: "Irvine, CA, US",
  locationLink: "https://www.google.com/maps/place/University+of+California,+Irvine/@33.6423814,-117.8442496,17z/data=!3m2!4b1!5s0x80dcde530be2ce7f:0x44cfb850bf89e870!4m6!3m5!1s0x80dcde0e2592bf91:0x79fbc5d0b6dab7ec!8m2!3d33.6423814!4d-117.8416747!16zL20vMGM1eF8?entry=ttu",
  about:
    "Data Science Master's Grad with Python, SQL & Machine Learning Expertise",
  summary:
    "As a new grad in Data Science, I conduct research in machine learning and data analysis. Actively looking for Software Engineering and Data Scientist positions. I am also a fast learner of new technologies, applying advanced techniques and methods, such as deep learning, neural networks, and digital signal processors, to solve real-world problems. With a Bachelor's degree in Computer Science, I developed a strong foundation in programming and data structures. I am passionate about using my skills and knowledge to create innovative and impactful solutions for the future.",
  avatarUrl: "/profile.jpg",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "justinchenlin@gmail.com",
    tel: "9492836959",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Iam88Justin",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/justin-chen-lin",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "University of California, Irvine",
      degree: "Master's Degree in Data Science",
      start: "2022",
      end: "2023",
    },
    {
      school: "National Taiwan University",
      degree: "Bachelor's Degree in Computer Science and Engineering",
      start: "2017",
      end: "2021"
    }
  ],
  work: [
    {
      company: "Mentor Global",
      link: "https://parabol.co",
      badges: ["Irvine"],
      title: "Data Analyst",
      logo: ParabolLogo,
      start: "2023",
      end: "2023",
      description:
        "Leveraged R and linear regression analysis to refine cryptocurrency market size forecasts, achieving a 90% reduction in prediction interval width compared to initial research. Conducted comprehensive market research and competitor analysis on cryptocurrency, consistently receiving positive feedback for impactful data visualizations with Tableau.Synthesized complex research findings and drew actionable conclusions, effectively communicating them to the team of 7 and the client through clear visualization and reports."

    },
    {
      company: "National Taiwan University",
      link: "https://clevertech.biz",
      badges: ["Remote"],
      title: "Research Assistant",
      logo: ClevertechLogo,
      start: "2019",
      end: "2020",
      description:
        "Achieved a 67% reduction in testing time through the development and implementation of automated test case generation scripts in C/C++ and presented in a research paper report with Overleaf. Migrated the network system and scripted automation in the Linux environment, leading to a 50%+ reduction in both processing time and latency, which minimized delays and improved user experience. Applied gradient descent and simulated annealing to optimize the scheduling system, resulting in a 90% reduction in total response time, significantly enhancing performance and responsiveness.",
    },
  ],
  skills: [
    "Python",
    "C/ C++",
    "Django",
    "Linux Programming",
    "Git version control",
    "SQL",
    "R programming",
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;