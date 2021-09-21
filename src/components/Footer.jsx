import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <footer class="fixed-bottom">
        <div class="container">
          <p class="m-0 text-center text-white">
            <span className="d-flex flex-row justify-content-center m-0">
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
                href="https://www.instagram.com/kodingkoda/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-linkedin"></i>
              </a>
              <a
                class="nav-link d-flex justify-content-center"
                href="https://www.instagram.com/kodingkoda/"
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
    </div>
  );
}

export default Footer;
