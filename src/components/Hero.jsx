import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center pt-20">
      <img
        src={profile}
        alt="Daniel Aremu"
        className="w-40 h-40 rounded-full object-cover border-4 border-gray-200 mb-6"
      />

      <h1 className="text-4xl font-bold text-gray-900">
        Daniel Aremu
      </h1>

      <h2 className="text-blue-600 text-lg mt-2">
        Backend-Focused Full-Stack Developer
      </h2>

      <p className="max-w-2xl mt-6 text-gray-600">
        I build scalable APIs, dashboards, and AI-powered products for startups
        and businesses that want reliable, maintainable software.
      </p>

      <div className="flex gap-4 mt-8">
        <a
          href="#projects"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
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
