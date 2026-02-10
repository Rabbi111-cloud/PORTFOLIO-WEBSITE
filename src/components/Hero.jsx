import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section style={styles.hero}>
      <img src={profile} alt="Daniel Aremu" style={styles.image} />

      <h1 style={styles.name}>Daniel Aremu</h1>
      <h2 style={styles.role}>Backend-Focused Full-Stack Developer</h2>

      <p style={styles.text}>
        I design and build scalable APIs, dashboards, and AI-powered products
        that help startups and businesses move fast and grow.
      </p>

      <div style={styles.buttons}>
        <a href="#projects" style={styles.primaryBtn}>View Projects</a>
        <a href="#contact" style={styles.secondaryBtn}>Hire Me</a>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    textAlign: "center",
    paddingTop: "5rem"
  },
  image: {
    width: "160px",
    height: "160px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "1.5rem",
    border: "4px solid #e5e7eb"
  },
  name: {
    fontSize: "2.5rem",
    fontWeight: "700"
  },
  role: {
    color: "#2563eb",
    marginTop: "0.5rem"
  },
  text: {
    maxWidth: "650px",
    margin: "1.5rem auto",
    color: "#4b5563"
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem"
  },
  primaryBtn: {
    background: "#2563eb",
    color: "#fff",
    padding: "0.75rem 1.5rem",
    borderRadius: "6px"
  },
  secondaryBtn: {
    border: "1px solid #2563eb",
    padding: "0.75rem 1.5rem",
    borderRadius: "6px"
  }
};
