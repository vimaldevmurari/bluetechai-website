export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-r from-blue-950 to-blue-700 text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          BlueTechAI Solutions
        </h1>

        <p className="text-xl md:text-2xl text-blue-200 mb-8">
          Innovating Beyond Intelligence ee
        </p>

        <div className="flex gap-4">
          <a
            href="#services"
            className="bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition"
          >
            Our Services
          </a>

          <a
            href="#contact"
            className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-900 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">
          About Us
        </h2>

        <p className="text-lg text-gray-700 text-center leading-8 max-w-4xl mx-auto">
          BlueTechAI Solutions is a modern technology company focused on
          delivering intelligent, scalable, and high-performance digital
          solutions. We specialize in AI-powered applications, mobile app
          development, React Native solutions, web platforms, and cloud
          technologies for modern businesses.
        </p>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-24 px-6 bg-gray-100"
      >
        <h2 className="text-4xl font-bold text-center mb-16">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">
              AI Solutions
            </h3>
            <p className="text-gray-600">
              Intelligent AI-powered systems and automation solutions for modern businesses.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">
              Mobile App Development
            </h3>
            <p className="text-gray-600">
              High-performance Android and iOS apps using React Native.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">
              Web Development
            </h3>
            <p className="text-gray-600">
              Modern, responsive, and scalable web applications and platforms.
            </p>
          </div>

        </div>
      </section>

      {/* Technologies */}
      <section className="py-24 px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Technologies
        </h2>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {[
            "React Native",
            "React",
            "Next.js",
            "Node.js",
            "Firebase",
            "AI",
            "AWS",
            "TypeScript",
          ].map((tech) => (
            <div
              key={tech}
              className="bg-blue-100 text-blue-900 px-6 py-3 rounded-full font-medium"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 px-6 bg-blue-950 text-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Contact Us
          </h2>

          <p className="text-lg text-blue-200 mb-4">
            Let’s build intelligent digital solutions together.
          </p>

          <div className="space-y-2 text-lg">
            <p>Email: contact@bluetechai.com</p>
            <p>LinkedIn: BlueTechAI Solutions</p>
            <p>Location: India</p>
          </div>
        </div>
      </section>

    </main>
  );
}