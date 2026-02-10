import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center pt-32 bg-gradient-to-b from-blue-50 via-white to-white">
      <img
        src={profile}
        alt="Daniel Aremu"
        className="w-40 h-40 rounded-full object-cover border-4 border-blue-200 mb-6 shadow-lg"
      />

      <h1 className="text-5xl font-extrabold text-gray-900 mb-2">Daniel Aremu</h1>
      <h2 className="text-blue-600 text-xl mb-4">
        Backend-Focused Full-Stack Developer
      </h2>

      <p className="max-w-2xl text-gray-700 mb-6 text-lg">
        I build scalable APIs, dashboards, and AI-powered products for startups
        and businesses, delivering clean, maintainable, and performant code.
      </p>

      <div className="flex gap-4">
        <a
          href="#projects"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
        >
          Hire Me
        </a>
      </div>
    </section>
  );
}
