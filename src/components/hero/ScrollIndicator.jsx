import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const ScrollIndicator = () => {
  return (
    <div className="flex justify-center py-12">
      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="
          flex
          flex-col
          items-center
          gap-2
        "
      >
        <span
          className="
            text-xs
            tracking-[0.3em]
            uppercase
            text-zinc-500
          "
        >
          Scroll
        </span>

        <ChevronDown
          size={28}
          className="
            text-cyan-400
            drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]
          "
        />
      </motion.div>
    </div>
  );
};

export default ScrollIndicator;