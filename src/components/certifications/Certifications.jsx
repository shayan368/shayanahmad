import { motion } from "framer-motion";
import { certifications } from "./certificationsData";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="
        relative
        px-6
        md:px-12
      "
    >
      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl"
      >
        <span
          className="
            text-cyan-400
            font-medium
          "
        >
          Achievements
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
          Certifications
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
          Continuous learning — always expanding
          my knowledge and skill set.
        </p>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "140px" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
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

      {/* Cards */}

      <div
        className="
          mt-16

          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4

          gap-6
        "
      >
        {certifications.map(
          (certificate, index) => {
            const Icon = certificate.icon;

            return (
              <motion.div
                key={certificate.id}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                }}
                className="
                  group
                  relative

                  overflow-hidden

                  rounded-3xl

                  border
                  border-black/10
                  dark:border-white/10

                  bg-white/70
                  dark:bg-white/5

                  backdrop-blur-xl

                  p-6
                "
              >
                {/* Hover Effect */}

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
                  {/* Icon */}

                  <div
                    className="
                      h-14
                      w-14

                      rounded-2xl

                      flex
                      items-center
                      justify-center

                      bg-gradient-to-r
                      from-cyan-500
                      via-blue-500
                      to-purple-500

                      text-white
                    "
                  >
                    <Icon size={26} />
                  </div>

                  {/* Title */}

                  <h3
                    className="
                      mt-6

                      text-xl
                      font-bold

                      text-black
                      dark:text-white
                    "
                  >
                    {certificate.title}
                  </h3>

                  {/* Provider */}

                  <p
                    className="
                      mt-3

                      text-zinc-600
                      dark:text-zinc-400

                      leading-relaxed
                    "
                  >
                    {certificate.provider}
                  </p>
                </div>
              </motion.div>
            );
          }
        )}
      </div>

      {/* Glow */}

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

          blur-[150px]

          -z-10
        "
      />
    </section>
  );
};

export default Certifications;