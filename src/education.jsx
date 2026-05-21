import { motion } from "framer-motion";

import {
  GraduationCap,
  School,
  BookOpen,
} from "lucide-react";

import { Section } from "./Section";

const items = [
  {
    Icon: GraduationCap,
    title: "BTech — Computer Science & Engineering",
    place: "Currently Pursuing",
    period: "2023 – 2027",
    desc:
      "Specializing in Artificial Intelligence & Machine Learning while exploring modern technologies and development.",
  },

  {
    Icon: School,
    title: "Senior Secondary (12th) — PCM",
    place: "CBSE Board",
    period: "2022 – 2023",
    desc:
      "Developed strong analytical and problem-solving skills through mathematics and science.",
  },

  {
    Icon: BookOpen,
    title: "Secondary School (10th)",
    place: "CBSE Board",
    period: "2020 – 2021",
    desc:
      "Started learning computers, HTML, and discovered my interest in technology.",
  },
];

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title={
        <>
          My{" "}
          <span className="text-gradient">
            learning path
          </span>
        </>
      }
    >
      <div className="relative max-w-4xl mx-auto">

        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-pink-200 -translate-x-1/2" />

        <div className="space-y-10">

          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="relative"
            >

              <div className="glass rounded-3xl p-6 shadow-soft ml-16 md:ml-0 md:w-[45%]">

                <span className="text-sm text-pink-500 font-medium">
                  {item.period}
                </span>

                <h3 className="text-xl font-bold mt-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-1">
                  {item.place}
                </p>

                <p className="text-gray-600 mt-3 leading-relaxed">
                  {item.desc}
                </p>

              </div>

              <div className="absolute left-6 top-6 -translate-x-1/2 w-12 h-12 rounded-2xl bg-pink-500 text-white flex items-center justify-center shadow-soft">

                <item.Icon size={20} />

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </Section>
  );
}