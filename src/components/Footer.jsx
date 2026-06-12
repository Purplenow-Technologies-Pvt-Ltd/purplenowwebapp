import "./Footer.css";

import logo from "../assets/logo-white.png";

import {
  FaLinkedinIn,
  FaYoutube,
  FaFacebookF,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {

  return (

    <footer className="footer">

      <div className="footer-container">

        {/* LEFT SECTION */}

        <div className="footer-about">

          <img
            src={logo}
            alt=""
            className="footer-logo"
          />

          <p>
            Delivering innovative engineering,
            embedded, automation and software
            solutions for modern enterprises
            with reliability and excellence.
          </p>

          <div className="footer-socials">

            <div className="social-circle">
              <FaFacebookF />
            </div>

            <div className="social-circle">
              <FaYoutube />
            </div>

            <div className="social-circle">
              <FaLinkedinIn />
            </div>

          </div>

        </div>

        {/* QUICK LINKS */}

        <div className="footer-column">

          <h3>Quick Links</h3>

          <a href="/">Home</a>
         
          <a href="/">Services</a>
          <a href="/">Solutions</a>
          <a href="/">Industries</a>

          <a href="/">Contact</a>

        </div>

        {/* SERVICES */}

        <div className="footer-column">

          <h3>Services</h3>

          <a href="/">Platform Development</a>
          <a href="/">Internet of things</a>
          <a href="/">Cybersecurity and Cloud</a>
          <a href="/">Artificial Intelligence</a>

        </div>

        {/* CONTACT */}

        <div className="footer-column footer-contact">

          <h3>Contact Us</h3>

          <div className="contact-item">

            <FaMapMarkerAlt className="contact-icon" />

            <p>
              8 The Green, Suite 15186 B Dover, DE 19901,USA
            </p>

          </div>

          <div className="contact-item">

            <FaPhoneAlt className="contact-icon" />

            <p>
              +1(408)-688-2061
            </p>

          </div>

          <div className="contact-item">

            <FaEnvelope className="contact-icon" />

            <p>
              info@purplenow.io
            </p>

          </div>

        </div>

      </div>

      {/* FOOTER BOTTOM */}

      <div className="footer-bottom">

        <p>
          © 2026 Purplenow. All rights reserved.
        </p>

        <div className="footer-bottom-links">

          <span>Privacy Policy</span>

          <span>Terms of Service</span>

          <span>Sitemap</span>

        </div>

      </div>

    </footer>
  );
}

export default Footer;