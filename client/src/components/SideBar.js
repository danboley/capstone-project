import React from "react";
import { NavLink } from "react-router-dom";
import sub from "../pics/sub.png";

function SideBar({ currentUser }) {

  // variables for latest activity info
  // const activitiesByDate = currentUser?.activities?.slice().sort(function(a, b) {
  //   return new Date(b.date) - new Date(a.date);
  // })
  // const latestActivity = activitiesByDate?.slice(0,1)

  return (
    <div className="fixed rounded mt-16 pt-6 w-72 h-72 px-20 bg-white">
      <div className="flex">
        <NavLink to="/myprofile">
          <img className="rounded-full ml-8 h-16 w-16" src={currentUser.pro_pic}></img>
        </NavLink>
        {currentUser.subscriber? <img className="w-6 h-6" src={sub}></img> : null}
      </div>
      <div className="flex justify-center gap-2 text-2xl pt-8 pb-2 leading-tight">
        <div className="">{currentUser.first_name}</div>
        <div className="">{currentUser.last_name}</div>
      </div>

      <div className="pt-2 flex justify-center">
        <div className="text-xl px-4 border-r-2 border-gray-100">
        <label className="text-xs">Following</label>
        <br></br>
        {/* <div className="ml-4 ">{currentUser?.following?.length}</div> */}
        <div className="ml-4 ">10</div>
        </div>

        <div className="text-xl px-4 border-r-2 border-gray-100">
        <label className="text-xs">Followers</label>
        <br></br>
        {/* <div className="ml-4">{currentUser?.followers?.length}</div> */}
        <div className="ml-5">9</div>
        </div>

        <div className="text-xl px-4">
          <NavLink to="/myactivities">
            <label className="text-xs">Activities</label>
            <br></br>
            <div className="ml-4">{currentUser?.activities?.length}</div>
          </NavLink>
        </div>
      </div>
      <div className="flex justify-center mt-4 pt-4 border-t-2 border-gray-100">
        <div>Latest Activity</div>
        {/* <div>{latestActivity[0]?.title} • {latestActivity[0]?.date}</div> */}
      </div>
    </div>
  );
}

export default SideBar;
