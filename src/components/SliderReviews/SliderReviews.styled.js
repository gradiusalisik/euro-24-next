import styled from "styled-components";
import Slider from "react-slick";
import CardReviews from "../CardReviews/CardReviews";

import { Content } from "../CardReviews/CardReviews.styled";

export const CardReviewsStyled = styled(CardReviews)`
  opacity: 0.6;
`;

export const SliderReviewsStyled = styled(Slider)`
  .slick-list,
  .slick-track {
    height: 100%;
  }

  .slick-slide[aria-hidden="true"] {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s, visibility 0.3s;
  }

  .slick-slide[aria-hidden="false"] {
    opacity: 1;
    visibility: visible;
  }

  .slick-track {
    width: 100% !important;
    transform: translate(0) !important;
  }

  .slick-slide {
    position: absolute;
    left: 0;
    transform: scale(0.7) translateX(-126px);
    width: 630px !important;
    transition: transform 0.5s;
    will-change: transform, left, right;
    backface-visibility: hidden;
  }

  .slick-current + .slick-slide {
    z-index: 1;
    height: 540px !important;
    transform: scale(1) translateX(124px);

    ${CardReviewsStyled} {
      max-height: 100%;
    }

    ${Content},
    ${CardReviewsStyled} {
      opacity: 1;
    }
    ${Content} {
      transform: scale(1);
    }
  }

  .slick-current + .slick-slide + .slick-slide[aria-hidden="false"] {
    transform: scale(0.7) translateX(458px);

    & + .slick-slide {
      transform: scale(0.7) translateX(458px);
      & + .slick-slide {
        transform: scale(0.7) translateX(458px);
      }
    }
  }
`;
