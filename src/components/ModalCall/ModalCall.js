import React, { useRef } from "react";
import { inject } from "mobx-react";
import useForm from "react-hook-form";

import { validatePhone, validateName } from "../../utils/validate";

import Modal from "../Modal/Modal";

import {
  ModalCallStyled,
  Image,
  Title,
  Form,
  Description,
  FieldStyled,
  ButtonSubmit
} from "./ModalCall.styled";

const ModalCall = ({
  closeModalCall,
  isShowModalCall,
  openModalSuccess,
  send
}) => {
  const { register, handleSubmit, errors } = useForm();
  const maskEl = useRef();

  const onSubmit = (data, e) => {
    send(data);
    openModalSuccess();
    e.target.reset();
    maskEl.current.value = "";
    handleClose();
  };

  const handleClose = () => {
    closeModalCall();
  };

  return (
    <Modal isShow={isShowModalCall} onClose={handleClose}>
      <ModalCallStyled>
        <Image />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Title>Вызвать мастера</Title>
          <Description>Мы перезвоним вам в течении 15 минут</Description>
          <FieldStyled
            name="name"
            type="text"
            ref={{
              ref: register({
                validate: validateName,
                required: true
              })
            }}
            placeholder="Как к вам обращаться?"
            error={errors.name && "Пожалуйста, введите русские символы"}
          />
          <FieldStyled
            name="phone"
            type="text"
            placeholder="Ваш номер"
            ref={{
              ref: maskEl,
              inputRef: register({
                validate: validatePhone,
                required: true
              })
            }}
            error={errors.phone && "Пожалуйста, введите правильные данные"}
          />
          <ButtonSubmit type="submit" size="full">
            Перезвоните мне
          </ButtonSubmit>
        </Form>
      </ModalCallStyled>
    </Modal>
  );
};

export default inject(({ modalStore, formStore }) => ({
  closeModalCall: modalStore.closeModalCall,
  openModalSuccess: modalStore.openModalSuccess,
  isShowModalCall: modalStore.isShowModalCall,
  send: formStore.send
}))(ModalCall);
