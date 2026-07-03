import { motion } from "framer-motion";
import { experienceData } from "./experienceData";

const Experience = () => {
  return (
    <section
      id="experience"
      className="
        relative
        py-32
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
          duration: 0.7,
        }}
        className="max-w-4xl"
      >
        <span
          className="
            text-cyan-400
            uppercase
            tracking-[4px]
            text-xs
            font-semibold
          "
        >
          Journey
        </span>

        <h2
          className="
            mt-3
            text-4xl
            md:text-5xl
            font-bold

            text-black
            dark:text-white
          "
        >
          Professional Training
        </h2>

        <p
          className="
            mt-5
            max-w-3xl

            text-zinc-700
            dark:text-zinc-400

            leading-relaxed
          "
        >
          My learning journey through professional
          training programs, hands-on development
          experience, and modern web technologies.
        </p>

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

      {/* Timeline */}

      <div
        className="
          relative
          mt-20
          pl-12
        "
      >
        {/* Line */}

        <div
          className="
            absolute
            left-3
            top-0
            bottom-0

            w-[2px]

            bg-gradient-to-b
            from-cyan-500
            via-blue-500
            to-purple-500
          "
        />

        {experienceData.map(
          (item, index) => (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}
              className="
                relative
                mb-14
              "
            >
              {/* Timeline Dot */}

              <div
                className="
                  absolute
                  -left-[46px]
                  top-10

                  h-5
                  w-5

                  rounded-full

                  bg-gradient-to-r
                  from-cyan-500
                  via-blue-500
                  to-purple-500

                  shadow-lg
                  shadow-cyan-500/50
                "
              />

              {/* Card */}

              <div
                className="
                  group
                  relative

                  overflow-hidden

                  rounded-3xl

                  border
                  border-black/10
                  dark:border-white/10

                  bg-white/80
                  dark:bg-white/5

                  backdrop-blur-xl

                  p-8

                  transition-all
                  duration-500
                "
              >
                {/* Hover Glow */}

                <div
                  className="
                    absolute
                    inset-0

                    opacity-0
                    group-hover:opacity-100

                    transition-all
                    duration-500

                    bg-gradient-to-r
                    from-cyan-500/5
                    via-blue-500/5
                    to-purple-500/5
                  "
                />

                <div className="relative z-10">
                  {/* Top */}

                  <div
                    className="
                      flex
                      flex-col
                      md:flex-row
                      md:items-center
                      md:justify-between
                      gap-4
                    "
                  >
                    <span
                      className="
                        w-fit

                        px-4
                        py-2

                        rounded-full

                        text-xs
                        font-medium

                        bg-cyan-500/10
                        text-cyan-500
                      "
                    >
                      {item.type}
                    </span>

                    <span
                      className="
                        w-fit

                        px-4
                        py-2

                        rounded-xl

                        border
                        border-black/10
                        dark:border-white/10

                        text-sm

                        text-zinc-600
                        dark:text-zinc-400
                      "
                    >
                      {item.period}
                    </span>
                  </div>

                  {/* Role */}

                  <h3
                    className="
                      mt-6

                      text-2xl
                      font-bold

                      text-black
                      dark:text-white
                    "
                  >
                    {item.role}
                  </h3>

                  {/* Company */}

                  <h4
                    className="
                      mt-2

                      text-cyan-500
                      font-medium
                    "
                  >
                    {item.company}
                  </h4>

                  {/* Bullets */}

                  <ul
                    className="
                      mt-8
                      space-y-4
                    "
                  >
                    {item.points.map(
                      (point, i) => (
                        <li
                          key={i}
                          className="
                            flex
                            items-start
                            gap-3

                            text-zinc-700
                            dark:text-zinc-400

                            leading-relaxed
                          "
                        >
                          <span
                            className="
                              mt-2

                              h-2
                              w-2

                              rounded-full

                              bg-cyan-500

                              flex-shrink-0
                            "
                          />

                          {point}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </motion.div>
          )
        )}
      </div>

      {/* Background Glow */}

      <div
        className="
          absolute
          top-1/2
          left-1/2

          -translate-x-1/2
          -translate-y-1/2

          w-[700px]
          h-[700px]

          rounded-full

          bg-cyan-500/5

          blur-[180px]

          -z-10
        "
      />
    </section>
  );
};

export default Experience;