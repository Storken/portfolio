import React, { useEffect } from 'react';
import './Navigation.scss';
import '../../styles/animations.scss';
import { addIntersectionObserverOn } from '../../utils/AnimationHelper';

const Navigation: React.FC = () => {

  const animation = ([entry]: IntersectionObserverEntry[]) => {
    const curly1 = document.getElementById('curly-nav1');
    const curly2 = document.getElementById('curly-nav2');
    if (curly1 && curly2) {
      if (entry.intersectionRatio < 0.9) {
        curly1.classList.remove('dash-in');
        curly2.classList.remove('dash-in');
      } else {
        curly1.classList.add('dash-in');
        curly2.classList.add('dash-in');
      }
    }
  }

  const slideIn = () => {
    const links = document.getElementsByClassName('navigation-animatable');
    if (links) {
      for (let i = 0; i < links.length; i++) {
        if (links[i].classList.contains('flip-x')) {
          setTimeout(() => addSlideInFlipped(links[i]), 150 * (links.length - i));
        } else {
          setTimeout(() => addSlideIn(links[i]), 150 * (links.length - i));
        }
      }
    }
  }

  const addSlideIn = (element: Element) => {
    element.classList.add('slide-in');
  }

  const addSlideInFlipped = (element: Element) => {
    element.classList.add('slide-in-flip-x');
  }

  useEffect(() => {
    addIntersectionObserverOn('home', animation);
    setTimeout(() => slideIn(), 1300);
  });

  return (
    <div className="navigation d-flex justify-content-center align-items-center">
      <svg className="navigation-animatable flip-x" height="20" viewBox="0 0 655 244" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="curly-nav2" className="curly curly--nav dash-in" d="M0.999998 144.5C0.999998 144.5 -8.5 144.5 140 144.5C288.5 144.5 404.5 232 479.5 240.5C554.5 249 658.5 238 654 144.5C649.5 50.9999 519 0.499705 479.5 0.499756C440 0.499807 423.738 12.8773 432.5 42.5C441.262 72.1226 549 101 520.5 42.5" stroke="black" />
      </svg>
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link text-dark navigation-animatable" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark navigation-animatable" href="#projects">Projects</a>
        </li>
      </ul>
      <svg className="navigation-animatable" height="20" viewBox="0 0 655 244" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="curly-nav1" className="curly curly--nav dash-in" d="M0.999998 144.5C0.999998 144.5 -8.5 144.5 140 144.5C288.5 144.5 404.5 232 479.5 240.5C554.5 249 658.5 238 654 144.5C649.5 50.9999 519 0.499705 479.5 0.499756C440 0.499807 423.738 12.8773 432.5 42.5C441.262 72.1226 549 101 520.5 42.5" stroke="black" />
      </svg>
    </div>
  );
}

export default Navigation;
