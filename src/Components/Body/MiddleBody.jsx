
import "./middlebody.css"
import React from "react"
import { useState, useEffect } from "react"
import projects from "./projects.js"

export default function MiddleBody() {
  const [filteredProjects, setFilteredProjects] = useState(projects)

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
              I’m a passionate Frontend Developer with hands-on experience building and styling modern web applications. While taking web development courses, I’ve worked on diverse projects including an Apple landing page, Amazon clone, Netflix clone, and Evangadi Forum. Each project has helped me strengthen my skills in React, JavaScript, HTML, CSS, and responsive design. I’m eager to continue learning, growing, and applying my skills to create interactive and visually appealing user experiences that bring ideas to life.
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
                  <span className="placeholder-icon"></span>
                </div>
                <div className="project-info">
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                    View on GitHub OR Live Demo →
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
