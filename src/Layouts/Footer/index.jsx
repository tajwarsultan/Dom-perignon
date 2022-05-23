import React from "react";
import "./styles.css";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import stack from "../../assets/stack.svg";

function Footer() {
  return (
    <div>
      <footer className="footer-page">
        <div className="footer-container">
          <div className="img-box">
            <img src={github} alt="github" />
          </div>
          <div className="img-box">
            <img src={linkedin} alt="linkedin" />
          </div>
          <div className="img-box">
            <img src={stack} alt="stack" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
