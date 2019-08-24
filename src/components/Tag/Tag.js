import React from "react";
import { PropTypes as pt } from "prop-types";

import { TagStyled } from "./Tag.styled";

const Tag = ({ children, className, isActive, onClick }) => (
  <TagStyled isActive={isActive} className={className} onClick={onClick}>
    {children}
  </TagStyled>
);

Tag.propTypes = {
  isActive: pt.bool,
  onClick: pt.func
};

Tag.defaultProps = {
  onClick: () => {}
};

export default Tag;
