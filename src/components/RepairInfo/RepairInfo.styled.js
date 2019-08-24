import styled from "styled-components";
import Advantage from "../Advantage/Advantage";

export const RepairInfoStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const Advantages = styled.div`
  margin-left: -40px;
  display: flex;
  flex-wrap: wrap;
`;

export const AdvantageStyled = styled(Advantage)`
  margin-left: 40px;

  &:nth-child(1),
  &:nth-child(2) {
    margin-bottom: 40px;
  }
`;

export const Forms = styled.form`
  margin-left: 55px;
  width: 266px;
`;

// TODO временная заглушка
export const Field = styled.div`
  height: 40px;
  border-radius: 2px;
  border: solid 1px #c5cfde;
  background-color: #ffffff;
  margin-bottom: 16px;
`;
