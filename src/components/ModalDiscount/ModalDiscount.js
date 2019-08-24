import React from "react";
import { inject } from "mobx-react";
import Modal from "../Modal/Modal";

import {
  ModalDiscountStyled,
  DiscountImage,
  Title,
  Description,
  ButtonBack,
  Content,
  Background
} from "./ModalDiscount.styled";

const ModalDiscount = ({ closeModalDiscount, isShowModalDiscount }) => {
  const handleClose = () => {
    closeModalDiscount();
  };

  return (
    <Modal isShow={isShowModalDiscount} onClose={handleClose}>
      <ModalDiscountStyled>
        <Background />
        <Content>
          <DiscountImage />
          <Title>Вы нашли промокод!</Title>
          <Description>
            Поздравляем! Вы очень внимательны и нашли промокод! 5%-ая скидка
            действует на весь товар нашего сайта и пропадет при выходе с сайта.
          </Description>
          <ButtonBack onClick={handleClose}>Вперед выбирать!</ButtonBack>
        </Content>
      </ModalDiscountStyled>
    </Modal>
  );
};

export default inject(({ modalStore }) => ({
  closeModalDiscount: modalStore.closeModalDiscount,
  isShowModalDiscount: modalStore.isShowModalDiscount
}))(ModalDiscount);
