import React from "react";
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.navbar}>
            <div>
                <NavLink to='/profile'>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/dialog'> Message</NavLink>
            </div>
            <div>
                News
            </div>
            <div>
                Music
            </div>
            <div>
                Settings
            </div>
        </nav>
    )
}
export default Navbar;