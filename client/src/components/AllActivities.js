import React from 'react';
import AllActivityCard from './AllActivityCard';

function AllActivities({ activities }) {

// activities.map((activity) => (
//     <AllActivityCard {...activity} activity={activity} key={activity.id} />
// ))

  return (
    <div>
        AllActivities/Dashboard
        {activities.map((activity) => (<AllActivityCard {...activity} activity={activity} key={activity.id} />))}
    </div>
  );
}

export default AllActivities;