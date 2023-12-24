import { NavbarCompent } from "./components/navbar/navbarCompent";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaArrowCircleDown,
} from "react-icons/fa";
import "./page.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="fixed-top mb-5">
        <div className="">
          <NavbarCompent />
        </div>
      </div>
      <div
        id="#home"
        className="banner d-flex justify-content-center align-items-center"
        style={{
          paddingTop: "120px",
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
                  aria-label="Linkend"
                  className="item d-flex justify-content-center align-items-center bg-dark text-light fs-5 me-2 shadow-sm"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/MhmmdSyahputra"
                  target="_blank"
                  aria-label="Github"
                  className="item d-flex justify-content-center align-items-center bg-dark text-light fs-5 me-2 shadow-sm"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.instagram.com/mhmmdsyahputra_22/"
                  target="_blank"
                  aria-label="Instagram"
                  className="item d-flex justify-content-center align-items-center bg-dark text-light fs-5 me-2 shadow-sm"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="banner-profile d-flex justify-content-center">
                <Image
                  src="/img/myprofile.jpg"
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

      <div id="about" className="mb-4">
        <div className="container py-4 px-5">
          <h3 className="text-center title">About Us</h3>
          <div className="line-mf mb-5 text-center"></div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          quisquam id illo quidem nam explicabo cupiditate minima reprehenderit,
          amet necessitatibus beatae laudantium temporibus aperiam nemo
          blanditiis eaque omnis atque natus obcaecati vel recusandae minus
          doloribus aspernatur maxime! Incidunt, error repellat optio, aperiam
          commodi temporibus tempora magnam aspernatur pariatur quod sed ratione
          perspiciatis iste, est cum eveniet! Architecto libero iure ipsa magni
          totam. Non quam alias nulla expedita consequatur at iusto ullam nisi
          saepe voluptate velit voluptatibus, dolores voluptatum aspernatur hic
          commodi tempora consequuntur cumque? Ducimus eligendi saepe eveniet
          dignissimos laboriosam enim amet voluptatibus corrupti nostrum
          pariatur animi cumque necessitatibus sint tempora, facere vero beatae
          qui quibusdam quasi incidunt! Odio molestiae sequi at iure voluptates
          magnam deserunt nam corrupti odit natus aut, expedita ea voluptate
          aperiam, dignissimos omnis veritatis deleniti laboriosam inventore
          suscipit reiciendis. At aut blanditiis illum minus exercitationem
          quibusdam aliquid natus aspernatur assumenda reprehenderit
          accusantium, saepe voluptate similique non laborum! Eos nobis, atque a
          nulla beatae nesciunt quis nisi ipsam molestias, vitae aspernatur
          veniam perspiciatis ducimus at aperiam expedita natus? Et ducimus
          debitis natus magnam sequi quibusdam sint reprehenderit est sed!
          Aperiam, perspiciatis earum ab voluptatem expedita, sint veritatis
          natus provident rem eius, a obcaecati quidem tempore molestiae
          voluptates?
        </div>
      </div>

      <div id="portfolio">
        <div className="container py-4 px-5">
          <h3 className="text-center title">Portfolio</h3>
          <div className="line-mf mb-5 text-center"></div>
          <div className="row d-flex justify-content-center">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card item-port shadow border-0">
                <Image
                  src="/img/portfolio/vms/picture1.jpeg"
                  className="img-fluid card-img-top"
                  width={300}
                  height={300}
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
                  src="/img/portfolio/vms/picture1.jpeg"
                  className="img-fluid card-img-top"
                  width={300}
                  height={300}
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
    </>
  );
}
