import { motion } from "framer-motion";
import {
  User,
  GraduationCap,
  MapPin,
  Mail,
  Briefcase,
} from "lucide-react";
import { RiGithubLine } from "react-icons/ri";
import { RiLinkedinLine } from "react-icons/ri";

const infoCards = [
  {
    icon: GraduationCap,
    title: "Education",
    value: "BS Software Engineering",
    subtitle: "ICUP University · 2026",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Peshawar, Pakistan",
  },
  {
    icon: Mail,
    title: "Email",
    value: "shayanahmad368@gmail.com",
  },
  {
    icon: Briefcase,
    title: "Status",
    value: "Open to Opportunities",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="
        relative
        py-24
        px-6
        md:px-12
        lg:px-20
      "
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            text-cyan-400
            text-sm
            uppercase
            tracking-[3px]
          "
        >
          --- Introduction
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="
            mt-3
            text-4xl
            md:text-5xl
            font-bold
          "
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="
            mt-4
           text-zinc-700 dark:text-zinc-300
            max-w-3xl
            text-lg
          "
        >
          Software engineer and Full Stack Web Developer passionate about
          building modern, scalable, and user-focused digital solutions.
        </motion.p>

        {/* Animated Divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "120px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
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

        {/* Content */}
        <div
          className="
            mt-14
            grid
            lg:grid-cols-[1.5fr_0.9fr]
            gap-6
          "
        >
          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-8
            "
          >
            <div className="flex items-center gap-4">
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
                "
              >
                <User size={26} />
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Shayan Ahmad
                </h3>

                <p className="text-zinc-400 text-sm">
                  Full Stack Developer · Peshawar, Pakistan
                </p>
              </div>
            </div>

            <p className="mt-6 text-zinc-700 dark:text-zinc-300">
              I'm a Software Engineer & Full Stack Web Developer who
              recently graduated with a Bachelor's in Software Engineering
              from Islamia College University, Peshawar (2026).
            </p>

            <p className="mt-3 text-zinc-700 dark:text-zinc-300">
              I build modern, responsive, and scalable web applications
              that deliver seamless user experiences and reliable
              performance. From developing interactive React.js and
              Next.js frontends to creating robust Node.js backends and
              database-driven solutions, I enjoy transforming ideas into
              functional digital products.
            </p>

            <p className="mt-3 text-zinc-700 dark:text-zinc-300">
              Currently pursuing a Bachelor's degree in Software
              Engineering while continuously enhancing my skills in
              full-stack development, modern web technologies, and
              software architecture. Passionate about solving real-world
              problems, learning emerging technologies, and contributing
              to impactful projects that create meaningful value.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
             <a
  href="https://github.com/shayan368"
  target="_blank"
  rel="noreferrer"
  className="
    flex items-center gap-2

    px-5 py-3

    rounded-xl

    bg-white/70
    dark:bg-white/5

    border
    border-black/10
    dark:border-white/10

    text-zinc-800
    dark:text-white

    hover:border-cyan-500/50
    hover:-translate-y-1

    transition-all
    duration-300
  "
>
  <RiGithubLine size={18} />
  GitHub
</a>

              <a
                href="https://www.linkedin.com/in/shayan-ahmad-06a205347/"
                target="_blank"
                rel="noreferrer"
                className="
                  flex items-center gap-2
                  px-5 py-3
                  rounded-xl
                  bg-gradient-to-r
                  from-cyan-500
                  via-blue-500
                  to-purple-500
                  text-white
                "
              >
                <RiLinkedinLine size={18} />
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Right Cards */}
          <div className="flex flex-col gap-4">
            {infoCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.title}
                  initial={{
                    opacity: 0,
                    x: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -4,
                  }}
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    p-5
                  "
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="
                        h-11
                        w-11
                        rounded-xl
                        flex
                        items-center
                        justify-center
                        bg-gradient-to-r
                        from-cyan-500
                        via-blue-500
                        to-purple-500
                      "
                    >
                      <Icon size={18} />
                    </div>

                    <div>
                      <p className="text-sm text-zinc-700 dark:text-zinc-300">
                        {card.title}
                      </p>

                      <h3 className="font-semibold mt-1 text-base">
                        {card.value}
                      </h3>

                      {card.subtitle && (
                        <p className="text-zinc-700 dark:text-zinc-300 text-sm mt-1">
                          {card.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;