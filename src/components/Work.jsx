import React from "react";
import WorkItem from "./WorkItem";
import "../css/Work.css";
import { workExperience } from "../staticInfo/workExperience";

function Work() {
  return (
    <div className="work near-top">
      <div className="container">
        <div className="row align-items-center my-5">
          <h1 className="font-weight-light text-center mb-3">Projects</h1>
          <WorkItem className="work-item" work={workExperience} />
        </div>
      </div>
    </div>
  );
}

export default Work;
