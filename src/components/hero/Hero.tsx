import React from 'react';
import './Hero.scss';

const Hero: React.FC = () => {
  return (
    <div className="hero position-relative">
      <div className="hero__bg"></div>
      <div className="hero__overlay position-absolute"></div>
    </div>
  );
}

export default Hero;


