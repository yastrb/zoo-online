import React from "react";
import Buttons from "./Buttons/buttons";
import Nav from "./Nav/nav";

const Header = () => {

    return (
        <div className="header" id="header">
            <div className="nav container">
                <div className="nav__logo">
                    ZOO<span>online</span>
                </div>
                <Nav/>
                <Buttons/>
            </div>
        </div>
    )
}

export default Header;
