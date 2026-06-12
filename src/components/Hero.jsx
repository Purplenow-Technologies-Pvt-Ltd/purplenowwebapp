import "./Hero.css";

import { useState, useEffect } from "react";

import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";
import hero5 from "../assets/hero5.jpg";
import hero6 from "../assets/hero6.jpg";

function Hero() {

  const slides = [

    {
  image: hero1,
  
},

    {
  image: hero2,
    },
  

    {
  image: hero3,
  
},
{
  image: hero4,
  
},
{
  image: hero5,
  
},
{
  image: hero6,
  
},
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );

    }, 4000);

    return () => clearInterval(interval);

  }, []);

  return (

    <section className="hero-section">

      {/* LEFT CONTENT */}

      <div className="hero-left">

        <h1>
          {slides[currentSlide].title}
        </h1>

        <p>
          {slides[currentSlide].description}
        </p>

        <div className="hero-buttons">

          

        </div>

      </div>

      {/* RIGHT IMAGE */}

      <div className="hero-right">

        <img
          src={slides[currentSlide].image}
          alt="hero"
        />

      </div>

      {/* MOUSE ICON */}

      <div className="scroll-icon">

        <div className="mouse">
          <span></span>
        </div>

      </div>

      {/* SLIDER DOTS */}

      <div className="slider-dots">

        {slides.map((_, index) => (

          <span
            key={index}
            className={currentSlide === index ? "dot active" : "dot"}
            onClick={() => setCurrentSlide(index)}
          ></span>

        ))}

      </div>

    </section>
  );
}

export default Hero;