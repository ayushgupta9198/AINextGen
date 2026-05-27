# Updated AINextGen Website Structure

Below is the updated professional website structure inspired by MagicSchool AI style with:

* Editable content section
* Better animations
* Better UI/UX flow
* Attractive gradients
* Portfolio showcase
* Social links integration
* Scalable architecture
* Modern AI startup branding

---

# 1. Replace `app/page.js` with this

```javascript
"use client";

import { useEffect, useState } from "react";

const websiteContent = {
  hero: {
    badge: "AI Engineer • GenAI Architect • AI Team Lead",
    title1: "Building",
    title2: "Next-Gen AI",
    title3: "Products & Systems",
    description:
      "Helping startups and enterprises build production-ready AI systems, Voice AI agents, RAG pipelines, multi-agent automation and enterprise GenAI applications.",
    primaryButton: {
      text: "Connect On LinkedIn",
      link: "https://www.linkedin.com/in/ayush9198/"
    },
    secondaryButton: {
      text: "Explore GitHub",
      link: "https://github.com/ayushgupta9198"
    }
  },

  stats: [
    {
      number: "5+",
      label: "AI Domains"
    },
    {
      number: "20+",
      label: "AI Solutions"
    },
    {
      number: "100%",
      label: "Scalable Systems"
    }
  ],

  services: [
    {
      title: "Enterprise GenAI",
      desc: "Production-grade GenAI systems for enterprises with scalable architecture and LLM orchestration."
    },
    {
      title: "Voice AI Assistants",
      desc: "Real-time voice bots using TTS/STT, interruption handling and conversational AI pipelines."
    },
    {
      title: "RAG Pipelines",
      desc: "Enterprise retrieval systems with hybrid search, embeddings and contextual memory handling."
    },
    {
      title: "Multi-Agent AI",
      desc: "Advanced AI orchestration using autonomous agents, workflows and task execution systems."
    },
    {
      title: "AI Automation",
      desc: "Workflow automation using LLMs, APIs, AI tools and enterprise integrations."
    },
    {
      title: "AI Consulting",
      desc: "Helping businesses adopt AI strategies, optimize AI workflows and scale products faster."
    }
  ],

  projects: [
    {
      title: "Voice AI Customer Support",
      desc: "Built real-time voice chatbot with interruption handling, dynamic acknowledgements and knowledge base integration.",
      tech: ["LLM", "TTS", "STT", "RAG"]
    },
    {
      title: "Enterprise RAG System",
      desc: "Scalable retrieval augmented generation pipeline with contextual memory and multi-document search.",
      tech: ["Vector DB", "Embeddings", "LLM"]
    },
    {
      title: "AI Automation Platform",
      desc: "Workflow automation platform using agents, APIs and enterprise AI integrations.",
      tech: ["Agents", "Automation", "AI APIs"]
    }
  ],

  socials: {
    linkedin: "https://www.linkedin.com/in/ayush9198/",
    github: "https://github.com/ayushgupta9198",
    portfolio: "https://ayush227316.wixsite.com/ayushgupta"
  }
};

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="bg-black text-white overflow-hidden min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 via-black to-purple-600/20"></div>

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full"></div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-pink-500 blur-xl opacity-60 rounded-full"></div>

              <img
                src="/Logo1.png"
                alt="AINextGen"
                className="relative w-16 h-16 rounded-3xl border border-white/20 object-cover"
              />
            </div>

            <div>
              <h1 className="text-2xl font-black tracking-wide">
                AINextGen
              </h1>

              <p className="text-gray-400 text-sm">
                AI Innovation Lab
              </p>
            </div>
          </div>

          <div className="hidden md:flex gap-8 text-gray-300">
            <a href="#services" className="hover:text-pink-400 transition">
              Services
            </a>

            <a href="#projects" className="hover:text-pink-400 transition">
              Projects
            </a>

            <a href="#about" className="hover:text-pink-400 transition">
              About
            </a>

            <a href="#contact" className="hover:text-pink-400 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-32 grid lg:grid-cols-2 gap-16 items-center">
        <div
          className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-pink-500/30 bg-white/5 text-sm mb-8">
            <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></div>
            {websiteContent.hero.badge}
          </div>

          <h1 className="text-5xl lg:text-7xl font-black leading-tight">
            {websiteContent.hero.title1}
            <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              {websiteContent.hero.title2}
            </span>
            {websiteContent.hero.title3}
          </h1>

          <p className="mt-8 text-lg text-gray-300 leading-relaxed max-w-2xl">
            {websiteContent.hero.description}
          </p>

          <div className="flex flex-wrap gap-5 mt-10">
            <a
              href={websiteContent.hero.primaryButton.link}
              target="_blank"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 font-semibold hover:scale-105 transition-all duration-300 shadow-2xl shadow-pink-500/30"
            >
              {websiteContent.hero.primaryButton.text}
            </a>

            <a
              href={websiteContent.hero.secondaryButton.link}
              target="_blank"
              className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
            >
              {websiteContent.hero.secondaryButton.text}
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-16">
            {websiteContent.stats.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-6"
              >
                <h3 className="text-3xl font-black text-pink-400">
                  {item.number}
                </h3>

                <p className="text-gray-400 mt-2 text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute w-[350px] h-[350px] bg-pink-500/30 blur-[120px] rounded-full"></div>

          <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl p-10 rounded-[40px] shadow-2xl shadow-pink-500/10 hover:scale-105 transition-all duration-500">
            <img
              src="/Logo1.png"
              alt="AINextGen"
              className="w-[320px] max-w-full object-cover animate-pulse"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <div className="text-center mb-20">
          <p className="text-pink-400 uppercase tracking-[4px] mb-4">
            SERVICES
          </p>

          <h2 className="text-5xl font-black">
            What We Build
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {websiteContent.services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/5 border border-white/10 hover:border-pink-500/40 rounded-[32px] p-8 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-pink-500 to-purple-500 mb-8 group-hover:rotate-6 transition-all duration-500"></div>

              <h3 className="text-2xl font-bold mb-5">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <div className="text-center mb-20">
          <p className="text-cyan-400 uppercase tracking-[4px] mb-4">
            PROJECTS
          </p>

          <h2 className="text-5xl font-black">
            Featured AI Work
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {websiteContent.projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-[32px] p-8 hover:scale-[1.03] transition-all duration-500"
            >
              <div className="flex gap-2 flex-wrap mb-6">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-full bg-pink-500/20 text-pink-300 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-5">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {project.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <div className="bg-gradient-to-r from-pink-600/10 to-purple-600/10 border border-white/10 rounded-[40px] p-10 lg:p-16">
          <h2 className="text-5xl font-black mb-8">
            About Ayush Gupta
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed max-w-4xl">
            AI Engineer and AI Team Lead focused on building scalable enterprise AI systems, GenAI platforms, Voice AI applications and multi-agent architectures.
            Experienced in LLMs, RAG pipelines, AI automation, cloud integrations and production AI deployment.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">
            <a
              href={websiteContent.socials.portfolio}
              target="_blank"
              className="px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 transition"
            >
              View Portfolio
            </a>

            <a
              href={websiteContent.socials.linkedin}
              target="_blank"
              className="px-6 py-4 rounded-2xl bg-pink-500 hover:bg-pink-600 transition"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <div className="bg-white/5 border border-white/10 rounded-[40px] p-10 lg:p-16 backdrop-blur-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-black mb-8">
              Let's Build AI Together
            </h2>

            <p className="text-gray-400 text-lg mb-12">
              Open for AI consulting, enterprise AI development, GenAI solutions and innovative collaborations.
            </p>

            <div className="flex flex-wrap justify-center gap-5">
              <a
                href={websiteContent.socials.linkedin}
                target="_blank"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 font-semibold hover:scale-105 transition-all duration-300"
              >
                Contact Me
              </a>

              <a
                href={websiteContent.socials.github}
                target="_blank"
                className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                Explore GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
```

