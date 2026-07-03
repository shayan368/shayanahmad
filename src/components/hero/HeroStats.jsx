import { motion } from "framer-motion";

const stats = [
  {
    value: "15+",
    label: "Completed Projects",
  },
  {
    value: "2+",
    label: "Years Learning",
  },
  {
    value: "15+",
    label: "Technologies",
  },
  {
    value: "5+",
    label: "Certifications",
  },
];

const HeroStats = () => {
  return (
    <section
      className="
        relative

        px-6
        lg:px-12

        
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
        "
      >
        {/* Top Border */}
        <div
          className="
            h-px

            bg-gradient-to-r
            from-transparent
            via-cyan-500/40
            to-transparent

            mb-10
          "
        />

        <div
          className="
            grid

            grid-cols-2
            lg:grid-cols-4

            gap-5
          "
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                group

                relative

                overflow-hidden

                rounded-3xl

                border
                border-white/10

                bg-white/5

                backdrop-blur-xl

                p-6

                text-center
              "
            >
              {/* Glow */}
              <div
  className="
    absolute
    inset-0

    rounded-3xl

    opacity-0
    group-hover:opacity-100

    transition-all
    duration-500

    bg-gradient-to-r
    from-cyan-500/15
    via-blue-500/15
    to-purple-500/15

    blur-xl
  "
/>

              <h3
                className="
                  relative

                  text-2xl
                  md:text-3xl

                  font-bold

                  bg-gradient-to-r
                  from-cyan-400
                  via-blue-500
                  to-purple-500

                  bg-clip-text
                  text-transparent
                "
              >
                {stat.value}
              </h3>

              <p
                className="
                  relative

                  mt-3

                  text-sm
                  md:text-base

                  text-zinc-700 dark:text-zinc-300
                "
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroStats;