"use client";
import React, { useEffect, useState } from "react";
import "./navbar.css";

export const NavbarCompent = () => {
  const [active, setActive] = useState("home");
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      if (scrolled !== isTop) {
        setIsTop(scrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [isTop]);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg py-3 ${
          isTop ? "bg-light" : "text-light"
        }`}
      >
        <div className="container sticky-top">
          <a
            className={`navbar-brand fs-4 fw-medium ${
              isTop ? " text-dark" : " text-light"
            }`}
            href="#"
          >
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
                  } ${isTop ? " text-dark" : " text-light"}`}
                  aria-current="page"
                  href="#"
                  onClick={() => setActive("home")}
                >
                  HOME
                </a>
              </li>
              <li className="nav-item mx-2">
                <a
                  className={`nav-link ${active === "about" ? " active" : ""} ${
                    isTop ? " text-dark" : " text-light"
                  }`}
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
                  } ${isTop ? " text-dark" : " text-light"}`}
                  href="#portfolio"
                  onClick={() => setActive("portfolio")}
                >
                  PORTFOLIO
                </a>
              </li>
              <li className="nav-item mx-2">
                <a
                  className={`nav-link + ${
                    active === "contact" ? " active " : ""
                  } ${isTop ? " text-dark" : " text-light"}`}
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
