
// export default function BlueTechAIWebsite() {
//   const services = [
//     {
//       title: "AI Solutions",
//       desc: "Intelligent AI-powered systems and automation solutions for modern businesses.",
//       icon: "🤖",
//     },
//     {
//       title: "Mobile App Development",
//       desc: "High-performance Android and iOS applications using React Native.",
//       icon: "📱",
//     },
//     {
//       title: "Web Development",
//       desc: "Modern, scalable, and responsive web applications for startups and enterprises.",
//       icon: "💻",
//     },
//     {
//       title: "Cloud Solutions",
//       desc: "Secure cloud integration and scalable infrastructure solutions.",
//       icon: "☁️",
//     },
//   ];

//   const techs = [
//     "React Native",
//     "Next.js",
//     "React",
//     "Node.js",
//     "Firebase",
//     "TypeScript",
//     "AWS",
//     "AI/ML",
//   ];

//   return (
//     <main className="bg-[#050816] text-white overflow-hidden">
//       {/* NAVBAR */}
//       <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//           <div>
//             <h1 className="text-2xl font-bold tracking-wide text-cyan-400">
//               BlueTechAI
//             </h1>
//             <p className="text-xs text-gray-400">Innovating Beyond Intelligence</p>
//           </div>

//           <nav className="hidden md:flex gap-8 text-sm text-gray-300">
//             <a href="#about" className="hover:text-cyan-400 transition">About</a>
//             <a href="#services" className="hover:text-cyan-400 transition">Services</a>
//             <a href="#tech" className="hover:text-cyan-400 transition">Technologies</a>
//             <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
//           </nav>
//         </div>
//       </header>

//       {/* HERO SECTION */}
//       <section className="relative min-h-screen flex items-center justify-center px-6">
//         <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent" />

//         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10 pt-24">
//           <div>
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 mb-6">
//               <span>🚀</span>
//               <span>Future Ready Digital Solutions</span>
//             </div>

//             <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
//               Building the
//               <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
//                 Future with AI
//               </span>
//             </h1>

//             <p className="text-gray-300 text-lg leading-8 mb-8 max-w-2xl">
//               BlueTechAI Solutions delivers cutting-edge AI applications,
//               mobile apps, cloud solutions, and scalable digital platforms
//               for startups and enterprises.
//             </p>

//             <div className="flex flex-wrap gap-4">
//               <a
//                 href="#services"
//                 className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition shadow-lg shadow-cyan-500/30"
//               >
//                 Explore Services
//               </a>

//               <a
//                 href="#contact"
//                 className="px-8 py-4 rounded-xl border border-white/20 hover:border-cyan-400 hover:text-cyan-400 transition"
//               >
//                 Contact Us
//               </a>
//             </div>
//           </div>

//           <div className="relative">
//             <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full" />

//             <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">
//               <div className="grid grid-cols-2 gap-6">
//                 <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
//                   <p className="text-4xl mb-3">🤖</p>
//                   <h3 className="font-semibold mb-2">AI Powered</h3>
//                   <p className="text-sm text-gray-400">
//                     Smart automation & intelligent systems.
//                   </p>
//                 </div>

//                 <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
//                   <p className="text-4xl mb-3">📱</p>
//                   <h3 className="font-semibold mb-2">Mobile Apps</h3>
//                   <p className="text-sm text-gray-400">
//                     High-performance React Native apps.
//                   </p>
//                 </div>

//                 <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
//                   <p className="text-4xl mb-3">☁️</p>
//                   <h3 className="font-semibold mb-2">Cloud</h3>
//                   <p className="text-sm text-gray-400">
//                     Scalable cloud infrastructure solutions.
//                   </p>
//                 </div>

//                 <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
//                   <p className="text-4xl mb-3">💻</p>
//                   <h3 className="font-semibold mb-2">Web Platforms</h3>
//                   <p className="text-sm text-gray-400">
//                     Modern and responsive web applications.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ABOUT */}
//       <section id="about" className="py-28 px-6">
//         <div className="max-w-6xl mx-auto text-center">
//           <p className="text-cyan-400 font-semibold uppercase tracking-[0.3em] mb-4">
//             About Us
//           </p>

//           <h2 className="text-4xl md:text-5xl font-bold mb-8">
//             Innovating Beyond Intelligence
//           </h2>

