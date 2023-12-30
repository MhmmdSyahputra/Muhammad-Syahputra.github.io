"use client";
import React, { useState } from "react";
const AddSkillComponent = () => {
  const [dataSkill, setdataSkill] = useState({
    skill: "",
    file: null,
  });
  const handleFileChange = (e: any) => {
    const file = e.target.files && e.target.files[0];
    setdataSkill({ ...dataSkill, file: file });
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("skill", dataSkill.skill);

    if (dataSkill.file) {
      formData.append("file", dataSkill.file);
    }

    try {
      const response = await fetch(`/api/skills/`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      console.log("Response data:", result);

      setdataSkill({ skill: "", file: null });
    } catch (error) {
      console.error("Error during POST request:", error);
    }
  };
  return (
    <>
      <div className="h3">Add Skill</div>
      <hr />
      <div className="skill-add mb-5">
        <div className="form-group mb-4">
          <label htmlFor="" className="mb-2">
            Name Skill
          </label>
          <input
            type="text"
            onChange={(e) =>
              setdataSkill({ ...dataSkill, skill: e.target.value })
            }
            value={dataSkill.skill}
            className="form-control form-control-lg"
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="" className="mb-2">
            Icon
          </label>
          <input
            type="file"
            onChange={handleFileChange}
            className="form-control form-control-lg"
          />
          <small className="text-muted">size 256 x 256</small>
        </div>
        <div className="form-group mb-4">
          <button className="btn btn-lg btn-success" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default AddSkillComponent;
