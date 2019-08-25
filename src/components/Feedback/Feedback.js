import React from "react";
import { inject } from "mobx-react";
import useForm from "react-hook-form";

import { validatePhone, validateName } from "../../utils/validate";

import {
  FeedbackStyled,
  GetDiscountStyled,
  Title,
  Subtitle,
  Form,
  Fields,
  FieldStyled,
  ButtonStyled
} from "./Feedback.styled";

const Feedback = ({ openModalSuccess }) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, e) => {
    e.target.reset();
    openModalSuccess();
  };

  return (
    <FeedbackStyled>
      <GetDiscountStyled>
        <Title>Не&nbsp;упустите шанс</Title>
        <Subtitle>
          Найдите промокод на&nbsp;странице и&nbsp;получите скидку!
        </Subtitle>
      </GetDiscountStyled>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Fields>
          <FieldStyled
            name="name"
            ref={register({
              validate: validateName,
              required: true
            })}
            placeholder="Как к вам обращаться?"
            error={errors.name && "Пожалуйста, введите русские символы"}
            size="full"
          />
          <FieldStyled
            name="phone"
            placeholder="Ваш номер"
            ref={register({
              validate: validatePhone,
              required: true
            })}
            error={errors.phone && "Пожалуйста, введите правильные данные"}
            size="full"
          />
        </Fields>
        <ButtonStyled type="submit" theme="tetriary">
          Перезвоните мне
        </ButtonStyled>
      </Form>
    </FeedbackStyled>
  );
};

export default inject(({ modalStore }) => ({
  openModalSuccess: modalStore.openModalSuccess
}))(Feedback);
