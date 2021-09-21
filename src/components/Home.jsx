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
    },
    {
      id: "home2",
      title: "UX/UI & Front-End Development",
      description:
        "As a classroom educator, I always found myself asking 'How can this app/web-based learning tool be more effective for the students using it?'. I then took the initiative to teach myself how to code in order to move toward being able to be on the other side of the learning tools being used in the classroom. In just months, I now have the skills needed to create responsive web-based applications and seek to apply these skills to effectively improve classroom instruction.",
      button: "See Front-End Portfolio",
    },
    {
      id: "home1",
      title: "Google Certified Educator",
      description:
        "As a Google Certified Educator, I was able to design engaging learning curriculum in order to teach students 21st century technology skills. By doing so, students were empowered to see the internet and current technology as a tool for innovation rather than a place to consume and play. Students were able to broaden their worldviews while taking ownership of their own learning.",
      button: "See Teaching Portfolio",
      link: "https://fabrofotip2020.weebly.com/",
    },
  ];

  return (
    <div className="home near-top">
      <div class="container">
        <div class="row align-items-center mb-5">
          <div class="col-sm-5">
            <img
              class="img-fluid headshot shadow m-3"
              src="/images/headshot1.jpg"
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
            <p className="mb-3">
              As a Google Certified Educator, I understand the importance of
              creating web apps that are engaging, intuitive, and useful for
              assessing student growth.
              <br />
              <br />
              My aim as a front-end developer is to help educators and students
              reach their full potential within the classroom--all while being
              responsive to the heightened demands placed on classroom educators
              during the current pandemic.
              <br />
              <br />
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
                <h2>{homePage.title}</h2>
                <p>
                  {homePage.description}
                  <br />
                  <br />
                  <a href={homePage.link} target="_blank" rel="noreferrer">
                    <button>{homePage.button}</button>
                  </a>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default withRouter(Home);
