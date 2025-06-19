import React from 'react'

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Gauri 👋</h1>
      <p className="text-xl mb-8 text-center max-w-xl">Data Scientist | 1.5+ YOE | LLMs, GenAI, NLP | Python, SQL, AWS</p>
      <div className="flex gap-4">
        <a href="https://github.com/gaurisharan" target="_blank" className="bg-white text-black px-6 py-2 rounded-full hover:scale-105 transition">GitHub</a>
        <a href="https://linkedin.com/in/gauri-sharan" target="_blank" className="bg-white text-black px-6 py-2 rounded-full hover:scale-105 transition">LinkedIn</a>
        <a href="mailto:gaurisharan.work@gmail.com" className="bg-white text-black px-6 py-2 rounded-full hover:scale-105 transition">Email</a>
      </div>
    </section>
  )
}