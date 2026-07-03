import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft } from "lucide-react";

import ThemeToggle from "./ThemeToggle";
import { navItems } from "./navItems";
import useActiveSection from "../../hooks/useActiveSection";

const DesktopNavbar = () => {
  const [collapsed, setCollapsed] = useState(true);
const activeSection = useActiveSection();
  return (
    <>
      <motion.nav
        animate={{
          width: collapsed ? 70 : 240,
        }}
        transition={{
          duration: 0.35,
          ease: "easeInOut",
        }}
        className="
          hidden md:flex

          fixed
          left-5
          top-1/2
          -translate-y-1/2

          z-50

          flex-col

          px-3
          py-5

          rounded-[32px]

          border
          border-black/10
          dark:border-white/10

          bg-white/70
          dark:bg-white/5

          backdrop-blur-2xl

          shadow-xl
        "
      >
        {/* Logo */}
        <div
          className={`flex items-center ${
            collapsed
              ? "justify-center"
              : "gap-3"
          }`}
        >
          <div
            className="
              h-11
              w-11

              flex
              items-center
              justify-center

              rounded-full

              bg-gradient-to-r
              from-cyan-500
              via-blue-500
              to-purple-500

              text-white
              font-bold
            "
          >
            S
          </div>

          <AnimatePresence>
            {!collapsed && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: -10,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -10,
                }}
              >
                <h3 className="font-semibold whitespace-nowrap">
                  Shayan Ahmad
                </h3>

                <p className="text-xs opacity-60">
                  Full Stack Developer
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <ul className="mt-8 flex flex-col gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.name}>
                <a
  href={item.href}
  title={collapsed ? item.name : ""}
  className={`
    flex items-center
    ${
      collapsed
        ? "justify-center"
        : "gap-3"
    }

    px-3
    py-3

    rounded-2xl

    transition-all
    duration-300

    ${
      activeSection === item.href.replace("#", "")
        ? `
          bg-gradient-to-r
          from-cyan-500/20
          via-blue-500/20
          to-purple-500/20

          text-cyan-500

          border
          border-cyan-500/30

          shadow-lg
          shadow-cyan-500/10
        `
        : `
          hover:bg-black/5
          dark:hover:bg-white/10

          text-zinc-700
          dark:text-zinc-300
        `
    }
  `}
>
  <Icon size={22} />

  <AnimatePresence>
    {!collapsed && (
      <motion.span
        initial={{
          opacity: 0,
          width: 0,
        }}
        animate={{
          opacity: 1,
          width: "auto",
        }}
        exit={{
          opacity: 0,
          width: 0,
        }}
        className="
          overflow-hidden
          whitespace-nowrap
        "
      >
        {item.name}
      </motion.span>
    )}
  </AnimatePresence>
</a>
              </li>
            );
          })}
        </ul>

        {/* Theme */}
        <div
          className={`
            mt-auto
            pt-6

            flex

            ${
              collapsed
                ? "justify-center"
                : "justify-start"
            }
          `}
        >
          <ThemeToggle />
        </div>
      </motion.nav>

      {/* Collapse Button */}
      <motion.button
        onClick={() =>
          setCollapsed(!collapsed)
        }
        animate={{
          left: collapsed
            ? 58
            : 225,
        }}
        transition={{
          duration: 0.35,
        }}
        className="
          hidden md:flex

          fixed
          top-[20%]

          z-[60]

          h-10
          w-10

          items-center
          justify-center

          rounded-full

          border
          border-black/10
          dark:border-white/10

          bg-white/70
          dark:bg-white/5

          backdrop-blur-xl

          shadow-lg
        "
      >
        <motion.div
          animate={{
            rotate: collapsed
              ? 180
              : 0,
          }}
        >
          <ChevronLeft size={18} />
        </motion.div>
      </motion.button>
    </>
  );
};

export default DesktopNavbar;