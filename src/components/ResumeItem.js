import React from "react";
import "./ResumeItem.css";

const ResumeItem = ({ resumeItems }) => {
  return (
    <>
      <div className="ResumeItem">
        {resumeItems.map((resume) => {
          return (
            <div className="row align-items-center resume-item mb-4">
              <div className="col-sm-3">
                <div className="d-flex flex-column align-items-center">
                  <img
                    className="resume-photo mb-2"
                    src={resume.logo}
                    alt={resume.title}
                  />

                  <h5 className="text-center">{resume.title}</h5>
                  <h6 className="text-center">
                    <small>{resume.org}</small>
                  </h6>
                  <h6 className="text-center">
                    <small>{resume.location}</small>
                  </h6>
                  <h6 className="mb-3">{resume.date}</h6>
                </div>
              </div>

              <div className="col-sm-9 resume-info">
                <h6>Responsibilities</h6>
                <ul>
                  {resume.duties.map((duty) => {
                    return <li>{duty}</li>;
                  })}
                </ul>

                <h6>Skills Gained</h6>
                <ul>
                  {resume.skills.map((skill) => {
                    return <li>{skill}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ResumeItem;
