import styled from "styled-components";
import { colors } from "../../variables";

export const SocialIconsStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SocialIconsLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  color: rgba(255, 255, 255, 0.3);
  transition: color 0.3s;

  &:hover {
    color: ${colors.white}
  }
  
  &:not(:first-child) {
    margin-left: 10px;
  }
`;