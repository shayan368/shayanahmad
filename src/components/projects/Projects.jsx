import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { RiGithubLine } from "react-icons/ri";

import { projects } from "../../data/projects";

const Projects = () => {
  const [current, setCurrent] = useState(0);

  const nextProject = () => {
    if (current < projects.length - 1) {
      setCurrent(current + 1);
    }
  };

  const prevProject = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const leftProject =
    current > 0
      ? projects[current - 1]
      : null;

  const rightProject =
    current < projects.length - 1
      ? projects[current + 1]
      : null;

  return (
    <section
      id="projects"
      className="
        relative
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
        className="
          max-w-4xl
          mb-16
        "
      >
        <span
          className="
            text-cyan-400
            font-medium
          "
        >
          Projects
        </span>

        <h2
          className="
            mt-3
            text-4xl
            md:text-5xl
            font-bold
          "
        >
          Featured Projects
        </h2>

        <p
          className="
            mt-5
            max-w-2xl

            text-zinc-600
            dark:text-zinc-400

            leading-relaxed
          "
        >
          A collection of full-stack projects
          showcasing my skills in building
          responsive, scalable, and user-focused
          web applications using modern
          technologies.
        </p>
      </motion.div>

      <div
        className="
          relative
          max-w-7xl
          mx-auto
          h-auto
          py-4
          md:py-8

          flex
          items-center
          justify-center
        "
      >
        {/* Left Preview */}

        {leftProject && (
          <motion.div
            initial={{
              opacity: 0,
              x: -100,
            }}
            animate={{
              opacity: 0.45,
              x: 0,
            }}
            className="
              hidden
              xl:block

              absolute
              left-10

              w-[200px]

              scale-90
            "
          >
            <div
              className="
                overflow-hidden
                rounded-3xl

                border
                border-white/10

                bg-white/5
                backdrop-blur-xl
              "
            >
              <img
                src={leftProject.image}
                alt={leftProject.title}
                className="
                  h-32
                  w-full
                  object-cover
                "
              />

              <div className="p-4">
                <h3
                  className="
                    text-sm
                    font-semibold
                    truncate
                  "
                >
                  {leftProject.title}
                </h3>
              </div>
            </div>
          </motion.div>
        )}

        {/* Center Card */}

        <AnimatePresence mode="wait">
          <motion.div
            key={projects[current].id}
            initial={{
              opacity: 0,
              scale: 0.85,
              x: 120,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.85,
              x: -120,
            }}
            transition={{
              duration: 0.45,
            }}
            className="
              w-full
              max-w-[500px]
            "
          >
            <div
              className="
                group

                overflow-hidden

                rounded-[30px]

                border
                border-white/10

                bg-white/5

                backdrop-blur-xl

                shadow-2xl
              "
            >
              {/* Image */}

              <div
                className="
                  h-[180px]
                  sm:h-[200px]
                  md:h-[240px]
                  overflow-hidden
                "
              >
                <img
                  src={projects[current].image}
                  alt={projects[current].title}
                  className="
                    h-full
                    w-full

                    object-cover

                    transition-all
                    duration-700

                    group-hover:scale-105
                  "
                />
              </div>

              {/* Content */}

              <div className="p-5 md:p-6">
                <h3
                  className="
                    text-xl
                    md:text-2xl
                    font-bold
                  "
                >
                  {projects[current].title}
                </h3>

                <p
                  className="
                    mt-3
                    md:mt-4
                    text-sm
                    md:text-base
                    text-zinc-600
                    dark:text-zinc-400
                    leading-relaxed
                  "
                >
                  {projects[current].description}
                </p>

                <div
                  className="
                    mt-5

                    flex
                    flex-wrap
                    gap-2
                  "
                >
                  {projects[current].tech.map(
                    (tech) => (
                      <span
                        key={tech}
                        className="
                          px-3
                          py-1

                          rounded-full

                          text-xs
                          md:text-sm

                          bg-cyan-500/10
                          text-cyan-400
                        "
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>

                <div
                  className="
                    mt-5
                    md:mt-6

                    flex
                    flex-wrap
                    gap-2
                    md:gap-3
                  "
                >
                  <a
                    href={projects[current].demo}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex
                      items-center
                      gap-2

                      px-4
                      py-2
                      md:px-5
                      md:py-3

                      text-sm
                      md:text-base

                      rounded-xl

                      bg-gradient-to-r
                      from-cyan-500
                      via-blue-500
                      to-purple-500

                      text-white
                    "
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>

                  {projects[current].github && (
                    <a
                      href={projects[current].github}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        flex
                        items-center
                        gap-2

                        px-4
                        py-2
                        md:px-5
                        md:py-3

                        text-sm
                        md:text-base

                        rounded-xl

                        border
                        border-white/10

                        hover:border-cyan-500/50

                        transition
                      "
                    >
                      <RiGithubLine size={18} />
                      GitHub
                    </a>
                  )}

                  {projects[current].githubFrontend && (
                    <a
                      href={projects[current].githubFrontend}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        flex
                        items-center
                        gap-2

                        px-4
                        py-2
                        md:px-5
                        md:py-3

                        text-sm
                        md:text-base

                        rounded-xl

                        border
                        border-white/10

                        hover:border-cyan-500/50

                        transition
                      "
                    >
                      <RiGithubLine size={18} />
                      Frontend
                    </a>
                  )}

                  {projects[current].githubBackend && (
                    <a
                      href={projects[current].githubBackend}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        flex
                        items-center
                        gap-2

                        px-4
                        py-2
                        md:px-5
                        md:py-3

                        text-sm
                        md:text-base

                        rounded-xl

                        border
                        border-white/10

                        hover:border-cyan-500/50

                        transition
                      "
                    >
                      <RiGithubLine size={18} />
                      Backend
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Right Preview */}

        {rightProject && (
          <motion.div
            initial={{
              opacity: 0,
              x: 100,
            }}
            animate={{
              opacity: 0.45,
              x: 0,
            }}
            className="
              hidden
              xl:block

              absolute
              right-10

              w-[200px]

              scale-90
            "
          >
            <div
              className="
                overflow-hidden
                rounded-3xl

                border
                border-white/10

                bg-white/5
                backdrop-blur-xl
              "
            >
              <img
                src={rightProject.image}
                alt={rightProject.title}
                className="
                  h-32
                  w-full
                  object-cover
                "
              />

              <div className="p-4">
                <h3
                  className="
                    text-sm
                    font-semibold
                    truncate
                  "
                >
                  {rightProject.title}
                </h3>
              </div>
            </div>
          </motion.div>
        )}

        {/* Left Button */}

        <button
          onClick={prevProject}
          disabled={current === 0}
          className="
            absolute
            left-0
            md:left-16

            z-20

            h-12
            w-12

            rounded-full

            bg-cyan-500

            text-white

            flex
            items-center
            justify-center

            hover:scale-110

            transition

            disabled:opacity-30
            disabled:cursor-not-allowed
          "
        >
          <ChevronLeft />
        </button>

        {/* Right Button */}

        <button
          onClick={nextProject}
          disabled={
            current === projects.length - 1
          }
          className="
            absolute
            right-0
            md:right-16

            z-20

            h-12
            w-12

            rounded-full

            bg-cyan-500

            text-white

            flex
            items-center
            justify-center

            hover:scale-110

            transition

            disabled:opacity-30
            disabled:cursor-not-allowed
          "
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Projects;