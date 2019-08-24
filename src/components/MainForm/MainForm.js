import React from "react";
import { useForm } from "../../utils/customHooks";

import Button from "../Button/Button";

import {
  Form,
  Title,
  Description,
  Fields,
  FieldStyled
} from "./MainForm.styled";

const MainForm = () => {
  const formInfo = () => {
    console.log(`User Created!, Name: ${inputs.name}, Phone: ${inputs.phone}`);
  };

  const { inputs, handleInputChange, handleSubmit } = useForm({}, formInfo);

  return (
    <Form onSubmit={handleSubmit}>
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
          value={inputs.name}
          placeholder="Как к вам обращаться?"
          error
          onChange={handleInputChange}
        />
        <FieldStyled
          name="phone"
          type="text"
          value={inputs.phone}
          placeholder="Ваш номер"
          // error={}
          onChange={handleInputChange}
        />
      </Fields>
      <Button type="submit" size="full">
        Я хочу замер, позвоните мне
      </Button>
    </Form>
  );
};

export default MainForm;
