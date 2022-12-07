import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./css/Navigation.css";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark-new shadow fixed-top">
        <div className="container">
          <Link className="navbar-brand navbar-link-and-logo" to="/">
            <img
              className="nav-logo"
              src="https://i.imgur.com/lW20ViD.png"
              alt="Dakota Fabro logo"
            />
          </Link>

          <ul className="navbar-nav">
            <li
              className={`nav-item  ${
                props.location.pathname === "/" ? "active-new" : ""
              }`}
            >
              <Link className="nav-link" to="/" title="Home">
                <i className="fas fa-home"></i>
              </Link>
            </li>
            <li
              className={`nav-item  ${
                props.location.pathname === "/about" ? "active-new" : ""
              }`}
            >
              <Link className="nav-link" to="/about" title="About Me">
                <i className="fas fa-address-card"></i>
              </Link>
            </li>

            <li
              className={`nav-item  ${
                props.location.pathname === "/work" ? "active-new" : ""
              }`}
            >
              <Link className="nav-link" to="/work" title="Projects">
                <i className="fas fa-briefcase"></i>
              </Link>
            </li>

            {/* <li
              className={`nav-item  ${
                props.location.pathname === "/contact" ? "active-new" : ""
              }`}
            >
              <Link className="nav-link" to="/contact" title="Contact">
                <i className="fas fa-envelope"></i>
              </Link>
            </li>

            <li
              className={`nav-item  ${
                props.location.pathname === "/blog" ? "active-new" : ""
              }`}
            >
              <Link className="nav-link" to="/blog" title="Blog">
                <i className="fas fa-blog"></i>
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
