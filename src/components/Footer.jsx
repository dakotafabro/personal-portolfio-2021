import React from "react";
import "./css/Footer.css";

function Footer() {
  return (
    <div className="Footer fixed-bottom">
      <div className="container">
        <p className="text-center footer-content">
          <span className="d-flex flex-row justify-content-center social-media-icons">
            <a
              className="nav-link d-flex justify-content-center footer-icon"
              href="https://www.linkedin.com/in/dakotafabro/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              className="nav-link d-flex justify-content-center footer-icon"
              href="https://github.com/dakotafabro"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              className="nav-link d-flex justify-content-center footer-icon"
              href="https://www.instagram.com/kodingkoda/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </span>
          &copy; Dakota Fabro {new Date().getFullYear()} ||{" "}
          <small>
            <em>
              Built with{" "}
              <a
                className="footer-link"
                href="https://reactjs.org/"
                target="_blank"
                rel="noreferrer"
              >
                ReactJS
              </a>
            </em>
          </small>
        </p>
      </div>
    </div>
  );
}

export default Footer;
