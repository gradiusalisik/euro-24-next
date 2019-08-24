import styled, { css } from "styled-components";
import { colors } from "../../variables";
import Tabs from "../Tabs/Tabs";
import Button from "../Button/Button";
import CardsServicesContent from "../CardsServicesContent/CardsServicesContent";
import Title from "../Title/Title";
import { ArrowBack } from "../Icons/ArrowBack";

export const ServicesStyled = styled.div`
  margin-bottom: 100px;
`;

export const TitleWrap = styled.div`
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleStyled = styled(Title)`
  margin-bottom: 0;
`;

export const ArrowBackStyled = styled(ArrowBack)`
  width: 100%;
  height: 100%;
  color: ${colors.black};
`;

export const ButtonBack = styled.button`
  margin-right: 16px;
  width: 24px;
  height: 24px;
  font-size: 14px;
  border: none;
  background-color: transparent;
`;

export const TabsStyled = styled(Tabs)`
  margin-bottom: 12px;
`;

export const Content = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
`;

export const ContentInside = styled.div`
  padding-right: 90px;
`;

export const TabContent = styled.div`
  position: relative;
  width: 680px;
  height: 630px;
  overflow: hidden;
`;

export const CardsServicesContentStyled = styled(CardsServicesContent)`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transform: translateX(100%);
  transition: transform 0.7s ease-in, opacity 0.3s ease-in;

  ${p =>
    p.isActive &&
    css`
      z-index: 2;
      opacity: 1;
      transform: translateX(0);
    `}
`;

export const Visual = styled.div`
  padding-top: 25px;

  ${p =>
    p.serviceInside &&
    css`
      padding-top: 0;
    `}
`;

export const Photo = styled.div`
  margin-bottom: 32px;
  width: 264px;
  height: 462px;
  background-image: url(${p => p.background});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ButtonStyled = styled(Button)`
  width: 100%;
`;
