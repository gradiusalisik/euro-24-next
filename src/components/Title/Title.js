import React from "react";
import { PropTypes as pt } from "prop-types";

import { TitleStyled } from "./Title.styled";

const Title = ({ children, className }) => (
  <TitleStyled className={className}>{children}</TitleStyled>
);

Title.propTypes = {
  children: pt.string
};

export default Title;
