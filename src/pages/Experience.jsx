import React from 'react'

export default function Experience() {
  const exp = [
    {
      company: "National Payments Corporation of India (NPCI)",
      role: "Data Science Intern",
      duration: "Mar 2025 - August 2025",
      description: "Built LLM to SQL translator, won SolveX hackathon. Created Reports for Google Pay, PhonePe, Billdesk, etc."
    },
    {
      company: "IIT Roorkee",
      role: "AI Research Intern",
      duration: "Dec 2024 - Feb 2025",
      description: "Worked on RAG, Vision Language Models, and finetuning at PARIMAL Labs."
    },
    {
      company: "Multiple Remote Orgs",
      role: "Independent Projects",
      duration: "Oct 2022 - Present",
      description: "Automated AWS infra using Boto3, Docker, and CI/CD pipelines. Trained LLMs with RLHF, focused on Python/SQL code generation. Worked on Fulldtack end-to-end projects with Django, Python etc."
    },
    {
      company: "NASSCOM",
      role: "Data Analyst Intern",
      duration: "Nov 2023 - May 2024",
      description: "Built analytics dashboards and insights for FutureSkills Prime."
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
