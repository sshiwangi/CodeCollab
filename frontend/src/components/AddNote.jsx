import React, { useState } from "react";

function AddNote({ projectId }) {
  const [message, setMessage] = useState("");
  const userData = JSON.parse(localStorage.getItem("userInfo"));
  const userId = userData._id;

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(projectId);

    try {
      const response = await fetch(
        `http://localhost:8088/api/projects/${projectId}/request`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            note: message,
            userId: userId,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add note");
      }

      // Reset message field
      setMessage("");

      // Display success message
      document.getElementById("result").textContent = "Note added successfully";
    } catch (error) {
      console.error("Error adding note:", error);
      document.getElementById("result").textContent = "Failed to add note";
    }
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="flex absolute left-1/2 top-1/2 items-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto my-10 bg-white dark:bg-gray-800 p-5 rounded-md shadow-sm">
          <div className="text-center">
            <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
              Add Note
            </h1>
          </div>
          <div class="m-7">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  Your Message
                </label>

                <textarea
                  rows="5"
                  name="message"
                  id="message"
                  value={message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  required
                ></textarea>
              </div>
              <div class="mb-6">
                <button
                  type="submit"
                  className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                >
                  Send Message
                </button>
              </div>
              <p
                className="text-base text-center text-gray-400"
                id="result"
              ></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNote;
