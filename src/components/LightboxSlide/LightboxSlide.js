import React, { useState } from "react";
import Lightbox from "react-image-lightbox";

const LightboxSlide = React.memo(({ images, onClose, currentIndexSlide }) => {
  const [currentIndex, setCurrentSlide] = useState(currentIndexSlide);

  const handleClickPrevSlides = () => {
    const current = (currentIndex + images.length - 1) % images.length;
    setCurrentSlide(current);
  };

  const handleClickNextSlides = () => {
    const current = (currentIndex + 1) % images.length;
    setCurrentSlide(current);
  };

  return (
    <Lightbox
      mainSrc={images[currentIndex]}
      nextSrc={images[(currentIndex + 1) % images.length]}
      prevSrc={images[(currentIndex + images.length - 1) % images.length]}
      onCloseRequest={onClose}
      onMovePrevRequest={handleClickPrevSlides}
      onMoveNextRequest={handleClickNextSlides}
    />
  );
});

export default LightboxSlide;
