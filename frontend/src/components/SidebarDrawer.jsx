import React from "react";

function SidebarDrawer({ isOpen, closeDrawer }) {
  return (
    <div
      className={` text-white bg-blue-500 h-screen font-bold flex flex-col drawer w-1/4 ${
        isOpen ? "drawer-open bg-blue-500" : ""
      }`}
    >
      <div className="p-4">Logo</div>
      <label
        htmlFor="my-drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
        onClick={closeDrawer}
      ></label>
      <ul className="menu text-white p-4 w-full min-h-full bg-blue-500">
        {/* Sidebar content here */}
        <li>
          <a>Dashboard</a>
        </li>
        <li>
          <a>Projects</a>
        </li>
        <li>
          <a>Discussions</a>
        </li>
      </ul>
    </div>
  );
}

export default SidebarDrawer;
