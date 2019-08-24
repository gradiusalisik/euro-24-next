import React from "react";

import {
  CardsServices,
  CardServicesStyled
} from "./CardsServicesContent.styled";

const CardsServicesContent = ({
  services,
  onClick,
  onMouseOut,
  onMouseOver,
  className
}) => {
  const handleClickCard = id => () => {
    onClick(id);
  };
  const handleMouseOver = id => () => {
    onMouseOver(id);
  };

  return (
    <CardsServices className={className}>
      {services.map(service => (
        <CardServicesStyled
          key={service.id}
          icon={service.icon}
          title={service.title}
          description={service.description}
          price={service.price}
          onMouseOver={handleMouseOver(service.id)}
          onMouseOut={onMouseOut}
          onClick={handleClickCard(service.id)}
        />
      ))}
    </CardsServices>
  );
};

export default CardsServicesContent;
