import React from "react";
import discussion from "../Images/discussion.jpg";
import chatelement from "../Images/chatselement.jpg";
import createproject from "../Images/createproject.jpg";

function Welcome() {
  return (
    <div class="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-5 py-5">
      <div class="bg-gradient-to-br from-indigo-500 to-purple-500 text-white rounded shadow-xl py-5 px-5 w-full lg:w-10/12 xl:w-3/4">
        <div class="flex flex-wrap -mx-3 items-center">
          <div class="w-full px-3 text-left">
            <div class="p-5 xl:px-8 md:py-5">
              <h3 class="text-2xl mb-5">
                Explore new possibilities, streamline collaboration, and build
                innovative projects with ease!
              </h3>
              <p class="text-md text-white mb-6">
                Revolutionize your coding experience with our collaborative
                platform, empowering developers to code together effortlessly.
              </p>
              <button class="text-white bg-black hover:opacity-80 py-2 px-4 rounded-md">
                Explore the app
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-8 py-5 px-5 w-full lg:w-10/12 xl:w-3/4">
        <div class="rounded-md shadow-sm cursor-pointer flex flex-col gap-2 border-2 border-gray-50 hover:border-violet-200 hover:border-2 transition-colors duration-300">
          <div class="flex flex-col justify-center items-center">
            <div className="h-[1/2] mb-3">
              <img src={createproject} w-full h-full alt="Discussion image" />
            </div>
            <div class="bg-black rounded-md flex flex-col justify-center items-center h-[1/2] p-2 ">
              <p class="text-white text-md font-bold mb-4">Create Projects</p>
              <p class="text-white text-md mb-4">
                Create projects and collaborate with others effortlessly.
              </p>
              <button class="text-black bg-white hover:opacity-80 py-2 px-4 rounded-md">
                Explore
              </button>
            </div>
          </div>
        </div>
        <div class="rounded-md shadow-sm cursor-pointer flex flex-col gap-2 border-2 border-gray-50 hover:border-violet-200 hover:border-2 transition-colors duration-300">
          <div class=" flex flex-col justify-center items-center">
            <div className="h-[1/2] mb-3">
              <img src={discussion} w-full h-full alt="Discussion image" />
            </div>
            <div class="bg-black rounded-md flex flex-col justify-center items-center h-[1/2] p-2 ">
              <p class="text-white text-md font-bold mb-4">Discussion board</p>
              <p class="text-white text-md mb-4 ">
                Stuck somewhere? Ask your doubts in the discussion section.
              </p>
              <button class="text-black bg-white hover:opacity-80 py-2 px-4 rounded-md">
                Explore
              </button>
            </div>
          </div>
        </div>
        <div class="rounded-md shadow-sm cursor-pointer flex flex-col gap-2 border-2 border-gray-50 hover:border-violet-200 hover:border-2 transition-colors duration-300">
          <div class=" flex flex-col justify-center items-center">
            <div className="h-[1/2] mb-3">
              <img src={chatelement} w-full h-full alt="Discussion image" />
            </div>
            <div class="bg-black rounded-md flex flex-col justify-center items-center  p-2 ">
              <p class="text-white text-md font-bold mb-4">Chats</p>
              <p class="text-white text-md mb-4">
                Chat with anyone one-to-one or in groups to solve your doubts.
              </p>
              <button class="text-black bg-white hover:opacity-80 py-2 px-4 rounded-md">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
