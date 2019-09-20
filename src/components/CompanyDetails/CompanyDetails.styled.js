import styled from "styled-components";

export const CompanyDetailsStyled = styled.div`
  margin-bottom: 80px;
  display: flex;
  justify-content: center;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 930px;
`;

export const List = styled.ul``;

export const Item = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Name = styled.span`
  font-size: 16px;
  width: 200px;
  margin-right: 15px;
`;

export const Description = styled.span`
  font-size: 16px;
`;
