import { Swiper, SwiperSlide } from "swiper/react";
import img1 from '../../../assets/images/animal1.jpg';
import img2 from '../../../assets/images/animal2.jpg';
import img3 from '../../../assets/images/animal3.jpg';
import img4 from '../../../assets/images/animal4.jpg';
import img5 from '../../../assets/images/animal5.jpg';
import img6 from '../../../assets/images/animal6.jpg';
import img7 from '../../../assets/images/animal7.jpg';
import PlayCircleLineIcon from 'remixicon-react/PlayCircleLineIcon';
import MoneyDollarCircleLineIcon from 'remixicon-react/MoneyDollarCircleLineIcon';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const animals = [
    {
        id: 1,
        image: img1,
        text: 'Panda’s name is Bei Bei. He is 2 years old. Bei Bei is from China. He loves bamboos',
    },
    {
        id: 1,
        image: img2,
        text: 'Panda’s name is Bei Bei. He is 2 years old. Bei Bei is from China. He loves bamboos.'
    },
    {
        id: 2,
        image: img3,
        text: 'Panda’s name is Bei Bei. He is 2 years old. Bei Bei is from China. He loves bamboos.'
    },
    {
        id: 1,
        image: img4,
        text: 'Panda’s name is Bei Bei. He is 2 years old. Bei Bei is from China. He loves bamboos.'
    },
    {
        id: 1,
        image: img5,
        text: 'Panda’s name is Bei Bei. He is 2 years old. Bei Bei is from China. He loves bamboos.'
    },
    {
        id: 1,
        image: img6,
        text: 'Panda’s name is Bei Bei. He is 2 years old. Bei Bei is from China. He loves bamboos.'
    },
    {
        id: 1,
        image: img7,
        text: 'Panda’s name is Bei Bei. He is 2 years old. Bei Bei is from China. He loves bamboos.'
    },
]

export default function PetsSwiper() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                    376: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper  pets__swiper"
            >

                {animals.map(animal => (
                    <SwiperSlide key={animal.id} className="pets__slide">
                        <img className="pets__slide-img" src={animal.image} alt="" />
                        <div className="pets__slide-content">
                            <span>{animal.text}</span>
                            <button className="home__slider-btn">
                                <PlayCircleLineIcon size={40} />
                                watch online
                            </button>
                            <button className="home__slider-btn">
                                <MoneyDollarCircleLineIcon size={40} />
                                donate
                            </button>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    );
}
