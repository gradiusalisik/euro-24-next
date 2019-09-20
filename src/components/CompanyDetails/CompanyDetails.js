import React from "react";

import Title from "../Title/Title";

import { details } from "../../assets/dataJson/details";

import {
  CompanyDetailsStyled,
  List,
  Item,
  Name,
  Details,
  Description
} from "./CompanyDetails.styled";

const CompanyDetails = () => {
  const renderItem = (item, key) => (
    <Item key={key}>
      <Name>{item.name}</Name>
      <Description>{item.description}</Description>
    </Item>
  );

  return (
    <CompanyDetailsStyled>
      <Details>
        <Title>Реквизиты компании</Title>
        <List>{details.map(renderItem)}</List>
      </Details>
    </CompanyDetailsStyled>
  );
};

export default CompanyDetails;
