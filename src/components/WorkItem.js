import React from "react";
import "./Work.css";

const WorkItem = ({ work }) => {
  return (
    <>
      {work.map((work) => {
        return (
          <>
            <div id={work.id} className="col-sm-5">
              <img
                className="img-fluid mb-4 shadow"
                src={work.image}
                alt={work.title}
              />
            </div>
            <div className="col-sm-7">
              <h2>{work.title}</h2>
              <p>
                {work.description}
                <br />
                <br />
                <button>{work.buttonText}</button>
              </p>
            </div>
          </>
        );
      })}
    </>
  );
};

export default WorkItem;
