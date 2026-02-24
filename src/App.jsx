import React from "react";
import "./styles/style.css";
import LiquidEther from "./components/LiquidEther";
import { TypeAnimation } from "react-type-animation";
import MagicBento from "./components/MagicBento";
import { BlurText } from "./components/BlurText";
import GooeyNav from "./components/GooeyNav";
import Footer from "./components/Footer";
import Orb from "./components/Orb";

function App() {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* LiquidEther arka plan */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      <GooeyNav />

      {/* Hero */}
      <div
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 10,
          color: "white",
          textAlign: "center",
        }}
      >
        <TypeAnimation
          sequence={["Hi, Im Hilal", 2000, "Frontend Developer", 2000]}
          speed={50}
          style={{ fontSize: "2.5rem", fontWeight: "bold" }}
          repeat={Infinity}
        />
      </div>

      {/* Hakkımda Bölümü */}
      <div className="about-section">
        <div className="about-grid">
          {/* Sol taraf - Yazı */}
          <div className="about-text">
            <h2>Whoami</h2>
            <p>
              I’m Hilal Kızılcık, a frontend developer who enjoys designing
              modern and user-friendly interfaces. I build projects using HTML,
              CSS, JavaScript, and React.js.
            </p>
            <a href="https://www.linkedin.com/in/hilalkizilcik/" className="contact-btn">
              Contact Me
            </a>
          </div>

          {/* Sağ taraf - Fotoğraf */}
          <div className="about-photo">
            <img src="src/assets/img/me1.jpeg" alt="Hilal Kızılcık" />
          </div>
        </div>
      </div>

      {/* Hizmetlerim */}
      <div
        style={{
          position: "relative",
          zIndex: 15,
          marginBottom: "2rem",
          textAlign: "center",
        }}
      >
        <BlurText
          text="Services"
          delay={0.2}
          animateBy="words"
          direction="top"
          style={{ fontSize: "2.5rem", fontWeight: "bold", color: "white" }}
        />
      </div>

      <div style={{ position: "relative", zIndex: 15, padding: "4rem 2rem" }}>
        <MagicBento />
      </div>

      {/* Tech Stack Bölümü */}
      <div className="tech-section">
        <div
          style={{
            position: "relative",
            zIndex: 15,
            marginBottom: "2rem",
            textAlign: "center",
          }}
        >
          <BlurText
            text="Tech Stack"
            delay={0.2}
            animateBy="words"
            direction="top"
            style={{ fontSize: "2.5rem", fontWeight: "bold", color: "white" }}
          />
        </div>
        <div className="tech-grid">
          {[
            "HTML",
            "CSS",
            "Tailwindcss",
            "Sass",
            "Bootstrap",
            "JavaScript",
            "React.js",
            "C#",
            "MySQL",
            ".Net",
            "PHP",
          ].map((tech, index) => (
            <div key={index} className="tech-card">
              {tech}
            </div>
          ))}
        </div>
      </div>
      {/* Projelerim Bölümü */}
      <div className="projects-section">
        <div className="projects-title">
          <BlurText
            text="Projects"
            delay={0.2}
            animateBy="words"
            direction="top"
            style={{ fontSize: "2.5rem", fontWeight: "bold", color: "white" }}
          />
        </div>

        <div className="projects-grid">
          {[
            {
              title: "Utopia Fitness",
              desc: "A responsive corporate website developed for a fitness brand, focusing on modern UI and user experience.",
              tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP"],
              img: "src/assets/img/utopia-fitness.png",
              link: "https://utopiafitness.com.tr/",
            },
            {
              title: "Adım Patent",
              desc: "A modern and professional corporate website designed to represent a patent consultancy brand.",
              tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
              img: "src/assets/img/adim-patent.png",
              link: "https://adimpatent.com.tr/tr",
            },
            {
              title: "Home Art Plus",
              desc: "A responsive e-commerce website developed for a home decor brand, focusing on modern UI and user experience.",
              tech: ["WordPress", "Flatsome"],
              img: "src/assets/img/home-art-plus.png",
              link: "https://www.homeartplustr.com/",
            },
          ].map((proj, i) => (
            <div key={i} className="project-card">
              <img src={proj.img} alt={proj.title} className="project-img" />
              <div className="project-content">
                <h3>{proj.title}</h3>
                <p>{proj.desc}</p>

                <div className="project-tech">
                  {proj.tech.map((t, index) => (
                    <span key={index} className="project-tech-badge">
                      {t}
                    </span>
                  ))}
                </div>

                <a href={proj.link} target="_blank" rel="noopener noreferrer">
                  Live →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* İletişim Bölümü */}
      <div className="contact-section">
        <div className="contact-grid">
          {/* Sol taraf - Form */}
          <div className="contact-form">
            <h2>Contact</h2>
            <form>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="E-mail" required />
              <textarea placeholder="Our Message" rows="6" required></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>

          {/* Sağ taraf - Görsel */}
          <div className="contact-image">
            <img src="src/assets/img/mail.png" alt="İletişim Görseli" />
          </div>
        </div>
      </div>

      {/* <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div> */}

      <Footer />
    </div>
  );
}

export default App;
