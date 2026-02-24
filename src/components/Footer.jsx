import React from "react";
import { FaInstagram, FaGithub } from "react-icons/fa";
import Orb from "./Orb";
import "../styles/Orb.css";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Orb arka plan */}
      <div className="footer-orb">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>

      {/* İçerik */}
      <div className="footer-icons">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
      <p className="footer-text">Hilal Kızılcık</p>
    </footer>
  );
};

export default Footer;
