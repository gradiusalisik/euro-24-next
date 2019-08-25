export const validatePhone = value =>
  /^((\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/.test(value);

export const validateName = value =>
  value.length > 2 && /^[А-яЁё]*$/.test(value);

export const validateTextarea = value =>
  value.length > 0 && value.length <= 400;
