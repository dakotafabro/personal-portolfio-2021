import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./css/Contact.css";

function Contact() {
  const [email, setEmail] = useState("dakotafabrodev@gmail.com");

  const copyEmail = () => {
    setEmail("dakotafabrodev@gmail.com");
    alert("Email copied to clipboard. I look forward to hearing from you! 🧑🏽‍💻");
  };

  return (
    <div className="contact near-top">
      <div className="container">
        <div className="align-items-center my-3">
          <div className="col-sm-12">
            <div className="contact-info text-center">
              <img
                className="mb-2"
                src="https://i.imgur.com/lW20ViD.png"
                alt="Dakota Fabro logo"
              />

              <h1>Contact</h1>

              <p>
                <i class="far fa-envelope"></i>
                <br />
                <CopyToClipboard text={email}>
                  <button className="email-link" onClick={copyEmail}>
                    dakotafabrodev@gmail.com
                  </button>
                </CopyToClipboard>
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
