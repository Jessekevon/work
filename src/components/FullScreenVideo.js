import React, { useEffect, useState } from 'react';

const Slide = ({ title, isCurrent }) => {
  const slideClass = isCurrent ? 'slide slide--current' : 'slide';

  return (
    <div className={slideClass}>
      <span className="slide-title">{title}</span>
    </div>
  );
};

const Slideshow = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
    }, 4500);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="slideshow">
      {slides.map((slide, index) => (
        <Slide key={index} title={slide} isCurrent={index === current} />
      ))}
    </div>
  );
};

const FullscreenVideo = () => {
  const slides = ['Development', 'Prototypes', 'Digital Solutions', 'Ui/Ux Design'];

  return (
    <div className="fullscreen-video">
      <video loop autoPlay muted playsInline preload="auto" poster="">
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div className="video-text-overlay">
        <div className="video-text">
          <div className="text-slider">
            <h1><Slideshow slides={slides} /></h1>
          </div>
        </div>
        <h3>by Jesse Kevon</h3>
      </div>
      <div className="scroll-down"><span></span></div>
    </div>
  );
};

export default FullscreenVideo;
