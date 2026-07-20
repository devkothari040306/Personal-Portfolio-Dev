import {
  tryonix,
  spotlight,
  chatapp,
  jecrc,
  sagInfotech,
} from "../assets";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillHtml5,
} from "react-icons/ai";

import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiCplusplus,
  SiPostman,
  SiGit,
  SiMysql,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiSocketdotio,
  SiVercel,
  SiRender,
  SiCloudinary,
  SiSpringboot,
  SiAngular,
  SiLeetcode,
} from "react-icons/si";

import { DiCss3, DiJava } from "react-icons/di";

/* ---------------- Resume ---------------- */

export const resumeLink =
  "https://drive.google.com/file/d/1-j34BDld3K4GBNhnZHpeHbKWxmtdr3N0/view?usp=drivesdk";

export const repoLink =
  "https://github.com/devkothari040306/Personal-Portfolio-Dev";

export const callToAction =
  "https://www.linkedin.com/in/dev040306";

/* ---------------- Navigation ---------------- */

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

/* ---------------- Education ---------------- */

export const educationList = [
  {
    id: "education-1",
    icon: jecrc,
    title: "JECRC University, Jaipur",
    degree: "Bachelor of Technology in Computer Science Engineering",
    duration: "2023 – 2027",
    content1: "CGPA: 8.73 / 10",
    content2:
      "Relevant coursework: Data Structures & Algorithms, Object-Oriented Programming, DBMS, Operating Systems, Computer Networks.",
  },
];

/* ---------------- Achievements ---------------- */

export const achievements = [
  {
    id: "a-1",
    icon: jecrc,
    event: "LeetCode",
    position: "120+ Problems Solved",
    content1:
      "Solved 120+ Data Structures & Algorithms problems covering arrays, strings, recursion, linked lists, trees and dynamic programming.",
    content2: "",
    content3: "",
    article: "https://leetcode.com/u/DevKothari040306/",
  },

  {
    id: "a-2",
    icon: sagInfotech,
    event: "SAG Infotech",
    position: "Full Stack Developer Intern",
    content1:
      "Selected as a Full Stack Developer Intern focused on Java, Angular, Spring Boot and enterprise REST API development.",
    content2:
      "Working on real-world project workflows under experienced mentors.",
    content3: "",
  },

  {
    id: "a-3",
    icon: tryonix,
    event: "TryOnix",
    position: "AI Fashion Recommendation Platform",
    content1:
      "Developed an AI-powered fashion recommendation platform featuring Virtual Try-On using Hugging Face IDM-VTON.",
    content2:
      "Integrated JWT authentication, AI chatbot and personalized outfit recommendations.",
    content3: "",
    project: "https://try-onix-six.vercel.app/",
  },

  {
    id: "a-4",
    icon: spotlight,
    event: "Spotlight Salon",
    position: "Full Stack MERN Project",
    content1:
      "Built a salon appointment booking platform with secure authentication and role-based dashboards.",
    content2:
      "Implemented booking management, REST APIs and responsive UI.",
    content3: "",
    project: "https://spotlight-indol-mu.vercel.app/",
  },

  {
    id: "a-5",
    icon: chatapp,
    event: "Real-Time Chat Application",
    position: "Production MERN Project",
    content1:
      "Built a Socket.io powered real-time chat application with JWT authentication and private messaging.",
    content2:
      "Deployed using MongoDB Atlas, Render and Vercel.",
    content3: "",
    project: "https://chat-app-2fpa.vercel.app/",
  },

  {
    id: "a-6",
    icon: jecrc,
    event: "Teliport Season 3",
    position: "Participant",
    content1:
      "Represented JECRC University as a member of Team Data Streamers in Tata Elxsi Teliport Season 3.",
    content2: "",
    content3: "",
  },
];

