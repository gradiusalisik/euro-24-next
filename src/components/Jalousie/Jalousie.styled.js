import styled from "styled-components";
import Button from "../Button/Button";

export const JalousieStyled = styled.div`
  margin-bottom: 100px;
  position: relative;
  z-index: 1;
`;

export const Content = styled.div`
  padding-top: 48px;
  max-width: 868px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
`;

export const ButtonStyled = styled(Button)`
  width: 210px;
`;

export const Photo = styled.img`
  margin-left: 66px;
  width: 470px;
  height: 352px;
`;
