import React from "react";
import Price from "../Price/Price";

import {
  CardServicesInsideStyled,
  Title,
  Description
} from "./CardServicesInside.styled";

const CardServicesInside = ({ title, description, price, className }) => (
  <CardServicesInsideStyled className={className}>
    <Title>{title}</Title>
    <Description>{description}</Description>

    <Price price={price} />
  </CardServicesInsideStyled>
);

export default CardServicesInside;
