import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about near-top">
      <div className="container">
        <div className="row align-items-center my-5">
          <h1 className="font-weight-light text-center">About</h1>
          <div className="col-sm-5">
            <img
              className="img-fluid shadow mb-4 mb-lg-0"
              src="/images/lightbulb-photo.jpg"
              alt=""
            />
          </div>

          <div className="col-sm-7">
            <h2 className="text-start">Professional History</h2>
            <p>
              I've worn many hats. From freelance photographer, to educator, to
              front-end developer--The common thread has always been following
              the small sparks of creativity, the desire to streamline
              processes, and the desire to make things better.
              <br />
              <br />
              <button>See Resume</button>
            </p>
          </div>

          <div className="row align-items-center my-5 near-footer">
            <div className="col-sm-7">
              <h2 className="text-end">Next Steps</h2>
              <p className="text-end">
                I have transitioned from the elementary classroom toward the
                tech industry in order to make education more equitable and
                accessible. Through the use of responsive and effective
                front-end development, the classroom can be truly transformed to
                respond to the ways students learn today.
                <br />
                <br />
                <button>Let's Connect</button>
              </p>
            </div>

            <div className="col-sm-5">
              <img
                className="img-fluid shadow mb-4 mb-lg-0"
                src="/images/planning-photo.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
