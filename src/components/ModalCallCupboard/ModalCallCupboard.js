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
} from "../ModalCall/ModalCall.styled";

const ModalCallCupboard = ({
  closeModalCallCupboard,
  isShowModalCallCupboard,
  openModalSuccess,
  send,
  titleCupboard
}) => {
  const { register, handleSubmit, errors } = useForm();
  const maskEl = useRef();

  const onSubmit = (data, e) => {
    openModalSuccess();
    send({
      ...data,
      titleCupboard
    });
    e.target.reset();
    maskEl.current.value = "";
    handleClose();
  };

  const handleClose = () => {
    closeModalCallCupboard();
  };

  return (
    <Modal isShow={isShowModalCallCupboard} onClose={handleClose}>
      <ModalCallStyled>
        <Image />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Title>Вызвать мастера</Title>
          <Description>Мы перезвоним вам в ближайшее время</Description>
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
  closeModalCallCupboard: modalStore.closeModalCallCupboard,
  openModalSuccess: modalStore.openModalSuccess,
  isShowModalCallCupboard: modalStore.isShowModalCallCupboard,
  send: formStore.send,
  titleCupboard: formStore.titleCupboard
}))(ModalCallCupboard);
