import React, { useRef } from "react";
// data
import { slides } from "../../assets/dataJson/stocks";

import Title from "../Title/Title";
import SliderStocks from "../SliderStocks/SliderStocks";
import SliderButton from "../SliderButton/SliderButton";

import { StocksStyled, Top, Subtitle } from "./Stocks.styled";

const Stocks = () => {
  const sliderEl = useRef(null);

  const handleClickPrev = () => {
    sliderEl.current.slickPrev();
  };
  const handleClickNext = () => {
    sliderEl.current.slickNext();
  };

  return (
    <StocksStyled>
      <Top>
        <Title>
          Акции
          <Subtitle>
            <strong>*</strong> Скидка по акции не суммируется с другими скидками
            и предложениями
          </Subtitle>
        </Title>
        {slides.length > 3 && (
          <SliderButton
            onClickNext={handleClickNext}
            onClickPrev={handleClickPrev}
          />
        )}
      </Top>
      <SliderStocks slides={slides} ref={sliderEl} />
    </StocksStyled>
  );
};

export default Stocks;
