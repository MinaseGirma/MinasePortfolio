"use client"

import "./middlebody.css"

export default function MiddleBody() {
  const projects = [
    {
      id: 1,
      name: "Project Name",
      description: "Brief project description",
      github: "https://github.com",
      image: "placeholder",
    },
    {
      id: 2,
      name: "Project Name",
      description: "Brief project description",
      github: "https://github.com",
      image: "placeholder",
    },
    {
      id: 3,
      name: "Project Name",
      description: "Brief project description",
      github: "https://github.com",
      image: "placeholder",
    },
  ]

  return (
    <section className="middle-body-section" id="projects">
      <div className="middle-body-container">
        {/* Experience Section */}
        <div className="experience-section">
          <div className="section-header">
            <h2 className="section-title">Experience & Journey</h2>
            <div className="title-underline"></div>
          </div>

          <div className="experience-content">
            <p className="experience-paragraph">
              I'm a passionate frontend developer with a keen eye for creating beautiful, functional web experiences.
              With expertise in modern web technologies and a commitment to clean code, I transform ideas into
              interactive digital solutions. My journey in web development has been driven by curiosity and a desire to
              build products that make a difference.
            </p>
          </div>
        </div>

        {/* Projects Section */}
        <div className="projects-section">
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
            <div className="title-underline"></div>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image-placeholder">
                  <span className="placeholder-icon">📸</span>
                </div>
                <div className="project-info">
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                    View on GitHub →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
