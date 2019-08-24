import styled, { css } from "styled-components";
import { colors, font } from "../../variables";

export const FieldStyled = styled.div`
  position: relative;
  width: 100%;

  ${props =>
    props.filled &&
    css`
      ${Input} {
        border-color: ${colors.main};
      }
    `};

  ${props =>
    props.error &&
    css`
      ${Input} {
        border-color: ${colors.softRed};
      }
      ${Error} {
        opacity: 1;
        visibility: visible;
      }
    `};
  ${p => size[p.size]};
`;

export const Input = styled.input`
  padding-left: 12px;
  width: 100%;
  height: 40px;
  font-size: 16px;
  color: ${colors.main};
  border-radius: 2px;
  border: 1px solid ${colors.whiteBlue};
  background-color: ${colors.white};
  transition: border-color 0.3s;

  &:focus {
    border-color: ${colors.vividBlueTwo};
  }

  &:placeholder {
    color: ${colors.gray};
    border-color: ${colors.whiteBlue};
  }
`;

export const Error = styled.span`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  opacity: 0;
  visibility: hidden;
  display: block;
  font-family: ${font.openSans};
  font-size: 12px;
  color: ${colors.softRed};
  transition: opacity 0.3s;
`;

const size = {
  full: css`
    ${Input} {
      width: 100%;
      height: 100%;
      border: solid 1px ${colors.whiteBlue};
      border-top: none;
    }
`};