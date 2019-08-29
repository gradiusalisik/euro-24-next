import React from "react";
import Price from "../Price/Price";

import {
  CardServicesInsideStyled,
  Title,
  Description,
  Text
} from "./CardServicesInside.styled";

const CardServicesInside = ({ title, description, price, className }) => (
  <CardServicesInsideStyled className={className}>
    <Title>{title}</Title>
    <Description>{description}</Description>

    {price ? <Price price={price} /> : <Text>Бесплатно</Text>}
    <Price price={price} />
  </CardServicesInsideStyled>
);

export default CardServicesInside;
