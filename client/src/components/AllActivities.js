import React from 'react';
import AllActivityCard from './AllActivityCard';

// Dashboard
function AllActivities({ currentUser, activities }) {

  return (
      <div className="grid px-48">
        <div className="mt-5 px-48">
        <div className="ml-4 text-lg">Following ▼</div>
        {activities?.map((activity) => (<AllActivityCard {...activity} activity={activity} comments={activity.comments} key={activity.id} />))}
        </div>
      </div>
  );
}

export default AllActivities;