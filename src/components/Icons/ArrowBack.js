import React from "react";

export const ArrowBack = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path d="M-4-4h24v24H-4z" />
      <path
        fill="currentColor"
        fillRule="nonzero"
        d="M16 7H3.827l5.586-5.587L8 0 0 8l8 8 1.413-1.413L3.827 9H16z"
      />
    </g>
  </svg>
);
