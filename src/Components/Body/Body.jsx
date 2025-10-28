import "./Body.css"
import React from "react"

export default function Body() {
  return (
    <section className="body-section" id="home">
      <div className="body-container">
        {/* Left Content */}
        <div className="body-left">
          <div className="greeting">
            <span className="greeting-text">Hello, I'm</span>
          </div>
          <h1 className="name-title">MinaseTaye</h1>
          <p className="profession">Frontend Developer</p>

          {/* Skills/Services Grid */}
          <div className="skills-grid">
            <div className="skill-card">
              <h3>Skills</h3>
              <div className="Skills">
                <span className="Skill">Front-end</span>
                <span className="Skill">Web Development</span>
                <br></br>
                <span className="Skill">Analytics</span>
              </div>
            </div>
            <div className="skill-card">
              <h3>Projects</h3>
              <div className="project-preview">
                <div className="preview-box">Netflic-clone,Amazon-clone,Evangadi-Forum..</div>
              </div>
            </div>
            <div className="skill-card">
              <h3>About</h3>
              <p className="about-text">
                Junior Frontend Developer with a passion for growing and learning in the field of web development.
              </p>
            </div>
          </div>
        </div>

        {/* Right Content - Image Placeholder */}
        <div className="body-right">
          <div className="image-placeholder">
            <div className="placeholder-content">
              <span className="placeholder-text">
                <img src="../../assets/images/pro-Photoroom.png" alt="MinaseTaye - Frontend Developer" />

              </span>
              <div className="red-accent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
