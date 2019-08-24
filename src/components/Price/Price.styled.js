import styled from "styled-components";
import { colors } from "../../variables";

export const PriceStyled = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const Text = styled.span`
  padding-bottom: 4px;
  font-size: 14px;
  color: ${colors.main};
`;

export const Value = styled.span`
  padding-right: 8px;
  padding-left: 8px;
  font-size: 32px;
  font-weight: 500;
  color: ${colors.orange};
`;
