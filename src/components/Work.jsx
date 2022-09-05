import React from "react";
import WorkItem from "./WorkItem";
import "./Work.css";

function Work() {
  const workExperience = [
    {
      id: "workitem7",
      title:
        "The Margaret Hamilton Academy of JavaScript - School CRM - Fullstack Web App",
      description:
        "A school CRM that tracks student information and their associated campuses. Project was built using ReactJS, Redux, PostrgreSQL, Sequelize, NodeJS, ExpressJS, JavaScript, HTML, CSS, and Bootstrap. Website built by me. Ownership belongs to GENESIS STEAM.",
      image: "https://i.imgur.com/3pvohxq.png",
      buttonText: "Visit GENESIS iLabs",
      buttonLink: "https://genesisilabs-communities.org/",
      year: 2022,
    },
    {
      id: "workitem6",
      title: "GENESIS STEAM iLab Resource Platform",
      description:
        "A static resource platform built for GENESIS STEAM's Innovator Program. Site is used across various schools sites within LAUSD. Project was built using ReactJS, JavaScript, HTML, and CSS. Website built by me. Ownership belongs to GENESIS STEAM.",
      image: "https://i.imgur.com/3pvohxq.png",
      buttonText: "Visit GENESIS iLabs",
      buttonLink: "https://genesisilabs-communities.org/",
      year: 2022,
    },
    {
      id: "workitem5",
      title: "Self-Care Assistant",
      description:
        "Sometimes thinking of something to do for self-care or getting oneself out of a rut can be hard. Self-Care Assistant is here to help! This project features self-care, personal, and work suggestions when it's too hard to think of what to do on one's own with the click of a button. Project was built using JavaScript, HTML, CSS, and The Bored API.",
      image: "https://i.imgur.com/r3Iq2Ma.png",
      buttonText: "Let Us Suggest Something",
      buttonLink: "https://self-care-assistant.netlify.app/",
      year: 2022,
    },
    {
      id: "workitem4",
      title: "Dictionary Search Engine - ReactJS",
      description:
        "This dictionary utilizes Pexel's extraordinary photo API along with Free Dictionary's API to create a fully functional dictionary search engine.",
      image: "https://i.imgur.com/XrPu5Dm.png",
      buttonText: "See Dictionary App",
      buttonLink: "https://dfabro-dictionary-react-app.netlify.app/",
      year: 2021,
    },
    {
      id: "workitem3",
      title: "Note Taking Application - ReactJS",
      description:
        "In addition to Dark Mode toggling capabilities, this app utilizes local storage to create a fully functional note-taking app.",
      image: "https://i.imgur.com/JKB9hRb.png",
      buttonText: "Take Notes Here",
      buttonLink: "https://note-taking-app-dakotafabro.netlify.app/",
      year: 2021,
    },
    {
      id: "workitem2",
      title: "Weather Application - ReactJS",
      description:
        "This most recent project that pays homage to my first coding project below. Weather App built with ReactJS, Bootstrap, and API Integration.",
      image: "https://i.imgur.com/ARy1kSR.png",
      buttonText: "Check The Weather",
      buttonLink: "https://dfabro-react-weather-app-new.netlify.app/",
      year: 2021,
    },
    {
      id: "workitem1",
      title: "Weather Application - Vanilla JS",
      description:
        "This project was one of my earliest front-end projects. Project built with HTML, CSS, Vanilla JS, Bootstrap, and API Integration.",
      image: "https://i.imgur.com/MzLMjDl.png",
      buttonText: "Check The Weather",
      buttonLink: "https://weather-app-dfabro-shecodes.netlify.app/",
      year: 2021,
    },
    {
      id: "workitem0",
      title: "Game Development",
      description:
        "My first experience with coding was building games using C# and Unity. Hup-Hup was my first multi-level game that used complex C# scripts. Project was built using C#, Unity, and Visual Studio Code.",
      image: "https://i.imgur.com/fRkrlWn.png",
      buttonText: "Play Hup-Hup on Desktop",
      buttonLink: "https://sharemygame.com/@WhiteCrane22/hup-hup",
      year: 2021,
    },
  ];

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
