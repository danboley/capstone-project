import React from 'react';
import ProfileActivityCard from './ProfileActivityCard';

function MyProfile({ currentUser, activities }) {

  const activitiesByDate = activities?.slice().sort(function(a, b) {
    return new Date(b.date) - new Date (a.date);
  })

  // profile activities limited to 5
  const profileActivities = activitiesByDate?.slice(0, 5).map((activity) => {
    return (
      <ProfileActivityCard currentUser={currentUser} {...activity} activity={activity} key={activity.id} comments={activity.comments} />
    )});

  // today date variables
  const today = new Date();
  let yyyy = today.getFullYear();
  let mm = today.toLocaleString('default', { month: 'short' });
  let dd = today.getDate();

  // 7 days ago date variables
  const weekAgo = new Date(today);
  weekAgo.setDate(weekAgo.getDate() - 7);
  let yyyyOld = weekAgo.getFullYear();
  let mmOld = weekAgo.toLocaleString('default', { month: 'short' });
  let ddOld = weekAgo.getDate();

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
        <h2>Activities for {mmOld} {ddOld}, {yyyyOld} - {mm} {dd}, {yyyy}</h2>
      </div>
      <div>
        {profileActivities}
      </div>
    </div>
  );
}

export default MyProfile;