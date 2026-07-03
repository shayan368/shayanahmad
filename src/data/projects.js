import transportImg from "../assets/projects/transportation.png";
import foodImg from "../assets/projects/food.png";
import ecommerceImg from "../assets/projects/ecommerce.png";

export const projects = [
  {
    id: 1,
    title: "Transportation Logistics Company",
    description:
      "Modern transportation logistics company with responsive UI, service showcase and optimized user experience.",
    image: transportImg,
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://mk-transportation.vercel.app/",
    github: "https://github.com/shayan368/mk-transportation",
  },

  {
    id: 2,
    title: "Food Delivery Website",
    description:
      "Food ordering and delivery platform with menu browsing, food selection and order management.",
    image: foodImg,
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://project17-food-delivery-website.vercel.app/",
    github: "https://github.com/shayan368/project17-food-delivery-website",
  },

  {
    id: 3,
    title: "E-Commerce Website",
    description:
      "Fully responsive ecommerce application with cart, category filtering and product listings.",
    image: ecommerceImg,
    tech: ["React", "Tailwind", "MySQL", "Node.js", "Express.js"],
    demo: "https://react-project01-ecommerce-website.vercel.app/",
    github: "https://github.com/shayan368/react-project-ecommerce-website",
  },
];