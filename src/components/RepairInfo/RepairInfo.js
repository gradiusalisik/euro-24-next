import React from "react";
import { PropTypes as pt } from "prop-types";

import Button from "../Button/Button";

import {
  RepairInfoStyled,
  Advantages,
  AdvantageStyled,
  Forms,
  Field
} from "./RepairInfo.styled";

const RepairInfo = ({ advantages }) => (
  <RepairInfoStyled>
    <Advantages>
      {advantages.map(advantage => (
        <AdvantageStyled
          theme="white"
          key={advantage.id}
          icon={advantage.icon}
          title={advantage.title}
          description={advantage.description}
        />
      ))}
    </Advantages>
    <Forms>
      <Field>Field</Field>
      <Field>Field</Field>
      <Button>Я хочу замер, позвоните мне</Button>
    </Forms>
  </RepairInfoStyled>
);

RepairInfo.propTypes = {
  advantages: pt.arrayOf(
    pt.shape({
      icon: pt.node,
      id: pt.string,
      title: pt.string,
      description: pt.string
    })
  )
};

export default RepairInfo;
