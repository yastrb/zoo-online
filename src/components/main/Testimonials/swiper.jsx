import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const data = [
    {
        id: 1,
        name: 'Sara',
        foto: 'https://media.istockphoto.com/id/1392783238/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82-%D1%83%D0%BB%D1%8B%D0%B1%D0%B0%D1%8E%D1%89%D0%B5%D0%B9%D1%81%D1%8F-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D1%8B-%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D1%81%D1%82%D0%BA%D0%B0-%D1%81%D0%BC%D0%BE%D1%82%D1%80%D1%8F%D1%89%D0%B5%D0%B9-%D0%B2-%D0%BA%D0%B0%D0%BC%D0%B5%D1%80%D1%83-%D0%BD%D0%B0-%D1%81%D0%B8%D0%BD%D0%B5%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5.jpg?b=1&s=170667a&w=0&k=20&c=UHznViSWktIzUtE_12JlkFNwW9jdg-JsEk8C_tcnTJI=',
        testimonial: 'As a voice for wildlife, we are devastated by the impact of the 2020 Australian bushfires on precious species and their habitat.'
    },
    {
        id: 2,
        foto: 'https://media.istockphoto.com/id/1348175791/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D0%B0%D1%8F-%D0%B8-%D1%81%D1%87%D0%B0%D1%81%D1%82%D0%BB%D0%B8%D0%B2%D0%B0%D1%8F-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D0%B0-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5.jpg?b=1&s=170667a&w=0&k=20&c=AGgO7ZyR5oBlkvNw-pjT9zS1Ou4c4UJthO8-Oush9eg=',
        name: 'Nina N.',
        testimonial: 'As a voice for wildlife, we are devastated by the impact of the 2020 Australian bushfires on precious species and their habitat.'
    },
    {
        id: 3,
        foto: 'https://cdn.pixabay.com/photo/2018/11/08/23/52/man-3803551__480.jpg',
        name: 'Alexander',
        testimonial: 'As a voice for wildlife, we are devastated by the impact of the 2020 Australian bushfires on precious species and their habitat.'
    },
    {
        id: 4,
        foto: 'https://unsplash.com/photos/tTdC88_6a_I',
        name: 'John W.',
        testimonial: 'As a voice for wildlife, we are devastated by the impact of the 2020 Australian bushfires on precious species and their habitat.'
    },
    {
        id: 5,
        foto: 'https://unsplash.com/photos/tTdC88_6a_I',
        name: 'Sara',
        testimonial: 'As a voice for wildlife, we are devastated by the impact of the 2020 Australian bushfires on precious species and their habitat.'
    },
    {
        id: 6,
        foto: 'https://unsplash.com/photos/tTdC88_6a_I',
        name: 'Dennis N.',
        testimonial: 'As a voice for wildlife, we are devastated by the impact of the 2020 Australian bushfires on precious species and their habitat.'
    },
    {
        id: 7,
        foto: 'https://unsplash.com/photos/tTdC88_6a_I',
        name: 'Alexander',
        testimonial: 'As a voice for wildlife, we are devastated by the impact of the 2020 Australian bushfires on precious species and their habitat.'
    },
    {
        id: 8,
        name: 'John W.',
        foto: 'https://unsplash.com/photos/tTdC88_6a_I',
        testimonial: 'As a voice for wildlife, we are devastated by the impact of the 2020 Australian bushfires on precious species and their habitat.'
    },
]

export default function Slider() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    // 768: {
                    //     slidesPerView: 4,
                    //     spaceBetween: 40,
                    // },
                    // 1024: {
                    //     slidesPerView: 5,
                    //     spaceBetween: 50,
                    // },
                }}
                modules={[Pagination]}
                className="mySwiper testimonials__slider"
            >
                {data.map(user => (
                    <SwiperSlide key={user.id} className='testimonials__slide'>
                        <div className="testimonials__content">
                            <div className="testimonials__image">
                                <img src={user.foto} alt="" />
                            </div>
                            <div className="testimonials__name">{user.name}</div>
                            <div className="testimonials__text">{user.testimonial}</div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
