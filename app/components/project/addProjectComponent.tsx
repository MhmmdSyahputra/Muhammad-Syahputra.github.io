"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";

export const AddProjectComponent = () => {
  const [dataProject, setDataProject] = useState({
    title_project: "",
    desc_project: "",
    location_implemen: "",
    date_implemen: "",
    tech: "",
    priority: "20",
    url_imgs: "",
  });
  const [loadingSubmit, setloadingSubmit] = useState(false);

  const handleSubmitProject = async () => {
    try {
      setloadingSubmit(true);
      const response = await fetch(`/api/projects/`, {
        method: "POST",
        body: JSON.stringify(dataProject),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      if (result.status === 201) {
        setloadingSubmit(false);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: result.message,
          showConfirmButton: false,
          timer: 1500,
        });
        setDataProject({
          title_project: "",
          desc_project: "",
          location_implemen: "",
          date_implemen: "",
          tech: "",
          priority: "20",
          url_imgs: "",
        });
      }
    } catch (error) {
      console.error("Error during POST request:", error);
    }
    setloadingSubmit(false);
  };
  return (
    <>
      <div className="project-add">
        <div className="h2">Add Project</div>
        <hr />
        <form onSubmit={() => handleSubmitProject()}>
          <div className="form-group mb-4">
            <label htmlFor="" className="mb-2">
              Title Project
            </label>
            <input
              required
              type="text"
              onChange={(e) =>
                setDataProject({
                  ...dataProject,
                  title_project: e.target.value,
                })
              }
              value={dataProject.title_project}
              className="form-control form-control-lg"
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="" className="mb-2">
              Description Project
            </label>
            <textarea
              onChange={(e) =>
                setDataProject({
                  ...dataProject,
                  desc_project: e.target.value,
                })
              }
              value={dataProject.desc_project}
              style={{ minHeight: "170px" }}
              className="form-control form-control-lg"
            />
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="form-group mb-4">
                <label htmlFor="" className="mb-2">
                  Location Implementation
                </label>
                <input
                  required
                  type="text"
                  onChange={(e) =>
                    setDataProject({
                      ...dataProject,
                      location_implemen: e.target.value,
                    })
                  }
                  value={dataProject.location_implemen}
                  className="form-control form-control-lg"
                />
              </div>
            </div>

            <div className="col-lg-3">
              <div className="form-group mb-4">
                <label htmlFor="" className="mb-2">
                  Date Imple/Devlop
                </label>
                <input
                  required
                  type="month"
                  onChange={(e) =>
                    setDataProject({
                      ...dataProject,
                      date_implemen: e.target.value,
                    })
                  }
                  value={dataProject.date_implemen}
                  className="form-control form-control-lg"
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group mb-4">
                <label htmlFor="" className="mb-2">
                  Tech
                </label>
                <input
                  required
                  type="text"
                  onChange={(e) =>
                    setDataProject({
                      ...dataProject,
                      tech: e.target.value,
                    })
                  }
                  value={dataProject.tech}
                  className="form-control form-control-lg"
                />
                <small className="ms-1 text-muted">Split with {"( , )"}</small>
              </div>
            </div>
            <div className="col-2">
              <div className="form-group mb-4">
                <label htmlFor="" className="mb-2">
                  Priority
                </label>
                <input
                  required
                  type="number"
                  onChange={(e) =>
                    setDataProject({
                      ...dataProject,
                      priority: e.target.value,
                    })
                  }
                  value={dataProject.priority}
                  className="form-control form-control-lg"
                />
              </div>
            </div>
            <div className="form-group mb-4">
              <label htmlFor="" className="mb-2">
                Images URL
              </label>
              <textarea
                onChange={(e) =>
                  setDataProject({
                    ...dataProject,
                    url_imgs: e.target.value,
                  })
                }
                value={dataProject.url_imgs}
                style={{ minHeight: "110px" }}
                className="form-control form-control-lg"
              />
              <small className="ms-1 text-muted">Split with {"( , )"}</small>
            </div>
            <div className="form-group mb-4">
              <button
                className={
                  loadingSubmit
                    ? "btn btn-lg btn-success w-50 disabled"
                    : "btn btn-lg btn-success w-50"
                }
              >
                {loadingSubmit ? (
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  "Simpan"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
