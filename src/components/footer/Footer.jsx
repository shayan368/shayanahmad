import { motion } from "framer-motion";
import {
  RiGithubLine,
  RiLinkedinLine,
  RiMailLine,
} from "react-icons/ri";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
        relative
        mt-20

        border-t
        border-black/10
        dark:border-white/10

        bg-white/40
        dark:bg-white/5

        backdrop-blur-xl
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto

          px-6
          md:px-12

          py-12
        "
      >
        {/* Top */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
            
          <h2
            className="
              text-3xl
              font-bold
            "
          >
            Shayan Ahmad
          </h2>

          <p
            className="
              mt-3
              text-zinc-600
              dark:text-zinc-400
            "
          >
            Full Stack Web Developer & Software Engineer
          </p>
        </motion.div>

        {/* Navigation */}

        <div
          className="
            mt-8

            flex
            flex-wrap
            justify-center
            gap-4
            md:gap-6
          "
        >
          {[
            ["Home", "#home"],
            ["About", "#about"],
            ["Projects", "#projects"],
            ["Skills", "#skills"],
            ["Experience", "#experience"],
            ["Contact", "#contact"],
          ].map(([name, href]) => (
            <a
              key={name}
              href={href}
              className="
                text-sm
                md:text-base

                text-zinc-600
                dark:text-zinc-400

                hover:text-cyan-500

                transition
              "
            >
              {name}
            </a>
          ))}
        </div>

        {/* Social Links */}

        <div
          className="
            mt-8

            flex
            flex-wrap
            justify-center
            gap-6
          "
        >
          <a
            href="https://github.com/shayan368"
            target="_blank"
            rel="noreferrer"
            className="
              flex
              items-center
              gap-2

              hover:text-cyan-500
              transition
            "
          >
            <RiGithubLine size={20} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/shayan-ahmad-06a205347/"
            target="_blank"
            rel="noreferrer"
            className="
              flex
              items-center
              gap-2

              hover:text-blue-500
              transition
            "
          >
            <RiLinkedinLine size={20} />
            LinkedIn
          </a>

          <a
            href="mailto:shayanahmad368@gmail.com"
            className="
              flex
              items-center
              gap-2

              hover:text-purple-500
              transition
            "
          >
            <RiMailLine size={20} />
            Email
          </a>
        </div>

        {/* Gradient Line */}

        <div
          className="
            mt-10
            h-px
            w-full

            bg-gradient-to-r
            from-transparent
            via-cyan-500/50
            to-transparent
          "
        />

        {/* Bottom */}

        <div
          className="
            mt-8

            flex
            flex-col
            md:flex-row

            items-center
            justify-between

            gap-4

            text-sm

            text-zinc-600
            dark:text-zinc-400
          "
        >
          <p>
            © {currentYear} Shayan Ahmad. All rights reserved.
          </p>

          <p
            className="
              flex
              flex-wrap
              justify-center
              items-center
              gap-1
            "
          >
            Built with
            <span className="font-medium text-cyan-500">
              React
            </span>
            •
            <span className="font-medium text-blue-500">
              Vite
            </span>
            •
            <span className="font-medium text-sky-500">
              Tailwind CSS
            </span>
            •
            <span className="font-medium text-purple-500">
              Framer Motion
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;