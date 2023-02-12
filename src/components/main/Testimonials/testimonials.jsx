import React from "react";
import Button from './../Button/button';
import Slider from "./swiper";
import { Link } from 'react-router-dom';
const Testimonials = () => {
    return (
        <section className="section testimonials">
            <div className="testimonials__container container">
            <h2 className="testimonials__title section__title">Testimonials</h2>
            <Slider/>
            <Link  to="/contacts">
                <Button link={'zoos'} content={'leave feedback'}></Button>
            </Link>
            </div>
        </section>
    )
}

export default Testimonials;

