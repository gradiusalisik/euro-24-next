import styled from "styled-components";
import { colors } from "../../variables";
import { Link as LinkScroll } from "react-scroll";

export const CardServicesStyled = styled(LinkScroll)`
  padding: 40px 25px;
  display: flex;
  height: 240px;
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
  width: 60px;
  height: 60px;
  margin-right: 16px;
  flex: 0 0 auto;

  svg {
    width: 100%;
    height: 100%;
  }
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

export const Text = styled.span`
  font-size: 32px;
  font-weight: 500;
  color: ${colors.orange};
`;
