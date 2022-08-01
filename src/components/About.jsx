import React from "react";
import "./About.css";
import ResumeItem from "./ResumeItem";
import Education from "./Education";
import ProfessionalAffiliations from "./ProfessionalAffiliations";
import { Link, withRouter } from "react-router-dom";
import LanguagesAndFrameworks from "./LanguagesAndFrameworks";

function About() {
  const resumeItems = [
    {
      title: "STEAM Educator",
      org: "GENESIS STEAM",
      logo: "https://i.imgur.com/5wXjXFn.png",
      date: "06/2021 to Present",
      current: true,
      location: "Los Angeles, CA",
      skills: [
        "Project Management",
        "Front-End Development",
        "UX/UI Design",
        "Creating Virtual Spaces",
      ],
      duties: [
        "Developed and designed an online resource website using ReactJS  used across Los Angeles Unified School District (LAUSD)",
        "Rebuilt and revitalized the GENESIS STEAM program and delivered to over 1000 K-12 LAUSD students after the organization had been closed for over a year due to COVID-19",
        "Developed standardized systems to manage the physical GENESIS Innovation Lab including maintaining inventory of education supplies, managing all technology and equipment, overseeing all aspects of the Lab",
        "Developed internal professional development materials to foster positive working relationships and healthy workplace boundaries",
        "Worked collaboratively to align GENESIS STEAM curriculum with CA State Standards and UN Global Goals",
        "Created educational programming tools to ensure streamlined program planning as well as learning outcome metrics collection",
      ],
    },
    {
      title: "K8 Educator",
      org: "Allegiance STEAM Academy & iEmpire Academy",
      logo: "https://i.imgur.com/Xsd54KH.png",
      date: "2018 to 2021",
      current: false,
      location: "Chino, CA / San Bernardino, CA",
      skills: [
        "User/Learner Differenatiation",
        "Teaching/Coaching",
        "Classroom Management",
        "Culturally Responsive Pedagogy",
      ],
      duties: [
        "Closely tracked student progress through formative and summative student data with learning experiences by utilizing user experience research techniques (usability, accessibility, findability, and credibility) to ensure learning outcomes",
        "Collaborated with teaching teams to improve teaching workflow and learning outcomes through observation, feedback, and continual improvement",
        "Acted as technology consultant to educators and staff on school campus to ensure educators and staff were able to streamline their teaching and workflow to maximize learning outcomes in a virtual classroom setting",
        "Utilized G Suite educational apps to deliver student-centered, innovative, and real-world applicable units of study",
        "Manage classroom within a restorative justice and socio-emotional framework",
        "Create practical, critical, socially-aware, and culturally-responsive units of study in which students grapple with various Depths of Knowledge",
      ],
    },
    {
      title: "Photographer",
      org: "Dakota Cheyenne Photography",
      logo: "https://i.imgur.com/YYesDih.png",
      date: "2015 to Present",
      current: true,
      location: "Claremont, CA",
      skills: [
        "Adobe Creative Suite",
        "Photo Editing",
        "Customer Service",
        "Clientele Relationship Building",
      ],
      duties: [
        "Specialize in weddings, events, professional headshots, boudoir, and photojournalism",
        "Utilize Adobe Creative Suite (Photoshop CC, Lightroom, Spark, etc.) to professionally edit, enhance, and process RAW photo files and video content",
        "Manage multiple email servers and social network channels to effectively market services and products to wide audiences",
        "Manage and track invoices, contracts, and other correspondence between clients and prospects",
        "Maintain and monitor month-to-month revenue while meticulously keeping track of receipts, payments, and cash flow to ensure robust and sound financial health of the business",
      ],
    },
  ];

  const formalEd = [
    {
      degree: "Fullstack Software Engineer",
      org: "The Grace Hopper Program @ Fullstack Academy",
      logo: "https://i.imgur.com/UYRXdcB.jpg",
      location: "New York, NY",
      date: "Expected 2022",
      thesis: "N/A",
    },
    {
      degree: "AA, Computer Science",
      org: "Citrus College",
      logo: "https://i.imgur.com/7LxBMaS.jpg",
      location: "Azusa, CA",
      date: "Expected 2023",
      thesis: "N/A",
    },
    {
      degree: "M.A. Education",
      org: "Claremont Graduate University",
      logo: "https://i.imgur.com/WrjF2H9.png",
      location: "Claremont, CA",
      date: "2019",
      thesis: "From Self-Doubt To Inner Peace: An Ethnographic Narrative",
    },
    {
      degree: "M.A. Religion, Ethics, & Social Change",
      org: "Claremont School of Theology",
      logo: "https://i.imgur.com/gfVNfvk.jpg",
      location: "Claremont, CA",
      date: "2016",
      thesis:
        "Resolving Problematic Interdisciplinary Implications in Western Psychology Through Reform in Data Collection",
    },
    {
      degree: "B.A. Psychology",
      org: "Azusa Pacific University University",
      logo: "https://i.imgur.com/BNv6omc.png",
      location: "Claremont, CA",
      date: "2014",
      thesis:
        "An Examination of the Racialization of Modern Biblical Scholarship and Western Existential Psychology in Regards to Martin Heidegger’s Notion of German Authenticity",
    },
  ];

  const informalEd = [
    {
      course: "Google IT Support Certificate - In Progress",
      org: "Google & Coursera",
      logo: "https://i.imgur.com/VXcfjTU.png",
      date: "2022",
      skills: [
        "Computer Networking & Troubleshooting",
        "Using Operating Systems Efficiently",
      ],
    },
    {
      course: "Data Structures & Algorithms - Python",
      org: "Udemy",
      logo: "https://i.imgur.com/bfVKCVB.png",
      date: "2022",
      skills: [
        "Linked Lists",
        "Doubly Linked Lists",
        "Hash Tables",
        "Graphs",
        "Binary Search Trees",
        "Sorts (Bubble, Merge, Insertion, Selection)",
        "Object Oriented Programming",
      ],
    },
    {
      course: "Frontend Development & Programming",
      org: "Sololearn",
      logo: "https://i.imgur.com/t6LdZS0.png",
      date: "2021",
      skills: [
        "Web Development (HTML, CSS, Javasript, ReactJS, Redux)",
        "Python",
        "SQL",
        "Data Structures & Algorithms",
      ],
    },
    {
      course: "React Development",
      org: "SheCodes Workshops",
      logo: "https://i.imgur.com/Wbg1Uch.png",
      date: "2021",
      skills: [
        "Web Development (HTML, CSS, Javasript, ReactJS)",
        "Bootstrap",
        "SEO",
        "Hosting",
        "Git & GitHub",
      ],
    },
    {
      course: "User Experience (UX): The Ultimate Guide to Usability and UX",
      org: "Udemy",
      logo: "https://i.imgur.com/bfVKCVB.png",
      date: "2021",
      skills: ["Mapping User Journeys", "Field Data Collection"],
    },
    {
      course: "The Complete App Design Course - UX, UI, and Design Thinking",
      org: "Udemy",
      logo: "https://i.imgur.com/bfVKCVB.png",
      date: "2020",
      skills: ["UX/UI Design", "Creating Working Prototypes"],
    },
  ];

  const professionalAffiliations = [
    {
      title: "Edie Windsor Coding Scholarship Recipient",
      date: "2022",
      logo: "https://i.imgur.com/IOgPa8W.png",
      org: "Lesbians Who Tech",
      location: "Los Angeles, CA",
    },
    {
      title: "Member",
      date: "2022",
      logo: "https://i.imgur.com/gLccnOb.png",
      org: "Women Who Code",
      location: "Los Angeles, CA",
    },
    {
      title: "Alumni",
      date: "2021",
      logo: "https://i.imgur.com/Wbg1Uch.png",
      org: "SheCodes US Students & Alumni",
      location: "Worldwide",
    },
    {
      title: "AWBW Facilitator",
      date: "2021",
      logo: "https://i.imgur.com/QfnBzh7.png",
      org: "A Window Between Worlds",
      location: "Venice, CA",
    },
    {
      title: "Google Certified Educator - Level 2",
      date: "2019",
      logo: "https://i.imgur.com/PjHyuqn.png",
      org: "Google for Education",
      location: "Palo Alto, CA",
    },
    {
      title: "Cooperative Culture - Committee Chair",
      date: "2019",
      logo: "https://i.imgur.com/ac1VDsO.jpg",
      org: "iEmpire Academy",
      location: "San Bernardino, CA",
    },
    {
      title: "ITOC Fellow",
      date: "2019",
      logo: "https://i.imgur.com/pJwcdMx.jpg",
      org: "Institute for Teachers of Color Committed to Racial Justice",
      location: "Riverside, CA",
    },
  ];

  const proficient = [
    {
      column_size: "col-sm-2",
      icon_class: "fab fa-python",
      description: "Python",
    },
    {
      column_size: "col-sm-2",
      icon_class: "fab fa-react",
      description: "ReactJS",
    },
    {
      column_size: "col-sm-2",
      icon_class: "fab fa-js-square",
      description: "JavaScript",
    },
    {
      column_size: "col-sm-2",
      icon_class: "fab fa-html5",
      description: "HTML5",
    },
    {
      column_size: "col-sm-2",
      icon_class: "fab fa-css3-alt",
      description: "CSS3",
    },
    {
      column_size: "col-sm-2",
      icon_class: "fab fa-bootstrap",
      description: "Bootstrap",
    },
    {
      column_size: "col-sm-2",
      icon_class: "fab fa-git-alt",
      description: "Git",
    },
    {
      column_size: "col-sm-2",
      icon_class: "fas fa-database",
      description: "SQL",
    },
    {
      column_size: "col-sm-2",
      icon_class: "fas fa-database",
      description: "PostgreSQL",
    },
  ];

  const developingUnderstanding = [
    {
      column_size: "col-sm-3",
      icon_class: "fab fa-unity",
      description: "Unity",
    },
    {
      column_size: "col-sm-3",
      icon_class: "fas fa-gamepad",
      description: "C#",
    },
  ];

  return (
    <div className="about near-top">
      <div className="container">
        <div className="row align-items-center my-5">
          <h1 className="font-weight-light text-center">About</h1>

          <h2>Languages & Frameworks</h2>

          <div className="mb-5">
            <div className="row align-items-center text-center proficient-icons">
              <div className="col-sm-8 align-items-center text-center languages">
                <div className="row align-items-center text-center">
                  <h5>Proficient</h5>
                  <LanguagesAndFrameworks languagesAndFrameworks={proficient} />
                </div>
              </div>

              <div className="col-sm-4 align-items-center text-center languages familiar-icons">
                <div className="row align-items-center text-center">
                  <h5>Developing Understanding</h5>
                  <LanguagesAndFrameworks
                    languagesAndFrameworks={developingUnderstanding}
                  />
                </div>
              </div>
            </div>
          </div>

          <h2>Professional Experience</h2>

          <ResumeItem resumeItems={resumeItems} />

          <Education formalEd={formalEd} informalEd={informalEd} />

          <ProfessionalAffiliations
            professionalAffiliations={professionalAffiliations}
          />

          <div className="row align-items-center my-5 near-footer">
            <div className="col-sm-5">
              <img
                className="img-fluid shadow mb-4 mb-lg-0"
                src="https://i.imgur.com/RywEXuJ.jpg"
                alt=""
              />
            </div>

            <div className="col-sm-7">
              <h2 className="text-start">Next Steps</h2>
              <p className="text-start">
                I have transitioned from education to the tech industry in order
                to make tech more equitable, accessible, and effective.
                <br />
                <br />
                In order to further hone my software engineering expertise, I am
                currently taking Computer Science courses and working toward
                completing my time at Fullstack Academy.
                <br />
                <br />
                <Link to="/contact" title="Contact">
                  <button>Let's Connect</button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(About);
