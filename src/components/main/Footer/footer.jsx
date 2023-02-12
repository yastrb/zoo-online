import React from 'react'
import Button from '../Button/button'
import Adress from './adress'
import Contact from './contact'
import Nav from './nav'

const Footer = () => {
    return (
        <footer className='footer'>
            <section className="footer__section section">
                <div className="footer__container container">
                    <Nav />
                    <div className="contact">
                    <Contact/>
                    <Adress/>
                    </div>
                    <Button 
                    content = {'donate for volunteers'}
                    />
                </div>
            </section>
        </footer>
    )
}

export default Footer