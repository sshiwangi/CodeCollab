import React, { useEffect, useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import DiscussionCard from "../components/DiscussionCard";
import SearchBar from "../components/SearchBar";
import AddButton from "../components/AddButton";

function Discussions() {
  const [discussions, setDiscussions] = useState([]);

  useEffect(() => {
    const fetchDiscussions = async () => {
      try {
        const response = await fetch("http://localhost:8088/api/discussions");
        if (!response.ok) {
          throw new Error("Failed to fetch discussions");
        }
        const data = await response.json();
        setDiscussions(data);
      } catch (error) {
        console.error("Error fetching discussions:", error);
      }
    };

    fetchDiscussions();
  }, []);
  return (
    <DefaultLayout>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <SearchBar />
          <AddButton />
        </div>

        <div className="flex flex-col gap-4 justify-center">
          {discussions.map((discussion) => (
            <DiscussionCard
              key={discussion._id} // Assuming each discussion has a unique ID
              title={discussion.title}
              question={discussion.question}
              creatorId={discussion.creatorId}
            />
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Discussions;
