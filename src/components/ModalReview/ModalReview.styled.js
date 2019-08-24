import styled from "styled-components";
import { colors } from "../../variables";
import { Letter } from "../Icons/Letter";
import Button from "../Button/Button";
import Textarea from "../Textarea/Textarea";
import Field from "../Field/Field";

export const ModalReviewStyled = styled.div`
  padding-top: 32px;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 48px;
  width: 650px;
  background-color: ${colors.white};
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

export const Image = styled(Letter)`
  width: 80px;
  height: 80px;
  margin-right: 30px;
`;

export const Title = styled.h2`
  font-size: 32px;
  line-height: 1.5;
  color: ${colors.main};
`;

export const Form = styled.form``;

export const TextareaStyled = styled(Textarea)`
  margin-bottom: 40px;
`;
export const FieldStyled = styled(Field)`
  margin-bottom: 24px;
`;

export const ButtonSubmit = styled(Button)`
  margin-top: 20px;
`;
