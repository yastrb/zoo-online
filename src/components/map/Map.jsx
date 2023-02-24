import React from "react";
import Button from "../main/Button/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { NavLink } from "react-router-dom";
import image from '../../assets/images/animal5.jpg';
import image2 from '../../assets/images/animal2.jpg';
import image3 from '../../assets/images/animal3.jpg';
import image4 from '../../assets/images/animal4.jpg';
import image5 from '../../assets/images/animal1.jpg';
import image7 from '../../assets/images/animal8.jpg';
import image8 from '../../assets/images/animal9.jpg';
import ArrowLeftSLineIcon from 'remixicon-react/ArrowLeftSLineIcon';
import ArrowRightSLineIcon from 'remixicon-react/ArrowRightSLineIcon';

const zoo = [
    {
        id: 1,
        image: image,
        link: "/panda",
    },
    {
        id: 2,
        image: image5,
        link: "/gorilla",
    },
    {
        id: 3,
        image: image3,
        link: "/crocodile",
    },
    {
        id: 4,
        image: image4,
        link: "/eagle",
    },
    {
        id: 5,
        image: image2,
        link: "/leopard",
    },
    {
        id: 6,
        image: image8,
        link: "/lion",
    },
    {
        id: 7,
        image: image7,
        link: "/zebra",
    },
]

const Map = () => {
    return (
        <section className="map-m section">
            <div className="map-m__container container">
                <h2 className="aboutus__title section__title">Choose your favorite</h2>

                <div className="map-m__wrapper">
                    <div className="map-m__content">As a voice for wildlife, we are devastated by the impact of the 2020 Australian bushfires on precious species and their habitat, and we are determined to assist in all aspects, including providing veterinary support and raising much-needed emergency funds. Zoo Online saves wildlife and inspires everyone to make conservation a priority in their lives. Animals have the right to a pain-free and happy life. They have equal claim to the resources of this planet, and deserve a life of dignity and compassion.As a voice for wildlife, we are devastated by the impact of the 2020 Australian bushfires on precious species and their habitat.</div>
                    <div className="map-m__slider">
                        <ArrowLeftSLineIcon/>
                        <Swiper
                            className="mySwiper map-m__swiper"
                            slidesPerView={3}
                            spaceBetween={10}
                        >
                            {zoo.map(item => (
                                <SwiperSlide key={item.id} className='map-m__slide'>
                                    <NavLink to={item.link} className='map-m__link'>
                                        <img className='map-m__slide-img' src={item.image} />
                                    </NavLink>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <ArrowRightSLineIcon/>
                    </div>
                    <div className="map">MAP</div>
                    <Button content={'watch online'} />
                </div>
            </div>
        </section>
    )
}

export default Map;