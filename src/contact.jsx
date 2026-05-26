import { useState } from "react";

import { motion } from "framer-motion";

import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Send,
  Instagram,
} from "lucide-react";

import { Section } from "./Section";

export function Contact() {

  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();

    setSent(true);

    setTimeout(() => {
      setSent(false);
    }, 4000);

    e.target.reset();
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={
        <>
          Let's{" "}
          <span className="text-gradient">
            talk
          </span>
        </>
      }
    >
      <div className="grid md:grid-cols-2 gap-8">

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 shadow-soft"
        >

          <h3 className="text-2xl font-bold mb-3">
            Get in touch ✨
          </h3>

          <p className="text-gray-600 mb-6">
            Have a project, opportunity,
            or just want to say hello?
          </p>

          <div className="space-y-4">

            {[
              {
                Icon: Mail,
                label: "kahkashanaslam495@gmai.com",
                href: "mailto:kahkashanaslam@495@gmail.com",
              },

              {
                Icon: Linkedin,
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/kahkashan-aslam-32119a321/",
              },

              {
                Icon: Github,
                label: "GitHub",
                href: "https://github.com/kahkashan07",
              },

              {
                Icon: Instagram,
                label: "Instagram",
                href: "https://instagram.com",
              },

            ].map((item) => (

              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="glass rounded-2xl p-4 flex items-center gap-4 hover:scale-[1.02] transition-all"
              >

                <div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-500 flex items-center justify-center">

                  <item.Icon size={18} />

                </div>

                <span className="font-medium">
                  {item.label}
                </span>

              </a>
            ))}

          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 shadow-soft space-y-5"
        >

          <div>

            <label className="block mb-2 font-medium">
              Name
            </label>

            <input
              required
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-xl border outline-none"
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              required
              type="email"
              placeholder="kahkashanaslam495@gmail.com"
              className="w-full px-4 py-3 rounded-xl border outline-none"
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Message
            </label>

            <textarea
              required
              rows="5"
              placeholder="Say hello..."
              className="w-full px-4 py-3 rounded-xl border outline-none resize-none"
            />

          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] transition-all"
          >

            <Send size={18} />

            {sent
              ? "Message Sent ✨"
              : "Send Message"}

          </button>

        </motion.form>

      </div>
    </Section>
  );
}