import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from '../../../assets/images/slider1.jpg';
import slider2 from '../../../assets/images/slider2.jpg';
import slider3 from '../../../assets/images/slider3.jpg';
import slider4 from '../../../assets/images/slider4.jpg';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination } from "swiper";

const animals = [
    {
        id: 1,
        image: slider1,
    },
    {
        id: 2,
        image: slider2,
    },
    {
        id: 3,
        image: slider3,
    },
    {
        id: 4,
        image: slider4,
    },
]

export default () => {
    return (
        <Swiper
            // pagination={{
            //     type: "fraction",
            // }}
            pagination={{
                type: "progressbar",
            }}
            modules={[Pagination]}
            className="mySwiper">

            {animals.map(animal => (
                <SwiperSlide key={animal.id} className="work__slide">
                    <img className="work__image" src={animal.image} alt="" />
                </SwiperSlide>
            ))}



        </Swiper>
    );
};