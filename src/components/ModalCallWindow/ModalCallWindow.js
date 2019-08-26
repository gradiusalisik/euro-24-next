import React from "react";
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
} from "../ModalCall/ModalCall.styled";

const ModalCallWindow = ({
  closeModalCallWindow,
  isShowModalCallWindow,
  openModalSuccess,
  send,
  titleWindow,
  colorWindow
}) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, e) => {
    e.target.reset();
    openModalSuccess();

    send({
      ...data,
      titleWindow,
      colorWindow
    });
    handleClose();
  };

  const handleClose = () => {
    closeModalCallWindow();
  };

  return (
    <Modal isShow={isShowModalCallWindow} onClose={handleClose}>
      <ModalCallStyled>
        <Image />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Title>Вызвать мастера</Title>
          <Description>Мы перезвоним вам в течении 15 минут</Description>
          <FieldStyled
            name="name"
            type="text"
            ref={register({
              validate: validateName,
              required: true
            })}
            placeholder="Как к вам обращаться?"
            error={errors.name && "Пожалуйста, введите русские символы"}
          />
          <FieldStyled
            name="phone"
            type="text"
            placeholder="Ваш номер"
            ref={register({
              validate: validatePhone,
              required: true
            })}
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
  closeModalCallWindow: modalStore.closeModalCallWindow,
  openModalSuccess: modalStore.openModalSuccess,
  isShowModalCallWindow: modalStore.isShowModalCallWindow,
  send: formStore.send,
  titleWindow: formStore.titleWindow,
  colorWindow: formStore.colorWindow
}))(ModalCallWindow);
