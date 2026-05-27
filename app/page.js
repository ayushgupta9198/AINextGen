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
    { number: "5+", label: "AI Domains" },
    { number: "20+", label: "AI Solutions" },
    { number: "100%", label: "Scalable Systems" }
  ],

  services: [
    {
      title: "Enterprise GenAI",
      desc: "Production-grade GenAI systems for enterprises with scalable architecture and LLM orchestration."
    },
    {
      title: "Voice AI Assistants",
      desc: "Real-time voice bots using TTS/STT and conversational AI pipelines."
    },
    {
      title: "RAG Pipelines",
      desc: "Enterprise retrieval systems with hybrid search and contextual memory."
    },
    {
      title: "Multi-Agent AI",
      desc: "Advanced AI orchestration using autonomous agents and workflows."
    },
    {
      title: "AI Automation",
      desc: "Workflow automation using LLMs, APIs and enterprise integrations."
    },
    {
      title: "AI Consulting",
      desc: "Helping businesses adopt AI strategies and scale products faster."
    }
  ],

  projects: [
    {
      title: "Voice AI Customer Support",
      desc: "Real-time voice chatbot with interruption handling and knowledge base integration.",
      tech: ["LLM", "TTS", "STT", "RAG"]
    },
    {
      title: "Enterprise RAG System",
      desc: "Scalable retrieval augmented generation pipeline with contextual memory.",
      tech: ["Vector DB", "Embeddings", "LLM"]
    },
    {
      title: "AI Automation Platform",
      desc: "Workflow automation platform using agents and enterprise AI integrations.",
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

      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/Logo1.png"
              alt="AINextGen"
              className="w-14 h-14 rounded-3xl border border-white/20 object-cover"
            />

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
          </div>
        </div>
      </nav>

      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-32 grid lg:grid-cols-2 gap-16 items-center">
        <div className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
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
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 font-semibold hover:scale-105 transition-all duration-300"
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
        </div>

        <div className="relative flex justify-center">
          <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl p-10 rounded-[40px]">
            <img
              src="/Logo1.png"
              alt="AINextGen"
              className="w-[320px] max-w-full object-cover animate-pulse"
            />
          </div>
        </div>
      </section>

      <section id="services" className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
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
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-pink-500 to-purple-500 mb-8"></div>

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
    </main>
  );
}
