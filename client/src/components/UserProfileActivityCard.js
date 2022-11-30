import React from 'react';
import { useHistory } from 'react-router-dom';

function UserProfileActivityCard({ athlete, activity, comments }) {

    const history = useHistory();

    console.log(activity)

  return (
    <div className="athlete-activity-card">
        <div className="pro-act-pic">
            <img src={athlete.pro_pic}></img>
        </div>
        <div className="pro-act-name">
            <div>{athlete.first_name} {athlete.last_name}</div>
        </div>
        <div className="pro-act-date">
            <div>{activity.date} at {activity.time}</div>
        </div>
        <div className="pro-act-sport">
            <div>{activity.sport}</div>
        </div>
        <div className="pro-act-title" onClick={(e) => {history.push(`/activities/${activity.id}`)}}>
            <h3>{activity.title}</h3>
        </div>
        <div className="pro-act-stats">
            <div>Distance</div>
            <div>{activity.distance}</div>
            {/* <div>Pace</div>
            <div>{activity.???}</div> */}
            <div>Time</div>
            <div>{activity.duration}</div>
        </div>
        <div className="pro-act-comment-section">
            {comments?.map((comment) => <div className="pro-act-comment" key={comment.id}>{comment.comment}</div>)}
        </div>
    </div>
  );
}

export default UserProfileActivityCard;