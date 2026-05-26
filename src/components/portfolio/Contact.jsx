export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white text-center px-6">

      <h2 className="text-4xl font-bold text-pink-500 mb-6">
        Contact Me
      </h2>

      <p className="text-lg text-gray-700 mb-8">
        Let's connect and build something amazing
      </p>

      <div className="flex justify-center gap-6">
        
        <a
          href="https://github.com/kahkashan07"
          className="bg-black text-white px-6 py-3 rounded-xl"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/kahkashan-aslam-32119a321/"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl"
        >
          LinkedIn
        </a>

        <a
          href="https://www.instagram.com/kahkashan_.47/"
          className="bg-#BE27F5 text-white px-6 py-3 rounded-xl"
        >
          Instagram
        </a>

        <a
          href="kahkashanaslam495@gmail.com"
          className="bg-#E6DE85 text-white px-6 py-3 rounded-xl"
        >
          Email
        </a>

      </div>

    </section>
  );
}