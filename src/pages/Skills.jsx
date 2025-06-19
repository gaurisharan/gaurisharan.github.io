import React from 'react'

export default function Skills() {
  const skills = ["Python", "PyTorch", "TensorFlow", "Transformers", "LangChain", "RLHF", "Streamlit", "Gradio", "SQL", "MongoDB", "Power BI", "AWS", "Boto3", "Docker", "Azure ML"]
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((s, i) => (
          <span key={i} className="bg-black text-white px-4 py-2 rounded-full">{s}</span>
        ))}
      </div>
    </div>
  )
}
