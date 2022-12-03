import React from "react";
import { NavLink } from "react-router-dom";

function SideBar({ currentUser }) {

  // variables for latest activity info
  // const activitiesByDate = currentUser?.activities?.slice().sort(function(a, b) {
  //   return new Date(b.date) - new Date(a.date);
  // })
  // const latestActivity = activitiesByDate?.slice(0,1)

  return (
    <div className="fixed rounded mt-16 pt-6 w-72 h-72 px-20 border-black border-2 bg-white">
      <div className="flex justify-center">
        <NavLink to="/myprofile">
          <img className="rounded-full h-16 w-16" src={currentUser.pro_pic}></img>
        </NavLink>
      </div>
      {/* <img src={currentUser.pro_pic}></img> */}
      <div>{currentUser.subscriber}</div>
      <div className="flex justify-center gap-1 text-2xl pt-8 leading-tight">
        <div className="bg-purple-400">{currentUser.first_name}</div>
        <div className="bg-purple-400">{currentUser.last_name}</div>
      </div>
      <div>
        <div>
          <NavLink to="/myactivities">
            <div>Activities</div>
            <div>{currentUser?.activities?.length}</div>
          </NavLink>
        </div>
      </div>
      {/* stretch goals
        <div>
          <div>Latest Activity</div>
          <div>{latestActivity[0]?.title} • {latestActivity[0]?.date}</div>
        </div>
        <div>{currentUser.following}</div>
        <div>{currentUser.followers}</div> */}
    </div>
  );
}

export default SideBar;
