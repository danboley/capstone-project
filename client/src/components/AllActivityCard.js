import React from "react";

function AllActivityCard({ activity, comments }) {
  console.log(activity);

  // function pace(activity) {
  //     return (
  //     (activity.duration) / (activity.distance)
  //     )
  // }

//   console.log(comments.map((comment) => comment.comment))

  return (
    <div className="pub-activity-card">
      <img src={activity.user.pro_pic}></img>
      <div>
        {activity.user.subscriber}
      </div>
      <div>{activity.sport}</div>
      <div>
        {activity.user.first_name} {activity.user.last_name}
      </div>
      <div>
        {activity.date} at {activity.time} • {activity.location}
      </div>
      <div>{activity.title}</div>
      <div>{activity.description}</div>
      <div>
        <label>Distance</label>
        {activity.distance} mi
      </div>
      <div>
        <label>Elev Gain</label>
        {activity.elevation} ft
      </div>
      <div>
        <label>Time</label>
        {activity.duration}
      </div>
      {/* <div>
            <label>Pace</label>
            {} /mi
        </div> */}
      <div>{activity.map}</div>
      
      {comments?.map((comment) => <div>{comment.comment}</div>)}
      {/* <div>{activity.comments}</div> */}
    </div>
  );
}

export default AllActivityCard;