/* ---------------- Skills ---------------- */
export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: SiJavascript,
        name: "JavaScript (ES6+)",
      },
      {
        id: "pl-2",
        icon: DiJava,
        name: "Java",
      },
      {
        id: "pl-3",
        icon: SiCplusplus,
        name: "C++",
      },
      {
        id: "pl-4",
        icon: AiFillHtml5,
        name: "HTML5",
      },
      {
        id: "pl-5",
        icon: DiCss3,
        name: "CSS3",
      },
    ],
  },

  {
    title: "Frontend",
    items: [
      {
        id: "f-1",
        icon: SiReact,
        name: "React.js",
      },
      {
        id: "f-2",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "f-3",
        icon: SiJavascript,
        name: "Context API",
      },
      {
        id: "f-4",
        icon: SiVite,
        name: "Vite",
      },
      {
        id: "f-5",
        icon: SiJavascript,
        name: "Responsive Design",
      },
    ],
  },

  {
    title: "Backend",
    items: [
      {
        id: "b-1",
        icon: SiNodedotjs,
        name: "Node.js",
      },
      {
        id: "b-2",
        icon: SiExpress,
        name: "Express.js",
      },
      {
        id: "b-3",
        icon: SiSocketdotio,
        name: "Socket.io",
      },
      {
        id: "b-4",
        icon: SiJavascript,
        name: "REST APIs",
      },
      {
        id: "b-5",
        icon: SiJavascript,
        name: "JWT Authentication",
      },
      {
        id: "b-6",
        icon: SiJavascript,
        name: "Middleware",
      },
    ],
  },

  {
    title: "Database",
    items: [
      {
        id: "d-1",
        icon: SiMongodb,
        name: "MongoDB",
      },
      {
        id: "d-2",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "d-3",
        icon: SiMongodb,
        name: "MongoDB Atlas",
      },
    ],
  },

  {
    title: "Tools & Cloud",
    items: [
      {
        id: "t-1",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-2",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-3",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-4",
        icon: SiVercel,
        name: "Vercel",
      },
      {
        id: "t-5",
        icon: SiRender,
        name: "Render",
      },
      {
        id: "t-6",
        icon: SiCloudinary,
        name: "Cloudinary",
      },
    ],
  },

  {
    title: "Currently Learning",
    items: [
      {
        id: "l-1",
        icon: SiAngular,
        name: "Angular",
      },
      {
        id: "l-2",
        icon: SiSpringboot,
        name: "Spring Boot",
      },
      {
        id: "l-3",
        icon: DiJava,
        name: "Advanced Java",
      },
    ],
  },

  {
    title: "Core Computer Science",
    items: [
      {
        id: "c-1",
        icon: SiLeetcode,
        name: "Data Structures & Algorithms",
      },
      {
        id: "c-2",
        icon: DiJava,
        name: "Object-Oriented Programming",
      },
      {
        id: "c-3",
        icon: SiMysql,
        name: "DBMS",
      },
      {
        id: "c-4",
        icon: SiJavascript,
        name: "Operating Systems",
      },
      {
        id: "c-5",
        icon: SiJavascript,
        name: "Computer Networks",
      },
    ],
  },
];

/* ---------------- Experience ---------------- */

export const experiences = [
  {
    organisation: "SAG Infotech",
    logo: sagInfotech,
    link: "https://www.saginfotech.com/",
    positions: [
      {
        title: "Full Stack Developer Intern",
        duration: "July 2026 - Present",
        content: [
          {
            text: "Receiving hands-on training in Java, Angular, Spring Boot and REST API development through live project-based sessions.",
            link: "",
          },
          {
            text: "Building enterprise-level applications while learning industry-standard development practices.",
            link: "",
          },
          {
            text: "Strengthening frontend-backend integration, debugging, API development and collaborative software engineering skills.",
            link: "",
          },
        ],
      },
    ],
  },
];
// Add your current/past professional work experience here

// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
    id: "project-1",
    title: "TryOnix – AI Outfit Recommendation Platform",
    github: "https://github.com/devkothari040306/TryOnix",
    link: "https://try-onix-six.vercel.app/",
    image: tryonix,

    content: [
      "Built a full-stack AI-powered fashion recommendation platform using the MERN stack.",
      "Integrated Hugging Face IDM-VTON Virtual Try-On for realistic outfit previews.",
      "Implemented JWT Authentication with protected routes and secure user sessions.",
      "Developed personalized outfit recommendations based on gender, occasion, season, body type, color and budget.",
      "Added AI Chatbot support to assist users with outfit recommendations.",
      "Integrated MongoDB Atlas, Cloudinary, Render and Vercel for production deployment.",
    ],

    stack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Cloudinary",
      "AI",
      "REST API",
    ],
  },

  {
    id: "project-2",
    title: "Spotlight Salon Appointment Booking System",
    github:
      "https://github.com/devkothari040306/Spotlight-Salon-Appointment-App",
    link: "https://spotlight-indol-mu.vercel.app/",
    image: spotlight,

    content: [
      "Developed a complete MERN-based salon appointment booking platform.",
      "Implemented secure authentication with separate Admin and User dashboards.",
      "Created appointment booking, cancellation and status management features.",
      "Built complete CRUD functionality for salon services.",
      "Designed responsive UI using React and Tailwind CSS.",
      "Connected frontend with REST APIs and MongoDB Atlas.",
    ],

    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
    ],
  },

  {
    id: "project-3",
    title: "Real-Time MERN Chat Application",
    github: "https://github.com/devkothari040306/mern-chat-app",
    link: "https://chat-app-2fpa.vercel.app/",
    image: chatapp,

    content: [
      "Built a real-time chat application using Socket.io.",
      "Implemented secure JWT Authentication with Login & Registration.",
      "Developed one-to-one messaging with online/offline user status.",
      "Added image and file sharing functionality.",
      "Implemented Forgot Password and Reset Password using Gmail.",
      "Deployed backend on Render and frontend on Vercel.",
    ],

    stack: [
      "React",
      "Socket.io",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],
  },
];

/* ---------------- Stats ---------------- */

export const stats = [
  {
    id: 1,
    value: "3+",
    title: "Projects",
  },
  {
    id: 2,
    value: "120+",
    title: "DSA Problems",
  },
  {
    id: 3,
    value: "1+",
    title: "Technologies",
  },
  {
    id: 4,
    value: "1",
    title: "Internship",
  },
];

/* ---------------- Social Media ---------------- */

export const socialMedia = [
  {
    id: "github",
    title: "GitHub",
    link: "https://github.com/devkothari040306",
    icon: AiFillGithub,
  },

  {
    id: "linkedin",
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/dev040306",
    icon: AiFillLinkedin,
  },

  {
    id: "leetcode",
    title: "LeetCode",
    link: "https://leetcode.com/u/DevKothari040306/",
    icon: SiLeetcode,
  },

  {
    id: "email",
    title: "Email",
    link: "mailto:devkothari436@gmail.com",
    icon: AiFillMail,
  },
];

/* ---------------- About Me ---------------- */

export const aboutMe = {
  name: "Dev Kothari",

  github: "https://github.com/devkothari040306",
  githubUsername: "devkothari040306",

  linkedin: "https://www.linkedin.com/in/dev040306",

  leetcode: "https://leetcode.com/u/DevKothari040306/",

  portfolio: "https://glow-folio-07.lovable.app",

  tagLine:
    "Full Stack Developer | MERN Stack | React.js | Node.js | Java | Open to Work",

  intro:
    "Final-year Computer Science Engineering student at JECRC University (CGPA: 8.73) passionate about building scalable full-stack web applications. Experienced with the MERN stack, REST APIs, JWT authentication, Socket.io and AI-powered solutions. Currently working as a Full Stack Developer Intern at SAG Infotech while continuously improving my skills in Java, Spring Boot and Angular.",
};

export const itemsToFetch = 20;

export const includedRepos = [
  "devkothari040306/Personal-Portfolio-Dev",
  "devkothari040306/TryOnix",
  "devkothari040306/Spotlight-Salon-Appointment-App",
  "devkothari040306/mern-chat-app",
];
