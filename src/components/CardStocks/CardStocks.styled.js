import styled from "styled-components";
import { colors } from "../../variables";

export const CardStockStyled = styled.div`
  width: 100%;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Info = styled.div`
  padding: 24px 40px;
`;

export const Title = styled.h3`
  margin-bottom: 8px;
  font-size: 32px;
  line-height: 1.5;
  color: ${colors.main};
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 1.43;
  color: ${colors.main};
`;
