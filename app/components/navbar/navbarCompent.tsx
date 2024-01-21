"use client";
import React, { useEffect, useRef, useState } from "react";
import "./navbar.css";
import { FaBars, FaHamburger } from "react-icons/fa";

export const NavbarCompent = () => {
  const [active, setActive] = useState("home");
  const [isTop, setIsTop] = useState(true);
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      if (scrolled !== isTop) {
        setIsTop(scrolled);
      }
      const elements = document.querySelectorAll(".section");
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setActive(element.id);
        }
      });
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [isTop]);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg py-3 fixed-top ${
          isTop ? "bg-light" : " bg-lg-transparent"
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
            className={`navbar-toggler border-light${
              isTop ? "text-light" : " bg-lg-transparent"
            }`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaBars className={`m-1 ${isTop ? "text-dark" : " text-light"}`} />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-2">
                <a
                  className={`nav-link ${isTop ? " text-dark" : " text-light"}`}
                  aria-current="page"
                  href="#"
                >
                  HOME
                </a>
                <div
                  style={{ width: "40px" }}
                  className={`ms-lg-2 ${active === "home" ? " active" : ""}`}
                ></div>
              </li>
              <li className="nav-item mx-2">
                <a
                  className={`nav-link ${isTop ? " text-dark" : " text-light"}`}
                  href="#about"
                >
                  ABOUT
                </a>
                <div
                  style={{ width: "40px" }}
                  className={`ms-lg-2 ${active === "about" ? " active" : ""}`}
                ></div>
              </li>
              <li className="nav-item mx-2">
                <a
                  className={`nav-link ${isTop ? " text-dark" : " text-light"}`}
                  href="#projects"
                >
                  PROJECTS
                </a>
                <div
                  style={{ width: "40px" }}
                  className={`ms-lg-2 ${
                    active === "projects" ? " active" : ""
                  }`}
                ></div>
              </li>
              <li className="nav-item mx-2">
                <a
                  className={`nav-link ${isTop ? " text-dark" : " text-light"}`}
                  href="#skills"
                >
                  SKILLS
                </a>
                <div
                  style={{ width: "40px" }}
                  className={`ms-lg-2 ${active === "skills" ? " active" : ""}`}
                ></div>
              </li>
              <li className="nav-item mx-2">
                <a
                  className={`nav-link + ${
                    isTop ? " text-dark" : " text-light"
                  }`}
                  href="#contact"
                >
                  CONTACT
                </a>
                <div
                  style={{ width: "40px" }}
                  className={`ms-lg-2 ${active === "contact" ? " active" : ""}`}
                ></div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
