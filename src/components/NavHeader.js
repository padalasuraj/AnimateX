import React from "react";
import "./NavHeader.css";

const NavHeader = () => {
  return (
    <header className="nav-header">
      <div className="nav-container">
        <div className="logo">
          <span>AnimateX</span>
        </div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#schedule">Source</a>
          <a href="#mentors">Elements</a>
          <a href="#events">Showcase</a>
          <a href="#faqs">Contact</a>
        </nav>

        <a href="https://padalasuraj.netlify.app/" className="author-button">
          Developer
        </a>
      </div>
    </header>
  );
};

export default NavHeader;
