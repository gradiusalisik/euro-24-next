import React from "react";
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

const Header = ({ isScroll, className }) => (
  <HeaderStyled isScroll={isScroll} className={className}>
    <Left>
      <LogoStyled />
      <Menu menu={menu} />
    </Left>

    <Right>
      <Contacts>
        <Mail href="mailto:info@master-pvx.ru">info@master-pvx.ru</Mail>
        <Phone href="tel:74952150168">+7 (495) 215-01-68</Phone>
      </Contacts>
      <Button>Перезвонить</Button>
    </Right>
  </HeaderStyled>
);

Header.propTypes = {
  isScroll: pt.bool
};

export default Header;
