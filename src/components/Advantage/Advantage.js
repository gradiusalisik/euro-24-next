import React from "react";

import {
  AdvantageStyled,
  Icon,
  Content,
  Title,
  Description
} from "./Advantage.styled";

const Advantage = ({ icon, title, description, theme, className }) => (
  <AdvantageStyled theme={theme} className={className}>
    <Icon>{icon}</Icon>
    <Content>
      {title && <Title>{title}</Title>}
      {description && <Description>{description}</Description>}
    </Content>
  </AdvantageStyled>
);

export default Advantage;
