import { motion } from "framer-motion";

import { Section } from "./Section";

import {
  Sparkles,
  Code2,
  Brain,
  Heart,
} from "lucide-react";

const highlights = [
  {
    Icon: Brain,
    label: "AI & ML",
    desc: "Building smart systems",
  },
  {
    Icon: Code2,
    label: "Web Dev",
    desc: "Crafting interfaces",
  },
  {
    Icon: Sparkles,
    label: "Problem Solving",
    desc: "DSA enthusiast",
  },
  {
    Icon: Heart,
    label: "Hostel Life",
    desc: "Learning & growing",
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About Me"
      title={
        <>
          A little about{" "}
          <span className="text-gradient">
            my journey
          </span>
        </>
      }
    >
      <div className="grid md:grid-cols-2 gap-10 items-center">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 shadow-soft"
        >

          <p className="text-lg leading-relaxed mb-4">
            Hi! I'm{" "}
            <span className="font-semibold text-pink-500">
              Kahkashan Aslam
            </span>
            , a BTech Computer Science Engineering
            student passionate about technology,
            creativity, and innovation.
          </p>

          <p className="leading-relaxed mb-4 text-gray-600">
            My interests include{" "}
            <span className="font-medium">
              Artificial Intelligence
            </span>
            ,{" "}
            <span className="font-medium">
              Machine Learning
            </span>
            , and{" "}
            <span className="font-medium">
              Web Development
            </span>
            .
          </p>

          <p className="leading-relaxed text-gray-600">
            Hostel life has taught me independence,
            teamwork, and continuous learning while
            balancing coding, projects, and college life 🌸
          </p>

        </motion.div>

        <div className="grid grid-cols-2 gap-4">

          {highlights.map(
            ({ Icon, label, desc }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                className="glass rounded-2xl p-5 hover:scale-105 transition-all"
              >

                <div className="w-12 h-12 rounded-xl bg-pink-100 text-pink-500 flex items-center justify-center mb-3">
                  <Icon size={20} />
                </div>

                <h3 className="font-semibold mb-1">
                  {label}
                </h3>

                <p className="text-sm text-gray-600">
                  {desc}
                </p>

              </motion.div>
            )
          )}

        </div>
      </div>
    </Section>
  );
}