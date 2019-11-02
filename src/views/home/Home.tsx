import React from 'react';
import './Home.scss';
import NameTag from '../../components/name-tag/NameTag';
import Navigation from '../../components/navigation/Navigation';
import Hero from '../../components/hero/Hero';
import arrow from '../../assets/white-arrow.svg';
import cloud from '../../assets/cloud.svg';

const Home: React.FC = () => {
  setTimeout(() => slideDownNameTag(), 2000);
  setTimeout(() => fadeInIntroduction(), 3000);
  setTimeout(() => animateMagic(), 10);

  const extremeThreshold = (): number[] => {
    const threshold = [0];
    for (let i = 1; i <= 1000; i++) {
      threshold.push(i / 1000);
    }
    return threshold;
  }

  const animateMagic = () => {
    const magicCloud = document.getElementById('magic-cloud');
    const home = document.getElementById('home');
    const observer = new IntersectionObserver(([entry]) => {
      if (magicCloud) {
        magicCloud.setAttribute('style', 'left:' + (entry.intersectionRatio * 300 - 240).toFixed(3) + 'vw');
      }
    },
      {
        root: null,
        rootMargin: '0px',
        threshold: extremeThreshold(),
      });

    if (home && magicCloud) {
      observer.observe(home);
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

  return (
    <div id="home" className="home">
      <Hero />
      <div className="container">
        <div className="d-flex">
          <div id="profile" className="profile position-relative">
            <div className="profile__arrow-text text-white position-absolute d-none d-sm-block"><h1>Me</h1></div>
            <img alt="arrow" className="profile__arrow position-absolute d-none d-sm-block" src={arrow} width="200" />
            <NameTag />
          </div>
        </div>
        <div className="d-flex justify-content-center mb-5 border-bottom">
          <Navigation />
        </div>
        <div id="introduction" className="introduction mb-5">
          <h1>Hi there!</h1>
          <p>Welcome to my playgro.. I mean portfolio website, heh. On this site you will find information about me and get to see what magicClouds I'm working on both professionally and on my spare time.</p>
        </div>
        <div id="magic" className="position-relative d-none d-sm-block">
          <div className="position-absolute" id="magic-cloud">
            <img alt="cloud" src={cloud} width="150" />
          </div>
          <h1 className="text-center position-relative">Magic</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;

