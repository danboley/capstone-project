import React from 'react';
import AllActivities from './AllActivities';
import SideBar from './SideBar';

function Dashboard({ currentUser, activities }) {

  return (
    <div className="mt-14 mx-72 bg-gray-100">
      <div>
        <SideBar currentUser={currentUser} />
        <AllActivities currentUser={currentUser} activities={activities} />
      </div>  
    </div>
  );
}

export default Dashboard;