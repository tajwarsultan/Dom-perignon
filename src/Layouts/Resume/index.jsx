import React from "react";
import "./styles.css";
import Footer from "../Footer/index";

function Resume() {
  return (
    <div className="bg-primary resume-container">
      <div className="resume-wrapper">
        <div className="headding">
          <h3 className="text-light">Resume</h3>
        </div>
      </div>
      <div className="resume-form">
        <div className="download">
          <p>
            Download my <span>resume</span>
          </p>
        </div>
        <div className="front-end">
          <p> Front-end Proficiencies</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>Responsive design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="back-end">
          <p> Back-end Proficiencies</p>
          <ul>
            <li>PHP</li>
            <li>Ruby</li>
            <li>Python</li>
            <li>Node</li>
            <li>Java</li>
            <li>MySQL</li>
            <li>Oracle</li>
            <li>SQL Serve</li>
          </ul>
        </div>
      </div>
      <div className="resume-footer">
        <Footer />
      </div>
    </div>
  );
}

export default Resume;
