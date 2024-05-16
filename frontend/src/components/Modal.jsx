import React, { useState } from "react";

function Modal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div class="bg-gray-100 p-4 flex items-center justify-center h-screen">
        <div x-data="{ showModal: true }">
          <button
            onClick={(showModal = true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Create New Project
          </button>

          <div
            x-show="showModal"
            className="fixed inset-0 flex items-center justify-center z-50"
          >
            <div className="bg-white rounded-lg p-6 w-96 max-w-full shadow-lg transform transition-all duration-300">
              <div className="flex justify-between items-center border-b-2 border-gray-200 pb-4">
                <h2 className="text-2xl font-semibold">
                  Create or Import Project
                </h2>
                <button
                  onClick={(showModal = false)}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-x"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              <div className="mt-6 space-y-4">
                <p className="text-lg text-gray-600">
                  Choose how you want to create or import a project:
                </p>
                <div className="flex flex-col space-y-4">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                    Create New Project
                  </button>
                  <button className="flex items-center justify-center gap-2 bg-gray-900 text-gray-100 px-4 py-2 rounded-lg hover:bg-black transition duration-300">
                    <img src="https://svgur.com/i/yp2.svg" alt="Github Icon" />
                    Import from GitHub
                  </button>
                </div>
              </div>

              <div className="mt-6 text-sm text-gray-500">
                <p>
                  Create a new project from scratch or import an existing
                  project from your GitHub repository.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/alpinejs@2.8.2/dist/alpine.min.js"
        defer
      ></script>
    </div>
  );
}

export default Modal;
