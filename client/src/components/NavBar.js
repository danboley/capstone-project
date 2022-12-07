import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import arrow from "../pics/arrow.png";
import strava from "../pics/strava.png";

function NavBar({ currentUser, updateUser }) {
  const [isLoading, setIsLoading] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const history = useHistory();

  const handleLogOut = () => {
    setIsLoading(true);
    fetch(`logout`, {
      method: "DELETE",
    }).then((res) => {
      setIsLoading(false);
      if (res.ok) {
        setDropdown((prev) => !prev);
        updateUser(false);
        history.push(`/login`);
      }
    });
  };

  function handleDropdown() {
    setDropdown((prev) => !prev);
  }

  return (
    <header
      id="global-header"
      className="fixed top-0 left-0 right-0  bg-gray-100 h-14 leading-4 text-sm z-10"
    >
      <div className="h-14 relative border-b bg-white border-gray-100 px-72">
        {currentUser ? (
          <div className="">
            <div className="ml-5 float-left relative h-14 flex">
              <div className="h-8 w-32 float-left flex justify-center">
                <NavLink className="pr-1 m-3" to="/dashboard">
                  <img
                    className="h-auto w-24 mt-1 mr-1 p-0"
                    src={strava}
                    alt="logo"
                  ></img>
                </NavLink>
              </div>
              <div className="flex">
                <div className="flex px-4 justify-center">
                  <NavLink
                    className="h-full text-neutral-600 focus:text-black hover:text-orange-600 pr-1 m-5"
                    to="/dashboard"
                  >
                    {" "}
                    Dashboard{" "}
                  </NavLink>
                </div>
                <div className="flex justify-center">
                  <NavLink
                    className="h-full text-neutral-600 focus:text-black hover:text-orange-600 pr-1 m-5"
                    to="/myactivities"
                  >
                    {" "}
                    My Activities{" "}
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="h-14 float-right">
              <div className="flex float-right">
                <NavLink
                  className="h-full text-neutral-600 hover:text-orange-600"
                  to="/myprofile"
                >
                  <img
                    className="rounded-full h-8 w-8 mt-3"
                    src={currentUser.pro_pic}
                  ></img>
                </NavLink>
                <div>
                  <img
                    className=" text-neutral-600 hover:text-orange-600 focus:text-black pr-1 px-2 ml-1 my-5 h-3"
                    onClick={handleDropdown}
                    src={arrow}
                  ></img>
                  {dropdown ? (
                    <div className="pt-1">
                      <div className="py-3 px-4 bg-white border-solid border-gray-100 border-x-2 border-t hover:bg-slate-50">
                        <NavLink
                          className="h-full text-neutral-600 hover:text-orange-600"
                          to="/myprofile"
                          onClick={handleDropdown}
                        >
                          My Profile
                        </NavLink>
                      </div>
                      <div className="py-3 px-4 h-full text-neutral-600 hover:text-orange-600 cursor-pointer flex bg-white border-solid border-gray-100 border-x-2 hover:bg-slate-50">
                        Settings
                      </div>
                      <div className="py-3 px-4 flex bg-white border-solid border-gray-100 border-x-2 border-b-2 hover:bg-slate-50">
                        <NavLink
                          className="h-full text-neutral-600 hover:text-orange-600"
                          to="/"
                          onClick={handleLogOut}
                        >
                          {" "}
                          Log Out{" "}
                        </NavLink>
                      </div>
                    </div>
                  ) : null}
                </div>
                <div className="h-full pr-1 px-2 flex justify-center">
                  {/* <NavLink className="nav-link m-2 text-3xl text-orange-600 hover:text-white hover:bg-orange-600" to="/activityform"> */}
                  <NavLink
                    className="nav-link m-2 text-3xl text-orange-600"
                    to="/activityform"
                  >
                    {" "}
                    ⨁{" "}
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="ml-5 h-14 flex">
            <div className="branding">
              <NavLink className="home btn" to="/login">
                <img
                  className="h-auto w-24 mt-4 mr-96"
                  src={strava}
                  alt="logo"
                ></img>
              </NavLink>
            </div>
            <div className="mx-40"></div>
            <button className="ml-96 h-8 mt-3 rounded px-3 font-bold text-xs text-white bg-orange-600">
              <NavLink className="" to="/login">
                {" "}
                Log In{" "}
              </NavLink>
            </button>
          </div>
        )}
      </div>
      {isLoading ? <div>"Loading..."</div> : null}
    </header>
  );
}

export default NavBar;
