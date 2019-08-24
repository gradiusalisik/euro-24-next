import styled, { css } from "styled-components";
import { colors } from "../../variables";

export const Title = styled.h4`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.main};
`;

export const Description = styled.p`
  margin-top: 8px;
  font-size: 14px;
  line-height: 1.43;
  color: ${colors.main};
`;

const Theme = {
  white: css`
    ${Title},
    ${Description} {
      color: ${colors.white};
    }
  `
};

export const AdvantageStyled = styled.div`
  display: flex;
  width: 250px;
  ${p => Theme[p.theme]};
`;

export const Icon = styled.div`
  margin-right: 16px;
  flex: 0 0 auto;
  width: 32px;
  height: 32px;
`;

export const Content = styled.div``;
