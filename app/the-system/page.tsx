import React from "react";
import { AddProjectComponent } from "../components/project/addProjectComponent";
import { FaTrash } from "react-icons/fa";
import ProjectButton from "../components/project/ProjectButton";
import AddSkillComponent from "../components/skill/AddSkillComponent";

interface Iskills {
  _id: string;
  url_img: string;
  skill: string;
  url_skill: string;
}
interface Iprojects {
  _id: string;
  title_project: string;
  desc_project: string;
  location_implemen: string;
  date_implemen: string;
  tech: string;
  url_imgs: string;
}

export default async function Dashboard() {
  const resSkills = await fetch(`${process.env.API_URL}/api/skills/`, {
    cache: "no-store",
  });
  const dataSkills = await resSkills.json();
  const skills: Iskills[] = dataSkills.data;

  const resProject = await fetch(`${process.env.API_URL}/api/projects/`, {
    cache: "no-store",
  });
  const dataprojects = await resProject.json();
  const projects: Iprojects[] = dataprojects.data;

  return (
    <>
      <div className="container bg-light p-5">
        <div className="nav-add mb-4">
          <p className="d-inline-flex gap-1 me-lg-4">
            <button
              className="btn btn-primary btn-lg"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseAddskill"
              aria-expanded="false"
              aria-controls="collapseAddskill"
            >
              Add Skill
            </button>
          </p>

          <p className="d-inline-flex gap-1 me-lg-4">
            <button
              className="btn btn-primary btn-lg"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseAddProject"
              aria-expanded="false"
              aria-controls="collapseAddProject"
            >
              Add Project
            </button>
          </p>
        </div>

        <div className="collapse" id="collapseAddskill">
          <div className="card card-body">
            <AddSkillComponent />
          </div>
        </div>

        <div className="collapse" id="collapseAddProject">
          <div className="card card-body">
            <AddProjectComponent />
          </div>
        </div>

        <div className="view-skill mb-5">
          <div className="h3">My Skills</div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Name Skill</th>
                <th scope="col">Priority</th>
                <th scope="col" style={{ width: "100px" }}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {skills &&
                skills.map((data, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{data.skill}</td>
                    <td>1</td>
                    <td>
                      <button className="btn btn-danger">
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="view-projects mb-5">
          <div className="h3">My Projects</div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Name Project</th>
                <th scope="col">Date Development</th>
                <th scope="col">Tech</th>
                <th scope="col">Priority</th>
                <th scope="col" style={{ width: "100px" }}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {projects &&
                projects.map((data, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{data.title_project}</td>
                    <td>{data.date_implemen}</td>
                    <td>{data.tech}</td>
                    <td>1</td>
                    <td>
                      <ProjectButton id={data._id} type="delete" />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
