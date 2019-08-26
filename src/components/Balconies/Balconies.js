import React, { useState } from "react";
import { inject } from "mobx-react";

// data
import { tabs, balconies } from "../../assets/dataJson/balconies";

import Title from "../Title/Title";
import Tabs from "../Tabs/Tabs";
import Slides from "../Slides/Slides";

import {
  BalconiesStyled,
  Content,
  Photo,
  ButtonStyled,
  Advantages,
  AdvantageStyled,
  Info
} from "./Balconies.styled";

const Balconies = ({ openModalCallBalconies, getTitleBalconies }) => {
  const [tabId, setTabId] = useState(tabs[0].id);

  const handleClick = id => {
    setTabId(id);
  };

  const count = balconies.findIndex(({ id }) => id === tabId);

  const background = balconies[count].background;
  const advantages = balconies[count].advantages;
  const alt = balconies[count].id;

  const handleClickCall = () => {
    getTitleBalconies(balconies[count].title);
    openModalCallBalconies();
  };

  return (
    <BalconiesStyled>
      <Title>Подобрать балкон</Title>
      <Tabs id={tabId} onClick={handleClick} tabs={tabs} />
      <Content>
        <Info>
          <Photo src={background} alt={alt} />
          <Slides slides={balconies} count={count}>
            <ButtonStyled onClick={handleClickCall}>
              Заказать балкон
            </ButtonStyled>
          </Slides>
        </Info>
        <Advantages>
          {advantages.map(advantage => (
            <AdvantageStyled
              key={advantage.id}
              icon={advantage.icon}
              title={advantage.title}
              description={advantage.description}
            />
          ))}
        </Advantages>
      </Content>
    </BalconiesStyled>
  );
};

export default inject(({ modalStore, formStore }) => ({
  openModalCallBalconies: modalStore.openModalCallBalconies,
  getTitleBalconies: formStore.getTitleBalconies
}))(Balconies);
