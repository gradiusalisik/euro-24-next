import React from "react";

import { SocialIconsStyled, SocialIconsLink} from "./SocialIcons.styled";

import { socialIcons } from "../../assets/dataJson/socialIcons";

const SocialIcons = () => (
  <SocialIconsStyled>
    {socialIcons.map(icon => (
      <SocialIconsLink
        key={icon.id}
        href={icon.href}
        rel="noopener nofollow"
        >
        {icon.icon}
      </SocialIconsLink>
    ))}
  </SocialIconsStyled>
);

export default SocialIcons;