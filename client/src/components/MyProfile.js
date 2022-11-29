import React from 'react';
import ProfileActivityCard from './ProfileActivityCard';

function MyProfile({ currentUser, activities }) {

  const profileActivities = activities?.map((activity) => {
    return (
      <ProfileActivityCard {...activity} activity={activity} key={activity.key} comments={activity.comments} />
    );
  });

  console.log(currentUser)

  return (
    <div className="my-profile">
      <div className="profile-header">
        <div>
          <img src={currentUser.pro_pic}></img>
        </div>
        <div>
          <h1>{currentUser.first_name} {currentUser.last_name}</h1>
        </div>
        {currentUser.subscriber? <div>"Subscriber"</div> : null}
        <div>
          {currentUser.location}
        </div>
      </div>
      <div className="profile-activities">
        <h2>Activities for (week ago) - (today)</h2>
      </div>
    </div>
  );
}

export default MyProfile;