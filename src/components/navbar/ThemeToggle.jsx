import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        h-11
        w-11

        flex
        items-center
        justify-center

        rounded-full

        border
        border-black/10
        dark:border-white/10

        bg-black/5
        dark:bg-white/5

        backdrop-blur-xl

        hover:scale-105

        transition-all
      "
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={darkMode ? "moon" : "sun"}
          initial={{
            rotate: -90,
            opacity: 0,
          }}
          animate={{
            rotate: 0,
            opacity: 1,
          }}
          exit={{
            rotate: 90,
            opacity: 0,
          }}
          transition={{
            duration: 0.25,
          }}
        >
          {darkMode ? (
            <Moon size={18} />
          ) : (
            <Sun size={18} />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;