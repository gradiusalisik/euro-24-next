import styled from "styled-components";
import { colors } from "../../variables";

export const ModalWindowCalculatorStyled = styled.div`
  padding-top: 32px;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 48px;
  width: 952px;
  background-color: ${colors.white};
`;

export const ChoiceWindow = styled.div``;

export const Header = styled.div`
  margin-bottom: 30px;
  display: flex;
`;

export const ImageWindow = styled.img`
  width: 70px;
  height: 80px;
`;
export const ImageTypeWindow = styled.img`
  width: 80px;
  height: 76px;
`;
export const ImageLastStep = styled.img`
  width: 80px;
  height: 50px;
`;

export const Info = styled.div`
  margin-left: 30px;
`;

export const Title = styled.h2`
  margin-bottom: 15px;
  font-size: 32px;
  color: ${colors.main};
`;

export const SubTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 24px;
  line-height: 1;
  color: ${colors.main};
`;

export const Windows = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;

  & > * {
    width: 95px;

    &:first-child {
      margin-right: 16px;
    }
  }
`;

export const Form = styled.form``;

export const ButtonsLast = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & > *:last-child {
    width: 266px;
  }
`;
