import React, { useState } from "react";
import "./header.css";
import logo from "../assets/logo-main.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
        <span className="logo-text">The Stem Station</span>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
        <a href="/" className="nav-link">Home</a>
        <a href="/about" className="nav-link">About Us</a>
        <a href="/what-we-do" className="nav-link">What We Did</a>
      </nav>
    </header>
  );
};

export default Header;
