import { motion } from "framer-motion";
import profilePic from "../../assets/profile.png";

import {
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiExpress,
  SiMysql,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";

const techIcons = [
  {
    icon: FaReact,
    className:
      "top-0 left-0 text-cyan-400",
  },

  {
    icon: FaNodeJs,
    className:
      "top-0 right-0 text-green-500",
  },

  {
    icon: SiExpress,
    className:
      "bottom-0 left-0 text-white",
  },

  {
    icon: SiMysql,
    className:
      "bottom-0 right-0 text-blue-500",
  },

  {
    icon: SiTailwindcss,
    className:
      "top-1/2 -left-10 text-sky-400",
  },

  {
    icon: SiJavascript,
    className:
      "top-1/2 -right-10 text-yellow-400",
  },
];

const HeroImage = () => {
  return (
    <div className="relative flex items-center justify-center">

      {/* Glow */}
      <div
        className="
        absolute

        h-[350px]
        w-[350px]

        rounded-full

        bg-gradient-to-r
        from-cyan-500/20
        via-blue-500/20
        to-purple-500/20

        blur-3xl
        "
      />

      {/* Image Card */}
      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        relative

        h-[350px]
        w-[350px]

        overflow-hidden

        rounded-[35px]

        border
        border-white/10

        bg-white/5

        backdrop-blur-xl
        "
      >
        <img
          src={profilePic}
          alt="profile"
          className="
          h-full
          w-full

          object-cover
          "
        />
      </motion.div>

      {/* Floating Icons */}
      {techIcons.map(
        ({ icon: Icon, className }, index) => (
          <motion.div
            key={index}
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 3 + index,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`
              absolute

              ${className}

              h-14
              w-14

              rounded-2xl

              border border-white/10

              bg-black/40

              backdrop-blur-xl

              flex
              items-center
              justify-center

              shadow-lg
            `}
          >
            <Icon size={28} />
          </motion.div>
        )
      )}
    </div>
  );
};

export default HeroImage;