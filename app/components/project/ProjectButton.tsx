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
    const resProject = await fetch(`/api/projects/?id=${id}`, {
      method: "DELETE",
      next: { revalidate: 3600 },
    });
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
