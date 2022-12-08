import React from "react";
import AllActivityCard from "./AllActivityCard";
import arrow2 from "../pics/arrow2.png";

// Dashboard
function AllActivities({ currentUser, activities }) {
  return (
    <div className="grid ml-4 px-24">
      <div className=" ml-48">
        <div className="ml-2 mt-2 text-lg">
          <div className="hover:bg-white cursor-pointer w-max p-2 flex">
            <div className="pr-1">Following</div>
            <img className="h-3 bg-blue-400 mt-2" src={arrow2}></img>
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
