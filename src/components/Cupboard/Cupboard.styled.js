import styled from "styled-components";
import { colors } from "../../variables";
import Button from "../Button/Button";

export const CupboardStyled = styled.div`
  margin-bottom: 100px;
`;

export const Content = styled.div`
  padding-top: 48px;
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
`;

export const Wrap = styled.div`
  position: relative;
  z-index: 1;
`;

export const ButtonStyled = styled(Button)`
  width: 210px;
`;

export const Photo = styled.img`
  margin-left: 64px;
  width: 352px;
  height: 470px;
  box-shadow: 0 4px 13px 0 rgba(50, 60, 72, 0.15);
  border: 1px solid ${colors.whiteBlue};
`;
