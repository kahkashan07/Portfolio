import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function Section({
  id,
  eyebrow,
  title,
  children,
}) {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id={id}
      ref={ref}
      className="py-24 px-6"
    >
      <div className="container mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={
            inView
              ? { opacity: 1, y: 0 }
              : {}
          }
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >

          <span className="glass px-4 py-2 rounded-full inline-block text-sm mb-4">
            {eyebrow}
          </span>

          <h2 className="text-4xl md:text-5xl font-bold">
            {title}
          </h2>

        </motion.div>

        {children}

      </div>
    </section>
  );
}