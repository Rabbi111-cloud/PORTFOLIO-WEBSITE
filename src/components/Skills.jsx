export default function Skills() {
  const skills = [
    { category: "Backend", items: "Node.js, Express, REST APIs" },
    { category: "Frontend", items: "React, HTML, CSS, Tailwind" },
    { category: "Databases", items: "MongoDB, Firebase" },
    { category: "Tools", items: "Git, GitHub, Vercel" },
    { category: "Other", items: "AI integrations, authentication, dashboards" }
  ];

  return (
    <section id="skills" className="pt-24 pb-16 max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-gray-900">Skills</h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {skills.map((skill, idx) => (
          <div key={idx} className="bg-blue-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-900">{skill.category}</h3>
            <p className="text-gray-700 mt-2">{skill.items}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
