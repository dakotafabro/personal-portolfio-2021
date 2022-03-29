import React from "react";
import "./Home.css";
import { Link, withRouter } from "react-router-dom";

function Home() {
  const homePageInfo = [
    {
      id: "home3",
      title: "EDU + Front-End Development",
      description:
        "I occupy a unique space in that I know what teachers want first-hand because I used to be one. I know what assessment data teachers might want to see and how they might want to use that data. I know what students want out of learning tools. They want to be engaged, challenged, and have fun--without the hassle of user interface confusion. As the landscape of education evolves, so too should our tech.",
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
        "As a classroom educator, I always found myself asking 'How can this app/web-based learning tool be more effective for the students using it?'. I then took the initiative to teach myself how to code in order to move toward being able to be on the other side of the learning tools being used in the classroom. In just months, I now have the skills needed to create responsive web-based applications and seek to apply these skills to effectively improve classroom instruction.",
      button: "See Front-End Portfolio",
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
            <h3>STEAM Educator & Front-End Developer</h3>
            <h5>
              <em>Based in Los Angeles, CA</em> 🇺🇸 🇵🇭
            </h5>
            <p className="mb-5">
              As a Google Certified Educator, former classroom teacher, and
              self-taught web developer, I understand the importance of creating
              web apps that are engaging, intuitive, and useful for the human on
              the other end.
              <br />
              <br />
              My aim as a front-end web developer is to help users reach their
              full potential by creating web tools that are useful and
              streamlined--all while being responsive to the heightened demands
              placed on creators, workers, and learners as a result of the
              pandemic.
              <br />
              <br />
              <a
                className="m-2"
                href="https://drive.google.com/file/d/1GggTBF2DBoN4yEfdh6DEcePsPtMFi7I0/view?usp=sharing"
                alt="View Resume"
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
              As a Google Certified Educator, I was able to design engaging
              learning curriculum in order to teach students 21st century
              technology skills. By doing so, students were empowered to see the
              internet and current technology as a tool for innovation rather
              than a place to consume and play. Students were able to broaden
              their worldviews while taking ownership of their own learning.
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
