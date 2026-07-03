import { motion } from "framer-motion";
import { RiGithubLine } from "react-icons/ri";
import { RiLinkedinLine } from "react-icons/ri";
import { RiMailLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import HeroImage from "./HeroImage";
import TypingRoles from "./TypingRoles";

const Hero = () => {
  return (
    <section
      id="home"
      className="
        min-h-screen

pt-28
    md:pt-0
        flex
        items-center
        px-6
        md:px-12
        lg:px-20
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto

          w-full

          grid
          lg:grid-cols-2

          gap-16

          items-center
        "
      >

        {/* LEFT SIDE */}
        <div>
          {/* Available */}
          <div
            className="
              inline-flex
              items-center
              gap-3

              px-4
              py-2
              rounded-full

              border
              border-cyan-500/20

              bg-cyan-500/5

              mb-6
            "
          >
            <span
              className="
                h-3
                w-3

                rounded-full

                bg-cyan-400

                animate-pulse
              "
            />

            <span
              className="
                text-sm
                font-medium
              "
            >
              Available for new opportunities
            </span>
          </div>

          {/* Heading */}
          <motion.h2
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              text-lg
              md:text-xl

              font-medium

                text-zinc-700 dark:text-zinc-300
            "
          >
            Hi, I'm
          </motion.h2>

          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className="
              mt-2
              mb-4

              text-5xl
              md:text-7xl

              font-semibold

              leading-tight
            "
          >
            Shayan Ahmad
          </motion.h1>

          {/* Roles */}
          <TypingRoles />

          {/* Description */}
          <p
            className="
              mt-5

              max-w-xl

              text-zinc-700 dark:text-zinc-300

              leading-8
            "
          >
            I build modern full-stack web
            applications with a focus on
            performance, scalability, and
            user experience.

            Passionate about turning ideas
            into reliable digital products
            using clean code, modern
            technologies, and thoughtful
            design.
          </p>

          {/* Buttons */}
          <div
            className="
              mt-7

              flex
              flex-wrap

              gap-4
            "
          >
            <a
              href="#projects"
              className="
                px-6
                py-3

                rounded-xl

                bg-gradient-to-r
                from-cyan-500
                via-blue-500
                to-purple-500

                text-white

                flex
                items-center
                gap-2
              "
            >
              View My Work

              <FaArrowRight size={18} />

            </a>

            <a
  href="#contact"
  className="
    px-6
    py-3

    rounded-xl

    border
    border-black/10
    dark:border-white/10

    bg-black/5
    dark:bg-white/5

    text-black
    dark:text-white

    backdrop-blur-xl

    hover:bg-black/10
    dark:hover:bg-white/10

    hover:border-cyan-500/50

    transition-all
    duration-300
  "
>
  Get Started
</a>
          </div>

          {/* Socials */}
          <div
            className="
              mt-7

              flex
              items-center

              gap-5
            "
          >
            <a href="https://github.com/shayan368" target="_blank" rel="noopener noreferrer">
              <RiGithubLine size={22} />
            </a>

            <a href="https://www.linkedin.com/in/shayan-ahmad-06a205347/" target="_blank" rel="noopener noreferrer">
              <RiLinkedinLine size={22} />
            </a>

            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shayanahmad368@gmail.com" target="_blank" rel="noopener noreferrer">
              <RiMailLine size={22} />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
         <div className="flex justify-center">
  <HeroImage />
</div>
      </div>
      
    </section>
  );
};

export default Hero;