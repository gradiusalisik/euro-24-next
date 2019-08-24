import styled from "styled-components";
import { colors } from "../../variables";
import SliderReviews from "../SliderReviews/SliderReviews";
import SliderButton from "../SliderButton/SliderButton";

import ReviewIllustration from "../../assets/img/reviews/illustration-reviews.svg";

export const ReviewsStyled = styled.div`
  position: relative;
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
`;

export const Info = styled.div`
  position: relative;
  padding-top: 70px;
  margin-right: 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex: 0 0 auto;
  width: 486px;

  &::before {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 380px;
    height: 360px;
    content: "";
    background-image: url(${ReviewIllustration});
    background-repeat: no-repeat;
  }
`;

export const Wrap = styled.div`
  position: relative;
`;

export const Title = styled.h2`
  margin-bottom: 24px;
  font-size: 40px;
  line-height: 1.4;
  color: ${colors.main};
`;

export const SliderReviewsStyled = styled(SliderReviews)`
  width: 860px;
  height: 540px;
`;

export const SliderButtonStyled = styled(SliderButton)`
  top: -100px;
  transform: translateY(0);
`;
