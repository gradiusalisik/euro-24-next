import styled from "styled-components";
import Tag from "../Tag/Tag";

export const TagsStyled = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 690px;
`;

export const List = styled.div`
  margin-left: -16px;
  margin-top: -16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const TagStyled = styled(Tag)`
  margin-top: 16px;
  margin-left: 16px;
`;
