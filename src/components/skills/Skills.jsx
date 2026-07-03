import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "All Skills",
  "Frontend",
  "Backend",
  "Database",
  "Languages",
  "Tools",
];

const skillsData = {
  Frontend: [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "React.js",
    "Next.js",
    "Tailwind CSS",
  ],

  Backend: [
    "Node.js",
    "Express.js",
    "REST API Development",
    "Authentication & Authorization (JWT)",
  ],

  Database: [
    "MongoDB",
    "MySQL",
  ],

  Languages: [
    "JavaScript",
    "C++",
  ],

  Tools: [
    "Git",
    "GitHub",
    "VS Code",
    "Postman",
  ],
};

const allSkills = [
  ...skillsData.Frontend,
  ...skillsData.Backend,
  ...skillsData.Database,
  ...skillsData.Languages,
  ...skillsData.Tools,
];

const Skills = () => {
  const [activeCategory, setActiveCategory] =
    useState("All Skills");

  const filteredSkills =
    activeCategory === "All Skills"
      ? allSkills
      : skillsData[activeCategory];

  return (
    <section
      id="skills"
      className="
        relative
        py-22
        px-6
        md:px-12
      "
    >
      {/* Heading */}

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
        }}
        className="max-w-4xl"
      >
        <span
          className="
            text-cyan-400
            font-medium
          "
        >
          Expertise
        </span>

        <h2
          className="
            mt-3
            text-4xl
            md:text-5xl
            font-bold
          "
        >
          Technical Skills
        </h2>

        <p
          className="
            mt-5
            max-w-3xl
            text-zinc-600
            dark:text-zinc-400
            leading-relaxed
          "
        >
          A toolkit of modern technologies,
          frameworks, and tools that power my
          development workflow.
        </p>

        {/* Animated Border */}

        <motion.div
          initial={{
            width: 0,
          }}
          whileInView={{
            width: "140px",
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
          }}
          className="
            h-[3px]
            mt-8

            rounded-full

            bg-gradient-to-r
            from-cyan-500
            via-blue-500
            to-purple-500
          "
        />
      </motion.div>

      {/* Filter Buttons */}

      <div
        className="
          flex
          flex-wrap
          gap-3

          mt-14
        "
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() =>
              setActiveCategory(category)
            }
            className={`
              px-5
              py-3

              rounded-xl

              border

              transition-all
              duration-300

              ${
                activeCategory === category
                  ? `
                  border-cyan-500
                  bg-gradient-to-r
                  from-cyan-500
                  via-blue-500
                  to-purple-500
                  text-white
                  shadow-lg
                `
                  : `
                  border-black/10
                  dark:border-white/10

                  bg-white/50
                  dark:bg-white/5

                  hover:border-cyan-500/50
                `
              }
            `}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -20,
          }}
          transition={{
            duration: 0.35,
          }}
          className="
            grid
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4

            gap-5

            mt-12
          "
        >
          {filteredSkills.map(
            (skill, index) => (
              <motion.div
                key={skill}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay:
                    index * 0.03,
                }}
                whileHover={{
                  y: -5,
                  scale: 1.03,
                }}
                className="
                  group
                  relative

                  overflow-hidden

                  rounded-2xl

                  border
                  border-black/10
                  dark:border-white/10

                  bg-white/60
                  dark:bg-white/5

                  backdrop-blur-xl

                  p-5

                  transition-all
                  duration-300
                "
              >
                {/* Hover Glow */}

                <div
                  className="
                    absolute
                    inset-0

                    opacity-0
                    group-hover:opacity-100

                    transition

                    bg-gradient-to-r
                    from-cyan-500/10
                    via-blue-500/10
                    to-purple-500/10
                  "
                />

                <div className="relative z-10">
                  <h3
                    className="
                      font-semibold
                      text-sm
                      md:text-base

                      text-black
                      dark:text-white
                    "
                  >
                    {skill}
                  </h3>
                </div>
              </motion.div>
            )
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Skills;