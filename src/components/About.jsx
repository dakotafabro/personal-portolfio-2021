import React from "react";
import "../css/About.css";
import ResumeItem from "./ResumeItem";
import Education from "./Education";
import ProfessionalAffiliations from "./ProfessionalAffiliations";
import { Link, withRouter } from "react-router-dom";
import LanguagesAndFrameworks from "./LanguagesAndFrameworks";
import { resumeItems } from "../staticInfo/resumeItems";
import { formalEd } from "../staticInfo/formalEd";
import { informalEd } from "../staticInfo/informalEd";
import { professionalAffiliations } from "../staticInfo/professionalAffiliations";
import { proficient } from "../staticInfo/proficientSkills";
import { developingUnderstanding } from "../staticInfo/developingUnderstandingSkills";

function About() {
  return (
    <div className="about near-top">
      <div className="container">
        <div className="row align-items-center my-5">
          <h1 className="font-weight-light text-center">
            Skills + Work History
          </h1>

          <h2>Technical Skills</h2>

          <div className="mb-5">
            <div className="row align-items-center text-center proficient-icons">
              <div className="col-sm-12 align-items-center text-center languages">
                <div className="row align-items-center text-center">
                  <h3>Proficient</h3>
                  <LanguagesAndFrameworks languagesAndFrameworks={proficient} />
                </div>
              </div>

              <div className="col-sm-12 align-items-center text-center languages familiar-icons mt-4">
                <div className="row align-items-center text-center">
                  <h3>Knowledgeable</h3>
                  <LanguagesAndFrameworks
                    languagesAndFrameworks={developingUnderstanding}
                  />
                </div>
              </div>
            </div>
          </div>

          <h2>Professional Experience</h2>

          <ResumeItem resumeItems={resumeItems} />

          <Education formalEd={formalEd} informalEd={informalEd} />

          <ProfessionalAffiliations
            professionalAffiliations={professionalAffiliations}
          />

          <div className="row align-items-center my-5 near-footer">
            <div className="col-sm-5">
              <img
                className="img-fluid shadow mb-4 mb-lg-0"
                src="https://i.imgur.com/RywEXuJ.jpg"
                alt=""
              />
            </div>

            <div className="col-sm-7">
              <h2 className="text-start">Next Steps</h2>
              <p className="text-start">
                I have transitioned from education to the tech industry in order
                to make tech more equitable, accessible, and effective.
                <br />
                <br />
                In order to further hone my software engineering expertise, I am
                currently taking Computer Science courses and working toward
                completing my time at Fullstack Academy.
                <br />
                <br />
                <Link to="/contact" title="Contact">
                  <button>Let's Connect</button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(About);
