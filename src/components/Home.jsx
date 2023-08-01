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
              src="https://i.imgur.com/iCqSY3Z.png"
              alt="Dakota Fabro"
            />
          </div>
          <div class="col-sm-7">
            <h1 class="font-weight-light">
              Hi! I'm Dakota Fabro 👋🏽 🏳️‍🌈 🇵🇭
              <a
                href="https://www.mypronouns.org/what-and-why"
                title="What Are Pronouns? Why Do They Matter?"
                target="_blank"
                rel="noreferrer"
              >
                <em>
                  <small>(they/them)</small>
                </em>
              </a>
            </h1>
            <p className="mb-5">
              I enjoy creating web tools that are useful and responsive to the
              heightened demands placed on organizers, creators, workers, and
              learners.
              <br />
              <br />
              I specialize in the PERN, FERN, and MERN tech stacks, but am
              dedicated to learning new technology as curiosity drives me.
              Although I have fullstack experience, I have a preference for
              working on the backend.
              <hr />
              <strong>💻 Frontend:</strong> ReactJS, React Native, HTML, CSS,
              Javascript, Bootstrap
              <br />
              <br />
              <strong>🔐 Backend:</strong> TypeScript, Firebase, MongoDB,
              PostgreSQL, Express, Node, Heroku, Jest
              <br />
              <br />
              <a
                className="m-1"
                href="https://drive.google.com/file/d/1XdEzMPjcyjn96KvNQ_ipfqofNVA5P-JH/view?usp=sharing"
                alt="Download/View Resume"
                target="_blank"
                rel="noreferrer"
              >
                <button className="download-resume">View Resume</button>
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
                <button className="m-1">Skills + Work</button>
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
