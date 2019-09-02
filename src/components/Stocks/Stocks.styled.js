import styled from "styled-components";
import { colors } from "../../variables";

export const StocksStyled = styled.div`
  margin-bottom: 100px;
`;

export const Subtitle = styled.p`
  margin-top: 15px;
  font-size: 12px;
  color: ${colors.dark};

  strong {
    font-weight: bold;
  }
`;

export const Top = styled.div`
  position: relative;
`;
