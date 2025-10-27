import React from "react"

import "./footer.css"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const handleCVDownload = () => {
    // Replace with your actual CV file path
    const cvLink = document.createElement("a")
    cvLink.href = "/cv.pdf" // Update this path to your CV file
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
                    your.email@example.com
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <div className="contact-details">
                  <p className="contact-label">Phone</p>
                  <a href="tel:+1234567890" className="contact-link">
                    +1 (234) 567-890
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
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <span className="social-icon">in</span>
                <span className="social-text">LinkedIn</span>
              </a>
              <a
                href="https://github.com/yourprofile"
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
