import React from "react";
import { inject } from "mobx-react";
import Modal from "../Modal/Modal";

import {
  ModalReviewSuccessStyled,
  OperatorImage,
  Title,
  Description,
  ButtonBack
} from "./ModalReviewSuccess.styled";

const ModalReviewSuccess = ({
  closeModalReviewSuccess,
  isShowModalReviewSuccess
}) => {
  const handleClose = () => {
    closeModalReviewSuccess();
  };

  return (
    <Modal isShow={isShowModalReviewSuccess} onClose={handleClose}>
      <ModalReviewSuccessStyled>
        <OperatorImage />
        <Title>Успех!</Title>
        <Description>Благодарим за Ваш отзыв</Description>
        <ButtonBack onClick={handleClose}>Вернуться на главную</ButtonBack>
      </ModalReviewSuccessStyled>
    </Modal>
  );
};

export default inject(({ modalStore }) => ({
  closeModalReviewSuccess: modalStore.closeModalReviewSuccess,
  isShowModalReviewSuccess: modalStore.isShowModalReviewSuccess
}))(ModalReviewSuccess);
