import React from "react";
import { useHistory } from "react-router-dom";

function AllActivityCard({ activity, comments }) {
  const history = useHistory();

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
      <div onClick={(e) => {history.push(`/activities/${activity.id}`)}}>{activity.title}</div>
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
      
      {comments?.map((comment) => <div key={comment.id}>{comment.comment}</div>)}
      {/* <div>{activity.comments}</div> */}
    </div>
  );
}

export default AllActivityCard;
