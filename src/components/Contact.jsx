export default function Contact() {
  return (
    <section id="contact" style={{ textAlign: "center" }}>
      <h2>Let’s Work Together</h2>
      <p>
        I’m currently open to job opportunities and freelance projects.
        If you need a reliable developer to build or improve your product,
        let’s talk.
      </p>

      <a
        href="mailto:danielaremudev@gmail.com"
        style={{
          display: "inline-block",
          marginTop: "1.5rem",
          background: "#2563eb",
          color: "#fff",
          padding: "0.8rem 2rem",
          borderRadius: "6px"
        }}
      >
        Contact Me
      </a>
    </section>
  );
}
