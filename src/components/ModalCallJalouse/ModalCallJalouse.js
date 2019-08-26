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

const ModalCallJalouse = ({
  closeModalCallJalouse,
  isShowModalCallJalouse,
  openModalSuccess,
  send,
  titleJalouse
}) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, e) => {
    e.target.reset();
    openModalSuccess();
    send({
      ...data,
      titleJalouse
    });
    handleClose();
  };

  const handleClose = () => {
    closeModalCallJalouse();
  };

  return (
    <Modal isShow={isShowModalCallJalouse} onClose={handleClose}>
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
  closeModalCallJalouse: modalStore.closeModalCallJalouse,
  openModalSuccess: modalStore.openModalSuccess,
  isShowModalCallJalouse: modalStore.isShowModalCallJalouse,
  send: formStore.send,
  titleJalouse: formStore.titleJalouse
}))(ModalCallJalouse);
