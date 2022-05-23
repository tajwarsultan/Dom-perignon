import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function Header() {
  const routes = [
    { route: "/", name: "About me" },
    { route: "/Portfolio", name: "Portfolio" },
    { route: "/contact", name: "Contact" },
    { route: "/resume", name: "Resume" },
  ];
  return (
    <div className="sidebar-container">
      <nav className="navbar navbar-expand-md navbar-light bg-warning text-white">
        <div className="container-fluid d-flex justify-content-around">
          <Link className="navbar-brand text-white fs-2 hover text-dark fw-bold" to="/">
            Lernantino
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-0 mb-lg-0 w-100 h-25 p-4 d-flex align-items-center justify-content-around">
              {routes.map((route, i) => (
                <li className="nav-item">
                  <Link className="nav-link active fs-5 text-white fw-bold" key={i} to={route.route}>
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
