import styled from "styled-components";
import Button from "../Button/Button";
import Advantage from "../Advantage/Advantage";

export const BalconiesStyled = styled.div`
  margin-bottom: 100px;
  padding-left: 56px;
  padding-right: 56px;
`;

export const Content = styled.div`
  padding-top: 48px;
  display: flex;
  justify-content: center;
`;

export const ButtonStyled = styled(Button)`
  width: 210px;
`;

export const Photo = styled.img`
  margin-right: 40px;
  width: 622px;
  height: 324px;
`;

export const Info = styled.div`
  margin-right: 56px;
  display: flex;
`;

export const Advantages = styled.div`
  padding-top: 66px;
`;

export const AdvantageStyled = styled(Advantage)`
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;
