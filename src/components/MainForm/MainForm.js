import React from "react";
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

const MainForm = ({ openModalSuccess }) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, e) => {
    e.target.reset();
    openModalSuccess();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>
        Не знаете размеры?
        <br /> Закажите&nbsp;<strong>бесплатный</strong>&nbsp;замер
      </Title>
      <Description>
        Наши специалисты свяжутся с вами в течении 15 минут.
      </Description>
      <Fields>
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
          placeholder="Ваш номер"
          ref={register({
            validate: validatePhone,
            required: true
          })}
          error={errors.phone && "Пожалуйста, введите правильные данные"}
        />
      </Fields>
      <Button type="submit" size="full">
        Я хочу замер, позвоните мне
      </Button>
    </Form>
  );
};

export default inject(({ modalStore }) => ({
  openModalSuccess: modalStore.openModalSuccess
}))(MainForm);
