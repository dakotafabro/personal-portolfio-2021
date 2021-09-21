import React from "react";
import WorkItem from "./WorkItem";
import "./Work.css";

function Work() {
  const workExperience = [
    {
      id: "workitem1",
      title: "Dictionary Search Engine - ReactJS",
      description:
        "This dictionary utilizes Pexel's extraordinary photo API along with Free Dictionary's API to create a fully functional dictionary search engine.",
      image: "/images/dictionary.png",
      buttonText: "See Dictionary App",
    },
    {
      id: "workitem2",
      title: "Note Taking Application - ReactJS",
      description:
        "As I move into the education tech world, I am trying my hand at creating apps that would be useful in the classroom--specifically to learn more about the inner workings of useful app features. In addition to Dark Mode toggling capabilities, this app utilizes local storage to create a fully functional note-taking app.",
      image: "/images/note-app-photo.png",
      buttonText: "Take Notes Here",
    },
    {
      id: "workitem3",
      title: "Weather Application - ReactJS",
      description:
        "This most recent project that pays homage to my first coding project below. Weather App built with ReactJS, Bootstrap, and API Integration.",
      image: "/images/weather-react-photo.png",
      buttonText: "Check The Weather",
    },
    {
      id: "workitem4",
      title: "Weather Application - Vanilla JS",
      description:
        "This project was one of my earliest front-end projects. Project built with HTML, CSS, Vanilla JS, Bootstrap, and API Integration.",
      image: "/images/weatherapp-photo.jpg",
      buttonText: "Check The Weather",
    },
    {
      id: "workitem5",
      title: "Game Development",
      description:
        "My first experience with coding was building games using C# and Unity. Hup-Hup was my first multi-level game that used complex C# scripts. Project was built using C#, Unity, and Visual Studio Code.",
      image: "/images/hup-hup-2.jpg",
      buttonText: "Play Hup-Hup on Desktop",
    },
  ];

  return (
    <div className="work near-top">
      <div className="container">
        <div className="row align-items-center my-5">
          <h1 className="font-weight-light text-center">Work</h1>
          <WorkItem className="work-item" work={workExperience} />
        </div>
      </div>
    </div>
  );
}

export default Work;
