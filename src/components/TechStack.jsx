import { useEffect, useRef } from "react";
import './TechStack.css';

const techs = [
  { name: 'React', icon: '/logos/react.png' },
  { name: 'JavaScript', icon: '/logos/JavaScript.png' },
  { name: 'HTML5', icon: '/logos/html.png' },
  { name: 'CSS3', icon: '/logos/css.png' },
  { name: 'Node.js', icon: '/logos/nodejs.svg' },
  { name: 'Git', icon: '/logos/git.svg' },
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
      minHeight: 600.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x38bdf8,
      backgroundColor: 0x0f0f0f
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
