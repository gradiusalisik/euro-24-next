import React from "react";
import { PropTypes as pt } from "prop-types";
import { FieldStyled, Input, Error } from "./Field.styled";
import InputMask from "react-input-mask";

const Field = React.forwardRef(
  (
    {
      error,
      name,
      onChange,
      type,
      placeholder,
      filled,
      className,
      value,
      size,
      required
    },
    { ref, inputRef }
  ) => (
    <FieldStyled
      error={error}
      filled={filled}
      size={size}
      className={className}
    >
      {name === "phone" ? (
        <InputMask
          ref={ref}
          onChange={onChange}
          placeholder={placeholder}
          type="tel"
          name={name}
          mask="+7 (999) 999-99-99"
          value={value}
          required={required}
          inputRef={inputRef}
        />
      ) : (
        <Input
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          name={name}
          value={value}
          required={required}
          ref={ref}
        />
      )}
      {error && <Error>{error}</Error>}
    </FieldStyled>
  )
);

Field.propTypes = {
  error: pt.string,
  name: pt.string,
  type: pt.string,
  placeholder: pt.string,
  filled: pt.bool,
  onChange: pt.func,
  size: pt.string
};

Field.defaultProps = {
  type: "text",
  onChange: () => {}
};

export default Field;
