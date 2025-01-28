import React, { useState, useEffect } from 'react';
import './Carousel.css';
import slide1 from '../assets/slide1.jpeg';
import slide2 from '../assets/slide2.jpeg';
import slide3 from '../assets/slide3.jpeg';

const HomeCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Every Kit Makes a Difference",
      description: "Each educational kit empowers a child to learn, grow, and build a brighter future. Help us reach our goal of 1000 kits this year.",
      imageUrl:slide1,
      
    },
    {
      title: "Make a Difference Today",
      description: "Your support can help transform lives. Every contribution, big or small, creates ripples of change",
      imageUrl: slide2,
      
    },
    {
      title: "Volunteer With Us",
      description: "Be part of our mission to build stronger communities. Share your skills and time for a better tomorrow",
      imageUrl: slide3,
      
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-carousel">
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              transform: `translateX(${100 * (index - currentSlide)}%)`
            }}
          >
            <img
              src={slide.imageUrl}
              alt={slide.title}
              className="slide-image"
            />
            <div className="slide-content">
              <div className="slide-text">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="nav-button prev" onClick={prevSlide}>
        ←
      </button>
      <button className="nav-button next" onClick={nextSlide}>
        →
      </button>

      <div className="dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeCarousel;