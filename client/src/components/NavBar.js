import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
// import logo from "../pics/logo.png";

function NavBar({ currentUser, updateUser}) {
    const [isLoading, setIsLoading] = useState(false);

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

  return (
    <div>
        {currentUser ?
	        (<div>
                {/* <img src={logo} alt="logo"></img> */}
                <NavLink to="/dashboard" > Dashboard </NavLink>
                <NavLink to="/myactivities"> My Activities </NavLink>
                <NavLink to="/" onClick={handleLogOut}> Log Out </NavLink>
                <NavLink to="/myprofile"> My Profile </NavLink>
                <NavLink to="/activityform"> + </NavLink>
            </div>) :
	        (<div>
                {/* <img src={logo} alt="logo"></img> */}
                <NavLink to="/login"> Log In </NavLink>
            </div>)
        }
       {isLoading ? "Loading..." : null}
    </div>
  )
}

export default NavBar;
