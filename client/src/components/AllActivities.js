import React from 'react';
import AllActivityCard from './AllActivityCard';

// Dashboard
function AllActivities({ currentUser, activities }) {

  return (
    <div className="activity-feed">
        AllActivities/Dashboard
        {activities.map((activity) => (<AllActivityCard {...activity} activity={activity} comments={activity.comments} key={activity.id} />))}
    </div>
  );
}

export default AllActivities;