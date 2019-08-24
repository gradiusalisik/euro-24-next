import React from "react";

import { Label, Input, Text } from "./Checkbox.styled";

const Checkbox = ({ children, disabled, checked }) => (
  <Label>
    <Input disabled={disabled} type="checkbox" checked={checked} />
    <Text>
        {children}
    </Text>
  </Label>
);

export default Checkbox;