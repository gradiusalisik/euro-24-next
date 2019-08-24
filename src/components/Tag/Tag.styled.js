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
  transition: border 0.3s, color 0.3s, background-color 0.3s;

  &:hover {
    color: ${colors.brightblue};
    border: 1px solid ${colors.brightblue};
  }

  ${props =>
    props.isActive &&
    css`
      border: 1px solid transparent;
      color: ${colors.white};
      background-color: ${colors.brightblue};

      &:hover {
        color: ${colors.white};
        background-color: ${colors.vividBlue};
        border: 1px solid transparent;
      }
    `}
`;
