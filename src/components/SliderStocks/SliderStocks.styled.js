import styled from "styled-components";
import Slider from "react-slick";
import CardStock from "../CardStocks/CardStocks";

export const SliderStocksStyled = styled(Slider)`
  .slick-slide {
    transform: scale(0.9);
    /* max-width: 464px; */
    transition: transform 0.3s ease;
  }

  .slick-center {
    position: relative;
    z-index: 1;
    transform: scale(1);
  }

  .slick-list {
    overflow: hidden;
  }

  .slick-slide[aria-hidden="true"] {
    transform: translateX(90px) scale(0.9);
  }

  .slick-slide[aria-hidden="false"] {
    transform: translateX(100px) scale(0.9);
    & + .slick-slide[aria-hidden="false"] {
      transform: translateX(15px) scale(1);

      & + .slick-slide[aria-hidden="false"] {
        transform: translateX(-75px) scale(0.9);
        & + .slick-slide {
          transform: translateX(-70px) scale(0.9);
        }
      }
    }
  }
`;

export const CardStocksStyled = styled(CardStock)``;
export const CardStocksItems = styled(CardStock)`
  padding-right: 20px;
  padding-left: 20px;
`;

export const List = styled.div`
  display: flex;
`;
