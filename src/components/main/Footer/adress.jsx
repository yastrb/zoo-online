import React from 'react';
import InstagramLineIcon from 'remixicon-react/InstagramLineIcon';
import TwitterFillIcon from 'remixicon-react/TwitterFillIcon';
import FacebookCircleFillIcon from 'remixicon-react/FacebookCircleFillIcon';
import YoutubeFillIcon from 'remixicon-react/YoutubeFillIcon';

const Adress = () => {
    return (
        <div className="footer__address">
            <h4>ZOO Online Centre</h4>
            <span>132, Address District, Street</span>
            <span>Open Daily 10:00 am - 5:00 pm</span>
            <span>T(702) 163-3433</span>
            <span>zoo.online@gmail.com</span>
            <div className="footer__socials">
                <a href="https://www.instagram.com/" target="_blank" class="home__social-link">
                <InstagramLineIcon color="#fff" />
                </a>
                <a href="https://www.twitter.com/" target="_blank" class="home__social-link">
                    <TwitterFillIcon color="#fff"/>
                </a>
                <a href="https://facebook.com/" target="_blank" class="home__social-link">
                    <FacebookCircleFillIcon color="#fff"/>
                </a>
                <a href="https://youtube.com/" target="_blank" class="home__social-link">
                    <YoutubeFillIcon color="#fff"/>
                </a>
            </div>
        </div>

    )
}

export default Adress