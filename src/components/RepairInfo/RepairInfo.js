import React, { useRef } from "react";
import { PropTypes as pt } from "prop-types";
import { inject } from "mobx-react";
import useForm from "react-hook-form";

import { validatePhone, validateName } from "../../utils/validate";

import Button from "../Button/Button";

import {
  RepairInfoStyled,
  Advantages,
  AdvantageStyled,
  Forms,
  FieldStyled
} from "./RepairInfo.styled";

const RepairInfo = ({ advantages, openModalSuccess, send }) => {
  const { register, handleSubmit, errors } = useForm();
  const maskEl = useRef();

  const onSubmit = (data, e) => {
    send(data);
    e.target.reset();
    maskEl.current.value = "";
    openModalSuccess();
  };

  return (
    <RepairInfoStyled>
      <Advantages>
        {advantages.map(advantage => (
          <AdvantageStyled
            theme="white"
            key={advantage.id}
            icon={advantage.icon}
            title={advantage.title}
            description={advantage.description}
          />
        ))}
      </Advantages>
      <Forms onSubmit={handleSubmit(onSubmit)}>
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
        <Button type="submit" size="full">
          Я хочу замер, позвоните мне
        </Button>
      </Forms>
    </RepairInfoStyled>
  );
};

RepairInfo.propTypes = {
  advantages: pt.arrayOf(
    pt.shape({
      icon: pt.node,
      id: pt.string,
      title: pt.string,
      description: pt.string
    })
  )
};

export default inject(({ modalStore, formStore }) => ({
  openModalSuccess: modalStore.openModalSuccess,
  send: formStore.send
}))(RepairInfo);
