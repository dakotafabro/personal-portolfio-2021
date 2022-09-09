import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer fixed-bottom">
      <div className="container">
        <p className="text-center text-white footer-content">
          <span className="d-flex flex-row justify-content-center social-media-icons">
            <a
              className="nav-link d-flex justify-content-center"
              href="https://www.linkedin.com/in/dakotafabro/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              className="nav-link d-flex justify-content-center"
              href="https://github.com/dakotafabro"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              className="nav-link d-flex justify-content-center"
              href="https://www.instagram.com/kodingkoda/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </span>
          Copyright &copy; Dakota Fabro 2022
          <br />
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
