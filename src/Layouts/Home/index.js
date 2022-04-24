import React from "react";
import "./styles.css";
import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div>
        <div className="logo">
          <img alt="logo" src={Logo} />
        </div>
        <div className="navbar">
          <nav>
            <h3>
              HOME <span> &#62; </span>
            </h3>
            <Link to="/news" style={{ paddingLeft: "5px" }}>
              NEWS
            </Link>
          </nav>
        </div>
      </div>
      <div className="main-wrapper">
        <div className="welcome-container">
          <h2 className="welcome-headding">WELCOME TO DOM PERIGNON </h2>
          <div className="welcome-header">
            <p>
              <span>
                Diese Nachricht ist im Admin Control Panel frei änderbar.
              </span>
              <br /> <br /> Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr ed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
              sit amet, consetetur sadipscing elitr.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
