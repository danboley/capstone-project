import React from "react";
import { NavLink } from "react-router-dom";
import sub from "../pics/sub.png";
import moment from "moment";

function SideBar({ currentUser }) {
  // latest activity ...
  const activitiesByDate = currentUser?.activities
    ?.slice()
    .sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });
  const latestActivity = activitiesByDate?.slice(0, 1)[0];
  const latestActivityTitle = latestActivity?.title;
  const latestActivityDate = moment(latestActivity?.date).format(
    "MMMM, D YYYY"
  );

  return (
    <div className="fixed rounded mt-16 pt-6 w-72 h-72 px-20 bg-white">
      <div className="fixed top-20">
        <NavLink to="/myprofile">
          <img
            className="rounded-full mt-1 ml-8 h-16 w-16 object-cover"
            src={currentUser.pro_pic}
          ></img>
        </NavLink>
        {currentUser.subscriber ? (
          <img className="w-6 h-6 fixed left-56 top-20" src={sub}></img>
        ) : null}
      </div>
      <div className="justify-center text-2xl hover:text-sky-600 cursor-pointer mt-8 mb-4 leading-tight">
        <NavLink to="/myprofile">
          <div className="flex gap-2 ">
            <div>{currentUser.first_name}</div>
            <div>{currentUser.last_name}</div>
          </div>
        </NavLink>
      </div>
      <div className="pt-2 flex justify-center">
        <div className="text-xl px-4 border-r border-gray-100">
          <label className="text-xs text-neutral-600">Following</label>
          <br></br>
          {/* <div className="ml-4 ">{currentUser?.following?.length}</div> */}
          <div className="ml-4 hover:text-sky-600 cursor-pointer">12</div>
        </div>

        <div className="text-xl px-4 border-r border-gray-100">
          <label className="text-xs text-neutral-600">Followers</label>
          <br></br>
          {/* <div className="ml-4">{currentUser?.followers?.length}</div> */}
          <div className="ml-4 hover:text-sky-600 cursor-pointer">10</div>
        </div>

        <div className="text-xl px-4">
          <NavLink to="/myactivities">
            <label className="text-xs text-neutral-600">Activities</label>
            <br></br>
            <div className="ml-4 hover:text-sky-600 cursor-pointer">
              {currentUser?.activities?.length}
            </div>
          </NavLink>
        </div>
      </div>
      <div className="-ml-16">
        <div className="mt-4 pt-4">
          <div className="text-xs left-8">Latest Activity</div>
          <div className="pt-2 gap-1 text-black hover:text-orange-600 cursor-pointer">
            <div className="text-sm">
              {latestActivityTitle} • {latestActivityDate}
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
