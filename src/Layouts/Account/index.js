import React from "react";
import "./styles.css";
import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";

function Account() {
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
              ACCOUNT
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Account;
