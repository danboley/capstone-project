import React from 'react';

function ProfileActivityCard({ currentUser, activity, comments }) {

  return (
    <div className="profile-activity-card">
        <div className="pro-act-pic">
            <img src={currentUser.pro_pic}></img>
        </div>
        <div className="pro-act-name">
            <div>{currentUser.first_name} {currentUser.last_name}</div>
        </div>
        <div className="pro-act-date">
            <div>{activity.date} at {activity.time}</div>
        </div>
        <div className="pro-act-sport">
            <div>{activity.sport}</div>
        </div>
        <div className="pro-act-title">
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

export default ProfileActivityCard;