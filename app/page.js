export default function Home() {
  const services = [
    {
      title: "AI Consulting",
      desc: "Enterprise AI strategy, LLM architecture, RAG systems, and scalable GenAI solutions.",
    },
    {
      title: "Voice AI Solutions",
      desc: "Production-ready voice bots, interruption handling, TTS/STT integrations, and real-time AI agents.",
    },
    {
      title: "LLM & RAG Development",
      desc: "Custom AI assistants, retrieval systems, vector databases, and intelligent automation.",
    },
    {
      title: "AI Product Engineering",
      desc: "End-to-end AI product development using modern cloud-native architectures.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 via-black to-red-500/10" />

      <nav className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-white/10 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <img src="/Logo1.png" alt="AINextGen" className="w-14 h-14 rounded-2xl object-cover" />
          <div>
            <h1 className="text-2xl font-bold">AINextGen</h1>
            <p className="text-sm text-gray-400">Building Future-Ready AI Systems</p>
          </div>
        </div>

        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#about" className="hover:text-pink-400 transition">About</a>
          <a href="#services" className="hover:text-pink-400 transition">Services</a>
          <a href="#contact" className="hover:text-pink-400 transition">Contact</a>
        </div>
      </nav>

      <section className="relative z-10 px-8 lg:px-20 pt-20 pb-28 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-white/5 border border-pink-500/20 px-4 py-2 rounded-full text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
            AI Engineer • AI Team Lead • Content Creator
          </div>

          <h1 className="text-5xl lg:text-7xl font-black leading-tight">
            Transforming
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500">
              AI Ideas
            </span>
            Into Real Products
          </h1>

          <p className="mt-8 text-lg text-gray-300 leading-relaxed max-w-2xl">
            Welcome to AINextGen — your destination for modern AI solutions,
            enterprise-grade automation, LLM applications, voice AI systems,
            and next-generation digital innovation.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="https://www.linkedin.com/in/ayush9198/"
              target="_blank"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-600 to-red-500 font-semibold"
            >
              Collaborate Now
            </a>

            <a
              href="https://github.com/ayushgupta9198"
              target="_blank"
              className="px-8 py-4 rounded-2xl border border-white/20 bg-white/5"
            >
              View GitHub
            </a>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="relative bg-white/5 border border-white/10 p-10 rounded-[40px]">
            <img
              src="/Logo1.png"
              alt="AINextGen Logo"
              className="w-[320px] max-w-full"
            />
          </div>
        </div>
      </section>

      <section id="services" className="relative z-10 px-8 lg:px-20 py-24 border-t border-white/10">
        <div className="max-w-3xl mb-16">
          <p className="text-pink-400 font-semibold uppercase tracking-widest mb-4">
            Services
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold">
            What AINextGen Delivers
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-[32px] p-8"
            >
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

              <p className="text-gray-400 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="relative z-10 px-8 lg:px-20 py-24 border-t border-white/10">
        <div className="bg-white/5 border border-white/10 rounded-[40px] p-10">
          <h2 className="text-4xl font-bold mb-8">Let's Build With AI</h2>

          <div className="grid gap-6">
            <input
              placeholder="Your Name"
              className="bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none"
            />

            <input
              placeholder="Email Address"
              className="bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none"
            />

            <textarea
              rows={5}
              placeholder="Tell us about your project"
              className="bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none"
            />

            <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-pink-600 to-red-500 font-semibold">
              Send Message
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
