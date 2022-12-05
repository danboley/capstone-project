import React from 'react';
import AllActivityCard from './AllActivityCard';

// Dashboard
function AllActivities({ currentUser, activities }) {

  return (
      <div className="grid pl-48 bg-yellow-200">
        {/* <div className="float-left">Followers ▼</div> */}
        <div className="bg-red-500 px-48">
        {activities?.map((activity) => (<AllActivityCard {...activity} activity={activity} comments={activity.comments} key={activity.id} />))}
        </div>
      </div>
  );
}

export default AllActivities;