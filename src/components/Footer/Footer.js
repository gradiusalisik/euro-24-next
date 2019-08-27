import React from "react";
import SocialIcons from "../SocialIcons/SocialIcons";
import Menu from "../Menu/Menu";

// data
import { menu } from "../../assets/dataJson/menu";

import {
  FooterStyled,
  Wrap,
  Left,
  Right,
  CopyrightStyled,
  CopyrightTextStyled,
  LogoFooterStyled,
  Link
} from "./Footer.styled";

const Footer = () => (
  <FooterStyled>
    <Wrap>
      <Left>
        <Link to="home" spy={true} smooth={true} duration={500} offset={-185}>
          <LogoFooterStyled />
        </Link>
        <Menu menu={menu} theme="footer" />
      </Left>
      <Right>
        <SocialIcons />
      </Right>
    </Wrap>
    <CopyrightStyled>
      <CopyrightTextStyled>
        © 2019 EuroMaster24 Все права защищены
      </CopyrightTextStyled>
    </CopyrightStyled>
  </FooterStyled>
);

export default Footer;
