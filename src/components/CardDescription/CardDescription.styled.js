import styled, { css } from "styled-components";
import { colors } from "../../variables";
import SliderButton from "../SliderButton/SliderButton";
import Price from "../Price/Price";

export const CardDescriptionStyled = styled.div`
  width: 100%;
  opacity: 0;
  transform: translateX(0);
  transition: transform 0.7s ease-in, opacity 0.7s ease-in;

  &:nth-child(${p => p.count + 1}) {
    opacity: 1;
  }

  ${p =>
    p.count &&
    p.maxWidth &&
    css`
      transform: translateX(-${p.count * p.maxWidth}px);
    `}
`;

export const Head = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Content = styled.div``;

export const Title = styled.h3`
  font-size: 32px;
  padding-right: 45px;
  line-height: 1.5;
  color: ${colors.main};
`;

export const SliderButtonStyled = styled(SliderButton)`
  top: calc(50% + 4px);
  right: 0;
`;

export const Tags = styled.div`
  margin-top: 8px;
  margin-left: -10px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const Tag = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  margin-left: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 20px;
  font-size: 12px;
  color: ${colors.white};
  background-color: ${colors.brightblue};
  border-radius: 20px;
`;

export const Description = styled.p`
  margin-top: 16px;
  margin-bottom: 24px;
  font-size: 14px;
  line-height: 1.43;
  color: ${colors.main};
`;

export const PriceStyled = styled(Price)`
  margin-bottom: 24px;
`;
