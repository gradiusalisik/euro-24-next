import styled, { css } from "styled-components";
import { colors } from "../../variables";

export const TagStyled = styled.button`
  padding-left: 15px;
  padding-right: 15px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 100px;
  height: 30px;
  font-size: 14px;
  white-space: nowrap;
  color: ${colors.gray};
  border-radius: 20px;
  background-color: ${colors.white};
  border: 1px solid ${colors.gray};
  cursor: pointer;
  transition: border-color 0.3s, color 0.3s, background-color 0.3s;
  will-change: border-color, color, background-color;

  &:hover {
    color: ${colors.brightblue};
    border-color: ${colors.brightblue};
  }

  ${props =>
    props.isActive &&
    css`
      color: ${colors.white};
      background-color: ${colors.brightblue};
      border-color: transparent;

      &:hover {
        color: ${colors.white};
        background-color: ${colors.vividBlue};
        border-color: transparent;
      }
    `}
`;
