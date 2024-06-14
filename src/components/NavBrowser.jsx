import React from "react";
import { Link } from "react-router-dom";
import ToggleButton from "./ToggleButton";
import "../assets/styleNav.css";
const Nav = () => {
    return(
        
        <div className="topnav" id="myTopnav">
            <Link to="/">Home</Link>
            <Link to="/TaskList">Task Lists</Link>
            <Link to="/about">About</Link>
            <ToggleButton/>
        </div>
       
    )
}
export default Nav;