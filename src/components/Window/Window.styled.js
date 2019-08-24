import styled, { keyframes } from "styled-components";
import { colors } from "../../variables";
import Advantage from "../Advantage/Advantage";
import WindowColor from "../WindowColor/WindowColor";
import { Color } from "../Icons/Color";

const radialPulse = keyframes`
  0% {
    box-shadow: 0 0 0 0px rgba(143, 3, 253, 0.3),
			0 0 0 0px rgba(143, 3, 253, 0.2);
  }

  100% {
    box-shadow: 0 0 0 20px rgba(143, 3, 253, 0.3), 0 0 0 40px rgba(143, 3, 253, 0.2);
  }
`;

export const WindowStyled = styled.div`
  margin-bottom: 100px;
  padding-left: 56px;
  padding-right: 56px;
`;

export const Content = styled.div`
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
`;

export const Visual = styled.div`
  position: relative;
  margin-right: 40px;
`;

export const Photo = styled.div`
  width: 270px;
  height: 454px;
  background-image: url(${p => p.background});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const ButtonColor = styled.button`
  position: absolute;
  left: 16px;
  bottom: 68px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: ${colors.purpleDark};
  border-radius: 50%;
  border: none;
  animation: ${radialPulse} 1s infinite;
`;

export const ColorIcon = styled(Color)`
  width: 18px;
  height: 18px;
  color: ${colors.white};
`;

export const Buttons = styled.div`
  width: 210px;

  & > * {
    &:first-child {
      margin-bottom: 16px;
    }
  }
`;

export const Information = styled.div`
  margin-right: 56px;
  display: flex;
  width: 50%;
`;

export const Colors = styled.div`
  margin-right: 16px;
  width: 50%;
`;

export const Advantages = styled.div`
  padding-top: 106px;
  margin-left: -40px;
  display: flex;
  width: 50%;
  flex-wrap: wrap;
`;

export const AdvantageStyled = styled(Advantage)`
  margin-left: 40px;

  &:not(:nth-last-child(-n + 2)) {
    margin-bottom: 20px;
  }
`;

export const WindowColorStyled = styled(WindowColor)``;
