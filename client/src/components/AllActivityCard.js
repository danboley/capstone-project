import React from "react";

function AllActivityCard({ activity }) {
  console.log(activity);

  // function pace(activity) {
  //     return (
  //     (activity.duration) / (activity.distance)
  //     )
  // }

  return (
    <div>
      <img src={activity.user.pro_pic}></img>
      <div>
        {activity.user.subscriber}
      </div>
      <div>{activity.sport}</div>
      <div>
        {activity.user.first_name} {activity.user.last_name}
      </div>
      <div>
        {activity.date} at {activity.time}
      </div>
      <div>{activity.title}</div>
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
    </div>
  );
}

export default AllActivityCard;
