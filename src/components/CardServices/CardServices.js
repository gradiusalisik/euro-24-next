import React from "react";
import Price from "../Price/Price";

import {
  CardServicesStyled,
  Icon,
  Info,
  Title,
  Text,
  Description
} from "./CardServices.styled";

const CardServices = ({
  icon,
  title,
  description,
  price,
  onClick,
  onMouseOver,
  onMouseOut,
  className
}) => (
  <CardServicesStyled
    onClick={onClick}
    onMouseOver={onMouseOver}
    onMouseOut={onMouseOut}
    className={className}
  >
    <Icon>{icon}</Icon>
    <Info>
      <Title>{title}</Title>
      <Description>{description}</Description>
      {price ? <Price price={price} /> : <Text>Бесплатно</Text>}
    </Info>
  </CardServicesStyled>
);

export default CardServices;
