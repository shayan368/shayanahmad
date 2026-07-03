import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const softSkills = [
  "Problem Solving",
  "Team Collaboration",
  "Critical Thinking",
  "Time Management",
  "Communication",
  "Adaptability",
  "Leadership",
  "Attention to Detail",
  "Creativity",
  "Work Ethics",
  "Analytical Thinking",
  "Decision Making",
];

const SoftSkills = () => {
  return (
    <section
      id="soft-skills"
      className="
        relative
        py-10
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
            font-medium
          "
        >
          Personal Strengths
        </span>
<div
  className="
    mt-3
    flex
    items-center
    gap-3
  "
>
  <div
    className="
      h-12
      w-12

      flex
      items-center
      justify-center

      rounded-xl

      bg-gradient-to-r
      from-cyan-500
      via-blue-500
      to-purple-500

      text-white

      shadow-lg
      shadow-cyan-500/20
    "
  >
    <Sparkles size={24} />
  </div>

  <h2
    className="
      text-4xl
      md:text-5xl
      font-bold

      text-black
      dark:text-white
    "
  >
    Soft Skills
  </h2>
</div>

        <p
          className="
            mt-5
            max-w-3xl

            text-zinc-700
            dark:text-zinc-400

            leading-relaxed
          "
        >
          Strong interpersonal and professional
          abilities that help me communicate
          effectively, solve complex challenges,
          collaborate with teams, and deliver
          impactful solutions in real-world
          environments.
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

      {/* Skills Cards */}

      <div
        className="
          mt-16

          grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4

          gap-5
        "
      >
        {softSkills.map((skill, index) => (
          <motion.div
            key={skill}
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
              delay: index * 0.05,
              duration: 0.5,
            }}
            whileHover={{
              y: -8,
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

              bg-white/70
              dark:bg-white/5

              backdrop-blur-xl

              p-6

              transition-all
              duration-300
            "
          >
            {/* Hover Gradient */}

            <div
              className="
                absolute
                inset-0

                opacity-0
                group-hover:opacity-100

                transition-all
                duration-500

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
                  text-base
                  md:text-lg

                  text-black
                  dark:text-white
                "
              >
                {skill}
              </h3>

              <motion.div
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: "100%",
                }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.2,
                  duration: 0.8,
                }}
                className="
                  mt-4
                  h-[2px]

                  rounded-full

                  bg-gradient-to-r
                  from-cyan-500
                  via-blue-500
                  to-purple-500
                "
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Background Glow */}

      <div
        className="
          absolute
          top-1/2
          left-1/2

          -translate-x-1/2
          -translate-y-1/2

          w-[500px]
          h-[500px]

          rounded-full

          bg-cyan-500/5

          blur-[160px]

          -z-10
        "
      />
    </section>
  );
};

export default SoftSkills;