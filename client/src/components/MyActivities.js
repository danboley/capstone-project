import React from "react";
import MyActivitiesTable from "./MyActivitiesTable";

function MyActivities({ currentUser, activities, deleteActivity }) {
  const activitiesByDate = activities?.slice().sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });

  const activityRows = activitiesByDate?.map((activity) => {
    return (
      <MyActivitiesTable
        {...activity}
        activity={activity}
        key={activity.id}
        deleteActivity={deleteActivity}
      />
    );
  });

  return (
    <div className="pt-16 px-80 pb-12 bg-white">
      <div>
      <h1 className="flex text-4xl font-bold leading-10 mt-6">
        My Activities
      </h1>
      <br></br>
      {/* <Search /> */}
      {/* <Filter /> */}
      <div className="flex">
        <div>
          <table>
            <thead className="border-zinc-300 border-b-2 bg-gray-100">
              <tr className="table-row text-xs">
                <th className="table-cell p-2 text-left">Sport</th>
                <th className="table-cell px-4 py-2 text-center">Date</th>
                <th className="table-cell px-4 py-2 text-center">Title</th>
                <th className="table-cell px-4 py-2 text-center">Time</th>
                <th className="table-cell px-4 py-2 text-center">Distance</th>
                <th className="table-cell px-4 py-2 text-center">Elevation</th>
                {/* <th className="table-cell px-4 py-2 text-center">Relative Effort</th> */}
                <th className="table-cell px-4 py-2"></th>
                <th className="table-cell px-4 py-2"></th>
                <th className="table-cell px-4 py-2"></th>
              </tr>
            </thead>
            <tbody>{activityRows}</tbody>
          </table>
        </div>
      </div>
      </div>
    </div>
  );
}

export default MyActivities;
