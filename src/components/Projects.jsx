export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div style={styles.grid}>
        <ProjectCard
          title="PulseGuard AI"
          description="AI-driven healthcare analytics platform that analyzes trends and provides predictive insights."
          tech="Node.js • APIs • AI • Data Processing"
        />

        <ProjectCard
          title="VaultFlow"
          description="A FinTech tool that helps small businesses manage cash flow, invoices, and tax readiness."
          tech="MERN • Firebase • REST APIs"
        />

        <ProjectCard
          title="AI Sentiment Chat App"
          description="Real-time chat application with AI sentiment analysis to detect toxicity and encourage healthy conversations."
          tech="React • Node.js • AI • WebSockets"
        />
      </div>
    </section>
  );
}

function ProjectCard({ title, description, tech }) {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
      <span style={styles.tech}>{tech}</span>
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "1.5rem",
    marginTop: "2rem"
  },
  card: {
    background: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "10px",
    padding: "1.5rem",
    boxShadow: "0 10px 20px rgba(0,0,0,0.04)"
  },
  tech: {
    display: "block",
    marginTop: "1rem",
    fontSize: "0.85rem",
    color: "#2563eb"
  }
};
