import React from "react";
import { inject } from "mobx-react";
import { PropTypes as pt } from "prop-types";
import Menu from "../Menu/Menu";
import Button from "../Button/Button";

// data
import { menu } from "../../assets/dataJson/menu";

import {
  HeaderStyled,
  Left,
  LogoStyled,
  Right,
  Contacts,
  Mail,
  Phone
} from "./Header.styled";

const Header = ({ isScroll, className, openModalCall }) => {
  const handleClickCall = () => {
    openModalCall();
  };

  return (
    <HeaderStyled isScroll={isScroll} className={className}>
      <Left>
        <LogoStyled src="static/img/header/logo.png" alt="logo" />
        <Menu menu={menu} />
      </Left>

      <Right>
        <Contacts>
          <Mail href="mailto:info@master-pvx.ru">info@master-pvx.ru</Mail>
          <Phone href="tel:74952150168">+7 (495) 215-01-68</Phone>
        </Contacts>
        <Button onClick={handleClickCall}>Перезвонить</Button>
      </Right>
    </HeaderStyled>
  );
};

Header.propTypes = {
  isScroll: pt.bool
};

export default inject(({ modalStore }) => ({
  openModalCall: modalStore.openModalCall
}))(Header);
