import React, { useState } from "react";
import "../styles/GooeyNav.css";

export default function GooeyNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="gooey-nav">
      {/* Hamburger (mobil) */}
      <button
        className={`hamburger ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Menu Toggle"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Menü elemanları */}
      <ul className={`menu ${open ? "open" : ""}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
