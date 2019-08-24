import React from "react";

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

const Feedback = () => (
  <FeedbackStyled>
    <GetDiscountStyled>
      <Title>Не&nbsp;упустите шанс</Title>
      <Subtitle>Найдите промокод на&nbsp;странице и&nbsp;получите скидку!</Subtitle>
    </GetDiscountStyled>

    <Form>
      <Fields>
        <FieldStyled
          name="name"
          type="text"
          placeholder="Как к вам обращаться?"
          error
          size="full"
        />
        <FieldStyled
          name="phone"
          type="tel"
          placeholder="Ваш номер"
          size="full"
        />
      </Fields>
      <ButtonStyled theme="tetriary">
        Перезвоните мне
      </ButtonStyled>
    </Form>

  </FeedbackStyled>
);

export default Feedback;
