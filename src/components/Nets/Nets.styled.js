import styled from "styled-components";
import Advantage from "../Advantage/Advantage";

export const NetsStyled = styled.div`
  margin-bottom: 100px;
  position: relative;
  z-index: 1;
`;

export const Content = styled.div`
  padding-top: 40px;
  max-width: 940px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
`;

export const Photo = styled.div`
  margin-right: 40px;
  width: 270px;
  height: 454px;
  flex: 0 0 auto;
  background-image: url(${p => p.background});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const ButtonColor = styled.button`
  border: none;
  background-color: transparent;
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
`;

export const NetsType = styled.div`
  margin-right: 16px;
`;

export const Advantages = styled.div`
  padding-top: 106px;
`;

export const AdvantageStyled = styled(Advantage)`
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;
