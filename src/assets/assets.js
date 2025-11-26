import { FaReact, FaNodeJs, FaDatabase, FaCode, FaMobileAlt, FaLayerGroup  } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress } from "react-icons/si";




export const skills = [
  {
    id: 1,
    name: "React.js",
    icon: FaReact,
    description: "Building highly interactive UI using hooks, reusable components, and performance optimization.",
  },
  {
    id: 2,
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    description: "Styling modern responsive UIs with utility-first CSS and custom configuration.",
  },
  {
    id: 3,
    name: "Node.js",
    icon: FaNodeJs,
    description: "Developing scalable backend services and REST APIs.",
  },
  {
    id: 4,
    name: "Express.js",
    icon: SiExpress,
    description: "Handling routing, middleware, and backend logic efficiently.",
  },
  {
    id: 5,
    name: "MongoDB",
    icon: SiMongodb,
    description: "Document-based database design, aggregation, and optimized queries.",
  },
  {
    id: 6,
    name: "Database Management",
    icon: FaDatabase,
    description: "Experience with data models, schemas, indexing, and CRUD operations.",
  },
];


export const services = [
    {
      id: 1,
      icon: FaCode,
      title: "Frontend Development",
      description:
        "Building modern, fast, and responsive UI using React, Tailwind CSS, and Framer Motion.",
    },
    {
      id: 2,
      icon: FaLayerGroup,
      title: "MERN Stack Development",
      description:
        "Developing full-stack applications using MongoDB, Express, React, and Node.js.",
    },
    {
      id: 3,
      icon: FaMobileAlt,
      title: "Responsive Design",
      description:
        "Creating mobile-friendly, clean, and seamless user experiences for all devices.",
    },
  ];