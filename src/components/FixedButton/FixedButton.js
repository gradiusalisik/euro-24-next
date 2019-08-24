import React from "react";
import Button from "../Button/Button";

import { FixedButtonStyled } from "./FixedButton.styled";

const FixedButton = () => (
  <FixedButtonStyled>
    <Button theme="tetriary">Позвоните мне</Button>
  </FixedButtonStyled>
);

export default FixedButton;