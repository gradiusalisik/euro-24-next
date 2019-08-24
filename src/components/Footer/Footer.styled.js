import styled from "styled-components";
import { colors } from "../../variables";
import { LogoFooter } from "../Icons/LogoFooter";

export const FooterStyled = styled.footer`
  background-color: ${colors.dark};
`;

export const Wrap = styled.div`
  padding: 38px 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
`;

export const Right = styled.div`
`;

export const CopyrightStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 41px;
  padding-bottom: 41px;
  border-top: 1px solid rgba(126, 143, 164, 0.5);
`;

export const CopyrightTextStyled = styled.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.3);
`;

export const LogoFooterStyled = styled(LogoFooter)`
  margin-right: 44px;
  width: 72px;
  height: 65px;
`;