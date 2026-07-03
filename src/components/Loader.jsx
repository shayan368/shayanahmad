import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div
      className="
        fixed inset-0
        z-[99999]

        flex items-center justify-center

        bg-white
        dark:bg-black
      "
    >
      <div className="flex flex-col items-center gap-6">
        {/* Logo */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            h-20 w-20

            rounded-full

            flex items-center justify-center

            bg-gradient-to-r
            from-cyan-500
            via-blue-500
            to-purple-500

            text-white
            text-3xl
            font-bold
          "
        >
          S
        </motion.div>

        {/* Text */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="
            text-xl
            font-semibold
          "
        >
          Loading Portfolio...
        </motion.h2>

        {/* Progress Bar */}
        <div
          className="
            w-64
            h-2

            rounded-full

            overflow-hidden

            bg-black/10
            dark:bg-white/10
          "
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2.5,
            }}
            className="
              h-full

              bg-gradient-to-r
              from-cyan-500
              via-blue-500
              to-purple-500
            "
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;