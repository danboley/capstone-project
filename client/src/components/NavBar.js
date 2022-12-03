import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import logo from "../pics/logo.png";

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
        updateUser(false);
        history.push(`/login`);
      }
    });
  };

  function handleDropdown() {
    setDropdown((prev) => !prev);
  }

  return (
    <header id="global-header" class="fixed top-0 left-0 right-0 bg-white h-14 leading-4 ">
      <div className="h-14 relative mr-auto ml-auto pl-12 pr-16">
        {currentUser ? (
          <div className="">
            <div className="ml-5 float-left relative h-14 flex">
            <div className="h-5 w-24 float-left flex justify-center">
              <NavLink className="pr-1 m-4" to="/dashboard">
                <img className="w-8 h-8 p-0 rounded" src={logo} alt="logo"></img>
              </NavLink>
            </div>
            <div className="flex">
              <div className="flex px-4 justify-center">
                <NavLink className="h-full text-gray-700 pr-1 m-5" to="/dashboard">
                  {" "}
                  Dashboard{" "}
                </NavLink>
              </div>
              <div className="flex justify-center">
                <NavLink className="h-full text-gray-700 pr-1 m-5" to="/myactivities">
                  {" "}
                  My Activities{" "}
                </NavLink>
              </div>
            </div>
            </div>
            <div className="h-14 flex float-right relative">
              <div className="flex float-right justify-center">
                <img className="rounded-full flex justify-center h-8 w-8 m-4" src={currentUser.pro_pic}></img>
                <div className="h-full text-gray-700 pr-1 px-2 flex justify-center m-6" onClick={handleDropdown}>▼</div>
                <div id="" className="h-full text-gray-700 pr-1 px-2 flex justify-center">
                <NavLink className="nav-link m-3 text-3xl text-orange-600" to="/activityform">
                  {" "}
                  ⨁{" "}
                </NavLink>
              </div>
              </div>
              
              {dropdown ? (
                <div>
                  <div className="flex justify-center">
                    <NavLink className="h-full text-gray-700" to="/myprofile">
                      My Profile
                    </NavLink>
                  </div>
                  <div className="flex justify-center">
                    <NavLink className="h-full text-gray-700" to="/" onClick={handleLogOut}>
                      {" "}
                      Log Out{" "}
                    </NavLink>
                  </div>
                </div>
              ) : null}
              {/* <div className="nav-item">
                <NavLink className="nav-link" to="/activityform">
                  {" "}
                  ⨁{" "}
                </NavLink>
              </div> */}
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            {/* <div className="branding"><NavLink className="home btn" to="/login"><img src={logo} alt="logo"></img></NavLink></div> */}
            <NavLink className="h-full text-gray-700" to="/login">
              {" "}
              Log In{" "}
            </NavLink>
          </div>
        )}
      </div>
      {isLoading ? <div>"Loading..."</div> : null}
    </header>
  );
}

export default NavBar;
