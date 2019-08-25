import React from "react";
import { PropTypes as pt } from "prop-types";
import { inject } from "mobx-react";

import Button from "../Button/Button";
import Radiobutton from "../Radiobutton/Radiobutton";

import {
  WindowColorStyled,
  Image,
  Content,
  ChooseColor,
  ButtonBack,
  ChooseTitle,
  Info,
  Title,
  Head,
  SliderButtonStyled,
  Category,
  Slides,
  Item,
  PriceStyled,
  Buttons,
  ArrowBackStyled
} from "./WindowColor.styled";

const WindowColor = ({
  title,
  currentSlide,
  onClickPrev,
  onClickNext,
  category,
  listColors,
  onChangeColor,
  price,
  onClick,
  checkedValue,
  currentColorData,
  className,
  openModalCall,
  openModalWindowCalculator
}) => {
  const handleChangeColor = e => {
    const categoryValue = e.target.value;
    onChangeColor(categoryValue);
  };

  const handleClickPrev = () => {
    onClickPrev();
  };
  const handleClickNext = () => {
    onClickNext();
  };

  const handleOpenModalCall = () => {
    openModalCall();
  };

  const handleOpenModalWindow = () => {
    openModalWindowCalculator();
  };

  const slideCount = listColors.length - 1;

  const count = currentSlide !== undefined ? currentSlide : 0;

  return (
    <WindowColorStyled className={className}>
      <Image src={currentColorData.backgroundBig} />
      <Content>
        <ChooseColor>
          <ButtonBack onClick={onClick}>
            <ArrowBackStyled />
          </ButtonBack>
          <ChooseTitle>Выбрать цвет</ChooseTitle>
        </ChooseColor>
        <Info>
          <Title>{title}</Title>
          <Head>
            {slideCount > 0 && (
              <SliderButtonStyled
                size="small"
                slideCount={slideCount}
                currentSlide={currentSlide}
                onClickPrev={handleClickPrev}
                onClickNext={handleClickNext}
              />
            )}
            <Category>{listColors[currentSlide].textCategory}</Category>
          </Head>
          <Slides>
            {listColors.map((item, key) => (
              <Item count={count} key={item.category} number={key}>
                {item.colors.map(color => (
                  <Radiobutton
                    key={color.value}
                    checked={checkedValue === color.value}
                    value={color.value}
                    name={color.name}
                    background={color.background}
                    onChange={handleChangeColor}
                  />
                ))}
              </Item>
            ))}
          </Slides>
          <PriceStyled price={price} />
          <Buttons>
            <Button size="full" onClick={handleOpenModalCall}>
              Заказать окна
            </Button>
            <Button size="full" onClick={handleOpenModalWindow}>
              Рассчитать стоимость
            </Button>
          </Buttons>
        </Info>
      </Content>
    </WindowColorStyled>
  );
};

WindowColor.propTypes = {
  title: pt.string,
  currentSlide: pt.number,
  onClickNext: pt.func,
  onClickPrev: pt.func,
  category: pt.string,
  listColors: pt.arrayOf(pt.shape({})),
  onChangeColor: pt.func,
  price: pt.string,
  checkedValue: pt.string
};

export default inject(({ modalStore }) => ({
  openModalCall: modalStore.openModalCall,
  openModalWindowCalculator: modalStore.openModalWindowCalculator
}))(WindowColor);
