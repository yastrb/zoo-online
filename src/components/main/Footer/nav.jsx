import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="footer__nav">
            <div className="footer__logo">
                ZOO<span>online</span>
            </div>
            <nav className="footer__links">
                <NavLink to="/about" className='footer__link'>About</NavLink>
                <NavLink  to="/zoos" className='footer__link'>Zoos</NavLink>
                <NavLink to="/map" className='footer__link'>Map</NavLink>
                <NavLink to="/contacts" className='footer__link'>Contact Us</NavLink>
                <NavLink to="/design" className='footer__link'>Design</NavLink>
            </nav>
        </div>
    )
}

export default Nav