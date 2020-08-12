import React, { useState, useEffect } from 'react';
import xlgBg from '../../assets/bg_xlg.png';
import largeBg from '../../assets/bg_lg.png';
import smallBg from '../../assets/bg_sm.png';
import mediumBg from '../../assets/bg_md.png';
import './Hero.scss';

const Hero: React.FC = () => {
  const [bg, setBg] = useState(xlgBg);

  const updateBg = () => {
    const newWidth = window.innerWidth;
    if (newWidth < 540) {
      setBg(smallBg);
    } else if (newWidth < 992) {
      setBg(mediumBg);
    } else if (newWidth < 1440) {
      setBg(largeBg);
    } else {
      setBg(xlgBg);
    }
  };

  useEffect(() => {
    updateBg();
    window.addEventListener('resize', updateBg)
  }, [])

  return (
    <div className="hero position-relative">
      <img className="hero__bg" width="1920" height="908" src={bg} alt="background" />
      <div className="hero__overlay position-absolute"></div>
    </div>
  );
}

export default Hero;


