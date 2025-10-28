import React from "react"

import "./Footer.css"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const handleCVDownload = () => {
    
    const cvLink = document.createElement("a")
    cvLink.href = "/assets/CV/MinaseCv.pdf" 
    cvLink.download = "MinaseTaye-CV.pdf"
    cvLink.click()
  }

  return (
    <footer className="footer-section" id="footer">
      <div className="footer-container">
        {/* Contact Section */}
        <div className="footer-content">
          <div className="contact-section">
            <h3 className="footer-title">Get In Touch</h3>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div className="contact-details">
                  <p className="contact-label">Email</p>
                  <a href="mailto:your.email@example.com" className="contact-link">
                    minasetaye5@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <div className="contact-details">
                  <p className="contact-label">Phone</p>
                  <a href="tel:+420727924113" className="contact-link">
                    +420 727 924 113
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social & Download Section */}
          <div className="social-section">
            <h3 className="footer-title">Connect & Download</h3>
            <div className="social-links">
              <a
                href="http://www.linkedin.com/in/minase-girma-taye-8452b224a"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <span className="social-icon">in</span>
                <span className="social-text">LinkedIn</span>
              </a>
              <a
                href="https://github.com/MinaseGirma"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <span className="social-icon">⚙️</span>
                <span className="social-text">GitHub</span>
              </a>
              <button onClick={handleCVDownload} className="social-link cv-download">
                <span className="social-icon">📄</span>
                <span className="social-text">Download CV</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-text">
            Designed & Built by <span className="highlight">MinaseTaye</span> © {currentYear}
          </p>
          <p className="footer-subtext">Crafting beautiful web experiences</p>
        </div>
      </div>

      <div className="footer-fade"></div>
    </footer>
  )
}
