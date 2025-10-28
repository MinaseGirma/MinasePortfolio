import React from "react"

import { useState, useEffect } from "react"
import "./header.css"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  const handleContactClick = () => {
    const footerElement = document.getElementById("footer")
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo-section">
          <span className="brand-name">MinaseTaye</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={(e) => handleNavClick(e, item.href)} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        {/* Header Right Section */}
        <div className="header-right">
          <button className="btn-primary" onClick={handleContactClick}>
            Contact me
          </button>

          {/* Mobile Menu Toggle */}
          <button className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="nav-mobile">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="nav-link-mobile"
            >
              {item.label}
            </a>
          ))}
          <button className="btn-primary-mobile" onClick={handleContactClick}>
            Contact me
          </button>
        </nav>
      )}

      <div className="header-fade"></div>
    </header>
  )
}

export default Header
