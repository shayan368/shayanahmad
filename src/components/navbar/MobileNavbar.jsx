import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Download } from "lucide-react";

import ThemeToggle from "./ThemeToggle";
import { navItems } from "./navItems";
import useActiveSection from "../../hooks/useActiveSection";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
const activeSection = useActiveSection();
  useEffect(() => {
    document.body.style.overflow = open
      ? "hidden"
      : "auto";

    return () => {
      document.body.style.overflow =
        "auto";
    };
  }, [open]);

  return (
    <>
      <nav
        className="
          md:hidden

          fixed
          top-0
          left-0
          right-0

          z-50

          px-5
          py-4

          flex
          items-center
          justify-between

          backdrop-blur-xl

          bg-white/70
          dark:bg-black/30

          border-b
          border-black/10
          dark:border-white/10
        "
      >
        <div
          className="
            h-11
            w-11

            rounded-full

            bg-gradient-to-r
            from-cyan-500
            via-blue-500
            to-purple-500

            flex
            items-center
            justify-center

            text-white
            font-bold
          "
        >
          S
        </div>

        <button
          onClick={() =>
            setOpen(true)
          }
        >
          <RiMenu3Line size={28} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              onClick={() =>
                setOpen(false)
              }
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="
                fixed
                inset-0

                z-50

                bg-black/60
              "
            />

            <motion.div
              initial={{
                x: "100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "100%",
              }}
              transition={{
                duration: 0.35,
              }}
              className="
                fixed

                right-0
                top-0
                bottom-0

                z-[60]

                w-[85%]
                max-w-sm

                bg-white
                dark:bg-zinc-950

                p-6
              "
            >
              <div className="flex justify-end">
                <button
                  onClick={() =>
                    setOpen(false)
                  }
                >
                  <RiCloseLine size={30} />
                </button>
              </div>

              <a
                href="/shayan-cv.pdf"
                download
                className="
                  mt-6

                  flex
                  items-center
                  justify-center
                  gap-2

                  py-3

                  rounded-2xl

                  bg-gradient-to-r
                  from-cyan-500
                  via-blue-500
                  to-purple-500

                  text-white
                "
              >
                <Download size={18} />
                Download CV
              </a>

              <ul className="mt-10 space-y-6">
                {navItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <li key={item.name}>
               <a
  href={item.href}
  onClick={() => setOpen(false)}
  className={`
    flex
    items-center
    gap-4

    text-lg

    transition-all
    duration-300

    ${
      activeSection === item.href.replace("#", "")
        ? `
          text-cyan-500
          font-semibold
          translate-x-2
        `
        : `
          text-zinc-700
          dark:text-zinc-300

          hover:text-cyan-500
          hover:translate-x-2
        `
    }
  `}
>
  <Icon size={22} />
  {item.name}
</a>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-12 border-t border-black/10 dark:border-white/10 pt-6">
                <div className="flex items-center justify-between">
                  <span>
                    Theme
                  </span>

                  <ThemeToggle />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavbar;