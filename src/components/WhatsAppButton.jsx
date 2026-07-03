import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/923409302040"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="
        fixed
        bottom-6
        right-6

        z-[999]

        h-14
        w-14

        flex
        items-center
        justify-center

        rounded-full

        bg-[#25D366]

        text-white

        shadow-lg
        shadow-green-500/40
      "
    >
      <FaWhatsapp size={30} />
    </motion.a>
  );
};

export default WhatsAppButton;