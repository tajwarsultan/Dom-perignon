import React from "react";
import "./styles.css";
import Logo from "../../assets/Logo.svg";
import Custom from "../../assets/Custom.svg";
import Icon from "../../assets/screenshots.svg";
import Bottle from "../../assets/bottle.svg";
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
              CATEG <span> &#62; </span>
            </h3>
            <Link to="/news" style={{ paddingLeft: "5px" }}>
              ITEM
            </Link>
          </nav>
        </div>
      </div>
      <div className="custom-wrapper">
        <div className="custom-category">
          <img alt="logo" src={Custom} />
        </div>
        <div className="icons-box">
          <span className="logo-box">
            <img alt="logo" src={Icon} /> Screenshots
          </span>
          <span className="logo-box">
            <img alt="logo" src={Icon} /> Get product
          </span>
        </div>
        <div className="card-wrapper">
          <div className="card-img">
            <img alt="logo" src={Bottle} />
          </div>
          <div className="card-content">
            <div className="balance">
              <span>Total balance</span>
              <br />
              <span className="point-number">
                0.9898459 <span style={{ background: "#CCB87D54" }}>BTC</span>
              </span>
              <br />
              <span>45.105,50 €</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
