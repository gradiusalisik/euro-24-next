import React from "react";
import { PropTypes as pt } from "prop-types";
import { ButtonStyled, Wrap } from "./Button.styled";

const Button = ({
  children,
  disabled,
  type,
  theme,
  onClick,
  className,
  size
}) => (
  <ButtonStyled
    disabled={disabled}
    theme={theme}
    type={type}
    size={size}
    onClick={onClick}
    className={className}
  >
    <Wrap>{children}</Wrap>
  </ButtonStyled>
);

Button.propTypes = {
  theme: pt.oneOf(["primary", "secondary", "tetriary"]),
  type: pt.string,
  onClick: pt.func,
  disabled: pt.bool,
  size: pt.string
};

Button.defaultProps = {
  theme: "primary",
  disabled: false,
  type: "button"
};

export default Button;
