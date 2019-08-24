import React, { useState } from "react";

// data
import { tabs, jalousies } from "../../assets/dataJson/jalousie";

import Title from "../Title/Title";
import Tabs from "../Tabs/Tabs";
import Slides from "../Slides/Slides";

import {
  JalousieStyled,
  Content,
  ButtonStyled,
  Photo
} from "./Jalousie.styled";

const Jalousie = () => {
  const [tabId, setTabId] = useState(tabs[0].id);

  const handleClick = id => {
    setTabId(id);
  };

  const count = jalousies.findIndex(({ id }) => id === tabId);

  const background = jalousies[count].background;
  const alt = jalousies[count].id;

  return (
    <JalousieStyled>
      <Title>Заказать жалюзи</Title>
      <Tabs id={tabId} onClick={handleClick} tabs={tabs} />
      <Content>
        <Slides slides={jalousies} count={count}>
          <ButtonStyled>Заказать жалюзи</ButtonStyled>
        </Slides>
        <Photo src={background} alt={alt} />
      </Content>
    </JalousieStyled>
  );
};

export default Jalousie;
