import React from "react";
import { PropTypes as pt } from "prop-types";

import { CardStockStyled, Image, Info, Title, Text } from "./CardStocks.styled";

const CardStock = ({ image, title, text, className }) => (
  <CardStockStyled className={className}>
    <Image src={image} />
    <Info>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Info>
  </CardStockStyled>
);

CardStock.propTypes = {
  image: pt.string,
  title: pt.string,
  text: pt.string
};

export default CardStock;
