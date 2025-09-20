import './TechStack.css';
import reactIcon from "../assets/react.png";
import jsIcon from "../assets/JavaScript.png";
import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css.png";
import gitIcon from "../assets/git.png";
import pythonIcon from "../assets/python.png";
import postgresIcon from "../assets/postgresql.png";
import agileIcon from "../assets/agile.png";
import githubIcon from"../assets/github.png";


const techs = [
  { name: 'React', icon: reactIcon },
  { name: 'JavaScript', icon: jsIcon },
  { name: 'HTML5', icon: htmlIcon },
  { name: 'CSS3', icon: cssIcon },
  { name: 'Git', icon: gitIcon },
  { name: 'Python', icon: pythonIcon },
  { name: 'PostgreSQL', icon: postgresIcon },
  { name: 'Agile' , icon: agileIcon},
  { name: 'Github' , icon: githubIcon},
  
];

export default function TechStack() {
  return (
    <section className="tech-section">
      <h2 className="tech-heading">Tech Stack</h2>

      {/* Floating particles behind tech */}
      <div className="tech-particles">
        {[...Array(20)].map((_, i) => (
          <span key={i} className="tech-particle"></span>
        ))}
      </div>

      <div className="tech-grid">
        {techs.map((tech) => (
          <div className="tech-item" key={tech.name} title={tech.name}>
            <img src={tech.icon} alt={tech.name} />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
