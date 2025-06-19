import React from 'react'

export default function Projects() {
  const projects = [
    {
      name: "Insights AI",
      desc: "Query your database with natural language, no SQL required. Built using Streamlit, LangChain, Postgres.",
      link: "https://github.com/gaurisharan/insights-local-ai"
    },
    {
      name: "RAG Document Chat Assistant",
      desc: "A RAG App that answers questions using content from uploaded PDFs. Built with LangChain, Pinecone, MistralAI, HuggingFace.",
      link: "https://github.com/gaurisharan/RAG-Advanced"
    },
    {
      name: "Hindi Text-to-Speech",
      desc: "Real-time Hindi TTS app using Bark + HuggingFace transformers.",
      link: "https://huggingface.co/spaces/gauri-sharan/tts-bark-test"
    },
    {
      name: "LLM Chatbot",
      desc: "Gradio chatbot powered by Meta LLaMA 3.1, scalable for client use.",
      link: "https://huggingface.co/spaces/gauri-sharan/llama3.1_groq"
    },
    {
      name: "Breast Cancer Prediction",
      desc: "Flask-based app using classification models to predict tumor malignancy.",
      link: "https://github.com/gaurisharan/Cancer-Tumour-Check-App"
    },
    {
      name: "EDA Application",
      desc: "Streamlit-based tool to perform quick Exploratory Data Analysis on CSVs.",
      link: "https://github.com/gaurisharan/EDA-App"
    }
  ]
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="mb-2">{p.desc}</p>
            <a href={p.link} className="text-blue-600 underline" target="_blank">View Project</a>
          </div>
        ))}
      </div>
    </div>
  )
}