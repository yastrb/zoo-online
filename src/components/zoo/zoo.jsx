import React from 'react'
// import Button from './../main/Button/button';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import image from '../../assets/images/animal5.jpg';
import image2 from '../../assets/images/animal2.jpg';
import image3 from '../../assets/images/animal3.jpg';
import image4 from '../../assets/images/animal4.jpg';
import image5 from '../../assets/images/animal1.jpg';
import { NavLink } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Animal from './Animals/animal';

const zoo = [
    {
        id: 1,
        image: image,
        link: "panda",
    },
    {
        id: 2,
        image: image5,
        link: "gorilla",
    },
    {
        id: 3,
        image: image3,
        link: "crocodile",
    },
    {
        id: 4,
        image: image4,
        link: "eagle",
    },
    {
        id: 5,
        image: image2,
        link: "leopard",
    },
]

let panda = {
    embedId: "3szkFHfr6sA",
    title: "The Beijing Zoo",
    population: "About 1,590 individuals",
    habitat: "Temperate forests high in the mountains of southwest China",
    diet: "A panda's daily diet consists almost entirely of the leaves, stems and shoots of various bamboo species. Bamboo contains very little nutritional value so pandas must eat 12-38kg every day to meet their energy needs."
}
let gorilla = {
    embedId: "NdE7bANJIz0",
    title: "GRACE Center, Kasugho, Eastern DRC",
    population: "About 101,500 individuals",
    habitat: "The corridor connects the gorillas' night quarters with the DRC forest habitat at GRACE and is the area viewers will most often see the Grauer's gorillas as they come and go from the forest. Watch as the gorillas pass through, graze on vegetation, and maybe even make a nest for their overnight slumber. The gorillas can choose where to sleep and they often choose to bed down inside their night building, but they sometimes sleep outside too. Also, because they eat so much fibrous vegetation, gorillas spend a lot of time resting and digesting. Expect to see some spectacularly lazy afternoon nap sessions! ",
    diet: "Because they eat so much fibrous vegetation, gorillas spend a lot of time resting and digesting."
}
let crocodile = {
    embedId: "XYMzjaj83jI",
    title: "Alligator and Spoonbill Swamp Webcam",
    population: "Roughly 1.25 million ",
    habitat: "Alligators can be found in slow-moving rivers, ponds, lakes and swamps. ",
    diet: "Main live prey consists of medium sized mammals and birds such as rabbits, hares, grouse and ptarmigan. The diet of coastal birds includes gulls and other seabirds."
}
let eagle = {
    embedId: "PK7yQusvoHY",
    title: "West End Bald Eagle Cam",
    population: "More than 270 pairs in 2013",
    habitat: "Typically nest in forested areas adjacent to large bodies of water",
    diet: "Main live prey consists of medium sized mammals and birds such as rabbits, hares, grouse and ptarmigan. The diet of coastal birds includes gulls and other seabirds."
}
let leopard =
{
    title: "Big Cat Rescue Vacation Rotation",
    population: "More than 700,000 individuals",
    habitat: "Leopards are found in a wide variety of habitats, though they usually give preference to areas, covered with trees. They typically live in woodlands, forests, and grassland savannas. Less frequently, they occur in mountainous areas as well as scrublands and deserts. ",
    diet: "Leopards are carnivores. The diet of these opportunistic feeders includes a huge variety of animals such as jackals, antelopes, gazelles, monkeys, duiker, eland, impala, wildebeest, birds, rodents, hyraxes, hares, snakes, sheep, goats, and insects. Leopards attain all required moisture from their food, so they can survive without drinking water for long periods of time.",
    embedId: "XYMzjaj83jI"
}

const Zoo = () => {
    return (

        <section className="zoo__section section">
            <div style={{ marginTop: '7rem' }} className="zoo__container container">
                {/* ---------------SIDEBAR---------------------- */}
                <div className="zoo__sidebar">
                    <Swiper
                        direction={"vertical"}
                        modules={[Navigation]}
                        className="mySwiper zoo__swiper"
                        height={70}
                    >
                        {zoo.map(item => (
                            <SwiperSlide key={item.id} className='zoo__slide'>
                                <NavLink to={item.link} className='zoo__link'>
                                    <img className='zoo__slide-img' src={item.image} />
                                </NavLink>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* ---------MAIN BLOCK--------------------------------------------------- */}
                <div className="zoo__main">
                    <Routes>
                        <Route index element={<Animal props={{
                            embedId: panda.embedId,
                            title: panda.title,
                            population: panda.population,
                            habitat: panda.habitat,
                            diet: panda.diet
                        }} />} />
                        <Route path='/panda' element={<Animal props={{
                            embedId: panda.embedId,
                            title: panda.title,
                            population: panda.population,
                            habitat: panda.habitat,
                            diet: panda.diet
                        }} />}></Route>
                        <Route path='/eagle' element={<Animal props={{
                            embedId: eagle.embedId,
                            title: eagle.title,
                            population: eagle.population,
                            habitat: eagle.habitat,
                            diet: eagle.diet
                        }} />}>
                        </Route>
                        <Route path='/crocodile' element={<Animal props={{
                            embedId: crocodile.embedId,
                            title: crocodile.title,
                            population: crocodile.population,
                            habitat: crocodile.habitat,
                            diet: crocodile.diet
                        }} />}></Route>
                        <Route path='/gorilla' element={<Animal props={{
                            embedId: gorilla.embedId,
                            title: gorilla.title,
                            population: gorilla.population,
                            habitat: gorilla.habitat,
                            diet: gorilla.diet
                        }} />}></Route>
                        <Route path='/leopard' element={<Animal props={{
                            title: leopard.title,
                            population: leopard.population,
                            habitat: leopard.habitat,
                            diet: leopard.diet,
                            embedId: leopard.embedId
                        }} />}></Route>
                    </Routes>
                </div>
            </div>
        </section>
    )
}

export default Zoo;