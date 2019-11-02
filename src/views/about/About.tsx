import React from 'react';
import './About.scss';

const About: React.FC = () => {
  setTimeout(() => animateCurly(), 10);
  setTimeout(() => slideDown(), 3000);

  let slideDown = () => {
    const profile = document.getElementById('profile');
    if (profile) {
      profile.classList.add('slide-down');
    }
  }

  const extremeThreshold = (): number[] => {
    const threshold = [0];
    for (let i = 1; i <= 1000; i++) {
      threshold.push(i / 1000);
    }
    return threshold;
  }

  const animateCurly = () => {
    const curly1 = document.getElementById('curly1');
    const curly2 = document.getElementById('curly2');
    const about = document.getElementById('about');
    const observer = new IntersectionObserver(([entry]) => {
      if (curly1 && curly2) {
        let dashOffset = Math.max(0, (500 - entry.intersectionRatio * 1427)).toFixed(0);
        if (window.innerWidth > 490) {
          dashOffset = Math.max(0, (1000 - entry.intersectionRatio * 1427)).toFixed(0);
        }
        curly1.setAttribute('style', 'stroke-dashoffset:' + dashOffset + 'px');
        curly2.setAttribute('style', 'stroke-dashoffset:' + dashOffset + 'px');
      }
    },
      {
        root: null,
        rootMargin: '0px',
        threshold: extremeThreshold(),
      });

    if (about && curly1 && curly2) {
      observer.observe(about);
    }
  }
  return (
    <div id="about" className="about pt-5">
      <div className="container">

        <div className="d-flex flex-nowrap justify-content-between">
          <svg id="curly1svg" height="50" viewBox="0 0 764 375" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="curly" id="curly1" d="M0 374H296C764.8 375.6 794 190 747 103C700 16.0001 561 -22 522 16.0003C472 64.7186 473 154 522 137C556 125.204 567 95 567 74" stroke="black" />
          </svg>
          <svg height="50" viewBox="0 0 764 375" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="curly" id="curly2" d="M0 374H296C764.8 375.6 794 190 747 103C700 16.0001 561 -22 522 16.0003C472 64.7186 473 154 522 137C556 125.204 567 95 567 74" stroke="black" />
          </svg>
        </div>
        <h1 className="mt-5">Background</h1>
        <p className="mb-5">I'm a fella born and raised in Gothenburg (Göteborg for you Swedes), at autumn 2018 I graduated from Chalmers University of Technology with a Bachelor degree in Software Engineering and with a Masters degree in Interaction design.</p>
        <h1>Today</h1>
        <p className="mb-5">Currently I'm a resident in Gothenburg where I work and maintain a living by doing my favourite things, building beautiful websites.</p>
        <h1>Developer</h1>
        <p className="mb-5">As a developer I strive to build efficient and maintainable code, which sounds like I'm taking an oath or something, but is probably the two most important things I know in my line of work today. No matter if I work in a react, vue or dotnet project, it should be easy to go back to code written a year ago and understand it without any hassle.</p>
        <h1>Style</h1>
        <p className="mb-5">I LOVE working with animations, images and colors to create experiences for visitors. Finding out new ways to create a website that is ALIVE and not stale as a can of corn is what I believe frontend development is all about.</p>
      </div>
    </div>
  );
}

export default About;

