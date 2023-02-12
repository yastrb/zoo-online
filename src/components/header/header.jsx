import React from "react";
import Buttons from "./Buttons/buttons";
import Nav from "./Nav/nav";

// const scrollHeader = () => {
//     const header = document.getElementById('header')

//     this.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header')
// }
// window.addEventListener('scroll', scrollHeader);

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