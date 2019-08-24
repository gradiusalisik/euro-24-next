import React, { useRef } from "react";
import { inject } from "mobx-react";

import Button from "../Button/Button";
import ModalReview from "../ModalReview/ModalReview";

import {
  ReviewsStyled,
  Info,
  Title,
  Wrap,
  SliderButtonStyled,
  SliderReviewsStyled
} from "./Reviews.styled";

const Reviews = ({ openModalReview }) => {
  const sliderEl = useRef(null);

  const handleClickPrev = () => {
    sliderEl.current.slickPrev();
  };
  const handleClickNext = () => {
    sliderEl.current.slickNext();
  };

  const handleOpenReview = () => {
    openModalReview();
  };

  return (
    <ReviewsStyled>
      <SliderButtonStyled
        onClickNext={handleClickNext}
        onClickPrev={handleClickPrev}
      />
      <Info>
        <Wrap>
          <Title>
            Мы трудимся <br /> для вас.
          </Title>
          <Button onClick={handleOpenReview}>Оставить отзыв</Button>
        </Wrap>
      </Info>
      <SliderReviewsStyled ref={sliderEl} />
      <ModalReview />
    </ReviewsStyled>
  );
};

export default inject(({ modalStore }) => ({
  openModalReview: modalStore.openModalReview
}))(Reviews);
