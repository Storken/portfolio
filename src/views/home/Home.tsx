import React, { useEffect } from 'react';
import './Home.scss';
import NameTag from '../../components/name-tag/NameTag';
import Navigation from '../../components/navigation/Navigation';
import Hero from '../../components/hero/Hero';
import arrow from '../../assets/white-arrow.svg';
import arrowDown from '../../assets/arrow-down.svg';
import cloud from '../../assets/cloud.svg';
import { addIntersectionObserverOn } from '../../utils/AnimationHelper';

const Home: React.FC = () => {
  const animation = ([entry]: IntersectionObserverEntry[]) => {
    const magicCloud = document.getElementById('magic-cloud');
    if (magicCloud) {
      magicCloud.setAttribute('style', 'left:' + (Math.min((entry.intersectionRatio - 0.3) * 150, 60)).toFixed(3) + 'vw');
    }
  }

  const slideDownNameTag = () => {
    const profile = document.getElementById('profile');
    if (profile) {
      profile.classList.add('slide-down');
    }
  }

  const fadeInIntroduction = () => {
    const introduction = document.getElementById('introduction');
    if (introduction) {
      introduction.classList.add('fade-in');
    }
  }

  useEffect(() => {
    addIntersectionObserverOn('home', animation);
    setTimeout(() => slideDownNameTag(), 1200);
    setTimeout(() => fadeInIntroduction(), 2000);
  });

  return (
    <div id="home" className="home">
      <Hero />
      <div className="container">
        <div className="d-flex">
          <div id="profile" className="profile position-relative">
            <div className="profile__arrow-text text-white position-absolute d-none d-lg-block"><h1>Me</h1></div>
            <img alt="arrow" className="profile__arrow position-absolute d-none d-lg-block" src={arrow} width="200" />
            <NameTag />
          </div>
        </div>
        <div className="d-flex justify-content-center mb-5">
          <Navigation />
        </div>
        <div id="introduction" className="introduction mb-5">
          <h1>Hi there!</h1>
          <p>Welcome to my portfolio. On this website you will get to know me a little bit and see what I'm working on both professionally and on my spare time. I am currently a freelance frontend developer and you can get in touch with me through the links in the card above.</p>
        </div>
        <div id="magic" className="position-relative d-none d-md-block">
          <div className="position-absolute" id="magic-cloud">
            <img alt="cloud" src={cloud} width="150" height="83" />
            <div className="scroll-text position-absolute d-flex justify-content-center align-items-center pt-5 font-weight-bold"><img className="ml-2 animation-bounce" width="30" alt="scroll down arrow" src={arrowDown}/></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

