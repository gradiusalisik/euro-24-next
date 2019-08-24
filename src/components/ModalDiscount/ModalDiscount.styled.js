import styled from "styled-components";
import { colors } from "../../variables";
import Button from "../Button/Button";
import { Discount } from "../Icons/Discount";
import BackgroundModal from "../../assets/img/promo/background-modal.png";

export const ModalDiscountStyled = styled.div`
  position: relative;
  width: 650px;
  height: 436px;
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const DiscountImage = styled(Discount)`
  width: 128px;
  height: 128px;
`;

export const Title = styled.h2`
  font-size: 32px;
  line-height: 1.5;
  color: ${colors.main};
`;

export const Description = styled.p`
  width: 100%;
  max-width: 400px;
  font-size: 14px;
  line-height: 1.43;
  text-align: center;
  color: ${colors.gray};
`;

export const ButtonBack = styled(Button)`
  width: 210px;
`;

export const Background = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${BackgroundModal});
  background-size: 100%;
  background-repeat: no-repeat;
`;
