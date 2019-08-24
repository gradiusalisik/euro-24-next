import styled, { css } from "styled-components";
import { colors } from "../../variables";

import { ArrowBack } from "../Icons/ArrowBack";
import Price from "../Price/Price";
import Button from "../Button/Button";

export const ChooseSheetStyled = styled.div`
  display: flex;
  width: 368px;
`;

export const Image = styled.img`
  margin-right: 40px;
  width: 272px;
  height: 454px;
`;

export const Content = styled.div``;

export const ChooseSheetContent = styled.div`
  margin-bottom: 8px;
  display: flex;
  align-items: center;
`;

export const ButtonBack = styled.button`
  margin-right: 16px;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
`;

export const ArrowBackStyled = styled(ArrowBack)`
  width: 100%;
  height: 100%;
  color: ${colors.main};
`;

export const ChooseTitle = styled.h2`
  font-size: 32px;
  line-height: 1.5;
  color: ${colors.main};
`;

export const Info = styled.div``;

export const Category = styled.div`
  margin-bottom: 24px;
  font-size: 24px;
  line-height: 1;
  color: ${colors.gray};
`;

export const Sheets = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-wrap: wrap;
`;

export const CardSheetTitle = styled.span`
  font-size: 14px;
  line-height: 1.43;
  color: #747f93;
`;

export const CardSheet = styled.button`
  padding-top: 24px;
  padding-bottom: 24px;
  width: 112px;
  height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 1px solid ${colors.gray};
  border-radius: 4px;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(86, 149, 237, 0.15);
  }

  ${p =>
    p.active &&
    css`
      border-color: ${colors.brightblue};
      ${CardSheetTitle} {
        color: ${colors.brightblue};
      }
    `}

  &:not(:nth-child(3n)) {
    margin-right: 16px;
  }

  &:not(:nth-last-child(-n + 3)) {
    margin-bottom: 16px;
  }
`;

export const CardSheetImage = styled.img`
  margin-bottom: 8px;
  width: 64px;
  height: 64px;
`;

export const PriceStyled = styled(Price)`
  margin-bottom: 24px;
`;

export const ButtonOrder = styled(Button)`
  width: 210px;
`;
