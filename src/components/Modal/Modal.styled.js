import styled, { css } from "styled-components";
import { colors } from "../../variables";
import { Close } from "../Icons/Close";

export const ModalStyled = styled.div`
  position: fixed;
  z-index: -100000;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-overflow-scrolling: touch;
  visibility: hidden;
  font-size: 0;
  opacity: 0;
  transition: visibility 0.3s, opacity 0.3s;
  will-change: visibility, opacity;

  ${p =>
    p.isShow &&
    css`
      z-index: 10000;
      visibility: visible;
      opacity: 1;
    `}
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background-color: transparent;
`;

export const CloseIcon = styled(Close)`
  width: 20px;
  height: 20px;
  color: ${colors.whiteBlue};
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10001;
  width: 100%;
  height: 100%;
  background-color: ${colors.main};
  border: none;
  opacity: 0.5;
`;

export const Content = styled.div`
  position: relative;
  z-index: 10002;
`;
