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
    <header id="global-header">
      <div className="nav-bar container">
        {currentUser ? (
          <div>
            <div className="branding">
              <NavLink className="home btn" to="/dashboard">
                <img className="logo" src={logo} alt="logo"></img>
              </NavLink>
            </div>
            <div className="global-nav nav-group">
              <div className="nav-item">
                <NavLink className="nav-link" to="/dashboard">
                  {" "}
                  Dashboard{" "}
                </NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link" to="/myactivities">
                  {" "}
                  My Activities{" "}
                </NavLink>
              </div>
            </div>
            <div className="user-nav-group">
                
              <div className="nav-item">
                <img className="nav-pro-pic" src={currentUser.pro_pic}></img>
                <div className="dropdown-arrow" onClick={handleDropdown}>▼</div>
                <div id="activity-plus" className="nav-item">
                <NavLink className="nav-link" to="/activityform">
                  {" "}
                  ⨁{" "}
                </NavLink>
              </div>
              </div>
              
              {dropdown ? (
                <div>
                  <div className="nav-item">
                    <NavLink className="nav-link" to="/myprofile">
                      My Profile
                    </NavLink>
                  </div>
                  <div className="nav-item">
                    <NavLink className="nav-link" to="/" onClick={handleLogOut}>
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
          <div>
            {/* <div className="branding"><NavLink className="home btn" to="/login"><img src={logo} alt="logo"></img></NavLink></div> */}
            <NavLink className="nav-link" to="/login">
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
