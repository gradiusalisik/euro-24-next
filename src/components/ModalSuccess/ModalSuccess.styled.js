import styled from "styled-components";
import { colors } from "../../variables";
import Button from "../Button/Button";
import { Operator } from "../Icons/Operator";

export const ModalSuccessStyled = styled.div`
  padding-top: 38px;
  padding-bottom: 38px;
  width: 478px;
  height: 378px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.white};
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;

export const OperatorImage = styled(Operator)`
  width: 105px;
  height: 112px;
`;

export const Title = styled.h2`
  font-size: 32px;
  line-height: 1.5;
  color: ${colors.main};
`;

export const Description = styled.p`
  font-size: 22px;
  line-height: 1.45;
  color: ${colors.gray};
`;

export const ButtonBack = styled(Button)`
  width: 266px;
`;
