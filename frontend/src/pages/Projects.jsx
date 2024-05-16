import React, { useEffect, useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import AddNote from "../components/AddNote";
import { useNavigate } from "react-router-dom";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [showNote, setShowNote] = useState(false);
  const [currentProjectId, setCurrentProjectId] = useState(null);
  const navigate = useNavigate();

  const handleNoteShow = (projectId) => {
    setShowNote(true);
    setCurrentProjectId(projectId);
  };
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch("http://localhost:8088/api/projects");
      if (!response.ok) {
        throw new Error("Failed to fetch projects");
      }
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };
  return (
    <DefaultLayout>
      <div className="bg-gradient-to-r from-violet-100 relative to-indigo-100 flex items-center justify-center h-screen">
        <div className="w-full sm:w-full md:w-full lg:w-full backdrop-blur-sm bg-white/40 p-6 rounded-lg shadow-sm border-violet-200 border h-full">
          <div className="w-full flex justify-between items-center p-3">
            <h2 className="text-xl font-semibold">My Project</h2>
            <button
              id="openModalBtn"
              onClick={() => navigate("/dashboard/projects/addproject")}
              class="flex items-center bg-gradient-to-r from-violet-300 to-indigo-300  border border-fuchsia-00 hover:border-violet-100 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300"
            >
              <svg
                className="w-4 h-4 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
              <p className="text-white">New Project</p>
            </button>
          </div>
          <div className="w-full flex justify-center p-1 mb-4">
            <div className="relative w-full">
              <input
                type="text"
                class="w-full backdrop-blur-sm bg-white/20 py-2 pl-10 pr-4 rounded-lg focus:outline-none border-2 border-gray-100 focus:border-violet-300 transition-colors duration-300"
                placeholder="Search..."
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {projects.map((project) => (
              <div
                key={project._id}
                className="backdrop-blur-sm bg-white/20 p-6 rounded-md shadow-sm cursor-pointer flex flex-col gap-2 border-2 border-gray-50 hover:border-violet-200 hover:border-2 transition-colors duration-300"
              >
                <h2 className="text-xl font-semibold mb-4">{project.name}</h2>
                <p className="text-gray-700">{project.description}</p>
                {project.githubLink && (
                  <p>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500"
                    >
                      GitHub Link
                    </a>
                  </p>
                )}
                {project.contributors.length > 0 && (
                  <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-4 xl:mt-4">
                    <div className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
                      {project.contributors.map((contributor) => (
                        <img
                          key={contributor._id}
                          src={contributor.avatarUrl}
                          alt={contributor.name}
                          className="w-6 h-6 rounded-full bg-violet-100"
                          loading="lazy"
                        />
                      ))}
                    </div>
                  </div>
                )}
                <button
                  onClick={() => handleNoteShow(project._id)}
                  className="flex items-center justify-center bg-gradient-to-r from-violet-300 to-indigo-300  border border-fuchsia-00 hover:border-violet-100 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300"
                >
                  Request Collaboration
                </button>
              </div>
            ))}
            {/* {projects.map((project)=> (

            
            <div className="backdrop-blur-sm bg-white/20 p-6 rounded-md shadow-sm cursor-pointer border-2 border-gray-50 hover:border-violet-200 hover:border-2 transition-colors duration-300">
              <h2 className="text-xl font-semibold mb-4">Project 1</h2>
              <p className="text-gray-700">
                Description of Project 2 goes here. You can provide more details
                about the project.
              </p>
              <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-4 xl:mt-4">
                <div className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
                  <img
                    src="https://placekitten.com/48/48"
                    alt=""
                    class="w-6 h-6 rounded-full bg-violet-100"
                    loading="lazy"
                  />
                  <img
                    src="https://placekitten.com/49/49"
                    alt=""
                    class="w-6 h-6 rounded-full bg-violet-100"
                    loading="lazy"
                  />
                  <img
                    src="https://placekitten.com/50/50"
                    alt=""
                    class="w-6 h-6 rounded-full bg-violet-100"
                    loading="lazy"
                  />
                  <img
                    src="https://placekitten.com/51/51"
                    alt=""
                    class="w-6 h-6 rounded-full bg-violet-100"
                    loading="lazy"
                  />
                  <img
                    src="https://placekitten.com/52/52"
                    alt=""
                    class="w-6 h-6 rounded-full bg-violet-100"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            ))} */}

            {/* <div className="backdrop-blur-sm bg-white/20 p-6 rounded-md shadow-sm cursor-pointer border-2 border-gray-50 hover:border-violet-200 hover:border-2 transition-colors duration-300">
              <h2 className="text-xl font-semibold mb-4">Project 2</h2>
              <p className="text-gray-700">
                Description of Project 2 goes here. You can provide more details
                about the project.
              </p>
              <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-4 xl:mt-4">
                <div className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
                  <img
                    src="https://placekitten.com/48/48"
                    alt=""
                    class="w-6 h-6 rounded-full bg-violet-100"
                    loading="lazy"
                  />
                  <img
                    src="https://placekitten.com/49/49"
                    alt=""
                    class="w-6 h-6 rounded-full bg-violet-100"
                    loading="lazy"
                  />
                  <img
                    src="https://placekitten.com/50/50"
                    alt=""
                    class="w-6 h-6 rounded-full bg-violet-100"
                    loading="lazy"
                  />
                  <img
                    src="https://placekitten.com/51/51"
                    alt=""
                    class="w-6 h-6 rounded-full bg-violet-100"
                    loading="lazy"
                  />
                  <img
                    src="https://placekitten.com/52/52"
                    alt=""
                    class="w-6 h-6 rounded-full bg-violet-100"
                    loading="lazy"
                  />
                </div>
              </div>
            </div> */}

            {/* <div className="backdrop-blur-sm bg-white/20 p-6 rounded-md shadow-sm cursor-pointer border-2 border-gray-50 hover:border-violet-200 hover:border-2 transition-colors duration-300">
              <h2 className="text-xl font-semibold mb-4">Project 3</h2>
              <p className="text-gray-700">
                Description of Project 2 goes here. You can provide more details
                about the project.
              </p>
              <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-4 xl:mt-4">
                <div className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
                  <img
                    src="https://placekitten.com/48/48"
                    alt=""
                    class="w-6 h-6 rounded-full bg-violet-100"
                    loading="lazy"
                  />
                  <img
                    src="https://placekitten.com/49/49"
                    alt=""
                    class="w-6 h-6 rounded-full bg-violet-100"
                    loading="lazy"
                  />
                  <img
                    src="https://placekitten.com/50/50"
                    alt=""
                    class="w-6 h-6 rounded-full bg-violet-100"
                    loading="lazy"
                  />
                  <img
                    src="https://placekitten.com/51/51"
                    alt=""
                    class="w-6 h-6 rounded-full bg-violet-100"
                    loading="lazy"
                  />
                  <img
                    src="https://placekitten.com/52/52"
                    alt=""
                    class="w-6 h-6 rounded-full bg-violet-100"
                    loading="lazy"
                  />
                </div>
              </div>
            </div> */}

            {/* <div className="backdrop-blur-sm bg-white/20 p-6 rounded-md shadow-sm cursor-pointer border-2 border-gray-50 hover:border-violet-200 hover:border-2 transition-colors duration-300">
              <h2 className="text-xl font-semibold mb-4">Project 4</h2>
              <p className="text-gray-700">
                Description of Project 2 goes here. You can provide more details
                about the project.
              </p>
              <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-4 xl:mt-4">
                <div className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
                  <img
                    src="https://placekitten.com/48/48"
                    alt=""
                    class="w-6 h-6 rounded-full bg-violet-100"
                    loading="lazy"
                  />
                  <img
                    src="https://placekitten.com/49/49"
                    alt=""
                    class="w-6 h-6 rounded-full bg-violet-100"
                    loading="lazy"
                  />
                  <img
                    src="https://placekitten.com/50/50"
                    alt=""
                    class="w-6 h-6 rounded-full bg-violet-100"
                    loading="lazy"
                  />
                  <img
                    src="https://placekitten.com/51/51"
                    alt=""
                    class="w-6 h-6 rounded-full bg-violet-100"
                    loading="lazy"
                  />
                  <img
                    src="https://placekitten.com/52/52"
                    alt=""
                    class="w-6 h-6 rounded-full bg-violet-100"
                    loading="lazy"
                  />
                </div>
              </div>
            </div> */}
          </div>
        </div>
        {showNote && <AddNote projectId={currentProjectId} />}
        <div
          id="myModal"
          className="fixed inset-0 z-10 overflow-hidden backdrop-blur-lg hidden flex items-center justify-center transition-transform duration-300"
        >
          <div className="modal-container p-6 backdrop-blur-sm bg-white/90 w-11/12 sm:w-11/12 md:w-8/12 lg:w-6/12 rounded-md shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">Create New Project</h2>
            <label
              for="projectName"
              class="block text-sm font-medium text-gray-700 mb-2"
            >
              Project Name
            </label>
            <input
              type="text"
              id="projectName"
              class="w-full p-2 mb-4 rounded-lg focus:outline-none border-2 border-gray-100 focus:border-violet-300 transition-colors duration-300"
            />

            <div className="lg:flex">
              <div className="lg:w-1/2 lg:pr-4">
                <label
                  for="projectDescription"
                  class="block text-sm font-medium text-gray-700 mb-2"
                >
                  Description
                </label>
                <input
                  id="projectDescription"
                  class="w-full p-2 mb-4 rounded-lg focus:outline-none border-2 border-gray-100 focus:border-violet-300 transition-colors duration-300"
                ></input>
              </div>
              <div className="lg:w-1/2">
                <label
                  for="inviteFriend"
                  class="block text-sm font-medium text-gray-700 mb-2"
                >
                  Invite Friend
                </label>
                <input
                  type="text"
                  id="inviteFriend"
                  class="w-full p-2 mb-4 rounded-lg focus:outline-none border-2 border-gray-100 focus:border-violet-300 transition-colors duration-300"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                className="bg-gradient-to-r from-violet-300 to-indigo-300  border border-fuchsia-00 hover:border-violet-100 text-white font-semibold py-2 px-4 rounded-md mr-2"
                onclick="createProject()"
              >
                Create
              </button>
              <button
                className="bg-gradient-to-r from-gray-100 to-slate-200  border border-fuchsia-00 hover:border-violet-100 text-gray-800 font-semibold py-2 px-4 rounded-md transition-colors duration-300"
                onclick="closeModal()"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Projects;
