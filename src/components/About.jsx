import React from "react";
import "./About.css";
import ResumeItem from "./ResumeItem";
import Education from "./Education";
import ProfessionalAffiliations from "./ProfessionalAffiliations";
import { Link, withRouter } from "react-router-dom";

function About() {
  const resumeItems = [
    {
      title: "STEAM Educator",
      org: "Genesis STEAM",
      logo: "/images/genesis-logo.png",
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
        "Develop GENESIS STEAM curriculum aligned with CA State Standards and UN Global Goals",
        "Create educational programming tools to ensure streamlined program planning as well as learning outcome metrics collection",
        "Expand and maintain GENESIS STEAM curriculum resource website using ReactJS",
        "Teach virtual and onsite GENESIS STEAM programs to K-12 students",
        "Assist in the development and ongoing management of the virtual GENESIS Innovation Campus",
        "Manage the physical GENESIS Innovation Lab including: maintaining inventory of education supplies, managing all technology and equipment, overseeing all aspects of the Lab",
        "Work with foundation and partner staff on delivering STEAM programs",
      ],
    },
    {
      title: "K8 Educator",
      org: "Allegiance STEAM Academy & iEmpire Academy",
      logo: "/images/asa-iemp-logo.png",
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
      logo: "/images/dcp-logo.png",
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
      degree: "M.A. Education",
      org: "Claremont Graduate University",
      logo: "images/cgu-logo.png",
      location: "Claremont, CA",
      date: "2019",
      thesis: "From Self-Doubt To Inner Peace: An Ethnographic Narrative",
    },
    {
      degree: "M.A. Religion, Ethics, & Social Change",
      org: "Claremont School of Theology",
      logo: "images/cst-logo.jpeg",
      location: "Claremont, CA",
      date: "2016",
      thesis:
        "Resolving Problematic Interdisciplinary Implications in Western Psychology Through Reform in Data Collection",
    },
    {
      degree: "B.A. Psychology",
      org: "Azusa Pacific University University",
      logo: "images/apu-logo.png",
      location: "Claremont, CA",
      date: "2014",
      thesis: "From Self-Doubt To Inner Peace: An Ethnographic Narrative",
    },
  ];

  const informalEd = [
    {
      course: "React Development",
      org: "SheCodes Workshops",
      logo: "/images/shecodes-logo.png",
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
      logo: "/images/udemy-logo.png",
      date: "2021",
      skills: ["Mapping User Journeys", "Field Data Collection"],
    },
    {
      course: "User Experience (UX): The Ultimate Guide to Usability and UX",
      org: "Udemy",
      logo: "/images/udemy-logo.png",
      date: "2021",
      skills: ["Mapping User Journeys", "Field Data Collection"],
    },
    {
      course: "The Complete App Design Course - UX, UI, and Design Thinking",
      org: "Udemy",
      logo: "/images/udemy-logo.png",
      date: "2020",
      skills: ["UX/UI Design", "Creating Working Prototypes"],
    },
  ];

  const professionalAffiliations = [
    {
      title: "AWBW Facilitator",
      date: "2021",
      logo: "/images/awbw-logo.png",
      org: "A Window Between Worlds",
      location: "Venice, CA",
    },
    {
      title: "Google Certified Educator - Level 2",
      date: "2019",
      logo: "/images/google-level-2.png",
      org: "Google for Education",
      location: "Palo Alto, CA",
    },
    {
      title: "Cooperative Culture - Committee Chair",
      date: "2019",
      logo: "/images/iempire.jpeg",
      org: "iEmpire Academy",
      location: "San Bernardino, CA",
    },
    {
      title: "ITOC Fellow",
      date: "2019",
      logo: "/images/itoc-logo.jpeg",
      org: "Institute for Teachers of Color Committed to Racial Justice",
      location: "Riverside, CA",
    },
  ];

  return (
    <div className="about near-top">
      <div className="container">
        <div className="row align-items-center my-5">
          <h1 className="font-weight-light text-center">About</h1>

          <h2>Programming Languages</h2>

          <div className="mb-5">
            <div className="row align-items-center text-center proficient-icons">
              <div className="col-sm-6 align-items-center text-center languages">
                <div className="row align-items-center text-center">
                  <h5>Proficient</h5>
                  <div className="col-sm-2">
                    <i class="fab fa-react"></i>
                  </div>
                  <div className="col-sm-2">
                    <i class="fab fa-js-square"></i>
                  </div>
                  <div className="col-sm-2">
                    <i class="fab fa-html5"></i>
                  </div>
                  <div className="col-sm-2">
                    <i class="fab fa-css3-alt"></i>
                  </div>
                  <div className="col-sm-2">
                    <i class="fab fa-bootstrap"></i>
                  </div>
                  <div className="col-sm-2">
                    <i class="fab fa-github"></i>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 align-items-center text-center languages familiar-icons">
                <div className="row align-items-center text-center">
                  <h5>Familiar</h5>

                  <div className="col-sm-4">
                    <i class="fab fa-python"></i>
                  </div>

                  <div className="col-sm-4">
                    <i class="fab fa-unity"></i>
                  </div>

                  <div className="col-sm-4">
                    <span>C#</span>
                  </div>
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
                src="/images/planning-photo.jpg"
                alt=""
              />
            </div>

            <div className="col-sm-7">
              <h2 className="text-start">Next Steps</h2>
              <p className="text-start">
                I have transitioned from the elementary classroom toward the
                tech industry in order to make educational resources more
                equitable and accessible.
                <br />
                <br />
                Through the use of responsive and effective front-end
                development, the educational organizations can be truly
                transformed to respond to the ways their students learn.
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
