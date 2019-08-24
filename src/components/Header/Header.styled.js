import styled, { css } from "styled-components";
import { colors, font } from "../../variables";
import { Logo } from "../Icons/Logo";

export const HeaderStyled = styled.header`
  padding: 32px 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${props =>
    props.isScroll &&
    css`
      position: fixed;
      z-index: 100;
      top: 0;
      left: 0;
      right: 0;
      box-shadow: 0 4px 8px 0 rgba(50, 60, 72, 0.15);
      border-bottom: 1px solid ${colors.whiteBlue};
      background-color: ${colors.white};
      transform: translateY(-100%);
      transition: transform ease-out 0.3s;

      ${LogoStyled} {
        width: 40px;
        height: 40px;
      }
    `}
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoStyled = styled(Logo)`
  margin-right: 98px;
  width: 66px;
  height: 66px;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
`;

export const Contacts = styled.div`
  margin-right: 24px;
`;

export const Phone = styled.a`
  display: block;
  font-size: 16px;
  font-family: ${font.openSans};
  text-decoration: none;
  text-align: right;
  color: ${colors.blue};
  transition: color 0.3s;

  &:hover {
    color: ${colors.vividBlueTwo};
  }
`;

export const Mail = styled(Phone)`
  margin-bottom: 8px;
`;
