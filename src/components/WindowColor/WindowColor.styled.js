import styled from "styled-components";
import { colors } from "../../variables";

import { ArrowBack } from "../Icons/ArrowBack";
import Price from "../Price/Price";
import SliderButton from "../SliderButton/SliderButton";

export const WindowColorStyled = styled.div`
  display: flex;
`;

export const Image = styled.img`
  margin-right: 40px;
  width: 272px;
  height: 392px;
`;

export const Content = styled.div``;

export const ChooseColor = styled.div`
  margin-bottom: 8px;
  display: flex;
  align-items: center;
`;

export const ButtonBack = styled.button`
  margin-right: 16px;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
`;

export const ArrowBackStyled = styled(ArrowBack)`
  width: 100%;
  height: 100%;
  color: ${colors.main};
`;

export const ChooseTitle = styled.h2`
  font-size: 32px;
  line-height: 1.5;
  color: ${colors.main};
`;

export const Info = styled.div``;

export const Title = styled.h3`
  margin-bottom: 16px;
  font-size: 24px;
  line-height: 1;
  color: ${colors.main};
`;

export const Head = styled.div`
  margin-bottom: 12px;
  display: flex;
  align-items: center;
`;

export const SliderButtonStyled = styled(SliderButton)`
  position: static;
  margin-right: 16px;
  transform: translate(0);
`;

export const Category = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.gray};
`;

export const Slides = styled.div`
  position: relative;
  margin-bottom: 24px;
  display: flex;
  overflow: hidden;
  width: 308px;
  min-height: 180px;
`;

export const Item = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  flex: 0 0 auto;
  width: 100%;
  opacity: 0;
  display: flex;
  flex-wrap: wrap;
  transform: translateX(100px);
  transition: transform 0.7s ease-in, opacity 0.7s ease-in;

  &:nth-child(${p => p.count}) {
    transform: translateX(-100px);
  }

  &:nth-child(${p => p.count + 1}) {
    opacity: 1;
    z-index: 1;
    transform: translateX(0);
  }

  &:nth-child(${p => p.count + 2}) {
    transform: translateX(100px);
  }
`;

export const PriceStyled = styled(Price)`
  margin-bottom: 24px;
`;

export const Buttons = styled.div`
  width: 210px;

  & > *:first-child {
    margin-bottom: 24px;
  }
`;
