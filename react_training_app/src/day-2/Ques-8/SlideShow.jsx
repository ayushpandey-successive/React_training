/*Use the useEffect hook to manage the current slide and transition.
Add few images atleast 10 in public folder to populate the slideshow.
Allow users to pause, play the slideshow.
Include a time interval option to control the automatic slideshow progression.*/

import React, { useState, useEffect } from "react";

const Slideshow = ({ images }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const nextSlide = () => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % images.length);
    };

    let intervalId;

    if (isPlaying) {
      intervalId = setInterval(nextSlide, 2000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [activeSlide, isPlaying, images]);

  const togglePlay = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  return (
    <div>
      <img src={images[activeSlide]} alt={`Slide ${activeSlide + 1}`} />

      <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>

      <div className="slide-nav">
        {images.map((_, index) => (
          <button key={index} onClick={() => goToSlide(index)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