---

# 2. Replace `app/globals.css` with this

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  background: #000;
  color: white;
  overflow-x: hidden;
}

* {
  box-sizing: border-box;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: black;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #ec4899, #9333ea);
  border-radius: 20px;
}

.glow {
  box-shadow: 0px 0px 40px rgba(236, 72, 153, 0.4);
}
```

---

# 3. Images You Should Add Inside `public/`

```text
/public
   ├── Logo1.png
   ├── hero-ai.png
   ├── ai-grid.png
   ├── bg-gradient.png
```

---

# 4. Editable Content Area

Everything is now editable from:

```javascript
const websiteContent = {

}
```

You can easily:

* Change texts
* Change services
* Change projects
* Update links
* Add new cards
* Update buttons
* Add portfolio projects
* Change animations
* Add images later

WITHOUT touching UI structure.

---

# 5. Install & Run

```bash
npm install
npm run dev
```

---

# 6. Recommended Next Upgrades

You can later add:

* Framer Motion animations
* AI chatbot popup
* Dynamic portfolio CMS
* Contact form backend
* Calendly integration
* AI background particles
* Testimonials section
* Case studies section
* Video showcase section
* Blog system
* Dark/Light mode

---

# 7. MagicSchool Style Improvements Added

✔ Better spacing
✔ Better gradients
✔ Better card layouts
✔ Better typography
✔ Startup style hero section
✔ Sticky navbar
✔ Floating glow effects
✔ Animated hover cards
✔ Modern AI company feel
✔ Better conversion flow
✔ Better CTA buttons
✔ Portfolio showcase layout
✔ Modern AI branding
