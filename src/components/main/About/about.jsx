import React from "react";
import image1 from '../../../assets/images/believe.png';
import image2 from '../../../assets/images/inspire.png';
import image3 from '../../../assets/images/mission.png';
import Inspire from "./inspire";


let data = [
    {
        id:1,
        image: image1,
        title: 'What inspires us?',
        content:'As a voice for wildlife, we are devastated by the impact of the 2020 Australian bushfires on precious species and their habitat, and we are determined to assist in all aspects.'
    },
    {
        id:2,
        image:  image2,
        title: 'Our mission',
        content:'Zoo Online saves wildlife and inspires everyone to make conservation a priority in their lives.'
    },
    {
        id:3,
        image: image3,
        title: 'What we believe in?',
        content:'Animals have the right to a pain-free and happy life. They have equal claim to the resources of this planet, and deserve a life of dignity and compassion.'
    },
];


const About = () => {
    return (
        <div className="about">
            <div className="about__container container">
                <div className="about__items">
                {data.map(item=> (
                    <Inspire 
                    key={item.id}  
                    image={item.image} 
                    title={item.title} 
                    content={item.content}/>
                ))}
                </div>
            </div>
        </div>
    )
}

export default About;