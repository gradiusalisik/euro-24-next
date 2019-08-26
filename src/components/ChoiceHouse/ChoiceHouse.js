import React from "react";

import {
  ChoiceHouseStyled,
  Button,
  Image,
  Description,
  ImageIcon,
  Content,
  Title,
  SubTitle,
  Buttons,
  Text
} from "./ChoiceHouse.styled";

const RadioChoiceHouse = ({ onClickHouse }) => {
  const handleChoiceHouse = name => () => {
    onClickHouse(name);
  };

  return (
    <ChoiceHouseStyled>
      <ImageIcon
        src="static/img/window/ic-choose-house.svg"
        alt="choice-house"
      />
      <Content>
        <Title>Выбор типа дома</Title>
        <SubTitle>Расчет стоимости</SubTitle>
        <Description>
          Мы поможем вам расчитать приблизительную стоимость новых окон в
          несколько кликов
        </Description>
        <Buttons>
          <Button onClick={handleChoiceHouse("panel-block-house")}>
            <Image
              src="static/img/window/ic-house-brick.svg"
              alt="panel-block-house"
            />
            <Text>Панельный / блочный дом</Text>
          </Button>
          <Button onClick={handleChoiceHouse("brick-house")}>
            <Image
              src="static/img/window/ic-house-brick.svg"
              alt="brick-house"
            />
            <Text>Кирпичный дом</Text>
          </Button>
        </Buttons>
      </Content>
    </ChoiceHouseStyled>
  );
};

export default RadioChoiceHouse;
