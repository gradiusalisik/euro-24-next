import React from "react";

import { Label, Input, Color } from "./RadioChoice.styled";
// TODO доработать калькулятор, когда будут все данные
const RadioChoice = ({ checked, value, name, background, onChange }) => (
  <Label>
    <Input
      type="radio"
      name={name}
      checked={checked}
      value={value}
      onChange={onChange}
    />
    <Color background={background} />
  </Label>
);

export default RadioChoice;
