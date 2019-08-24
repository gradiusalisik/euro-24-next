import React from "react";
import { PropTypes as pt } from "prop-types";

import { TabStyled } from "./Tab.styled";

const Tab = ({ children, className, isActive, onClick }) => (
  <TabStyled isActive={isActive} className={className} onClick={onClick}>
    {children}
  </TabStyled>
);

Tab.propTypes = {
  isActive: pt.bool,
  onClick: pt.func
};

Tab.defaultProps = {
  onClick: () => {}
};

export default Tab;
