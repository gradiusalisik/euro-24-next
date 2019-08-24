import React from "react";
import { inject } from "mobx-react";
import Button from "../Button/Button";

import { FixedButtonStyled } from "./FixedButton.styled";

const FixedButton = ({ openModalCall }) => {
  const handleClickCall = () => {
    openModalCall();
  };

  return (
    <FixedButtonStyled>
      <Button theme="tetriary" onClick={handleClickCall}>
        Позвоните мне
      </Button>
    </FixedButtonStyled>
  );
};

export default inject(({ modalStore }) => ({
  openModalCall: modalStore.openModalCall
}))(FixedButton);
