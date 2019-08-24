import React from "react";

import { Label, Input, Color } from "./Radiobutton.styled";

const Radiobutton = ({ checked, value, name, background, onChange }) => (
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

export default Radiobutton;
