import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./Contact.css";

function Contact() {
  const [email, setEmail] = useState("dakotafabrocgu@gmail.com");

  const copyEmail = () => {
    setEmail("dakotafabrocgu@gmail.com");
    alert(
      "Email copied to clipboard. I look forward to hearing from you! 🧑🏽‍💻"
    );
  };

  return (
    <div className="contact near-top">
      <div className="container">
        <div className="align-items-center my-3">
          <div className="col-sm-12">
            <div className="contact-info text-center">
              <img
                className="mb-2"
                src="/images/df-2021-logo.png"
                alt="Dakota Fabro logo"
              />

              <h1>Contact</h1>

              <p>
                <i class="far fa-envelope"></i>
                <br />
                <CopyToClipboard text={email}>
                  <button className="email-link" onClick={copyEmail}>
                    dakotafabrocgu@gmail.com
                  </button>
                </CopyToClipboard>
                <br />
                {/* <br />
                <i class="fas fa-mobile-alt"></i> /{" "}
                <i class="far fa-comment-alt"></i>
                <br /> */}
                {/* <button className="email-link">
                  <a className="phone-link" href="tel:+1-626-664-0639">
                    (626) 664-0639
                  </a>
                </button> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
