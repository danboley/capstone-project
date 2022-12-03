import React from "react";
import { NavLink } from "react-router-dom";

function SideBar({ currentUser }) {

  return (
    <div className="fixed mt-16 pt-6 w-2/12 h-1/3 mx-4 px-20 border-black border-2 bg-white">
      <NavLink to="/myprofile">
        <img className="rounded-full h-16 w-16" src={currentUser.pro_pic}></img>
      </NavLink>
      {/* <img src={currentUser.pro_pic}></img> */}
      <div>{currentUser.subscriber}</div>
      <div className="flex gap-1">
        <div className="bg-purple-400">{currentUser.first_name}</div>
        <div className="bg-purple-400">{currentUser.last_name}</div>
      </div>
      {/* stretch goals
        <div>{currentUser.following}</div>
        <div>{currentUser.followers}</div>
        <NavLink to="/myactivities"> My Activities </NavLink>
        <div>{currentUser.activities}</div>
        <div>{currentUser.activities.last}</div>
         */}
    </div>
  );
}

export default SideBar;
