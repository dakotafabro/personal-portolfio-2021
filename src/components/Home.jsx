import React from "react";
import "./Home.css";
import { Link, withRouter } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center mt-5 mb-5">
          <div class="col-sm-5">
            <img
              class="img-fluid headshot shadow m-3"
              src="/images/headshot1.jpg"
              alt="Dakota Fabro"
            />
          </div>
          <div class="col-sm-7">
            <h1 class="font-weight-light">
              Dakota Fabro{" "}
              <a
                href="https://www.mypronouns.org/what-and-why"
                title="What Are Pronouns? Why Do They Matter?"
                target="_blank"
                rel="noreferrer"
              >
                (they/she)
              </a>
            </h1>
            <h3>STEAM Educator & Front-End Developer</h3>
            <h5>
              <em>Based in Los Angeles, CA</em> 🇺🇸 🇵🇭
            </h5>
            <p className="mb-3">
              As a Google Certified Educator, I understand the importance of
              creating web apps that are engaging, intuitive, and useful for
              assessing student growth.
              <br />
              <br />
              My aim as a front-end developer is to help educators and students
              reach their full potential within the classroom--all while being
              responsive to the heightened demands placed on classroom educators
              during the current pandemic.
              <br />
              <br />
              <Link to="/contact" title="Contact">
                <button>Contact Me</button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Home);
