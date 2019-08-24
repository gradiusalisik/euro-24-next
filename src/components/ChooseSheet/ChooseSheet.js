import React, { useState } from "react";
import { PropTypes as pt } from "prop-types";

import {
  ChooseSheetStyled,
  Content,
  ButtonBack,
  ChooseTitle,
  Info,
  Category,
  PriceStyled,
  Sheets,
  CardSheet,
  CardSheetImage,
  CardSheetTitle,
  ChooseSheetContent,
  ButtonOrder,
  ArrowBackStyled
} from "./ChooseSheet.styled";

const ChooseSheet = ({ sheets, price, onClickBack, className }) => {
  const [valueSheet, setValueSheet] = useState(sheets[0].value);
  const [titleSheet, setTitleSheet] = useState(sheets[0].title);

  const handleClick = ({ value, title }) => () => {
    setValueSheet(value);
    setTitleSheet(title);
  };

  return (
    <ChooseSheetStyled className={className}>
      <Content>
        <ChooseSheetContent>
          <ButtonBack onClick={onClickBack}>
            <ArrowBackStyled />
          </ButtonBack>
          <ChooseTitle>Выбрать полотно</ChooseTitle>
        </ChooseSheetContent>
        <Info>
          <Category>{titleSheet}</Category>
          <Sheets>
            {sheets.map(item => (
              <CardSheet
                key={item.value}
                onClick={handleClick(item)}
                active={valueSheet === item.value}
              >
                <CardSheetImage src={item.image} />
                <CardSheetTitle>{item.title}</CardSheetTitle>
              </CardSheet>
            ))}
          </Sheets>
          <PriceStyled price={price} />
          <ButtonOrder size="full">Заказать сетку</ButtonOrder>
        </Info>
      </Content>
    </ChooseSheetStyled>
  );
};

ChooseSheet.propTypes = {
  sheets: pt.arrayOf(
    pt.shape({
      value: pt.string,
      title: pt.string,
      image: pt.string
    })
  ),
  onClickBack: pt.func,
  price: pt.string
};

export default ChooseSheet;
