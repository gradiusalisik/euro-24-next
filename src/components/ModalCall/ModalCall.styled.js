import styled from "styled-components";
import { colors } from "../../variables";
import { Master } from "../Icons/Master";
import Button from "../Button/Button";
import Field from "../Field/Field";

export const ModalCallStyled = styled.div`
  padding-top: 32px;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 48px;
  display: flex;
  width: 570px;
  background-color: ${colors.white};
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;

export const Image = styled(Master)`
  width: 80px;
  height: 80px;
  margin-right: 30px;
`;

export const Title = styled.h2`
  margin-bottom: 15px;
  font-size: 32px;
  line-height: 1.5;
  color: ${colors.main};
`;

export const Description = styled.p`
  margin-bottom: 40px;
  font-size: 14px;
  line-height: 1.43;
  color: ${colors.gray};
`;

export const Form = styled.form`
  width: 277px;
`;

export const FieldStyled = styled(Field)`
  margin-bottom: 24px;
`;

export const ButtonSubmit = styled(Button)`
  margin-top: 10px;
`;
