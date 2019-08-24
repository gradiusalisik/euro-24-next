import styled from "styled-components";
import { colors } from "../../variables";

export const CardServicesStyled = styled.div`
  padding: 40px 25px;
  display: flex;
  height: 210px;
  background-color: ${colors.white};
  cursor: pointer;
  border: 1px solid transparent;
  transition: border 0.3s, box-shadow 0.3s;

  &:hover {
    border: 1px solid ${colors.whiteBlue};
    box-shadow: 0 4px 8px 0 rgba(50, 60, 72, 0.15);
  }
`;

export const Icon = styled.div`
  margin-right: 16px;
`;

export const Info = styled.div``;

export const Title = styled.h4`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.main};
`;

export const Description = styled.p`
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 1.43;
  color: ${colors.main};
`;
