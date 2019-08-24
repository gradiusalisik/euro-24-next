import React from "react";
import { PropTypes as pt } from "prop-types";

import { MenuStyled, List, Item, Link } from "./Menu.styled";

const Menu = ({ menu, theme }) => (
  <MenuStyled>
    <List>
      {menu.map(item => (
        <Item key={item.id}>
          <Link
            activeClass="active"
            to={item.id}
            spy={true}
            smooth={true}
            duration={500}
            theme={theme}
            offset={-185}
            >
            {item.text}
          </Link>
        </Item>
      ))}
    </List>
  </MenuStyled>
);

Menu.propTypes = {
  menu: pt.arrayOf(
    pt.shape({
      id: pt.string,
      text: pt.string
    })
  )
};

export default Menu;
