import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import DiscussionCard from "../components/DiscussionCard";
import SearchBar from "../components/SearchBar";
import AddButton from "../components/AddButton";

function Discussions() {
  return (
    <DefaultLayout>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <SearchBar />
          <AddButton />
        </div>

        <div className="flex flex-col">
          <DiscussionCard />
          <DiscussionCard />
          <DiscussionCard />
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Discussions;
