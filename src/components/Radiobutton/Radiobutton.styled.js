import styled from "styled-components";
import { colors } from "../../variables";

export const Label = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
`;

export const Color = styled.div`
  width: 32px;
  height: 32px;
  background-image: url(${p => p.background});
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
  background-size: 100%;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 0 0 6px ${colors.softBlue};
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

  &:checked + ${Color} {
    box-shadow: 0 0 0 3px ${colors.white}, 0 0 0 6px ${colors.softBlueTwo};
  }
`;
