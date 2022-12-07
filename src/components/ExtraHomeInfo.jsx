import React from "react";
import { Link } from "react-router-dom";
import { homePageInfo } from "../staticInfo/homePageInfo";

const ExtraHomeInfo = () => {
  return (
    <div className="row align-items-top mb-5 near-footer">
      {homePageInfo.map((homePage) => {
        return (
          <div key={homePage.id} className="col-sm-6 p-2">
            <h3>{homePage.title}</h3>
            <p>
              {homePage.description}
              <br />
              <br />
              <Link to={homePage.toLink} title={homePage.titleToLink}>
                <button>{homePage.button}</button>
              </Link>
            </p>
          </div>
        );
      })}

      <div key="home1" className="col-sm-4 p-2">
        <h4>Google Certified Educator</h4>
        <p>
          Software Engineering relies heavily on continual learning as well as
          collaborating with other engineers. Being able to know your audience
          and teach other engineers is a skill that requires patience and a deep
          understanding of how learning happens. My experience as a former
          educator translates well to engineering in regards to my own continual
          learning and fostering growth in the members of any teams on which I
          may find myself.
          <br />
          <br />
          <a
            href="https://fabrofotip2020.weebly.com/"
            target="_blank"
            rel="noreferrer"
          >
            <button>See Teaching Portfolio</button>
          </a>
        </p>
      </div>
    </div>
  );
};

export default ExtraHomeInfo;
