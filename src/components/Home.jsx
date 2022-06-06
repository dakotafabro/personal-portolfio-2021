import React from "react";
import "./Home.css";
import { Link, withRouter } from "react-router-dom";

function Home() {
  const homePageInfo = [
    {
      id: "home3",
      title: "EDU + Front-End Development",
      description:
        "As a former educator, I know what assessment data teachers might want to see and how they might want to use that data. I know what students want out of learning tools. They want to be engaged, challenged, and enjoy their work--without the hassle of user interface confusion. As the landscape of education evolves, so too should our tech.",
      button: "See About Me",
      toLink: "/about",
      titleToLink: "About",
      link: null,
      type: "Link",
    },
    {
      id: "home2",
      title: "UX/UI & Front-End Development",
      description:
        "As a former educator, I found myself asking 'How can this app/web-based learning tool be more effective for the students using it?'. I took on learning how to code in order to understand the other side of the learning tools being used in the classroom. I now have the skills needed to create responsive web-based applications and aim to apply these skills to  improve classroom instruction and other web-based tools.",
      button: "See Developer Portfolio",
      toLink: "/work",
      titleToLink: "Work",
      link: null,
      type: "Link",
    },
  ];

  return (
    <div className="home near-top">
      <div class="container">
        <div class="row align-items-center mb-5">
          <div class="col-sm-5 headshot-container">
            <img
              class="img-fluid headshot shadow"
              src="https://i.imgur.com/qMHXvL0.jpg"
              alt="Dakota Fabro"
            />
          </div>
          <div class="col-sm-7">
            <h1 class="font-weight-light">
              Dakota Fabro{" "}
              <a
                href="https://www.mypronouns.org/what-and-why"
                title="What Are Pronouns? Why Do They Matter?"
                target="_blank"
                rel="noreferrer"
              >
                (they/she)
              </a>
            </h1>
            <h3>Upcoming Software Engineer @ Fullstack Academy</h3>
            <h5>
              <em>Based in Los Angeles, CA</em> 🇺🇸 🇵🇭
            </h5>
            <p className="mb-5">
              I recently left education to pursue a career in software
              engineering. As a recipient of the 2022 Edie Windsor Scholarship
              through Lesbians Who Tech, I am currently attending The Grace
              Hopper Program @ Fullstack Academy with a graduation date of
              September 2022.
              <br />
              <br />
              My aim as a software engineer is to help users reach their ideas
              by creating web tools that are useful and streamlined--all while
              being responsive to the heightened demands placed on creators,
              workers, and learners as a result of the pandemic.
              <br />
              <br />
              <a
                className="m-2"
                href="https://drive.google.com/file/d/1av28PstbBBogff-d38YyKSFHE09t7QS_/view?usp=sharing"
                alt="Download/View Resume"
              >
                <button className="download-resume">Download Resume</button>
              </a>
              <Link to="/contact" title="Contact">
                <button>Contact Me</button>
              </Link>
            </p>
          </div>
        </div>

        <div className="row align-items-top mb-5 near-footer">
          {homePageInfo.map((homePage) => {
            return (
              <div key={homePage.id} className="col-sm-4 p-2">
                <h4>{homePage.title}</h4>
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
              Software Engineering relies heavily on continual learning as well
              as collaborating with other engineers. Being able to know your
              audience and be able to teach other engineers is a skill that
              requires patience and a deep understanding of how learning
              happens. My experience as a former educator translate well to
              engineering in regards to my own continual learning and fostering
              growth in the members of my team.
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
      </div>
    </div>
  );
}

export default withRouter(Home);
