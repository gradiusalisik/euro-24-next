import React from "react";
import { inject } from "mobx-react";
import { useForm } from "../../utils/customHooks";

import Modal from "../Modal/Modal";

import {
  ModalCallStyled,
  Image,
  Title,
  Header,
  Form,
  Description,
  FieldStyled,
  ButtonSubmit
} from "./ModalCall.styled";

const ModalCall = ({ closeModalCall, isShowModalCall }) => {
  const handleClose = () => {
    closeModalCall();
  };

  const formInfo = () => {
    console.log(
      inputs,
      `User Created!, Name: ${inputs.name}, Phone: ${inputs.reviews}`
    );
  };

  const { inputs, handleInputChange, handleSubmit } = useForm({}, formInfo);

  return (
    <Modal isShow={isShowModalCall} onClose={handleClose}>
      <ModalCallStyled>
        <Image />
        <Form onSubmit={handleSubmit}>
          <Title>Вызвать мастера</Title>
          <Description>Мы перезвоним вам в течении 15 минут</Description>
          <FieldStyled
            name="name"
            type="text"
            value={inputs.name}
            placeholder="Как к вам обращаться?"
            onChange={handleInputChange}
          />
          <FieldStyled
            name="phone"
            type="text"
            value={inputs.phone}
            placeholder="Ваш номер"
            onChange={handleInputChange}
          />
          <ButtonSubmit type="submit" size="full">
            Перезвоните мне
          </ButtonSubmit>
        </Form>
      </ModalCallStyled>
    </Modal>
  );
};

export default inject(({ modalStore }) => ({
  closeModalCall: modalStore.closeModalCall,
  isShowModalCall: modalStore.isShowModalCall
}))(ModalCall);
