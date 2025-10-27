import React from "react"

import "./body.css"

export default function Body() {
  return (
    <section className="body-section" id="home">
      <div className="body-container">
        {/* Left Content */}
        <div className="body-left">
          <div className="greeting">
            <span className="wave">👋</span>
            <span className="greeting-text">Hey, I'm</span>
          </div>
          <h1 className="name-title">MinaseTaye</h1>
          <p className="profession">Frontend Developer</p>
          <p className="location">From Ethiopia</p>

          {/* Skills/Services Grid */}
          <div className="skills-grid">
            <div className="skill-card">
              <h3>Services</h3>
              <div className="skill-icons">
                <span className="icon">💻</span>
                <span className="icon">🎨</span>
                <span className="icon">⚡</span>
              </div>
            </div>
            <div className="skill-card">
              <h3>Projects</h3>
              <div className="project-preview">
                <div className="preview-box"></div>
              </div>
            </div>
            <div className="skill-card">
              <h3>About</h3>
              <p className="about-text">Creative developer passionate about building amazing web experiences</p>
            </div>
          </div>
        </div>

        {/* Right Content - Image Placeholder */}
        <div className="body-right">
          <div className="image-placeholder">
            <div className="placeholder-content">
              <span className="placeholder-text">Your Profile Image</span>
              <div className="red-accent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
