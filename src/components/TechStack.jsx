import { useEffect, useRef } from "react";
import './TechStack.css';

// Import images from src/assets
import reactIcon from "../assets/react.png";
import jsIcon from "../assets/JavaScript.png";
import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css.png";
import gitIcon from "../assets/git.png";
import pythonIcon from "../assets/python.png";
import postgresIcon from "../assets/postgresql.png";
import agileIcon from "../assets/agile.png";
import githubIcon from "../assets/github.png";

const techs = [
  { name: 'React', icon: reactIcon },
  { name: 'JavaScript', icon: jsIcon },
  { name: 'HTML5', icon: htmlIcon },
  { name: 'CSS3', icon: cssIcon },
  { name: 'Python', icon: pythonIcon },
  { name: 'PostgreSQL', icon: postgresIcon },
  { name: 'Agile', icon: agileIcon },
  { name: 'Git', icon: gitIcon },
  { name: 'GitHub', icon: githubIcon },
];

export default function TechStack() {
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
    <section ref={vantaRef} className="tech-section">
      <h2 className="tech-heading">Tech Stack</h2>
      <div className="tech-grid">
        {techs.map((tech) => (
          <div className="tech-item" key={tech.name}>
            <div className="glow-wrapper" title={tech.name}>
              <img src={tech.icon} alt={tech.name} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
