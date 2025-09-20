import './Roles.css'; // optional, for custom styles

export default function Roles() {
  return (
    <section className="roles-section">
      {/* Floating particles container */}
      <div className="particles">
        {[...Array(30)].map((_, i) => (
          <span key={i} className="particle"></span>
        ))}
      </div>

      <div className="roles-container">
        <h2 className="roles-heading">Roles & Responsibilities</h2>
        <ul className="roles-list">
          <li>Designed and developed Python applications and backend systems.</li>
          <li>Built and maintained PostgreSQL databases efficiently.</li>
          <li>Created REST APIs using Flask and Django for full-stack integration.</li>
          <li>Developed scalable frontend components with React (currently learning).</li>
          <li>Ensured web applications are responsive and accessible across devices.</li>
          <li>Collaborated effectively with team members following Agile methodology.</li>
          <li>Implemented version control and project management using Git and GitHub.</li>
          <li>Optimized code for performance, readability, and maintainability.</li>
        </ul>
      </div>
    </section>
  );
}
