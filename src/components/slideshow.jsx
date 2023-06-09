import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "./slideshow.scss";
import PropTypes from "prop-types";

function Slideshow({ photos }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentImage = photos[currentIndex];

  return (
    <div className="chevron">
      <div className="chevron_left" onClick={previousSlide}>
        {photos.length > 1 && <BsChevronLeft />}
      </div>
      <div className="chevron_right" onClick={nextSlide}>
        {photos.length > 1 && <BsChevronRight />}
      </div>
      <div className="number">
        {photos.length > 1 && `${currentIndex + 1}/${photos.length}`}
      </div>
      <img src={currentImage} alt={`Picture ${currentIndex}`} />
    </div>
  );
}

Slideshow.propTypes = {
  photos: PropTypes.array.isRequired,
};

export default Slideshow;
