"use client";
import React from "react";
import { FaPenAlt, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

interface ProjectButtonProps {
  id: string;
  type: string;
}

const ProjectButton: React.FC<ProjectButtonProps> = ({ id, type }) => {
  const handleDeleteProject = async () => {
    const resProject = await fetch(
      `${process.env.API_URL}/api/projects/?id=${id}`,
      {
        method: "DELETE",
      }
    );
    const response = await resProject.json();
    if (response.status === 200) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: response.message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  const handleUpdateProject = () => {};

  return (
    <>
      {type == "delete" ? (
        <button className="btn btn-danger" onClick={handleDeleteProject}>
          <FaTrash />
        </button>
      ) : (
        <button className="btn btn-danger" onClick={handleUpdateProject}>
          <FaPenAlt />
        </button>
      )}
    </>
  );
};

export default ProjectButton;
