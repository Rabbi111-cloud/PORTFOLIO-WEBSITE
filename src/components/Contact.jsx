export default function Contact() {
  return (
    <section id="contact" className="pt-24 pb-16 bg-gradient-to-r from-blue-50 to-blue-100 text-center">
      <h2 className="text-3xl font-bold text-gray-900">Let’s Work Together</h2>
      <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-lg">
        I’m open to full-time roles or freelance projects. If you need a reliable developer to turn your idea into a product, let’s talk!
      </p>

      <div className="mt-6 flex justify-center gap-4 flex-wrap">
        <a
          href="mailto:danielaremudev@gmail.com"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Contact Me
        </a>

        <a
          href="https://github.com/yourusername/your-cv.pdf"
          target="_blank"
          className="text-gray-700 border border-gray-700 px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
