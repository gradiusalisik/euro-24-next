import styled from "styled-components";
import { colors } from "../../variables";

export const Label = styled.label``;

export const Text = styled.span`
  position: relative;
  padding-left: 32px;
  font-size: 16px;
  color: ${colors.gray};
  line-height: normal;
  cursor: pointer;
  user-select: none;

  &:before {
    position: absolute;
    top: 2px;
    left: 8px;
    width: 16px;
    height: 16px;
    content: "";
    border: 1px solid ${colors.whiteBlue};
    border-radius: 2px;
    background-color: ${colors.white};
    transition: background-color 0.3s;
  }

  &:after {
    position: absolute;
    left: 12px;
    top: 6px;
    content: "";
    width: 9px;
    height: 4px;
    opacity: 0;
    border: 2px solid ${colors.white};
    border-top: none;
    border-right: none;
    transform: rotate(-52deg);
  }
`;

export const Input = styled.input`
  position: absolute;
  overflow: hidden;
  width: 1px;
  height: 1px;
  padding: 0;
  border: 0;
  margin: -1px;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  white-space: nowrap;

  &:checked + ${Text}:before {
    background-color: ${colors.vividBlue};
  }

  &:checked + ${Text}:after {
    opacity: 1;
  }
`;
