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

  newDate = moment(new Date(date)).format('YYYY-MM-DD HH:mm:ss')



  return (
    <div className="p-6 m-12 rounded max-w-md min-w-md bg-white">
      <div className="">
        <div className="">
          <img className="h-10 w-10 rounded-full float-left" src={activity.user.pro_pic}></img>
          <div className="">
            {activity.user.subscriber}
          </div>
          <div className="pl-12" onClick={(e) => {history.push(`/athletes/${activity.user.id}`)}}>
            {activity.user.first_name} {activity.user.last_name}
            <br></br>
            {activity.date} at {activity.time} • {activity.location}
          </div>
        </div>
      </div>
      <div className="pt-4">
        <div className="float-left">{activity.sport}</div>
        <div className="pl-12" onClick={(e) => {history.push(`/activities/${activity.id}`)}}>{activity.title}</div>
        <div className="pl-12">{activity.description}</div>
        <div className="flex place-content-between pt-4 pr-4">
          <div className="pl-12">
            <label>Distance</label>
            <br></br>
            {activity.distance} mi
          </div>
          <div>
            <label>Elev Gain</label>
            <br></br>
            {activity.elevation} ft
          </div>
          <div>
            <label>Time</label>
            <br></br>
            {activity.duration}
          </div>
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
