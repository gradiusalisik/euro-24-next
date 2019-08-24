import React from "react";
import { PropTypes as pt } from "prop-types";
import { numberWithSpaces } from "../../utils/numberWithSpaces";

import { PriceStyled, Text, Value } from "./Price.styled";

const Price = ({ price, className }) => (
  <PriceStyled className={className}>
    <Text>Цена от</Text>
    <Value>{numberWithSpaces(price)}</Value>
    <Text>руб/м2</Text>
  </PriceStyled>
);

Price.propTypes = {
  price: pt.string
};

export default Price;
