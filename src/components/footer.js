import React from 'react';
import './footer.css'; // Make sure to import the CSS file
import { Link } from 'react-router-dom';
import logo from '../assets/logo-main.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Organization Info */}
          <div className="org-section">
            <div className="logo-container">
              <div className="footer-logo">
                <img src={logo} alt="Logo" className="logo-img" />
              </div>
            </div>
            <p className="org-description">
              The STEM Station is a youth-led NGO dedicated to bridging the gap between curiosity and opportunity for underprivileged children. Through crowdfunding, it provides science kits and fosters a passion for STEM by creating hands-on learning experiences for students.
            </p>
          </div>

          {/* Contact Information */}
          <div className="contact-info">
            <h3 className="footer-heading">Contact</h3>
            <p>Pune, Maharashtra 411045</p>
            <p>Phone: 9082176877</p>
           {/* <p>Email: info@stemstation.org</p>*/}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
            <li><Link to="/" className="footer-link">Home</Link></li>
              <li><a href="/about" className="footer-link">About Us</a></li>
              <li><a href="/what-we-do" className="footer-link">What we did</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="footer-heading">Social Media</h3>
            <div className="social-links">
            <a href="https://www.instagram.com/thestemstation?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="footer-link">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram" className="social-icon" />
                Instagram
              </a>
             {/* <a href="#" className="footer-link">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" class="social-icon">
              </img>Facebook
              </a>
              
              <a href="#" className="footer-link">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" class="social-icon">
</img>
                LinkedIn
              </a>
              <a href="#" className="footer-link">
              <img src="https://upload.wikimedia.org/wikipedia/en/6/60/Twitter_Logo_as_of_2021.svg" alt="Twitter" class="social-icon">
              </img>Twitter
              </a>*/}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p className="copyright">© 2025 Stem Station. All rights reserved.</p>
          <div className="certifications">
            <div className="cert-badge"></div>
            <div className="cert-badge"></div>
            <div className="cert-badge"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
