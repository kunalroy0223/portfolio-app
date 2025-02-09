import React from 'react';
import '../styles/Footer.css'; 

const Footer = () => {
  return (
    <footer>
      <div className="grid-container">
        <div className="footer-container">
          <div className="foot-container logo-container">
            <a href="#Home">
              <img src="../images/Logo.png" alt="inhub-logo" className="foot-logo" height="50px" />
            </a>
            <p className="address">
              <img src="../images/map.png" alt="location" height="15px" />
              Siliguri, West Bengal
            </p>
          </div>

          <div className="foot-container quick-links">
            <div className="title">Quick Links</div>
            <ul>
              <li>
                <a href="#Home">
                  <img src="../images/right.png" alt="arrow" height="15px" />
                  Home
                </a>
              </li>
              <li>
                <a href="#About">
                  <img src="../images/right.png" alt="arrow" height="15px" />
                  About
                </a>
              </li>
              <li>
                <a href="#Skills">
                  <img src="../images/right.png" alt="arrow" height="15px" />
                  Skills
                </a>
              </li>
              <li>
                <a href="#Education">
                  <img src="../images/right.png" alt="arrow" height="15px" />
                  Education
                </a>
              </li>
              <li>
                <a href="#Projects">
                  <img src="../images/right.png" alt="arrow" height="15px" />
                  Projects
                </a>
              </li>
              <li>
                <a href="#Experience">
                  <img src="../images/right.png" alt="arrow" height="15px" />
                  Experience
                </a>
              </li>
              <li>
                <a href="#Contact">
                  <img src="../images/right.png" alt="arrow" height="15px" />
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="foot-container social-links">
            <div className="title">Contact</div>
            <div className="contact">
              <a href="mailto:kunal.r.0223@inspiria.edu.in">
                <img src="../images/email.png" alt="email-icon" height="30px" />
                kunal.r.0223@inspiria.edu.in
              </a>
              <a href="tel:+91629884961">
                <img src="../images/phone.png" alt="phone-icon" height="30px" />
                +91 7063080322
              </a>
            </div>
            <div className="social-icons">
              <a href="https://github.com/kunalroy0223">
                <img src="../images/github.png" alt="Github" height="30px" />
              </a>
              <a href="https://www.instagram.com/kunal_166/profilecard/?igsh=Nm93ZjVvcTYxYTUx">
                <img src="../images/instagram.png" alt="Instagram" height="30px" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100093987552504&mibextid=ZbWKwL">
                <img src="../images/facebook.png" alt="Facebook" height="30px" />
              </a>
              <a href="https://www.linkedin.com/in/kunal-roy-09027027b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <img src="../images/linkedin.png" alt="LinkedIn" height="30px" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <p>&copy; Kunal Roy. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
