import styled from "styled-components";
import { colors } from "../../variables";
import Field from "../Field/Field";
import Button from "../Button/Button";

export const FeedbackStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 102px;
`;

export const GetDiscountStyled = styled.div`
  padding-top: 32px; 
  padding-bottom: 32px;
  max-width: 930px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.white};
  background-color: ${colors.vividViolet};
`;

export const Title = styled.span`
  margin-bottom: 20px;
  font-size: 40px;
  line-height: 1.4;
`;

export const Subtitle = styled.span`
  font-size: 20px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  width: 762px;
`;

export const Fields = styled.div`
  display: flex;
  align-items: center;
`;

export const FieldStyled = styled(Field)`
  width: 266px;
  height: 60px;

  &:last-child {
    margin-left: 24px;
    margin-right: 24px;
  }
`;

export const ButtonStyled = styled(Button)`
  width: 180px;
  height: 60px;
`;