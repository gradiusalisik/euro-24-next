import React from "react";

export const ArrowRight = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="34"
    height="34"
    viewBox="0 0 34 34"
    {...props}
  >
    <g fill="none" fillRule="evenodd" transform="translate(1 1)">
      <circle cx="16" cy="16" r="16" fill="#FFF" stroke="currentColor" />
      <path d="M6 6h20v20H6z" />
      <path
        fill="currentColor"
        fillRule="nonzero"
        d="M16 9.333l-1.178 1.178 4.656 4.656H9.333v1.666h10.145l-4.656 4.656L16 22.667 22.667 16z"
      />
    </g>
  </svg>
);
