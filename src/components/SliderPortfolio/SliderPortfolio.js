import React, { useState } from "react";
import { PropTypes as pt } from "prop-types";
import { SliderPortfolioStyled, Image } from "./SliderPortfolio.styled";
import LightboxSlide from "../LightboxSlide/LightboxSlide";

const SliderPortfolio = React.forwardRef(({ slides, changeSlider }, ref) => {
  const [isOpenSlides, setOpenSlides] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    slidesToShow: 3,
    infinite: false,
    arrows: false,
    rows: 2,
    centerPadding: "60px",
    speed: 500,
    slidesPerRow: 1,
    beforeChange: (current, next) => changeSlider(next)
  };

  const handleOpenSlides = id => () => {
    const currentIndexSlide = slides.map(item => item.id).indexOf(id);

    setCurrentIndex(currentIndexSlide);
    setOpenSlides(true);
  };

  const handleCloseSlides = () => {
    setOpenSlides(false);
  };

  const images = slides.map(item => item.image);

  return (
    <SliderPortfolioStyled {...settings} ref={ref}>
      {slides.map(slide => (
        <Image
          key={slide.id}
          src={slide.image}
          category={slide.category}
          alt={slide.category}
          onClick={handleOpenSlides(slide.id)}
        />
      ))}
      {isOpenSlides && (
        <LightboxSlide
          onClose={handleCloseSlides}
          images={images}
          currentIndexSlide={currentIndex}
        />
      )}
    </SliderPortfolioStyled>
  );
});

SliderPortfolio.propTypes = {
  slides: pt.arrayOf(
    pt.shape({
      image: pt.string,
      category: pt.string,
      id: pt.string
    })
  )
};

export default SliderPortfolio;
