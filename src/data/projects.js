import transportImg from "../assets/projects/transportation.png";
import foodImg from "../assets/projects/food.png";
import ecommerceImg from "../assets/projects/ecommerce.png";
import clinicImg from "../assets/projects/lifecare.png";
import pollifyImg from "../assets/projects/pollify.png";
export const projects = [
  {
    id: 1,
    title: "AI Clinic Management",
    description:
      "A full-stack AI-powered Clinic Management System featuring role-based dashboards, appointment scheduling, patient record management, AI symptom analysis, AI prescription explanations, secure JWT authentication, PDF prescription generation, and a fully responsive modern interface.",
    image: clinicImg,
    tech: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MySQL",
      "Sequelize",
      "JWT",
      "Gemini AI"
    ],
    demo: "https://lifecare-aiclinic.vercel.app/",
    githubFrontend: "https://github.com/shayan368/ai-clinic-frontend",
    githubBackend: "https://github.com/shayan368/ai-clinic-backend",
  },
  {
  id: 2,
  title: "Pollify",
  description:
    "A full-stack polling platform that allows users to create polls, participate in polls, view real-time results, and manage their accounts through a secure and user-friendly interface.",
  image: pollifyImg,
  tech: [
    "React.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MySQL",
    "Sequelize",
    "JWT"
  ],
  demo: "https://bootcamp-p1-pollify-frontend.vercel.app/",
  githubFrontend: "https://github.com/shayan368/bootcamp-p1-pollify-frontend",
  githubBackend: "https://github.com/shayan368/bootcamp-p1-pollify-backend",
},
  {
    id: 3,
    title: "Transportation Logistics Company",
    description:
      "Modern transportation logistics company with responsive UI, service showcase and optimized user experience.",
    image: transportImg,
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://mk-transportation.vercel.app/",
    github: "https://github.com/shayan368/mk-transportation",
  },

  {
    id: 4,
    title: "Food Delivery Website",
    description:
      "Food ordering and delivery platform with menu browsing, food selection and order management.",
    image: foodImg,
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://project17-food-delivery-website.vercel.app/",
    github: "https://github.com/shayan368/project17-food-delivery-website",
  },

  {
    id: 5,
    title: "E-Commerce Website",
    description:
      "Fully responsive ecommerce application with cart, category filtering and product listings.",
    image: ecommerceImg,
    tech: ["React", "Tailwind"],
    demo: "https://react-project01-ecommerce-website.vercel.app/",
    github: "https://github.com/shayan368/react-project-ecommerce-website",
  },
];