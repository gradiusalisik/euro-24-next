import styled from "styled-components";
import CardDescription from "../CardDescription/CardDescription";

export const SlidesStyled = styled.div`
  flex: 0 0 auto;
  overflow: hidden;
  width: ${p => `${p.maxWidth}px`};
`;

export const List = styled.div`
  display: flex;
`;

export const CardDescriptionStyled = styled(CardDescription)`
  flex: 0 0 auto;
`;
