import React, { useEffect } from 'react';
import './CarWagon.css';
import { addIntersectionObserverOn } from '../../utils/AnimationHelper';

const CarWagon: React.FC = () => {

  const animation = ([entry]: IntersectionObserverEntry[]) => {
    const carwagon = document.getElementById('carwagon');
    const road1 = document.getElementById('road1');
    const road2 = document.getElementById('road2');
    const carPath2 = document.getElementById('car-path2');
    const wagonPath2 = document.getElementById('wagon-path2');
    const gasPath = document.getElementById('gas-path');
    if (carwagon && road1 && road2 && carPath2 && wagonPath2 && gasPath) {
      let calculatedRoad = (Math.max(((1 - entry.intersectionRatio - 0.65) * 100), 9)).toFixed(3);
      let calculatedCarPath2 = (Math.max((2015 * (1 - entry.intersectionRatio - 0.50) * 2), 0)).toFixed(3);
      let calculatedWagonPath2 = (Math.max((1894 * (1 - entry.intersectionRatio - 0.50) * 2), 0)).toFixed(3);
      carwagon.setAttribute('style', 'left:' + ((1 - entry.intersectionRatio - 0.30) * 100).toFixed(3) + '%');
      road1.setAttribute('style', 'right:' + calculatedRoad + '%');
      road2.setAttribute('style', 'left:' + calculatedRoad + '%');
      carPath2.setAttribute('style', `stroke-dashoffset:${ calculatedCarPath2 }px`);
      wagonPath2.setAttribute('style', `stroke-dashoffset:${ calculatedWagonPath2 }px`);
      gasPath.setAttribute('style', `stroke-dashoffset:${785 * (1 - entry.intersectionRatio) * 15}px`);
    }
  }

  useEffect(() => {
    addIntersectionObserverOn('hobby-projects', animation);
  });

  return (
    <div id="car-wagon-component" className="car-wagon d-none d-lg-block">
      <div className="py-5 position-relative">
        <div id="road1" className="position-absolute border-bottom border-dark"></div>
        <div id="carwagon" className="position-absolute">
          <svg id="car" className="position-absolute" height="40" viewBox="0 0 569 339" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="car-path1" d="M234 278C234 357 116 357 116 278H1.00003C1.00003 144.5 1.00002 144.5 202 144.5C202 -47.5 466 -47.5 466 144.5C528 144.5 568.5 201.5 568.5 278H528C528 358 407 358 407 278H234Z" fill="white" />
            <path id="car-path2" d="M116 278C116 199 234 199 234 278M116 278C116 357 234 357 234 278M116 278H1.00003C1.00003 144.5 1.00002 144.5 202 144.5C202 -47.5 466 -47.5 466 144.5C528 144.5 568.5 201.5 568.5 278H528M234 278H407M407 278C407 198 528 198 528 278M407 278C407 358 528 358 528 278" stroke="black" />
          </svg>
          <svg id="gas" className="position-absolute" height="45" viewBox="0 0 175 313" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="gas-path" d="M75.9999 312C99.9999 278 106 229.5 75.9999 204C46 178.5 23.5 134 75.9999 134C128.5 134 190 88.4999 75.9999 88.4999C-59.2091 88.4999 20 21.5 75.9999 51.4999C132 81.4999 190 73.9999 170 30.9999C150 -12 69.5 -4.5 75.9999 30.9999" stroke="black" />
          </svg>
          <svg id="wagon" className="position-absolute" height="55" viewBox="0 0 843 414" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="wagon-path1" d="M141 353.5C275 217.5 181 0.5 403 0.5C732 0.5 842 145.5 842 353.5H437.5C437.5 433.5 319 433.5 319 353.5H141Z" fill="white" />
            <path id="wagon-path2" d="M0 353.5H141M141 353.5C275 217.5 181 0.5 403 0.5C732 0.5 842 145.5 842 353.5H437.5M141 353.5H319M437.5 353.5C437.5 273.5 319 273.5 319 353.5M437.5 353.5C437.5 433.5 319 433.5 319 353.5" stroke="black" />
          </svg>
        </div>
        <div id="road2" className="position-absolute border-bottom border-dark"></div>
      </div>
    </div>
  );
}

export default CarWagon;

