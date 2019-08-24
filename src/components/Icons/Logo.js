import React from "react";

export const Logo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="66"
    height="66"
    viewBox="0 0 66 66"
    {...props}
  >
    <defs>
      <radialGradient
        id="a"
        cx="0%"
        cy="92.1%"
        r="107.716%"
        fx="0%"
        fy="92.1%"
        gradientTransform="rotate(-40.429 .104 .883) scale(1 .91677)"
      >
        <stop offset="0%" stopColor="#02D8C3" />
        <stop offset="25.358%" stopColor="#06C0E4" />
        <stop offset="100%" stopColor="#8F03FD" />
      </radialGradient>
      <radialGradient
        id="b"
        cx="19.918%"
        cy="78.612%"
        r="96.265%"
        fx="19.918%"
        fy="78.612%"
        gradientTransform="matrix(.74681 -.66503 .61271 .68806 -.431 .378)"
      >
        <stop offset="0%" stopColor="#02D8C3" />
        <stop offset="50.924%" stopColor="#06C0E4" />
        <stop offset="100%" stopColor="#8F03FD" />
      </radialGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path
        fill="url(#a)"
        fillRule="nonzero"
        d="M59.429 26.286H46.286v13.143h13.143V26.286zm0-6.572V6.571H26.57v13.143h13.143V6.571h6.572v13.143h13.143zM26.57 26.286v13.143h13.143V26.286H26.571zM20 0h46v46H20V0z"
      />
      <path
        fill="url(#b)"
        d="M6.571 66H0V20h13.143v6.571H6.57V59.43H39.43v-6.572H46V66H6.571z"
      />
    </g>
  </svg>
);
