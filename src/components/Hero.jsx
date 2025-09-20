import { useEffect, useRef } from "react";
import './Hero.css';
import profilePic from "../assets/Page1.jpg";
import resumeFile from "../assets/Resume.pdf";

export default function Hero() {
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!window.VANTA) return;
    window.VANTA.NET({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 600.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x38bdf8,
      backgroundColor: 0x0f0f0f,
    });
  }, []);

  return (
    <section ref={vantaRef} className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Hi, I'm <span>Mohammed Ashik</span>
            </h1>
            <p>
              Designed and developed Python applications with PostgreSQL databases, and REST APIs using Flask and Django
            </p>

            
            {/* Resume Buttons */}
            <div className="hero-buttons">
              <a href={resumeFile} target="_blank" rel="noopener noreferrer" className="hero-btn resume-btn">
                📄 View Resume
              </a>
              <a href={resumeFile} download className="hero-btn resume-btn download-btn">
                ⬇️ Download Resume
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="hero-img">
            <img src={profilePic} alt="profile" />
          </div>
        </div>
      </div>
    </section>
  );
}
