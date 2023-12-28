import { NavbarCompent } from "./components/navbar/navbarCompent";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaArrowCircleDown,
  FaFacebook,
  FaWhatsapp,
  FaReact,
  FaHtml5,
  FaCss3,
  FaJs,
  FaPhp,
  FaNodeJs,
  FaGit,
} from "react-icons/fa";
import "./page.css";
import Image from "next/image";

interface Iskills {
  _id: string;
  url_img: string;
  skill: string;
}

export default async function Home() {
  const listSkills = [
    {
      name: "HTML",
      icon: <FaHtml5 className="display-5 mtext-primary" />,
      link: "https://react.dev/",
    },
    {
      name: "CSS",
      icon: <FaCss3 className="display-5 mtext-primary" />,
      link: "https://react.dev/",
    },
    {
      name: "JS",
      icon: <FaJs className="display-5 mtext-primary" />,
      link: "https://react.dev/",
    },
    {
      name: "ReactJS",
      icon: <FaReact className="display-5 mtext-primary" />,
      link: "https://react.dev/",
    },
    {
      name: "PHP",
      icon: <FaPhp className="display-5 mtext-primary" />,
      link: "https://react.dev/",
    },
    {
      name: "C#",
      icon: <FaReact className="display-5 mtext-primary" />,
      link: "https://react.dev/",
    },
    {
      name: "Electron",
      icon: <FaReact className="display-5 mtext-primary" />,
      link: "https://react.dev/",
    },
    {
      name: "MySQL",
      icon: <FaReact className="display-5 mtext-primary" />,
      link: "https://react.dev/",
    },
    {
      name: "MongoDB",
      icon: <FaReact className="display-5 mtext-primary" />,
      link: "https://react.dev/",
    },
    {
      name: "NodeJS",
      icon: <FaNodeJs className="display-5 mtext-primary" />,
      link: "https://react.dev/",
    },
    {
      name: "Flutter",
      icon: <FaReact className="display-5 mtext-primary" />,
      link: "https://react.dev/",
    },
    {
      name: "Git",
      icon: <FaGit className="display-5 mtext-primary" />,
      link: "https://react.dev/",
    },
  ];

  const resSkills = await fetch(
    // "http://localhost:3000/api/skills/"
    "https://muhammadsyahputra.vercel.app/api/skills"
  );
  const data = await resSkills.json();
  const skills: Iskills[] = data.data;

  return (
    <>
      <div className="fixed-top mb-5">
        <div className="">
          <NavbarCompent />
        </div>
      </div>

      {/* HOME */}
      <div
        id="home"
        className="section banner d-flex justify-content-center align-items-center"
        style={{
          paddingTop: "120px",
          marginBottom: "100px",
          backgroundImage: "url('/img/banner.png')",
        }}
      >
        <div className="container px-5">
          <div className="row">
            <div className="col-lg-8 col-md-12 text-light m-auto mb-5">
              <div className="title-banner">
                Hi There, <br /> I{"'"}m{" "}
                <span className="name-title mtext-secondary">
                  Muhammad Syahputra
                </span>
              </div>
              <div className="subtitle mb-3">I Am Into Web Developer</div>
              <a
                href="#about"
                className="btn mbg-primary text-light rounded-5 shadow fw-medium px-5 mb-5 py-2"
              >
                About Me &ensp;
                <FaArrowCircleDown />
              </a>
              <div className="row banner-connect ms-1">
                <a
                  href="https://www.linkedin.com/in/mhmmdsyahputra/"
                  target="_blank"
                  aria-label="Linkendin1"
                  className="item d-flex justify-content-center align-items-center bg-dark text-light fs-5 me-2 shadow-sm"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/MhmmdSyahputra"
                  target="_blank"
                  aria-label="Github1"
                  className="item d-flex justify-content-center align-items-center bg-dark text-light fs-5 me-2 shadow-sm"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://wa.me/8887599774"
                  target="_blank"
                  aria-label="Whatsapp1"
                  className="item d-flex justify-content-center align-items-center bg-dark text-light fs-5 me-2 shadow-sm"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="banner-profile d-flex justify-content-center">
                <Image
                  src="/img/myprofile.jpg"
                  priority
                  className="img-fluid rounded-circle profile"
                  width={300}
                  height={300}
                  alt="Picture of the author"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT ME */}
      <div
        id="about"
        className="section"
        style={{
          marginBottom: "100px",
        }}
      >
        <div className="container py-4 px-5">
          <div className="row">
            <div className="d-none d-lg-block col-lg-5 pe-5">
              <Image
                src="/img/aboutme.jpg"
                className="img-fluid card-img-top"
                style={{ height: "700px", width: "500px", objectFit: "cover" }}
                width={300}
                height={900}
                alt="Picture of the author"
              />
            </div>
            <div className="col-lg-7 col-md-12 m-auto">
              <h6 className="mtext-primary fw-medium mb-2">MY INTRO</h6>
              <h3 className="title">About Me</h3>
              <div className="line-mf mb-5" style={{ margin: "0" }}></div>
              <p>
                Hello! I am Muhammad Syahputra, a student in the field of
                Information Technology at Mikroskil University in Medan.
                Currently I am a junior software developer, I am actively
                developing programming skills with a focus on web, desktop and
                so on development.
              </p>
              <p className="mb-5">
                As a junior developer, I have been involved in several small
                projects with web and desktop applications. I have experience in
                using programming languages such as JavaScript, C#, Python, PHP
                and am familiar with frameworks such as ReactJS.
              </p>

              <div>
                <div className="row mb-3">
                  <div className="col-lg-3">
                    <span className="fw-bold fs-6">Name:</span>
                  </div>
                  <div className="col">
                    <span className="fw-medium">Muhammad Syahputra</span>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-lg-3">
                    <span className="fw-bold fs-6">Date of birth:</span>
                  </div>
                  <div className="col">
                    <span className="fw-medium">January 22, 2003</span>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-lg-3">
                    <span className="fw-bold fs-6">Address:</span>
                  </div>
                  <div className="col">
                    <span className="fw-medium">Medan, Indonesian</span>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-lg-3">
                    <span className="fw-bold fs-6">Email:</span>
                  </div>
                  <div className="col">
                    <span className="fw-medium">putramhmmd22@gmail.com</span>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-lg-3">
                    <span className="fw-bold fs-6">Phone:</span>
                  </div>
                  <div className="col">
                    <span className="fw-medium">0888-759-9774</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PROJECTS */}
      <div
        id="projects"
        className="section"
        style={{
          marginBottom: "100px",
        }}
      >
        <div className="container py-4">
          <h3 className="text-center title">Projects</h3>
          <div className="line-mf mb-5 text-center"></div>
          <div className="row d-flex justify-content-center">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card item-port shadow border-0">
                <Image
                  src="/img/projects/vms/picture1.jpeg"
                  priority
                  className="img-fluid card-img-top"
                  width={700}
                  height={300}
                  style={{
                    width: "700px",
                    height: "300px",
                    objectFit: "cover",
                  }}
                  alt="Picture of the author"
                />
                <div
                  className="px-3 pt-2 mtext-primary fw-medium"
                  style={{ fontSize: "0.9em" }}
                >
                  <div className="row">
                    <div className="col">PT PLN UPDK, Medan</div>
                    <div className="col text-end">OKTOBER 19, 2023</div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="card-title h5 mb-1">
                    Visitor Management System
                  </div>
                  <div
                    className="mtext-primary fw-medium mb-3"
                    style={{ fontSize: "0.8em" }}
                  >
                    Desktop, Electron, ReactJS
                  </div>

                  <p className="card-text fs-6">
                    Visitor management system atau VMS banyak digunakan pada
                    gedung-gedung perkantoran untuk mencatat data pengunjung
                    yang datang.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card item-port shadow border-0">
                <Image
                  src="/img/projects/vms/picture1.jpeg"
                  priority
                  className="img-fluid card-img-top"
                  width={700}
                  height={300}
                  style={{
                    width: "700px",
                    height: "300px",
                    objectFit: "cover",
                  }}
                  alt="Picture of the author"
                />
                <div
                  className="px-3 pt-2 mtext-primary fw-medium"
                  style={{ fontSize: "0.9em" }}
                >
                  <div className="row">
                    <div className="col">...</div>
                    <div className="col text-end">...</div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="card-title h5 mb-1">
                    Scanmatic Gate Access
                  </div>
                  <div
                    className="mtext-primary fw-medium mb-3"
                    style={{ fontSize: "0.8em" }}
                  >
                    Desktop, Electron, ReactJS
                  </div>

                  <p className="card-text fs-6">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quis similique provident quibusdam harum tenetur nihil
                    doloremque tempora! Laborum, ipsum est.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SKILLS */}
      <div
        id="skills"
        className="section"
        style={{
          marginBottom: "100px",
        }}
      >
        <div className="container py-4">
          <h3 className="text-center title">SKILLS</h3>
          <div className="line-mf mb-5 text-center"></div>
          <div className="row d-flex column justify-content-center">
            {skills &&
              skills.map((data, index) => (
                <div
                  key={index}
                  className="card border border-0 text-center mb-4 col-auto"
                >
                  <a
                    href={data.url_img}
                    target="_blank"
                    className="text-decoration-none"
                    role="link"
                  >
                    <div className="card-body mborder-primary py-2 text-dark">
                      <div className="row">
                        <div className="col m-auto">
                          <span className="text-start card-title h5">
                            {data.skill}
                          </span>
                        </div>
                        <div className="col m-auto">
                          <Image
                            src={data.url_img}
                            priority
                            className="img-fluid card-img-top"
                            width={20}
                            height={20}
                            style={{
                              width: "35px",
                              height: "35px",
                              objectFit: "cover",
                            }}
                            alt="Picture of the author"
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Contact */}
      <div
        id="contact"
        className="section"
        style={{
          marginBottom: "100px",
        }}
      >
        <div className="container py-4 px-5">
          <h3 className="text-center title">Contact</h3>
          <div className="line-mf mb-5 text-center"></div>
          <div className="row d-flex justify-content-center">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card text-center">
                <a
                  href="https://github.com/MhmmdSyahputra"
                  target="_blank"
                  className="text-decoration-none"
                  role="link"
                >
                  <div className="card-body mborder-primary text-dark">
                    <FaGithub className="display-3 mb-4 mtext-primary" />
                    <div className="card-title h5">Github</div>
                    <div className="card-subtitle mb-2 text-body-secondary h6">
                      MhmmdSyahputra
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card text-center">
                <a
                  href="https://www.linkedin.com/in/mhmmdsyahputra/"
                  target="_blank"
                  className="text-decoration-none"
                  role="link"
                >
                  <div className="card-body mborder-primary text-dark">
                    <FaLinkedin className="display-3 mb-4 mtext-primary" />
                    <div className="card-title h5">Linkedin</div>
                    <div className="card-subtitle mb-2 text-body-secondary h6">
                      Muhammad Syahputra
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card text-center">
                <a
                  href="https://www.instagram.com/mhmmdsyahputra_22/"
                  target="_blank"
                  className="text-decoration-none"
                  role="link"
                >
                  <div className="card-body mborder-primary text-dark">
                    <FaInstagram className="display-3 mb-4 mtext-primary" />
                    <div className="card-title h5">Instagram</div>
                    <div className="card-subtitle mb-2 text-body-secondary h6">
                      mhmmdsyahputra_22
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card text-center">
                <a
                  href="https://web.facebook.com/Mhdsyhputrapt"
                  target="_blank"
                  className="text-decoration-none"
                  role="link"
                >
                  <div className="card-body mborder-primary text-dark">
                    <FaFacebook className="display-3 mb-4 mtext-primary" />
                    <div className="card-title h5">Facebook</div>
                    <div className="card-subtitle mb-2 text-body-secondary h6">
                      Muhammad Syahputra
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card text-center">
                <a
                  href="https://wa.me/8887599774"
                  target="_blank"
                  className="text-decoration-none"
                  role="link"
                >
                  <div className="card-body mborder-primary text-dark">
                    <FaWhatsapp className="display-3 mb-4 mtext-primary" />
                    <div className="card-title h5">WhatsApp</div>
                    <div className="card-subtitle mb-2 text-body-secondary h6">
                      +628 8877599774
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
