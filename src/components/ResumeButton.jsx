import { Download } from "lucide-react";
import { motion } from "framer-motion";

const ResumeButton = () => {
  return (
    <motion.a
      href="/shayan-cv.pdf"
      download="shayan-cv.pdf" 
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="
        hidden md:flex

        fixed
        top-6
        right-6

        z-50

        items-center
        gap-2

        px-5
        py-3

        rounded-full

        bg-gradient-to-r
        from-cyan-500
        via-blue-500
        to-purple-500

        text-white
        font-medium

        shadow-lg
        shadow-cyan-500/20

        transition-all
      "
    >
      <Download size={18} />

      <span>Download CV</span>
    </motion.a>
  );
};

export default ResumeButton;