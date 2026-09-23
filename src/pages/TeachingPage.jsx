import React from 'react';
import { Link } from 'react-router-dom';

function TeachingPage() {
  return (
    <div className="teaching-page">
      <section className="teaching-hero">
        <div className="teaching-hero-content">
          <p className="teaching-greeting">Hey, I'm Simran</p>
          <h1 className="teaching-title">Product Designer</h1>
          <p className="teaching-focus">
            I focus on elevating Human Interaction with technology.
          </p>
          <p className="teaching-description">
            My background in design and development allows me to bridge creative ideas,
            thoughtful design, and real-world impact through a user-focused design process.
          </p>
        </div>

        <div className="teaching-education">
          <div className="teaching-edu-item">
            <div className="edu-icon-placeholder" />
            <p>MFA Design Technology<br />Parsons School of Design, NY</p>
          </div>
          <div className="teaching-edu-item">
            <div className="edu-icon-placeholder" />
            <p>BTech Computer Science<br />NIT Kurukshetra, India</p>
          </div>
        </div>

        <div className="teaching-image">
          <div className="teaching-image-placeholder">
            <span>Photo</span>
          </div>
        </div>

        <blockquote className="teaching-quote">
          <p>
            We must design for the way people behave, not for how we would wish them to behave.
          </p>
        </blockquote>

        <Link to="/" className="btn-explore">
          Explore my work →
        </Link>
      </section>
    </div>
  );
}

export default TeachingPage;
