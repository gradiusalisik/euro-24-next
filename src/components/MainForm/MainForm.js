import React, { useRef } from "react";
import { inject } from "mobx-react";
import useForm from "react-hook-form";

import { validatePhone, validateName } from "../../utils/validate";

import Button from "../Button/Button";

import {
  Form,
  Title,
  Description,
  Fields,
  FieldStyled
} from "./MainForm.styled";

const MainForm = ({ openModalSuccess, send }) => {
  const { register, handleSubmit, errors } = useForm();
  const maskEl = useRef();

  const onSubmit = (data, e) => {
    send(data);

    e.target.reset();
    maskEl.current.value = "";
    openModalSuccess();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>
        Не знаете размеры?
        <br /> Закажите&nbsp;<strong>бесплатный</strong>&nbsp;замер
      </Title>
      <Description>
        Наши специалисты свяжутся с вами в течении 10 минут.
      </Description>
      <Fields>
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
      </Fields>
      <Button type="submit" size="full">
        Я хочу замер, позвоните мне
      </Button>
    </Form>
  );
};

export default inject(({ modalStore, formStore }) => ({
  openModalSuccess: modalStore.openModalSuccess,
  send: formStore.send
}))(MainForm);
