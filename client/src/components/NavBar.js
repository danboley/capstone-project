import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

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
        <NavLink to="/"> Home </NavLink>
        {/* <NavLink to="/login"> Login </NavLink> */}
        {/* <NavLink to="/signup"> Signup </NavLink> */}
        {!currentUser ? (<NavLink to="/login"> Log In </NavLink>) :
        (<NavLink to="/" onClick={handleLogOut}> Log Out </NavLink>)}
        {isLoading ? "Loading..." : null}
    </div>
  )
}

export default NavBar;
