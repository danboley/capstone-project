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
    <div className="p-6 m-12 rounded bg-white">
      <div className="px-6 pt-4 mt-0">
        <div className="flex">
          <img className="h-10 w-10 rounded-full" src={activity.user.pro_pic}></img>
          <div className="">
            {activity.user.subscriber}
          </div>
          <div className="px-6" onClick={(e) => {history.push(`/athletes/${activity.user.id}`)}}>
            {activity.user.first_name} {activity.user.last_name}
          </div>
        </div>
        <div className="px-16">
          {activity.date} at {activity.time} • {activity.location}
        </div>
      </div>
      <div className="px-6">
        <div className="">{activity.sport}</div>
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
      </div>
      <div>{activity.map}</div>
      
      {comments?.map((comment) => <div key={comment.id}>{comment.comment}</div>)}
      {/* <div>{activity.comments}</div> */}
    </div>
  );
}

export default AllActivityCard;
