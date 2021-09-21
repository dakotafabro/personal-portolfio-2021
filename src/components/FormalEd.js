import React from "react";

const FormalEd = ({ formalEd }) => {
  return (
    <>
      <h2>Formal Education</h2>
      {formalEd.map((formal) => {
        return (
          <div className="row align-items-center resume-item mb-4">
            <div className="col-sm-3">
              <div className="d-flex flex-column align-items-center">
                <img
                  className="resume-photo"
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
    </>
  );
};

export default FormalEd;
