import React from "react";
import { inject } from "mobx-react";
import Button from "../Button/Button";

// data
import { firstScreen } from "../../assets/dataJson/firstScreen";

import {
  FirstScreenStyled,
  Info,
  Title,
  Description,
  Buttons,
  Image,
  Container,
  ButtonLink,
  Brands,
  Item,
  Brand
} from "./FirstScreen.styled";

const { title, description, image, brands } = firstScreen;

const FirstScreen = ({ openModalSuccess }) => {
  const handleClickQuestion = () => {
    openModalSuccess();
  };

  return (
    <FirstScreenStyled>
      <Container>
        <Info>
          <Title dangerouslySetInnerHTML={{ __html: title }} />
          <Description>{description}</Description>
          <Buttons>
            <ButtonLink
              to="window"
              spy={true}
              smooth={true}
              duration={500}
              offset={-185}
            >
              Подобрать для себя
            </ButtonLink>
            <Button theme="secondary" onClick={handleClickQuestion}>
              Задать вопрос
            </Button>
          </Buttons>
        </Info>
        <Image src={image} alt="repairs" />
      </Container>
      <Brands>
        {brands.map(brand => (
          <Item key={brand.id}>
            <Brand src={brand.brand} alt={brand.id} />
          </Item>
        ))}
      </Brands>
    </FirstScreenStyled>
  );
};

export default inject(({ modalStore }) => ({
  openModalSuccess: modalStore.openModalSuccess
}))(FirstScreen);
