import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import {
  Mail,
  MapPin,
  Phone,
  CircleDot,
  Send,
} from "lucide-react";

import {
  RiGithubLine,
  RiLinkedinLine,
} from "react-icons/ri";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="
        relative
        py-32
        px-6
        md:px-12
      "
    >
      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <span
          className="
            text-cyan-400
            uppercase
            tracking-[3px]
            text-sm
          "
        >
          Reach Out
        </span>

        <h2
          className="
            mt-4
            text-4xl
            md:text-5xl
            font-bold
          "
        >
          Get In Touch
        </h2>

        <p
          className="
            mt-5
            text-zinc-600
            dark:text-zinc-400
            leading-relaxed
          "
        >
          Have a project in mind or looking to hire?
          I'm open to new opportunities and collaborations.
        </p>

        <div
          className="
            mt-8
            h-[3px]
            w-24
            rounded-full
            bg-gradient-to-r
            from-cyan-500
            via-blue-500
            to-purple-500
          "
        />
      </motion.div>

      {/* Content */}

      <div
        className="
          mt-16
          grid
          lg:grid-cols-2
          gap-8
        "
      >
        {/* LEFT CARD */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            rounded-3xl
            border
            border-black/10
            dark:border-white/10
            bg-white/50
            dark:bg-white/5
            backdrop-blur-xl
            p-8
          "
        >
          <h3 className="text-3xl font-bold">
            Let's Work Together
          </h3>

          <p
            className="
              mt-4
              text-zinc-600
              dark:text-zinc-400
              leading-relaxed
            "
          >
            I'm actively looking for full-stack development
            roles, freelance projects, and exciting
            collaborations.
          </p>

          <div className="mt-8 space-y-4">
            {/* Email */}

            <a
              href="mailto:shayanahmad368@gmail.com"
              className="
                flex items-center gap-4
                p-5
                rounded-2xl
                bg-cyan-500/5
                border border-cyan-500/20
                hover:border-cyan-500/50
                hover:bg-cyan-500/10
                transition-all
                duration-300
              "
            >
              <div
                className="
                  h-12 w-12
                  rounded-xl
                  flex items-center
                  justify-center
                  bg-cyan-500/10
                  text-cyan-400
                "
              >
                <Mail size={22} />
              </div>

              <div>
                <p className="text-sm text-zinc-500">
                  Email
                </p>

                <p className="font-medium break-all">
                  shayanahmad368@gmail.com
                </p>
              </div>
            </a>

            {/* Phone */}

            <a
              href="tel:+923409302040"
              className="
                flex items-center gap-4
                p-5
                rounded-2xl
                bg-blue-500/5
                border border-blue-500/20
                hover:border-blue-500/50
                hover:bg-blue-500/10
                transition-all
                duration-300
              "
            >
              <div
                className="
                  h-12 w-12
                  rounded-xl
                  flex items-center
                  justify-center
                  bg-blue-500/10
                  text-blue-400
                "
              >
                <Phone size={22} />
              </div>

              <div>
                <p className="text-sm text-zinc-500">
                  Phone
                </p>

                <p className="font-medium">
                  +92 340 9302040
                </p>
              </div>
            </a>

            {/* Location */}

            <div
              className="
                flex items-center gap-4
                p-5
                rounded-2xl
                border border-purple-500/20
                bg-purple-500/5
              "
            >
              <MapPin className="text-purple-400" />

              <div>
                <p className="text-xs text-purple-400">
                  LOCATION
                </p>

                <p className="font-medium">
                  Peshawar, Pakistan
                </p>
              </div>
            </div>

            {/* Status */}

            <div
              className="
                flex items-center gap-4
                p-5
                rounded-2xl
                border border-pink-500/20
                bg-pink-500/5
              "
            >
              <CircleDot className="text-pink-400" />

              <div>
                <p className="text-xs text-pink-400">
                  STATUS
                </p>

                <p className="font-medium">
                  Open To Opportunities
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}

          <div
            className="
              mt-8
              grid
              grid-cols-2
              gap-4
            "
          >
            <a
              href="https://github.com/shayan368"
              target="_blank"
              rel="noreferrer"
              className="
                py-3
                rounded-xl
                flex
                items-center
                justify-center
                gap-2
                border
                border-white/10
                hover:border-cyan-500
                transition
              "
            >
              <RiGithubLine />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/shayan-ahmad-06a205347/"
              target="_blank"
              rel="noreferrer"
              className="
                py-3
                rounded-xl
                flex
                items-center
                justify-center
                gap-2
                border
                border-white/10
                hover:border-blue-500
                transition
              "
            >
              <RiLinkedinLine />
              LinkedIn
            </a>
          </div>
        </motion.div>

        {/* RIGHT CARD */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            rounded-3xl
            border
            border-black/10
            dark:border-white/10
            bg-white/50
            dark:bg-white/5
            backdrop-blur-xl
            p-8
          "
        >
          <h3 className="text-3xl font-bold mb-6">
            Send Message
          </h3>

          <form
            onSubmit={sendEmail}
            className="space-y-5"
          >
<input
  type="text"
  name="name"
  value={form.name}
  onChange={handleChange}
  placeholder="Full Name"
  required
  className="
    w-full
    p-4
    rounded-xl

    border
    border-zinc-300
    dark:border-white/10

    bg-white
    dark:bg-white/5

    text-zinc-900
    dark:text-white

    placeholder:text-zinc-500
    dark:placeholder:text-zinc-400

    backdrop-blur-xl

    outline-none

    focus:border-cyan-500
    focus:ring-2
    focus:ring-cyan-500/20

    transition-all
  "
/>

<input
  type="email"
  name="email"
  value={form.email}
  onChange={handleChange}
  placeholder="Email Address"
  required
  className="
    w-full
    p-4
    rounded-xl

    border
    border-zinc-300
    dark:border-white/10

    bg-white
    dark:bg-white/5

    text-zinc-900
    dark:text-white

    placeholder:text-zinc-500
    dark:placeholder:text-zinc-400

    backdrop-blur-xl

    outline-none

    focus:border-cyan-500
    focus:ring-2
    focus:ring-cyan-500/20

    transition-all
  "
/>

<input
  type="text"
  name="subject"
  value={form.subject}
  onChange={handleChange}
  placeholder="Subject"
  required
  className="
    w-full
    p-4
    rounded-xl

    border
    border-zinc-300
    dark:border-white/10

    bg-white
    dark:bg-white/5

    text-zinc-900
    dark:text-white

    placeholder:text-zinc-500
    dark:placeholder:text-zinc-400

    backdrop-blur-xl

    outline-none

    focus:border-cyan-500
    focus:ring-2
    focus:ring-cyan-500/20

    transition-all
  "
/>

<textarea
  rows="6"
  name="message"
  value={form.message}
  onChange={handleChange}
  placeholder="Message"
  required
  className="
    w-full
    p-4
    rounded-xl

    border
    border-zinc-300
    dark:border-white/10

    bg-white
    dark:bg-white/5

    text-zinc-900
    dark:text-white

    placeholder:text-zinc-500
    dark:placeholder:text-zinc-400

    backdrop-blur-xl

    outline-none

    resize-none

    focus:border-cyan-500
    focus:ring-2
    focus:ring-cyan-500/20

    transition-all
  "
/>

            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                py-4
                rounded-xl
                flex
                items-center
                justify-center
                gap-2
                text-white
                font-medium
                bg-gradient-to-r
                from-cyan-500
                via-blue-500
                to-purple-500
              "
            >
              <Send size={18} />
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;