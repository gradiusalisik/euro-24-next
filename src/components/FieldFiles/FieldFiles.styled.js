import styled, { css } from "styled-components";
import { colors } from "../../variables";
import { Close } from "../Icons/Close";

export const Container = styled.div`
  margin-bottom: 24px;
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
`;

export const Plus = styled(Close)`
  transform: rotate(45deg);
  color: ${colors.gray};
`;
