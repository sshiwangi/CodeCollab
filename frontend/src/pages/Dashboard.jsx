import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import Welcome from "../components/Welcome";

function Dashboard() {
  return (
    <DefaultLayout>
      <div>
        <Welcome />
      </div>
    </DefaultLayout>
  );
}

export default Dashboard;
