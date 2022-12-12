import React from "react";
import "../css/Footer.css";
import { footerInfo } from "../staticInfo/footerInfo";

function Footer() {
  return (
    <div className="Footer fixed-bottom">
      <div className="container">
        <p className="text-center footer-content">
          <span className="d-flex flex-row justify-content-center social-media-icons">
            {footerInfo.map((item) => {
              return (
                <a
                  className="nav-link d-flex justify-content-center footer-icon"
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className={item.icon}></i>
                </a>
              );
            })}
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
