import styled from "styled-components";
import { colors } from "../../variables";
import Field from "../Field/Field";

export const Form = styled.form`
  width: 560px;
`;

export const Title = styled.h2`
  margin-bottom: 16px;
  font-size: 40px;
  line-height: 1.4;
  color: ${colors.main};

  strong {
    color: ${colors.blue};
  }
`;

export const Description = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
  color: ${colors.main};
`;

export const Fields = styled.div`
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FieldStyled = styled(Field)`
  &:last-child {
    margin-left: 16px;
  }
`;
