import React from "react";
import { useHistory } from "react-router-dom";
import moment from 'moment';
import sub from "../pics/sub.png";
import arrow from "../pics/arrow.png";

function AllActivityCard({ activity, comments }) {
  const history = useHistory();

  // pace ...
  // const duration = (activity.duration)
  // console.log(duration)
  // const distance = (activity.distance)
  // console.log(distance)

  // function convertHourstoMinute(duration) {
  //   let [hours, minutes, seconds] = duration?.split(':');
  //   return (+hours * 60) + (+minutes);
  // }

  // console.log(convertHourstoMinute(duration)/60)


  // function paceCalc(duration, distance) {
  //   const pace = (duration) / (distance)
  //   return pace
  //   console.log(pace)
  // }

  // paceCalc(duration, distance)

  // date and time ...
  let date = (activity.date)
  let time = (activity.time)

  function newDate(date) {
    if (date.slice(8,10) == new Date().getDate()) {
      return "Today"
    }
    else if (date.slice(8,10) == new Date().getDate() - 1) {
      return "Yesterday"
    } else {
      return moment(date).format("MMMM D, YYYY")
    }
  }

  function newTime(time) {
    return moment(time).format('h:mm a')
  }

  // duration ...
  let duration = (activity.duration)
  function newDuration(duration) {
    if (0 == duration.slice(0,2)) {
      return duration?.slice(4)
    } else {
      return duration
    }
  }

  return (
    <div className="p-6 m-4 rounded max-w-xl min-w-xl bg-white">
      <div className="pb-6 border-gray-100 border-b">
      <div className="">
        <div className="">
          <div className="float-left">
          <img className="h-10 w-10 rounded-full float-left cursor-pointer" src={activity.user.pro_pic} onClick={(e) => {history.push(`/athletes/${activity.user.id}`)}}></img>
            {activity.user.subscriber ? <img className="h-4 w-4 mr-2" src={sub}></img> : null}
          </div>
          <div className="pl-16">
            <img src={arrow} className="h-3 float-right"></img>
            <p className="text-sm font-semibold hover:text-sky-600 cursor-pointer" onClick={(e) => {history.push(`/athletes/${activity.user.id}`)}}>{activity.user.first_name} {activity.user.last_name}</p>
            <p className="text-xs text-zinc-500">{newDate(date)} at {newTime(time)} • {activity.location}</p>
          </div>
        </div>
      </div>
      <div className="pt-4">
        <div className="float-left text-xs">{activity.sport}</div>
        <div className="pl-16 font-bold text-xl hover:text-sky-600 cursor-pointer" onClick={(e) => {history.push(`/activities/${activity.id}`)}}>
          <p>{activity.title}</p>
          </div>
        <div className="pl-16 text-sm">{activity.description}</div>
        <div className="flex pt-4">
          <div className="pl-16 text-xl pr-6 border-r border-gray-100">
            <label className="text-xs text-zinc-500">Distance</label>
            <br></br>
            {activity.distance} mi
          </div>
          <div className="text-xl px-6 border-r border-gray-100">
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

export default AllActivityCard;
