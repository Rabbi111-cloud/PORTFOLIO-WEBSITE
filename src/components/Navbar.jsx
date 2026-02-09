export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h3 style={styles.logo}>Daniel Aremu</h3>
      <div style={styles.links}>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.5rem",
    maxWidth: "1100px",
    margin: "auto"
  },
  logo: {
    fontWeight: "bold"
  },
  links: {
    display: "flex",
    gap: "1rem"
  }
};
