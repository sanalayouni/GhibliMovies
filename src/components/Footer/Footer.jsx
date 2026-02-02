import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left side */}
        <div className="footer-left">
          <div className="footer-logo">B</div>
          <p className="footer-copy">© 2025</p>

          <button className="footer-btn">
            ✨ Ask AI
          </button>
        </div>

        {/* Right side */}
        <div className="footer-sections">
          {[1, 2, 3].map((_, index) => (
            <div className="footer-section" key={index}>
              <h4>Section</h4>
              <ul>
                <li>Home</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>FAQs</li>
                <li>About</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
