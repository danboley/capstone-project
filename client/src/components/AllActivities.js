import React from "react";
import AllActivityCard from "./AllActivityCard";

// Dashboard
function AllActivities({ currentUser, activities }) {
  return (
    <div className="grid px-32">
      <div className=" px-48">
        <div className="ml-2 mt-2 text-lg">
          <div className="hover:bg-white cursor-pointer w-max p-2">
            Following ▼
          </div>
        </div>
        <div className="-mt-1">
          {activities?.map((activity) => (
            <AllActivityCard
              {...activity}
              activity={activity}
              comments={activity.comments}
              key={activity.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllActivities;
