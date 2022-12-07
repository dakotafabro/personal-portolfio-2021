import React from "react";
import "../css/Home.css";
import { Link, withRouter } from "react-router-dom";

function Home() {
  return (
    <div className="home near-top">
      <div class="container">
        <div class="row align-items-center mb-5">
          <div class="col-sm-5 headshot-container">
            <img
              class="img-fluid headshot shadow"
              src="https://i.imgur.com/HMFk4ti.png"
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
            <h2>
              Software Engineer -{" "}
              <em>
                <small>Los Angeles, CA</small>
              </em>{" "}
              🇺🇸 🇵🇭
            </h2>
            <p className="mb-5">
              As a recipient of the 2022{" "}
              <a
                href="https://lesbianswhotech.org/codingscholarship/"
                target="_blank"
                rel="noreferrer"
              >
                Edie Windsor Scholarship
              </a>{" "}
              through Lesbians Who Tech, I have progressed from Education to
              Software Engineering. I am a graduate of The Grace Hopper Program
              @ Fullstack Academy in New York, NY.
              <br />
              <br />
              My aim as a software engineer is to help users reach their ideas
              by creating web tools that are useful and streamlined--all while
              being responsive to the heightened demands placed on creators,
              workers, and learners as a result of the pandemic.
              <br />
              <br />
              I specialize in the PERN and FERN tech stacks, but am dedicated to
              learning new technology as curiosity drives me.
              <hr />
              <strong>💻 Frontend:</strong> ReactJS, React Native, HTML, CSS,
              Javascript, Bootstrap
              <br />
              <br />
              <strong>🔐 Backend:</strong> Firebase, PostgreSQL, Express, Node,
              Redux, Heroku, Sequelize
              <br />
              <br />
              <a
                className="m-1"
                href="https://drive.google.com/file/d/1A9u45Voij_mqYVraP6NOrf9iN2s_x_jy/view?usp=share_link"
                alt="Download/View Resume"
                target="_blank"
                rel="noreferrer"
              >
                <button className="download-resume">Download Resume</button>
              </a>
              <a
                href="https://dot.cards/dakotafabro"
                target="_blank"
                rel="noreferrer"
                className="m-1"
              >
                <button>Contact</button>
              </a>
              <Link to="/about" title="About">
                <button className="m-1">Skills + Work History</button>
              </Link>
              <Link to="/work" title="Work">
                <button className="m-1">Projects</button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Home);
