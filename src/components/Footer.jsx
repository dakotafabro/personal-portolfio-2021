import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer class="fixed-bottom">
        <div class="container">
          <p class="text-center text-white footer-content">
            <span className="d-flex flex-row justify-content-center social-media-icons">
              <a
                class="nav-link d-flex justify-content-center"
                href="https://www.instagram.com/kodingkoda/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-instagram"></i>
              </a>
              <a
                class="nav-link d-flex justify-content-center"
                href="https://www.linkedin.com/in/dakotafabro/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-linkedin"></i>
              </a>
              <a
                class="nav-link d-flex justify-content-center"
                href="https://github.com/dakotafabro"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-github"></i>
              </a>
            </span>
            Copyright &copy; Dakota Fabro 2021
            <br />
            <small>
              <em>
                Built with{" "}
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                  ReactJS
                </a>
              </em>
            </small>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
