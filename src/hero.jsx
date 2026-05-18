import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Instagram,
} from "lucide-react";

import profile from "../../assets/profile.jpg";

const phrases = [
  "BTech CSE Student",
  "AI & ML Enthusiast",
  "Future Software Engineer",
];

function useTyping() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index];

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));

        if (text === current) {
          setTimeout(() => setDeleting(true), 1000);
        }
      } else {
        setText(current.slice(0, text.length - 1));

        if (text === "") {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, deleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [text, deleting, index]);

  return text;
}

export function Hero() {
  const typed = useTyping();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
    >
      <div
        className="glow-orb top-10 left-10"
        style={{ background: "#f9a8d4" }}
      />

      <div
        className="glow-orb bottom-10 right-10"
        style={{ background: "#93c5fd" }}
      />

      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="glass px-4 py-2 rounded-full inline-block mb-5 text-sm">
            ✨ Welcome to my portfolio
          </span>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
            Hi, I'm{" "}
            <span className="text-gradient">
              Kahkashan
            </span>
          </h1>

          <h2 className="text-2xl mb-4">
            {typed}
            <span className="cursor-blink">|</span>
          </h2>

          <p className="text-gray-600 mb-8 max-w-lg">
            Passionate about AI, ML, Web Development,
            and creating beautiful user experiences.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">

            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-pink-500 text-white shadow-soft"
            >
              Let's Connect
            </a>

            <a
              href="/resume.pdf"
              download
              className="glass px-6 py-3 rounded-xl flex items-center gap-2"
            >
              <Download size={18} />
              Resume
            </a>

          </div>

          <div className="flex gap-4">

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="glass p-3 rounded-xl"
            >
              <Github />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="glass p-3 rounded-xl"
            >
              <Linkedin />
            </a>

            <a
              href="mailto:example@gmail.com"
              className="glass p-3 rounded-xl"
            >
              <Mail />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="glass p-3 rounded-xl"
            >
              <Instagram />
            </a>

          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative float">

            <div className="glass p-4 rounded-full shadow-soft">

              <img
                src={profile}
                alt="Kahkashan"
                className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover"
              />

            </div>

            <div className="absolute -top-3 -right-3 glass px-4 py-2 rounded-xl">
              👩‍💻 Coding
            </div>

            <div className="absolute -bottom-3 -left-3 glass px-4 py-2 rounded-xl">
              🚀 AI/ML
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}