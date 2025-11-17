import React from 'react';
import Typewriter from 'components/Typewriter';

const Hero = () => {
  const handleScroll = e => {
    e.preventDefault();
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hero-container">
      <Typewriter className="hero-title" text="Catherine Bilyeu" />
      <div className="hero-description">
        DevOps roots. Builder heart. Crafting software that feels intuitive, purposeful, and just a little bit magical.<br />Check out
        my{' '}
        <a href="#projects" onClick={handleScroll}>
          side-projects
        </a>{' '}
        below.
      </div>
    </div>
  );
};

export default Hero;
