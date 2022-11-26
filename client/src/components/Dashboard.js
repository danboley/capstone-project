import React from 'react';
import AllActivities from './AllActivities';
import SideBar from './SideBar';

function Dashboard({ currentUser, activities }) {

  return (
    <div>
        <SideBar currentUser={currentUser} />
        <AllActivities currentUser={currentUser} activities={activities} />
    </div>
  );
}

export default Dashboard;