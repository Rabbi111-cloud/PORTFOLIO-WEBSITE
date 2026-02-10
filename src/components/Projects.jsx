export default function Projects() {
  return (
    <section id="projects" className="pt-24">
      <h2 className="text-3xl font-bold text-center text-gray-900">
        Projects
      </h2>

      <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          title="PulseGuard AI"
          description="AI-driven healthcare analytics platform that provides predictive insights and trend analysis."
          tech="Node.js · APIs · AI"
          github="https://github.com/yourusername/pulseguard-ai"
          live="https://pulseguard-ai.vercel.app"
        />

        <ProjectCard
          title="VaultFlow"
          description="FinTech tool for managing cash flow, invoices, and tax readiness for small businesses."
          tech="MERN · Firebase"
          github="https://github.com/yourusername/vaultflow"
          live="https://vaultflow.vercel.app"
        />

        <ProjectCard
          title="AI Sentiment Chat App"
          description="Real-time chat app with AI sentiment analysis to detect toxicity and promote healthy conversations."
          tech="React · Node.js · AI"
          github="https://github.com/yourusername/ai-chat-app"
          live="https://ai-chat-app.vercel.app"
        />
      </div>
    </section>
  );
}

function ProjectCard({ title, description, tech, github, live }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition bg-white">
      <h3 className="text-xl font-semibold text-gray-900">
        {title}
      </h3>

      <p className="text-gray-600 mt-3">
        {description}
      </p>

      <p className="text-sm text-blue-600 mt-4">
        {tech}
      </p>

      <div className="flex gap-4 mt-6">
        <a
          href={github}
          target="_blank"
          className="text-sm font-medium text-gray-700 hover:text-black"
        >
          GitHub →
        </a>

        <a
          href={live}
          target="_blank"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          Live Demo →
        </a>
      </div>
    </div>
  );
}
