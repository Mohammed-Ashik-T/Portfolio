import './Contact.css';

export default function Contact() {
  return (
    <section className="contact-section">
      <h2>Contact Me</h2>
      <p>Feel free to reach out for collaborations, projects, or just to say hi!</p>

      {/* Contact Info */}
      <div className="contact-info">
        <a href="mailto:your.email@example.com">✉ ashikchamp01@gmail.com</a>
        <a href="tel:+911234567890">📱 +91 12345 67890</a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">💻 GitHub</a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">🔗 LinkedIn</a>
      </div>      

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
    
  );
}

