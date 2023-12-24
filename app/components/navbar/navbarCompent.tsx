"use client";
import React, { useState } from "react";
import "./navbar.css";

export const NavbarCompent = () => {
  const [active, setActive] = useState("home");

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 ">
        <div className="container">
          <a className="navbar-brand fs-4 fw-medium" href="#">
            Muhammad Syahputra
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-2">
                <a
                  className={`nav-link + ${
                    active === "home" ? " active" : ""
                  } `}
                  aria-current="page"
                  href="#home"
                  onClick={() => setActive("home")}
                >
                  HOME
                </a>
              </li>
              <li className="nav-item mx-2">
                <a
                  className={`nav-link + ${
                    active === "about" ? " active" : ""
                  } `}
                  href="#about"
                  onClick={() => setActive("about")}
                >
                  ABOUT
                </a>
              </li>
              <li className="nav-item mx-2">
                <a
                  className={`nav-link + ${
                    active === "portfolio" ? " active" : ""
                  } `}
                  href="#portfolio"
                  onClick={() => setActive("portfolio")}
                >
                  PORTFOLIO
                </a>
              </li>
              <li className="nav-item mx-2">
                <a
                  className={`nav-link + ${
                    active === "contact" ? " active" : ""
                  } `}
                  href="#"
                  onClick={() => setActive("contact")}
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
