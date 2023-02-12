import React from "react";
import Swiper from "./swiper";
import Button from './../Button/button';
import { Link } from "react-router-dom";

function Work() {
    return (
        <section className="work section" id="work">
            <div className="work__container container">
                <h2 className="work__title section__title">How it works?</h2>
                <p className="work__content">As a voice for wildlife, we are devastated by the impact of the 2020 Australian bushfires on precious species and their habitat, and we are determined to assist in all aspects, including providing veterinary support and raising much-needed emergency funds. Zoo Online saves wildlife and inspires everyone to make conservation a priority in their lives. Animals have the right to a pain-free and happy life. They have equal claim to the resources of this planet, and deserve a life of dignity and compassion.As a voice for wildlife, we are devastated by the impact of the 2020 Australian bushfires on precious species and their habitat.</p>
                <Swiper />
                <Link to="/zoos">
                    <Button link={'zoos'} content={"watch online"}></Button>
                </Link>
            </div>
        </section>
    );
}

export default Work;