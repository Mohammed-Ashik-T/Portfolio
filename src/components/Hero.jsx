import { useEffect, useRef } from "react";
import './Hero.css';

export default function Hero() {
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!window.VANTA) return;
    window.VANTA.NET({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 600.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x38bdf8,
      backgroundColor: 0x0f0f0f
    });
  }, []);

  return (
    <section ref={vantaRef} className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi, I'm <span>Mohammed Ashik</span></h1>
            <p>I build stunning web applications using React and modern technologies. Let's create something amazing.</p>
            <a href="#contact" className="hero-btn">Contact Me</a>
          </div>
          <div className="hero-img">
            <img src="/page1.jpg" alt="profile" />
          </div>
        </div>
      </div>
    </section>
  );
}
