import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
        <NavLink to="/">
            Home
        </NavLink>
        <NavLink to="/login">
            Login
        </NavLink>
        <NavLink to="/signup">
            Signup
        </NavLink>
    </div>
  )
}

export default NavBar;
