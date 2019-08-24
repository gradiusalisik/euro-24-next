import React from "react";

import {
  SliderButtonStyled,
  SliderPrevStyled,
  ArrowLeft,
  SliderNextStyled,
  ArrowRight
} from "./SliderButton.styled";

const SliderButton = ({
  onClickNext,
  onClickPrev,
  currentSlide,
  slideCount,
  size,
  className
}) => {
  const disabledPrev = currentSlide !== undefined && currentSlide === 0;
  const disabledNext =
    currentSlide !== undefined && currentSlide === slideCount;

  return (
    <SliderButtonStyled className={className} size={size}>
      <SliderPrevStyled onClick={onClickPrev} disabled={disabledPrev}>
        <ArrowLeft />
      </SliderPrevStyled>
      <SliderNextStyled onClick={onClickNext} disabled={disabledNext}>
        <ArrowRight />
      </SliderNextStyled>
    </SliderButtonStyled>
  );
};

export default SliderButton;
