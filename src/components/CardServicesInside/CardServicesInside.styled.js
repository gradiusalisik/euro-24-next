import styled from "styled-components";
import { colors } from "../../variables";

export const CardServicesInsideStyled = styled.div`
  background-color: ${colors.white};

  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;

export const Title = styled.h4`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.main};
`;

export const Description = styled.p`
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 1.43;
  color: ${colors.main};
`;
