import React from "react";
import SunLineIcon from "remixicon-react/SunLineIcon";
import MoonLineIcon from "remixicon-react/MoonLineIcon";
import Nav from "./Nav/nav";
import { NavLink } from "react-router-dom";
const Header = ({ theme, toggleTheme }) => {

    return (
        <div className="header" id="header">
            <div className="nav container">
                <NavLink to="/" className="nav__logo">
                    ZOO<span>online</span>
                </NavLink>
                <Nav />
                <div className="light__mode">
                    <span onClick = {toggleTheme}>
                        {
                        theme === "dark-theme" ?
                        <span><MoonLineIcon/></span> : 
                        <span><SunLineIcon /></span>}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header;
