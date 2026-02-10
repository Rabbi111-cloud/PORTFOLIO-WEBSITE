export default function Projects() {
  return (
    <section id="projects" className="pt-24 pb-16 max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-gray-900">Projects</h2>

      <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          title="PulseGuard AI"
          description="AI-driven healthcare analytics platform providing predictive insights and trend analysis."
          tech="Node.js · APIs · AI"
          github="https://github.com/yourusername/pulseguard-ai"
          live="https://pulseguard-ai.vercel.app"
        />

        <ProjectCard
          title="VaultFlow"
          description="FinTech tool helping small businesses manage cash flow, invoices, and tax readiness."
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
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 mt-3">{description}</p>
      <span className="text-sm text-blue-600 mt-4 block">{tech}</span>

      <div className="flex gap-4 mt-6">
        <a href={github} target="_blank" className="text-gray-700 font-medium hover:text-black">GitHub →</a>
        <a href={live} target="_blank" className="text-blue-600 font-medium hover:underline">Live Demo →</a>
      </div>
    </div>
  );
}
