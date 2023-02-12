import React from "react";
import PetsSwiper from "./swiper-pets";
import Button from './../Button/button';
import { Link } from 'react-router-dom';

const Pets = () => {
    return (
        <section className="pets section">
            <div className="pets__container container">
                <h2 className="pets__title section__title">Pets in Zoo</h2>
                <PetsSwiper/>
                <Link to="/zoos">
                <Button link={'zoos'} content={'choose your favorite'}></Button>
            </Link>
            </div>
        </section>
    )
}

export default Pets;