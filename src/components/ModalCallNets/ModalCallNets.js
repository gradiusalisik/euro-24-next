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

const ModalCallNets = ({
  closeModalCallNets,
  isShowModalCallNets,
  openModalSuccess,
  send,
  titleNets,
  valueNets
}) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, e) => {
    e.target.reset();
    openModalSuccess();
    send({
      ...data,
      titleNets,
      valueNets
    });
    handleClose();
  };

  const handleClose = () => {
    closeModalCallNets();
  };

  return (
    <Modal isShow={isShowModalCallNets} onClose={handleClose}>
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
  closeModalCallNets: modalStore.closeModalCallNets,
  openModalSuccess: modalStore.openModalSuccess,
  isShowModalCallNets: modalStore.isShowModalCallNets,
  send: formStore.send,
  titleNets: formStore.titleNets,
  valueNets: formStore.valueNets
}))(ModalCallNets);
