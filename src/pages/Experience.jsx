import React from 'react'

export default function Experience() {
  const exp = [
    {
      company: "Whiteswan Identity Security",
      role: "Software Dev Engineer",
      duration: "Nov 2025 - Present",
      description: "Working on implementing security modules in MCP and A2A protocol architectures"
    },
    {
      company: "National Payments Corporation of India (NPCI)",
      role: "Data Science Trainee",
      duration: "Mar 2025 - August 2025",
      description: "Built Natural Language to SQL LLM translator, won SolveX hackathon. Created Reports for Google Pay, PhonePe, Billdesk, etc."
    },
    {
      company: "IIT Roorkee",
      role: "AI Research Junior Assistant",
      duration: "Dec 2024 - Feb 2025",
      description: "Worked on RAG, Vision Language Models, and finetuning at PARIMAL Labs. Also collaborated with IIIT Delhi on LLM projects."
    },
    {
      company: "Whiteswan Identity Security",
      role: "SDE Cloud Intern",
      duration: "Jul 2024 - Nov 2024",
      description: "Automated AWS infra using Boto3, Docker, and CI/CD pipelines."
    },
    {
      company: "NASSCOM",
      role: "Data Analyst Intern",
      duration: "Nov 2023 - May 2024",
      description: "Worked on ML and statistical analytics for FutureSkills Prime."
    },
  ]
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      {exp.map((e, i) => (
        <div key={i} className="mb-4 p-4 bg-white rounded-xl shadow">
          <h3 className="text-xl font-semibold">{e.role} @ {e.company}</h3>
          <p className="italic">{e.duration}</p>
          <p>{e.description}</p>
        </div>
      ))}
    </div>
  )
}
