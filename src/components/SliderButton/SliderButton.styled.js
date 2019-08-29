import styled, { css } from "styled-components";
import { colors } from "../../variables";
import { ArrowLeft as Left } from "../Icons/ArrowLeft";
import { ArrowRight as Right } from "../Icons/ArrowRight";

const arrowStyle = css`
  width: 100%;
  height: 100%;
  transition: color 0.3s;
`;

export const ArrowLeft = styled(Left)`
  ${arrowStyle}
`;

export const ArrowRight = styled(Right)`
  ${arrowStyle}
`;

const buttonStyle = css`
  width: 32px;
  height: 32px;
  background-color: transparent;
  border: none;

  &:disabled {
    opacity: 0.8;
    pointer-events: none;
    cursor: inherit;
  }

  &:hover {
    ${ArrowLeft},
    ${ArrowRight} {
      color: ${colors.brightblue};
    }
  }

  &:active {
    ${ArrowLeft},
    ${ArrowRight} {
      color: ${colors.white};

      circle {
        fill: ${colors.vividBlueTwo};
        stroke: ${colors.vividBlueTwo};
        transition: fill 0.3s;
      }
    }
  }
`;

export const SliderPrevStyled = styled.button`
  margin-right: 24px;
  ${buttonStyle};
`;

export const SliderNextStyled = styled.button`
  ${buttonStyle};
`;

const sizeSliderButton = {
  small: css`
    ${SliderPrevStyled} {
      margin-right: 8px;
      width: 24px;
      height: 24px;
    }

    ${SliderNextStyled} {
      width: 24px;
      height: 24px;
    }
  `
};

export const SliderButtonStyled = styled.div`
  position: absolute;
  z-index: 10;
  top: 50%;
  right: 96px;
  transform: translateY(-50%);

  ${props => sizeSliderButton[props.size]}
`;
