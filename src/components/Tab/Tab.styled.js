import styled, { css } from "styled-components";
import { colors } from "../../variables";
import { TagStyled } from "../Tag/Tag.styled";

export const TabStyled = styled(TagStyled)`
  padding-left: 17px;
  padding-right: 17px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 100px;
  height: 30px;
  font-size: 14px;
  white-space: nowrap;
  color: ${colors.gray};
  background-color: ${colors.white};
  border: 1px solid ${colors.gray};
  cursor: pointer;
  border-radius: 0;
  transition: border-color 0.3s, color 0.3s, background-color 0.3s;

  &:hover {
    color: ${colors.brightblue};
    border-color: ${colors.brightblue};
  }

  &:hover + button {
    border-left-color: ${colors.brightblue};
  }

  &:first-child {
    border-bottom-left-radius: 50px;
    border-top-left-radius: 50px;
  }

  &:last-child {
    border-bottom-right-radius: 50px;
    border-top-right-radius: 50px;
  }

  &:not(:last-child) {
    border-right: 0;
  }

  ${props =>
    props.isActive &&
    css`
      border-color: transparent;
      color: ${colors.white};
      background-color: ${colors.brightblue};
      transition: background-color 0.3s;

      &:hover {
        color: ${colors.white};
        background-color: ${colors.vividBlue};
        border-color: transparent;
      }
    `}
`;
