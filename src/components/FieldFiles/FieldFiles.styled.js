import styled, { css } from "styled-components";
import { colors, font } from "../../variables";
import { Close } from "../Icons/Close";

export const FieldFilesStyled = styled.div`
  position: relative;
  margin-bottom: 24px;

  ${props =>
    props.error &&
    css`
      ${Error} {
        opacity: 1;
        visibility: visible;
      }
    `};
`;

export const Container = styled.div`
  position: relative;
  overflow: hidden;
`;

export const Dropzone = styled.div`
  height: 104px;
`;

export const Input = styled.input``;

export const Files = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  ${p =>
    p.file &&
    css`
      width: auto;
    `}
`;

export const File = styled.div`
  position: relative;
  width: 104px;
  height: 104px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid ${colors.gray};
  background-color: ${colors.white};
  overflow: hidden;

  &:not(:last-child) {
    margin-right: 12px;
  }
`;

export const ImageWrap = styled.div`
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const Plus = styled(Close)`
  transform: rotate(45deg);
  color: ${colors.gray};
`;

export const ButtonRemove = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 16px;
  height: 16px;
  font-size: 12px;
  color: ${colors.main};
  background-color: transparent;
  border: none;
  transition: color 0.3s;

  &:hover {
    color: ${colors.orange};
  }
`;

export const CloseIcon = styled(Close)`
  width: 100%;
  height: 100%;
  color: inherit;
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