//           <p className="text-gray-400 text-lg leading-9 max-w-4xl mx-auto">
//             BlueTechAI Solutions is a technology-driven software company focused
//             on delivering intelligent, scalable, and future-ready digital
//             solutions. We specialize in AI-powered applications, mobile app
//             development, cloud integration, and modern web technologies tailored
//             for startups and enterprises.
//           </p>
//         </div>
//       </section>

//       {/* SERVICES */}
//       <section
//         id="services"
//         className="py-28 px-6 bg-gradient-to-b from-transparent to-cyan-950/10"
//       >
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <p className="text-cyan-400 font-semibold uppercase tracking-[0.3em] mb-4">
//               Our Services
//             </p>

//             <h2 className="text-4xl md:text-5xl font-bold">
//               What We Deliver
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {services.map((service) => (
//               <div
//                 key={service.title}
//                 className="group bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400/40 hover:-translate-y-2 transition duration-300"
//               >
//                 <div className="text-5xl mb-6">{service.icon}</div>

//                 <h3 className="text-2xl font-semibold mb-4 group-hover:text-cyan-400 transition">
//                   {service.title}
//                 </h3>

//                 <p className="text-gray-400 leading-7">{service.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* TECHNOLOGIES */}
//       <section id="tech" className="py-28 px-6">
//         <div className="max-w-6xl mx-auto text-center">
//           <p className="text-cyan-400 font-semibold uppercase tracking-[0.3em] mb-4">
//             Technologies
//           </p>

//           <h2 className="text-4xl md:text-5xl font-bold mb-14">
//             Modern Tech Stack
//           </h2>

//           <div className="flex flex-wrap justify-center gap-5">
//             {techs.map((tech) => (
//               <div
//                 key={tech}
//                 className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:text-cyan-400 transition"
//               >
//                 {tech}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-28 px-6">
//         <div className="max-w-6xl mx-auto bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[40px] p-12 md:p-20 text-center text-black shadow-2xl shadow-cyan-500/20">
//           <h2 className="text-4xl md:text-6xl font-bold mb-6">
//             Let’s Build Something Amazing
//           </h2>

//           <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto opacity-80">
//             We help businesses transform ideas into powerful digital products
//             using AI, cloud technologies, and scalable software solutions.
//           </p>

//           <a
//             href="#contact"
//             className="inline-block px-10 py-5 rounded-2xl bg-black text-white font-semibold hover:bg-gray-900 transition"
//           >
//             Get Started
//           </a>
//         </div>
//       </section>

//       {/* CONTACT */}
//       <section
//         id="contact"
//         className="py-24 px-6 border-t border-white/10"
//       >
//         <div className="max-w-5xl mx-auto text-center">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">
//             Contact Us
//           </h2>

//           <p className="text-gray-400 text-lg mb-12">
//             Let’s create intelligent digital experiences together.
//           </p>

//           <div className="grid md:grid-cols-3 gap-6">
//             <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
//               <p className="text-3xl mb-4">📧</p>
//               <h3 className="font-semibold text-xl mb-2">Email</h3>
//               <p className="text-gray-400">contact@bluetechai.com</p>
//             </div>

//             <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
//               <p className="text-3xl mb-4">🌐</p>
//               <h3 className="font-semibold text-xl mb-2">LinkedIn</h3>
//               <p className="text-gray-400">BlueTechAI Solutions</p>
//             </div>

//             <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
//               <p className="text-3xl mb-4">📍</p>
//               <h3 className="font-semibold text-xl mb-2">Location</h3>
//               <p className="text-gray-400">India</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="py-10 text-center text-gray-500 border-t border-white/10">
//         © 2026 BlueTechAI Solutions. All rights reserved.
//       </footer>
//     </main>
//   );
// }

export default function BlueTechAIWebsite() {
  const services = [
    {
      title: "AI Solutions",
      desc: "Intelligent AI-powered systems and automation solutions for modern businesses.",
      icon: "🤖",
    },
    {
      title: "Mobile App Development",
      desc: "High-performance Android and iOS applications using React Native.",
      icon: "📱",
    },
    {
      title: "Web Development",
      desc: "Modern, scalable, and responsive web applications for startups and enterprises.",
      icon: "💻",
    },
    {
      title: "Cloud Solutions",
      desc: "Secure cloud integration and scalable infrastructure solutions.",
      icon: "☁️",
    },
  ];

  const techs = [
    "React Native",
    "Next.js",
    "React",
    "Node.js",
    "Firebase",
    "TypeScript",
    "AWS",
    "AI/ML",
  ];

  return (
    <main className="bg-[#050816] text-white overflow-hidden">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-wide text-cyan-400">
              BlueTechAI
            </h1>
            <p className="text-xs text-gray-400">Innovating Beyond Intelligence</p>
          </div>

          <nav className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#services" className="hover:text-cyan-400 transition">Services</a>
            <a href="#tech" className="hover:text-cyan-400 transition">Technologies</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10 pt-24">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 mb-6">
              <span>🚀</span>
              <span>Future Ready Digital Solutions</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Building the
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Future with AI
              </span>
            </h1>

            <p className="text-gray-300 text-lg leading-8 mb-8 max-w-2xl">
              BlueTechAI Solutions delivers cutting-edge AI applications,
              mobile apps, cloud solutions, and scalable digital platforms
              for startups and enterprises.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition shadow-lg shadow-cyan-500/30"
              >
                Explore Services
              </a>

              <a
                href="#contact"
                className="px-8 py-4 rounded-xl border border-white/20 hover:border-cyan-400 hover:text-cyan-400 transition"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full" />

            <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <p className="text-4xl mb-3">🤖</p>
                  <h3 className="font-semibold mb-2">AI Powered</h3>
                  <p className="text-sm text-gray-400">
                    Smart automation & intelligent systems.
                  </p>
                </div>

                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <p className="text-4xl mb-3">📱</p>
                  <h3 className="font-semibold mb-2">Mobile Apps</h3>
                  <p className="text-sm text-gray-400">
                    High-performance React Native apps.
                  </p>
                </div>

                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <p className="text-4xl mb-3">☁️</p>
                  <h3 className="font-semibold mb-2">Cloud</h3>
                  <p className="text-sm text-gray-400">
                    Scalable cloud infrastructure solutions.
                  </p>
                </div>

                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <p className="text-4xl mb-3">💻</p>
                  <h3 className="font-semibold mb-2">Web Platforms</h3>
                  <p className="text-sm text-gray-400">
                    Modern and responsive web applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-cyan-400 font-semibold uppercase tracking-[0.3em] mb-4">
            About Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Innovating Beyond Intelligence
          </h2>

          <p className="text-gray-400 text-lg leading-9 max-w-4xl mx-auto">
            BlueTechAI Solutions is a technology-driven software company focused
            on delivering intelligent, scalable, and future-ready digital
            solutions. We specialize in AI-powered applications, mobile app
            development, cloud integration, and modern web technologies tailored
            for startups and enterprises.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-28 px-6 bg-gradient-to-b from-transparent to-cyan-950/10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-400 font-semibold uppercase tracking-[0.3em] mb-4">
              Our Services
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              What We Deliver
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400/40 hover:-translate-y-2 transition duration-300"
              >
                <div className="text-5xl mb-6">{service.icon}</div>

                <h3 className="text-2xl font-semibold mb-4 group-hover:text-cyan-400 transition">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-7">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section id="tech" className="py-28 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-cyan-400 font-semibold uppercase tracking-[0.3em] mb-4">
            Technologies
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-14">
            Modern Tech Stack
          </h2>

          <div className="flex flex-wrap justify-center gap-5">
            {techs.map((tech) => (
              <div
                key={tech}
                className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:text-cyan-400 transition"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[40px] p-12 md:p-20 text-center text-black shadow-2xl shadow-cyan-500/20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let’s Build Something Amazing
          </h2>

          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto opacity-80">
            We help businesses transform ideas into powerful digital products
            using AI, cloud technologies, and scalable software solutions.
          </p>

          <a
            href="#contact"
            className="inline-block px-10 py-5 rounded-2xl bg-black text-white font-semibold hover:bg-gray-900 transition"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-24 px-6 border-t border-white/10"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Us
          </h2>

          <p className="text-gray-400 text-lg mb-12">
            Let’s create intelligent digital experiences together.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <p className="text-3xl mb-4">📧</p>
              <h3 className="font-semibold text-xl mb-2">Email</h3>
              <p className="text-gray-400">contact@bluetechai.com</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <p className="text-3xl mb-4">🌐</p>
              <h3 className="font-semibold text-xl mb-2">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/company/bluetechai-solutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition"
              >
                linkedin.com/company/bluetechai-solutions
              </a>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <p className="text-3xl mb-4">📍</p>
              <h3 className="font-semibold text-xl mb-2">Location</h3>
              <p className="text-gray-400">Surat, Gujarat, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-500 border-t border-white/10">
        © 2026 BlueTechAI Solutions. All rights reserved.
      </footer>
    </main>
  );
}

