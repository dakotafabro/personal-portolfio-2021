import React from "react";

const Education = ({ formalEd, informalEd }) => {
  return (
    <>
      <div className="formal-education mt-3">
        <h2>Formal Education</h2>
        {formalEd.map((formal) => {
          return (
            <div className="row align-items-center resume-item mb-4">
              <div className="col-sm-3">
                <div className="d-flex flex-column align-items-center">
                  <img
                    className="education-photo mb-3"
                    src={formal.logo}
                    alt={formal.degree}
                  />
                </div>
              </div>

              <div className="col-sm-9 resume-info">
                <h5>
                  {formal.degree} - {formal.date}
                </h5>
                <h6>
                  {formal.org} - {formal.location}
                </h6>
                <h6>
                  <strong>Thesis:</strong> <em>{formal.thesis}</em>
                </h6>
              </div>
            </div>
          );
        })}
      </div>

      <div className="informal-education mt-3">
        <h2>Self-Guided Education</h2>
        {informalEd.map((informal) => {
          return (
            <div className="row align-items-center resume-item mb-4">
              <div className="col-sm-3">
                <div className="d-flex flex-column align-items-center">
                  <img
                    className="education-photo mb-3"
                    src={informal.logo}
                    alt={informal.degree}
                  />
                </div>
              </div>

              <div className="col-sm-9 resume-info">
                <h5>
                  {informal.course} - {informal.date}
                </h5>
                <h6>{informal.org}</h6>
                <h6>
                  <strong>Skills Gained</strong>
                </h6>

                <ul>
                  {informal.skills.map((skill) => {
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

export default Education;
