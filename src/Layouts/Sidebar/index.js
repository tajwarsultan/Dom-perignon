import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-wrapper">
        <ul>
          <span>Home</span>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/account">Account</Link>
          </li>
          <li>
            <Link to="/">FAQ</Link>
          </li>
        </ul>
      </div>
      <div className="sidebar-wrapper">
        <ul>
          <span>CATEGORIES</span>
          <li>
            <Link to="/item">ITEM</Link>
          </li>
        </ul>
      </div>
      <div className="sidebar-wrapper">
        <ul>
          <span>ADMINISTRATION</span>
          <li>
            <Link to="/">DASHBOARD</Link>
          </li>
          <li>
            <Link to="/">USERS</Link>
          </li>
          <li>
            <Link to="/">SETTINGS</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
