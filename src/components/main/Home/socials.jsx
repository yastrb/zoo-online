import React from 'react';
import InstagramLineIcon from 'remixicon-react/InstagramLineIcon';
import TwitterFillIcon from 'remixicon-react/TwitterFillIcon';
import FacebookCircleFillIcon from 'remixicon-react/FacebookCircleFillIcon';
import YoutubeFillIcon from 'remixicon-react/YoutubeFillIcon';

const SocialsMain = () => {
  return (
        <div className="home__socials">
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
  )
}

export default SocialsMain