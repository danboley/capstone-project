import React from "react";
import { NavLink } from "react-router-dom";

function SideBar({ currentUser }) {

  return (
    <div className="sidebar">
      <NavLink to="/myprofile">
        <img src={currentUser.pro_pic}></img>
      </NavLink>
      {/* <img src={currentUser.pro_pic}></img> */}
      <div>{currentUser.subscriber}</div>
      <div>{currentUser.first_name}</div>
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
