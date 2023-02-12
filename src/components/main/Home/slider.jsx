import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import PlayCircleLineIcon from 'remixicon-react/PlayCircleLineIcon';
import MoneyDollarCircleLineIcon from 'remixicon-react/MoneyDollarCircleLineIcon';
import animalImg1 from '../../../assets/images/animal1.jpg'
import animalImg2 from '../../../assets/images/animal2.jpg'
import animalImg3 from '../../../assets/images/animal3.jpg'
import animalImg4 from '../../../assets/images/animal4.jpg'
import animalImg5 from '../../../assets/images/animal5.jpg'
import animalImg6 from '../../../assets/images/animal6.jpg'
import animalImg7 from '../../../assets/images/animal7.jpg'



const animals = [
    {
        id: 1,
        image: animalImg2,
        text: 'Panda’s name is Bei Bei. He is 2 years old. Bei Bei is from China. He loves bamboos.'
    },
    {
        id: 2,
        image: animalImg5,
        text: 'Gorilla’s name is Choah Me. He is 10 years old. Choah is from China. He loves bananas.'
    },
    {
        id: 3,
        image: animalImg1,
        text: 'Panda’s name is Bei Bei. He is 2 years old. Bei Bei is from China. He loves bamboos.'
    },
    {
        id: 4,
        image: animalImg3,
        text: 'Gorilla’s name is Choah Me. He is 10 years old. Choah is from China. He loves bananas.'
    },
    {
        id: 4,
        image: animalImg4,
        text: 'Gorilla’s name is Choah Me. He is 10 years old. Choah is from China. He loves bananas.'
    },
    {
        id: 4,
        image: animalImg6,
        text: 'Gorilla’s name is Choah Me. He is 10 years old. Choah is from China. He loves bananas.'
    },
    {
        id: 4,
        image: animalImg7,
        text: 'Gorilla’s name is Choah Me. He is 10 years old. Choah is from China. He loves bananas.'
    },
]

export default function Slider() {
    return (
        <div className="home__swiper">
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={2}
                height={300}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                // pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper home__slider"
            >
                {animals.map(animal => (
                    <SwiperSlide className="home__slider">
                        <img className="home__slider-image" src={animal.image} alt="" />
                        <div className="home__slider-content">
                            <span>{animal.text}</span>
                            <button className="home__slider-btn">
                                <PlayCircleLineIcon />
                                watch online
                            </button>
                            <button className="home__slider-btn">
                                <MoneyDollarCircleLineIcon />
                                donate
                            </button> */
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}