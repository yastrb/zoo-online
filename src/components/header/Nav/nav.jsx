import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import menu from "../../../assets/images/menu.png"

const setActive = ({ isActive }) => isActive ? 'active-link' : 'nav__link';

const Nav = () => {
    const [one, setOne] = useState('nav__menu');
    const navToggle = () => {
        one === 'nav__menu'
            ? setOne('nav__menu show-menu')
            : setOne('nav__menu');
    };
    return (
        <>
            <div className={one} id="nav-menu">
                <nav className="nav__list">
                    <NavLink to="/" className={setActive}>Home</NavLink>
                    <NavLink to="/about" className={setActive}>About</NavLink>
                    <NavLink to="/zoos" className={setActive}>Zoos</NavLink>
                    <NavLink to="/zoo-online" className={setActive}>Map</NavLink>
                    <NavLink to="/contacts" className={setActive}>Contact Us</NavLink>
                </nav>
            </div>
            <div onClick={navToggle} class="nav__toggle" id="nav-toggle">
                <img src={menu} alt="" />
            </div>
        </>

    )
}

export default Nav;
