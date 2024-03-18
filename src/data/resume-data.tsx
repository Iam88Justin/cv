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
      title: "Python Backend Development",
      techStack: [
        "Django REST Framework",
        "Python",
        "JavaScript",
        "HTML",
        "CSS",
      ],
      description: "Outline the concepts that exist in most UI frameworks using bootstrap as an example to directly reference common practice. Use the Bootstrap CSS Framework to create webpages Leverage bootstrap documentation to reproduce and modify CSS components. The basics of react in relation to other frameworks and web technologies.",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Minimalist Resume",
      techStack: ["TypeScript", "Next.js", "JavaScript", "Git", "React.js"],
      description:
        "Simple web app that renders minimalist CV with print-friendly layout. Built using Next.js 14, React, Typescript, Shadcn/ui, TailwindCss. Optimized for Next.js and Vercel.",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Rat Calls Detection",
      techStack: ["Digital Signal Processors", "Next.js", "Neural Networks", "Leadership", "Data Analysis", "Statistical Modeling"],
      description:
        "Detected noise sources in audio files with pattern recognition in R language and performed signal preprocessing",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "NoSQL Data Analysis",
      techStack: ["MongoDB", "Cassandra", "Apache Spark", "Data Analysis"],
      description:
        "Optimized Cassandra queries by creating indices for a dataset of 1.7 million rows on Docker, reducing the analysis process from tens of hours to one minute",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "House Prices Prediction",
      techStack: ["Machine Learning", "Web Crawling", "Python", "Statistics Methods"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Traveling Salesman Problem",
      techStack: ["C++", "Research and Development", "Testing", "GitHub"],
      description: "Designed and Implemented Branch-and-Bound Depth-First Search for a common unsolved routing problem.",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
  ],
} as const;