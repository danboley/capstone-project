import React from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";
import sub from '../pics/sub.png'

function ProfileActivityCard({ currentUser, activity, comments }) {
  const history = useHistory();

    // Time ...
  const time = activity.time;
  const newTime = moment(time).format("h:mm a");

    // Date ...
  const date = activity.date;
  function newDate(date) {
    if (date?.slice(8, 10) == new Date().getDate()) {
      return "Today";
    } else if (date?.slice(8, 10) == new Date().getDate() - 1) {
      return "Yesterday";
    } else {
      return moment(date).format("MMMM D, YYYY");
    }
  }

    // Duration ...
  let duration = (activity.duration)
  function newDuration(duration) {
    if (0 == duration.slice(0,2)) {
      return duration?.slice(4)
    } else {
      return duration
    }
  }

  return (
<div className="p-6 m-4 rounded max-w-3xl min-w-3xl bg-white">
      <div className="pb-6 border-gray-100 border-b-2">
      <div className="">
        <div className="">
          <div className="float-left">
          <img className="h-10 w-10 rounded-full float-left cursor-pointer" src={currentUser.pro_pic} onClick={(e) => {history.push(`/athletes/${activity.user.id}`)}}></img>
            {currentUser.subscriber ? <img className="h-4 w-4 mr-2" src={sub}></img> : null}
          </div>
          <div className="pl-16">
            <p className="text-sm font-semibold hover:text-sky-600 cursor-pointer" onClick={(e) => {history.push(`/athletes/${activity.user.id}`)}}>{currentUser.first_name} {currentUser.last_name}</p>
            <p className="text-xs text-zinc-500">{newDate(date)} at {newTime} • {activity.location}</p>
          </div>
        </div>
      </div>
      <div className="pt-4">
        <div className="float-left text-xs">{activity.sport}</div>
        <div className="pl-16 font-bold text-xl hover:text-sky-600 cursor-pointer" onClick={(e) => {history.push(`/activities/${activity.id}`)}}>
          <p>{activity.title}</p>
          </div>
        <div className="pl-16 text-sm">{activity.description}</div>
        <div className="flex pt-4 pr-36">
          <div className="pl-16 text-xl pr-6 border-r-2 border-gray-100">
            <label className="text-xs text-zinc-500">Distance</label>
            <br></br>
            {activity.distance} mi
          </div>
          <div className="text-xl px-6 border-r-2 border-gray-100">
            <label className="text-xs text-zinc-500">Elev Gain</label>
            <br></br>
            {activity.elevation} ft
          </div>
          <div className="text-xl pl-6">
            <label className="text-xs text-zinc-500">Time</label>
            <br></br>
            {newDuration(duration)}
          </div>
        </div>
        {/* <div>
              <label>Pace</label>
              {} /mi
          </div> */}
      </div>
      {/* <div>{activity.map}</div> */}
      </div>
      <div className="">
        {comments?.map((comment) => <div className="pt-2 pl-8 mt-4" key={comment.id}>{comment?.user?.name} {comment.comment}</div>)}
      </div>
    </div>
  );
}

export default ProfileActivityCard;
