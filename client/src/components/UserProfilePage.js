import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import UserProfileActivityCard from './UserProfileActivityCard';

function UserDetailPage() {
  const [athlete, setAthlete] = useState([])
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(`/users/${id}`)
      .then((res) => res.json())
      .then((data) => setAthlete(data));
  }, []);

  // profile activities limited to 5
  const athleteActivities = athlete.activities?.slice(-5).map((activity) => {
    return (
      <UserProfileActivityCard athlete={athlete} {...activity} activity={activity} key={activity.id} comments={athlete.comments} />
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
    <div className="user-profile">
      <div className="profile-header">
        <div>
          <img src={athlete.pro_pic}></img>
        </div>
        <div>
          <h1>{athlete.first_name} {athlete.last_name}</h1>
        </div>
        {athlete.subscriber? <div>"Subscriber"</div> : null}
        <div>
          {athlete.location}
        </div>
      </div>
      <div className="profile-activities">
        <h2>Activities for {mmOld} {ddOld}, {yyyyOld} - {mm} {dd}, {yyyy}</h2>
      </div>
      <div>
        {athleteActivities}
      </div>
    </div>
  );
}

export default UserDetailPage;