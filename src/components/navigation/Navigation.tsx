import React from 'react';
import './Navigation.scss';

const Navigation: React.FC = () => {
  setTimeout(() => slideIn(), 2100);

  const slideIn = () => {
    const links = document.getElementsByClassName('nav-item');
    if (links) {
      for (let i = 0; i < links.length; i++) {
        setTimeout(() => addSlideIn(links[i]), 150*(links.length-i));
      }
    }
  }

  const addSlideIn = (element: Element) => {
    element.classList.add('slide-in');
  }

  return (
    <ul className="nav">
        <li className="nav-item">
            <a className="nav-link text-dark" href="#about"><h2>About</h2></a>
        </li>
        <li className="nav-item">
            <a className="nav-link text-dark" href="#projects"><h2>Projects</h2></a>
        </li>
    </ul>
  );
}

export default Navigation;
