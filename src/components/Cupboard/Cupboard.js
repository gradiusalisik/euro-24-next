import React, { useState } from "react";
import { inject } from "mobx-react";

// data
import { tabs, cupboards } from "../../assets/dataJson/cupboard";

import Title from "../Title/Title";
import Tabs from "../Tabs/Tabs";
import Slides from "../Slides/Slides";

import {
  CupboardStyled,
  Content,
  ButtonStyled,
  Photo,
  Wrap
} from "./Cupboard.styled";

const Cupboard = ({ className, openModalCallCupboard, getTitleCupboard }) => {
  const [tabId, setTabId] = useState(tabs[0].id);

  const handleClick = id => {
    setTabId(id);
  };

  const count = cupboards.findIndex(({ id }) => id === tabId);

  const background = cupboards[count].background;
  const alt = cupboards[count].id;

  const handleClickCall = () => {
    getTitleCupboard(cupboards[count].title);
    openModalCallCupboard();
  };

  return (
    <CupboardStyled className={className}>
      <Wrap>
        <Title>Выбрать шкаф на балкон</Title>
        <Tabs id={tabId} onClick={handleClick} tabs={tabs} />
        <Content>
          <Slides slides={cupboards} count={count}>
            <ButtonStyled onClick={handleClickCall}>Заказать шкаф</ButtonStyled>
          </Slides>
          <Photo src={background} alt={alt} />
        </Content>
      </Wrap>
    </CupboardStyled>
  );
};

export default inject(({ modalStore, formStore }) => ({
  openModalCallCupboard: modalStore.openModalCallCupboard,
  getTitleCupboard: formStore.getTitleCupboard
}))(Cupboard);
