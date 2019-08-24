import styled, { css } from "styled-components";
import { colors } from "../../variables";

export const Wrap = styled.div`
  display: inline-flex;
  justify-content: center;
  width: 100%;
`;

export const ButtonBase = css`
  padding-left: 24px;
  padding-right: 24px;
  height: 40px;
  font-size: 16px;
  border-radius: 2px;
  white-space: nowrap;

  &:disabled {
    pointer-events: none;
    cursor: not-allowed;
  }
`;

export const buttonTheme = {
  primary: css`
    color: ${colors.white};
    background-color: ${colors.brightblue};
    border: none;
    box-shadow: 0 4px 8px 0 rgba(86, 149, 237, 0.15);
    transition: background-color 0.3s;

    &:hover {
      background-color: ${colors.vividBlue};
    }

    &:active {
      background-color: ${colors.vividBlueTwo};
    }

    &:disabled {
      background-color: ${colors.softBlue};
      box-shadow: none;
    }
  `,
  secondary: css`
    color: ${colors.orange};
    background-color: ${colors.white};
    border: 1px solid ${colors.vividOrange};
    transition: background-color 0.3s, color 0.3s, border-color 0.3s;

    &:hover,
    &:active {
      color: ${colors.white};
      border-color: transparent;
      box-shadow: 0 4px 8px 0 rgba(230, 120, 44, 0.15);
    }

    &:hover {
      background-color: ${colors.softOrange};
    }

    &:active {
      background-color: ${colors.vividOrangeTwo};
    }

    &:disabled {
      color: ${colors.softOrangeTwo};
      background-color: ${colors.white};
      border-color: ${colors.softOrangeThree};
    }
  `,
  tetriary: css`
    color: ${colors.white};
    background-color: ${colors.softOrange};
    border: none;
    box-shadow: 0 4px 8px 0 rgba(230, 120, 44, 0.15);
    transition: background-color 0.3s;

    &:hover {
      background-color: ${colors.vividOrangeTwo};
    }

    &:active {
      background-color: ${colors.vividOrangeThree};
    }

    &:disabled {
      background-color: ${colors.softOrangeFour};
      box-shadow: none;
    }
  `
};

const buttonSize = {
  full: css`
    width: 100%;
  `
};

export const ButtonStyled = styled.button`
  ${ButtonBase};
  ${p => buttonTheme[p.theme]};

  ${p => buttonSize[p.size]};
`;
