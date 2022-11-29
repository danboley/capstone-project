import React from 'react';

function ProfileActivityCard({ currentUser, activity, comments }) {

    console.log(activity)

  return (
    <div className="profile-activity-card">
        <div>
            <img src={currentUser.pro_pic}></img>
        </div>
        <div>{currentUser.first_name} {currentUser.last_name}</div>
        <div>{activity.date} at {activity.time}</div>
        <div>{activity.sport}</div>
        <div>
            <h3>{activity.title}</h3>
        </div>
        <div>
            <div>Distance</div>
            <div>{activity.distance}</div>
            {/* <div>Pace</div>
            <div>{activity.???}</div> */}
            <div>Time</div>
            <div>{activity.duration}</div>
        </div>
    </div>
  );
}

export default ProfileActivityCard;