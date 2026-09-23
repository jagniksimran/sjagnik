import React from 'react';

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <p className="footer-cta">
          Let's design something thoughtful, exchange perspectives or just discuss
          Design and Technology. Shoot me an email.
        </p>
        <a href="mailto:jagniksimran@gmail.com" className="footer-email">
          jagniksimran@gmail.com
        </a>
        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/simranjagnik/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://www.behance.net/simranjagnik1" target="_blank" rel="noopener noreferrer">
            Behance
          </a>
          <a href="https://discord.com/users/simranjagnik" target="_blank" rel="noopener noreferrer">
            Discord
          </a>
        </div>
        <p className="footer-copy">© 2024 - Simran Jagnik</p>
      </div>
    </footer>
  );
}

export default Footer;
