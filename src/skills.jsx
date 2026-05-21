import { motion } from "framer-motion";
import { Section } from "./Section";

const programming = [
  { name: "Python", level: 90 },
  { name: "Java", level: 80 },
  { name: "C", level: 75 },
  { name: "JavaScript", level: 78 },
  { name: "HTML / CSS", level: 90 },
];

const tech = [
  "AI / ML",
  "DBMS",
  "OOPs",
  "Computer Networks",
  "Linux",
  "Git",
  "TensorFlow",
  "React",
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={
        <>
          Things I{" "}
          <span className="text-gradient">
            work with
          </span>
        </>
      }
    >
      <div className="grid md:grid-cols-2 gap-8">

        <div className="glass rounded-3xl p-8 shadow-soft">

          <h3 className="text-2xl font-bold mb-6">
            Programming Languages
          </h3>

          <div className="space-y-5">

            {programming.map((skill, index) => (
              <div key={skill.name}>

                <div className="flex justify-between mb-2">

                  <span className="font-medium">
                    {skill.name}
                  </span>

                  <span className="text-gray-600">
                    {skill.level}%
                  </span>

                </div>

                <div className="h-3 bg-pink-100 rounded-full overflow-hidden">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                      width: `${skill.level}%`,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: index * 0.1,
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-pink-500 via-orange-400 to-sky-400"
                  />

                </div>

              </div>
            ))}

          </div>
        </div>

        <div className="glass rounded-3xl p-8 shadow-soft">

          <h3 className="text-2xl font-bold mb-6">
            Technologies & Concepts
          </h3>

          <div className="flex flex-wrap gap-3">

            {tech.map((item, index) => (
              <motion.span
                key={item}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05,
                }}
                className="glass px-4 py-2 rounded-full text-sm hover:scale-105 transition-all"
              >
                {item}
              </motion.span>
            ))}

          </div>

          <div className="grid grid-cols-3 gap-4 mt-8 text-center">

            {[
              { number: "15+", label: "Projects" },
              { number: "10+", label: "Certificates" },
              { number: "∞", label: "Curiosity" },
            ].map((item) => (
              <div
                key={item.label}
                className="glass rounded-2xl p-4"
              >

                <h4 className="text-2xl font-bold text-gradient">
                  {item.number}
                </h4>

                <p className="text-sm text-gray-600 mt-1">
                  {item.label}
                </p>

              </div>
            ))}

          </div>
        </div>
      </div>
    </Section>
  );
}