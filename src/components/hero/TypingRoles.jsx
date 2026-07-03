import { TypeAnimation } from "react-type-animation";

const TypingRoles = () => {
  return (
    <div className="h-[70px]">
      <TypeAnimation
        sequence={[
          "Full Stack Developer",
          2000,

          "Software Engineer",
          2000,
        ]}
        wrapper="span"
        speed={40}
        repeat={Infinity}
        className="
          text-3xl
          md:text-5xl

          font-bold

          bg-gradient-to-r
          from-cyan-400
          via-blue-500
          to-purple-500

          bg-clip-text
          text-transparent
        "
      />
    </div>
  );
};

export default TypingRoles;