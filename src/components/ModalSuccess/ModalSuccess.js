import React from "react";
import { inject } from "mobx-react";
import Modal from "../Modal/Modal";

import {
  ModalSuccessStyled,
  OperatorImage,
  Title,
  Description,
  ButtonBack
} from "./ModalSuccess.styled";

const ModalSuccess = ({ closeModalSuccess, isShowModalSuccess }) => {
  const handleClose = () => {
    closeModalSuccess();
  };

  return (
    <Modal isShow={isShowModalSuccess} onClose={handleClose}>
      <ModalSuccessStyled>
        <OperatorImage />
        <Title>Успех!</Title>
        <Description>Наш мастер уже набирает вас</Description>
        <ButtonBack onClick={handleClose}>Вернуться на главную</ButtonBack>
      </ModalSuccessStyled>
    </Modal>
  );
};

export default inject(({ modalStore }) => ({
  closeModalSuccess: modalStore.closeModalSuccess,
  isShowModalSuccess: modalStore.isShowModalSuccess
}))(ModalSuccess);
