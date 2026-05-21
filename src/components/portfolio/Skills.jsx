export function Skills() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python",
    "Machine Learning",
  ];

  return (
    <section id="skills" className="py-24 bg-gray-100 text-center px-6">

      <h2 className="text-4xl font-bold text-pink-500 mb-10">
        My Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-white px-6 py-4 rounded-2xl shadow-md hover:scale-105 transition"
          >
            {skill}
          </div>
        ))}
      </div>

    </section>
  );
}