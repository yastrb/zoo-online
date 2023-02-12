import React from "react";
import mainImage from '../../../assets/images/main.jpg'
import Slider from './slider';
import Button from "../Button/button";
import line from './../../../assets/images/line.png';
import SocialsMain from "./socials";
import { Link, NavLink } from "react-router-dom";

function Home() {
    return (
        <section className="home section" id="home">
            <img className="home__image-main" src={mainImage} alt="main image" />
            <h1 className="home__title">Watch your favorite animal online</h1>
            <Link className="home__btn" to="/zoos">
                <Button link={'zoos'} content={"watch online"}></Button>
            </Link>

            <div className="line">
                <img className="line-img" src={line} alt="" />
            </div>
            <SocialsMain />
            <Slider />
        </section>
    )
}

export default Home;