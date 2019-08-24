import styled, { css } from "styled-components";
import { colors, font } from "../../variables";

export const TextareaStyled = styled.div`
  position: relative;

  ${props =>
    props.filled &&
    css`
      ${Field} {
        border-color: ${colors.main};
      }
    `};

  ${props =>
    props.error &&
    css`
      ${Field} {
        border-color: ${colors.softRed};
      }
      ${Error} {
        opacity: 1;
        visibility: visible;
      }
    `};
`;

export const Field = styled.textarea`
  padding-top: 16px;
  padding-left: 12px;
  width: 100%;
  height: 115px;
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
  font-family: ${font.openSans};
  font-size: 12px;
  color: ${colors.softRed};
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s;
`;

export const Description = styled.p`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  font-size: 12px;
  line-height: 1;
  color: ${colors.gray};
`;
