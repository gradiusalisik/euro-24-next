import React, { useState } from "react";
import { inject } from "mobx-react";

// data
import {
  tabs,
  servicesWindow,
  images,
  servicesBalconies,
  servicesRepair
} from "../../assets/dataJson/services";

import CardServicesInside from "../CardServicesInside/CardServicesInside";

import {
  ServicesStyled,
  Content,
  TabsStyled,
  CardsServicesContentStyled,
  Visual,
  Photo,
  TabContent,
  ButtonStyled,
  TitleWrap,
  ButtonBack,
  TitleStyled,
  ContentInside,
  ArrowBackStyled
} from "./Services.styled";

const Services = ({ openModalCall }) => {
  const [tabId, setTabId] = useState(tabs[0].id);
  const [serviceId, setServiceId] = useState(null);
  const [serviceInside, setServiceInside] = useState(null);
  const [services, setServices] = useState(null);

  const handleClick = id => {
    setTabId(id);
  };

  const handleClickCard = list => id => {
    setServiceId(id);
    setServiceInside(true);
    setServices(list);
  };

  const handleMouseOver = id => {
    setServiceId(id);
  };

  const handleResetServiceId = () => {
    setServiceId(null);
  };

  const handleBack = () => {
    handleResetServiceId();
    setServiceInside(false);
  };

  const handleClickCall = () => {
    openModalCall();
  };

  const getBackground = () =>
    serviceId !== null ? images[serviceId] : images[tabId];

  const getTitle = () =>
    serviceInside
      ? services.find(element => element.id === serviceId).title
      : "Наши услуги";

  const serviceInformations =
    serviceInside && services.find(element => element.id === serviceId).info;

  return (
    <ServicesStyled>
      <TitleWrap>
        {serviceInside && (
          <ButtonBack onClick={handleBack}>
            <ArrowBackStyled />
          </ButtonBack>
        )}
        <TitleStyled>{getTitle()}</TitleStyled>
      </TitleWrap>
      {!serviceInside && (
        <TabsStyled id={tabId} onClick={handleClick} tabs={tabs} />
      )}
      <Content>
        {serviceInside ? (
          <ContentInside>
            {serviceInformations.map(information => (
              <CardServicesInside
                key={information.id}
                title={information.title}
                description={information.description}
                price={information.price}
              />
            ))}
          </ContentInside>
        ) : (
          <TabContent>
            <CardsServicesContentStyled
              isActive={tabId === "window"}
              services={servicesWindow}
              onClick={handleClickCard(servicesWindow)}
              onMouseOver={handleMouseOver}
              onMouseOut={handleResetServiceId}
            />
            <CardsServicesContentStyled
              isActive={tabId === "balconies"}
              services={servicesBalconies}
              onClick={handleClickCard(servicesBalconies)}
              onMouseOver={handleMouseOver}
              onMouseOut={handleResetServiceId}
            />
            <CardsServicesContentStyled
              isActive={tabId === "repair"}
              services={servicesRepair}
              onClick={handleClickCard(servicesRepair)}
              onMouseOver={handleMouseOver}
              onMouseOut={handleResetServiceId}
            />
          </TabContent>
        )}
        <Visual serviceInside={serviceInside}>
          <Photo background={getBackground()} />
          <ButtonStyled onClick={handleClickCall}>
            Хочу вызвать мастера
          </ButtonStyled>
        </Visual>
      </Content>
    </ServicesStyled>
  );
};

export default inject(({ modalStore }) => ({
  openModalCall: modalStore.openModalCall
}))(Services);
