"use client";
import React, { useEffect, useRef, useState } from "react";
import "./navbar.css";

export const NavbarCompent = () => {
  const [active, setActive] = useState("home");
  const [isTop, setIsTop] = useState(true);
  const observer = useRef<IntersectionObserver>();

  // useEffect(() => {
  //   //create new instance and pass a callback function
  //   observer.current = new IntersectionObserver((entries) => {
  //     const visibleSection = entries.find(
  //       (entry) => entry.isIntersecting
  //     )?.target;
  //     //Update state with the visible section ID
  //     const scrolled = window.scrollY > 0;
  //     if (scrolled !== isTop) {
  //       setIsTop(scrolled);
  //     }
  //     if (visibleSection) {
  //       setActive(visibleSection.id);
  //     }
  //   });

  //   //Get custom attribute data-section from all sections
  //   const sections = document.querySelectorAll(".section");

  //   sections.forEach((section) => {
  //     observer.current?.observe(section);
  //   });
  //   //Cleanup function to remove observer
  //   return () => {
  //     sections.forEach((section) => {
  //       observer.current?.unobserve(section);
  //     });
  //   };
  // }, []);

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
                >
                  ABOUT
                </a>
              </li>
              <li className="nav-item mx-2">
                <a
                  className={`nav-link + ${
                    active === "projects" ? " active" : ""
                  } ${isTop ? " text-dark" : " text-light"}`}
                  href="#projects"
                >
                  PROJECTS
                </a>
              </li>
              <li className="nav-item mx-2">
                <a
                  className={`nav-link + ${
                    active === "skills" ? " active" : ""
                  } ${isTop ? " text-dark" : " text-light"}`}
                  href="#skills"
                >
                  SKILLS
                </a>
              </li>
              <li className="nav-item mx-2">
                <a
                  className={`nav-link + ${
                    active === "contact" ? " active " : ""
                  } ${isTop ? " text-dark" : " text-light"}`}
                  href="#contact"
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
