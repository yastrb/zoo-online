import React from "react";
import Iframe from 'react-iframe';

const AboutUs = () => {
    return (
        <section className="aboutus section">
            <div className="aboutus__container container">
                <h2 className="section__title aboutus__title">About Us</h2>
                <iframe
                className="aboutus__video"
                    width="587"
                    height="330"
                    src="https://www.youtube.com/embed/FZl_LrDpIoM"
                    title="Zen Den - Molokai - The Hawaiian Islands"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>
                <div className="aboutus__content">
                    <p>explore’s growing library consists of more than 250 original films and 30,000 photographs from around the world. We showcase our work at film festivals, on over 100 public broadcast and cable channels, and on numerous online destinations including explore.org, Snag Films, Hulu and TakePart.</p>
                    <p>“At explore we are archivists,” explains founder Charles Annenberg Weingarten. “We strive to create films that allow the viewer to join us on our journey as we go on location and experience what unfolds. It’s like the viewers are traveling with the team.”</p>
                    <p>explore films include: a woman in Mumbai who has dedicated her life to rescuing young women from prostitution, a priest in Los Angeles who helps gang members reintegrate into society, a project to protect wild mountain gorillas in Rwanda, and an environmental university in Costa Rica that focuses on sustainable development.</p>
                    <p>explore’s growing library consists of more than 250 original films and 30,000 photographs from around the world. We showcase our work at film festivals, on over 100 public broadcast and cable channels, and on numerous online destinations including explore.org, Snag Films, Hulu and TakePart.</p>
                    <p>“At explore we are archivists,” explains founder Charles Annenberg Weingarten. “We strive to create films that allow the viewer to join us on our journey as we go on location and experience what unfolds. It’s like the viewers are traveling with the team.”</p>
                    <p>explore films include: a woman in Mumbai who has dedicated her life to rescuing young women from prostitution, a priest in Los Angeles who helps gang members reintegrate into society, a project to protect wild mountain gorillas in Rwanda, and an environmental university in Costa Rica that focuses on sustainable development.</p>
                </div>
            </div>
        </section>

    )
}

export default AboutUs