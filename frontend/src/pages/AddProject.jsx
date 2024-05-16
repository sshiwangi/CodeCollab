import React, { useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function AddProject() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleAddProject = async () => {
    const response = await fetch(
      "http://localhost:8088/api/projects/addproject",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          description,
          githubLink,
        }),
      }
    );

    if (response.ok) {
      // Project added successfully
      console.log("Project added successfully");
      toast({
        title: "Project added successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      navigate("/dashboard/projects");
      // Optionally, you can redirect the user or show a success message
    } else {
      // Error occurred while adding project
      console.error("Error adding project:", response.statusText);
      // Optionally, you can show an error message to the user
    }
  };
  return (
    <DefaultLayout>
      <div>
        <div class="heading text-center font-bold text-2xl m-5 text-gray-800">
          Add New Project
        </div>

        <div className="editor mx-auto w-10/12 flex flex-col gap-2 text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
          <input
            className="title bg-gray-100 border border-gray-300 p-2  outline-none"
            spellCheck="false"
            placeholder="Title"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
            spellCheck="false"
            placeholder="Describe everything about your here"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <input
            className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
            spellCheck="false"
            placeholder="GitHub Link"
            type="text"
            value={githubLink}
            onChange={(e) => setGithubLink(e.target.value)}
          />

          <div className="buttons flex">
            {/* <div className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto">
              Cancel
            </div> */}
            <div
              onClick={handleAddProject}
              className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
            >
              Add Project
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default AddProject;
