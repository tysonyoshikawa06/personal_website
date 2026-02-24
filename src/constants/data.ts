export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
];

export const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/in/tysonyoshikawa/",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/tysonyoshikawa06",
    label: "GitHub",
  },
];

export const STATS = [
  { value: 20, suffix: "K+", label: "Students Reached" },
  { value: 4, suffix: "+", label: "Projects Shipped" },
  { value: 3.0, suffix: "+", label: "Years Coding" },
];

export const SKILL_CATEGORIES: Record<
  string,
  { label: string; items: { name: string; level: number }[] }
> = {
  general: {
    label: "General Software Engineering",
    items: [
      { name: "Java", level: 95 },
      { name: "Python", level: 85 },
      { name: "C", level: 60 },
      { name: "OCaml", level: 90 },
      { name: "Git & Version Control", level: 90 },
      { name: "Agile / Scrum", level: 85 },
      { name: "Data Structures & Algorithms", level: 95 },
    ],
  },
  frontend: {
    label: "Frontend",
    items: [
      { name: "React", level: 90 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "TailwindCSS", level: 90 },
      { name: "Next.js", level: 75 },
    ],
  },
  backend: {
    label: "Backend",
    items: [
      { name: "Flask", level: 85 },
      { name: "FastAPI", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "Node.js", level: 70 },
    ],
  },
  databases: {
    label: "Databases",
    items: [
      { name: "PostgreSQL", level: 75 },
      { name: "SQL", level: 80 },
      { name: "Firebase / Firestore", level: 80 },
      { name: "NoSQL Concepts", level: 70 },
    ],
  },
  tools: {
    label: "Tools & Platforms",
    items: [
      { name: "Docker", level: 65 },
      { name: "Vercel", level: 85 },
      { name: "AWS (ECS, EC2)", level: 70 },
      { name: "OpenAI API", level: 85 },
      { name: "OAuth / Auth Systems", level: 80 },
    ],
  },
};

export const EXPERIENCES = [
  {
    role: "Problem Design Engineer",
    company: "Idler (YC '25)",
    date: "Jan. 2026 — Present",
    desc: "At my part-time role at Idler, I review AI-generated code diffs across real production repositories, assessing spec clarity and test case validity. My job is to classify code implementation failures as AI-incompetence-based or spec-clarity-based in order to improve RL environments for AI coding agents.",
    tags: [
      "RL Environments",
      "Artificial Intelligence",
      "Codebases",
      "Python",
      "NumPy",
      "Java",
    ],
  },
  {
    role: "Selected Program Participant",
    company: "Milstein Summer Program Residency at Cornell Tech",
    date: "June 2025 — Aug. 2025",
    desc: "During this selective summer program, I learned from professionals working in software development, hardware manufacturing, and public service, gaining an interdisciplinary underestanding of AI's effect on the world. During this time, along with the guidance of entrepreneur coaches from Cornell Tech and startup foundres from the broader NYC metropolitan area, I built the foundations of Valence (detailed below) and worked with other participants on AI-integrated IoT projects.",
    tags: [
      "Artificial Intelligence",
      "Arduino",
      "Hardware Manufacturing",
      "Public Service",
      "Blender",
      "Unity",
    ],
  },
  {
    role: "Software Development Lead",
    company: "GreenClub — PathOS Subteam",
    date: "Jan. 2025 — Present",
    desc: "I currently lead a team of 4 developers, managing sprints, standups, and tickets to develop PathOS.earth, a route-optimization tool to minimize emissions on waste transport routes for real stakeholders. During my time as Software Development Lead, I have implemented a Scrum workflow to make development more efficient and ensure quality pull requests throughout. In past semesters, I have worked on the load-dependent VRP algorithm and frontend of the website.",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Flask",
      "AWS",
      "Python",
      "Node.js",
    ],
  },
  {
    role: "Web Development Workshop Lead",
    company: "Cornell WebDev",
    date: "Sep. 2024 — Jan. 2026",
    desc: "During my time in Cornell WebDev, I led a team of 3 student-teachers in developing technical workshops and lectures centered around web development. Together, we have taught 60+ students in topics such as REST APIs, databases, and modern development technologies.",
    tags: [
      "Google Slides",
      "React",
      "SQL",
      "PostgreSQL",
      "HTML/CSS",
      "TypeScript",
      "JavaScript",
      "REST APIs",
    ],
  },
  {
    role: "Artificial Intelligence and Education Research Assistant",
    company: "University of Hawaii IDEA Lab",
    date: "July 2023 — Apr. 2024",
    desc: "In high school, I worked with a computer science professor and a PhD candidate exploring the effectiveness of using generative AI in higher education. My job was to analyze quiz scores from undergraduate students and conduct background research that informed the final paper presented at the International Conference on Human-Computer Interaction.",
    tags: ["Data Analysis", "Artificial Intelligence", "Python"],
  },
];

export const EDUCATION_OVERVIEW = [
  { label: "University", value: "Cornell University" },
  { label: "College", value: "College of Arts & Sciences" },
  { label: "Major & Minor", value: "Computer Science & Education" },
  { label: "Expected Graduation", value: "May 2027" },
];

export const COURSEWORK = [
  "INFO 1998 — Trends in Web Development",
  "CS 2110 — Object-Oriented Programming & Data Structures",
  "MATH 2210 — Linear Algebra",
  "CS 2800 — Discrete Structures",
  "CS 3110 — Data Structures & Functional Programming",
  "CS 3410 — Computer System Organization",
  "CS 3780 — Introduction to Machine Learning",
];

export const ACTIVITIES = [
  {
    role: "Software Development Lead | Professional Development Chair",
    org: "Cornell GreenClub",
  },
  {
    role: "Milstein Scholar",
    org: "Milstein Program in Technology and Humanity",
  },
  { role: "Secretary", org: "Delta Kappa Epsilon" },
];

export const PROJECTS = [
  {
    src: "valence.png",
    date: "May 2025",
    title: "Valence",
    link: "https://github.com/tysonyoshikawa06/valence2",
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Cytoscape.js",
      "FastAPI",
      "PostgreSQL",
      "OpenAI API",
      "Docker",
      "AWS ECS",
    ],
    desc: "A web application leveraging AI to help high school students understand intra-subject relations in science. Features an AI tutor that unlocks new topics as students demonstrate systems thinking through an interactive knowledge graph.",
    featured: true,
  },
  {
    src: "pathos.png",
    date: "Feb 2025",
    title: "PathOS.earth",
    link: "https://www.pathos.earth/",
    stack: ["React", "Next.js", "TypeScript", "Flask", "Python", "AWS"],
    desc: "A route-optimization tool by Cornell's GreenClub to minimize emissions on waste transport routes. Uses a heuristic load-dependent VRP algorithm deployed on AWS.",
    featured: true,
  },
  {
    src: "ocgroups.png",
    date: "Sep 2024",
    title: "OffCampusGroups",
    link: "https://github.com/wsonja/offCampusGroups",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "TailwindCSS",
      "Firebase",
      "OAuth",
    ],
    desc: "An app to help Cornell students find groups for off-campus events such as concerts and networking events. Features real-time data sync and OAuth authentication.",
  },
  {
    src: "platstem.png",
    date: "Jul 2024",
    title: "platstem.org",
    link: "https://platstem.org/",
    stack: ["HTML", "Bootstrap CSS", "JavaScript"],
    desc: "A frontend platform with 100+ science resources for high school students, reaching 20,000+ students worldwide with complex scientific topics beyond the standard high school curriculum.",
  },
];
