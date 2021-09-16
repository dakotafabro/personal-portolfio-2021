import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Navigation.css";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark-new shadow">
        <div class="container">
          <Link class="navbar-brand" to="/">
            <img
              className="nav-logo"
              src="/images/df-2021-logo.png"
              alt="Dakota Fabro logo"
            />
            Dakota Fabro
          </Link>

          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active-new" : ""
                }`}
              >
                <Link class="nav-link" to="/" title="Home">
                  <i class="fas fa-home"></i>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/about" ? "active-new" : ""
                }`}
              >
                <Link class="nav-link" to="/about" title="About Me">
                  <i class="fas fa-address-card"></i>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/contact" ? "active-new" : ""
                }`}
              >
                <Link class="nav-link" to="/contact" title="Contact">
                  <i class="fas fa-envelope"></i>
                </Link>
              </li>

              <li
                class={`nav-item  ${
                  props.location.pathname === "/work" ? "active-new" : ""
                }`}
              >
                <Link class="nav-link" to="/work" title="Work">
                  <i class="fas fa-briefcase"></i>
                </Link>
              </li>

              <li
                class={`nav-item  ${
                  props.location.pathname === "/blog" ? "active-new" : ""
                }`}
              >
                <Link class="nav-link" to="/blog" title="Blog">
                  <i class="fas fa-blog"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
