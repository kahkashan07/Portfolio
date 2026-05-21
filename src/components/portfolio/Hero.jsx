export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100"
    >
      <div className="text-center px-6">

        <h1 className="text-6xl font-bold leading-tight">
          Hi, I'm
          <span className="text-pink-500"> Kahkashan</span>
        </h1>

        <p className="text-xl text-gray-700 mt-4">
          BTech CSE Student <br />
          AI & ML Enthusiast 🚀
        </p>

        <div className="mt-8 flex justify-center gap-4">
          
          <a
            href="#contact"
            className="bg-pink-500 text-white px-6 py-3 rounded-xl hover:bg-pink-600 transition"
          >
            Contact Me
          </a>

          <a
            href="#skills"
            className="border-2 border-pink-500 text-pink-500 px-6 py-3 rounded-xl hover:bg-pink-500 hover:text-white transition"
          >
            My Skills
          </a>

        </div>

      </div>
    </section>
  );
}