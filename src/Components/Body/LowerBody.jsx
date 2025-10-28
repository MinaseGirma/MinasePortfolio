import React from "react"

import "./LowerBody.css"

export default function LowerBody() {
  // since its simple to create and manage datas here directly instead of fetching from an API or external file
  //for certifications, education, skills, and abilities
  const certifications = [
    { id: 1, name: "Python for Everybody", issuer: "Coursera", year: "2023" },
    { id: 2, name: "Data Analysis with Python", issuer: "Kifiya", year: "2025" },
  ]

  const education = [
    { id: 1, degree: "Mechanical Engineering", school: "Mekelle University", year: "2022" },
    { id: 2, degree: "Degree Name", school: "School/University", year: "2024" },
  ]

  const skills = ["React", "JavaScript", "CSS", "HTML", "Web Design"]

  const abilities = [
    "Problem Solving",
    "Team Collaboration",
    "Project Management",
    "Adaptability",
    "Performance Optimization",
    
  ]

  return (
    <section className="lower-body-section" id="about">
      <div className="lower-body-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-grid">
          {/* Certifications */}
          <div className="about-card">
            <div className="card-header">
              <h3 className="card-title">Certifications</h3>
              <span className="card-icon">🏆</span>
            </div>
            <div className="card-content">
              {certifications.map((cert) => (
                <div key={cert.id} className="item">
                  <p className="item-name">{cert.name}</p>
                  <p className="item-meta">
                    {cert.issuer} • {cert.year}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="about-card">
            <div className="card-header">
              <h3 className="card-title">Education</h3>
              <span className="card-icon">🎓</span>
            </div>
            <div className="card-content">
              {education.map((edu) => (
                <div key={edu.id} className="item">
                  <p className="item-name">{edu.degree}</p>
                  <p className="item-meta">
                    {edu.school} • {edu.year}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="about-card">
            <div className="card-header">
              <h3 className="card-title">Skills</h3>
              <span className="card-icon">⚙️</span>
            </div>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Abilities */}
          <div className="about-card">
            <div className="card-header">
              <h3 className="card-title">Abilities</h3>
              <span className="card-icon">💡</span>
            </div>
            <div className="abilities-list">
              {abilities.map((ability, index) => (
                <div key={index} className="ability-item">
                  <span className="ability-dot"></span>
                  <span className="ability-text">{ability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
