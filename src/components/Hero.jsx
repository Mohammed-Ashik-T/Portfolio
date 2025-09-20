import profilePic from "../assets/Page1.jpg";
import resumeFile from "../assets/Resume.pdf";
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-box">
        <div className="hero-text">
          <h2>Hi, I'm</h2>
          <h1>Mohammed Ashik</h1>
          <p>
            Designed and developed full-stack applications using Python, Flask, Django, React, and PostgreSQL.
          </p>

          <div className="hero-buttons">
            <a href={resumeFile} target="_blank" rel="noopener noreferrer" className="hero-btn">
              📄 View Resume
            </a>
            <a href={resumeFile} download className="hero-btn download-btn">
              ⬇️ Download Resume
            </a>
          </div>
        </div>

        <div className="hero-img">
          <img src={profilePic} alt="profile" />
        </div>
      </div>
    </section>
  );
}
