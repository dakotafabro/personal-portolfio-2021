import React from "react";

const ProfessionalAffiliations = ({ professionalAffiliations }) => {
  return (
    <>
      <div className="Professional-Affiliations mt-4">
        <h2>Professional Affiliations</h2>
        {professionalAffiliations.map((affiliation) => {
          return (
            <div className="affilitation">
              <div className="row align-items-center resume-item mb-4">
                <div className="col-sm-3">
                  <div className="d-flex flex-column align-items-center">
                    <img
                      className="professional-photo mb-3"
                      src={affiliation.logo}
                      alt={affiliation.title}
                    />
                  </div>
                </div>

                <div className="col-sm-9 resume-info">
                  <h5>
                    {affiliation.title} - {affiliation.date}
                  </h5>
                  <h6>
                    {affiliation.org} - {affiliation.location}
                  </h6>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProfessionalAffiliations;
