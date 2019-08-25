import styled from "styled-components";
import { colors } from "../../variables";

export const ChoiceHouseStyled = styled.div`
  display: flex;
`;

export const ImageIcon = styled.img`
  margin-right: 30px;
  width: 80px;
  height: 73px;
`;

export const Content = styled.div``;

export const Title = styled.h2`
  margin-bottom: 15px;
  font-size: 32px;
  color: ${colors.main};
`;

export const SubTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 24px;
  line-height: 1;
  color: ${colors.main};
`;

export const Description = styled.p`
  margin-bottom: 40px;
  font-size: 14px;
  line-height: 1.43;
  colro: ${colors.gray};
`;

export const Buttons = styled.div`
  display: flex;
`;

export const Text = styled.p`
  margin-top: 40px;
  font-size: 14px;
  line-height: 1.43;
  color: ${colors.gray};
  transition: color 0.3s;
`;

export const Button = styled.button`
  width: 280px;
  height: 224px;
  background-color: ${colors.white};
  border: 1px solid ${colors.gray};
  border-radius: 4px;
  cursor: pointer;
  transition: box-shadow 0.3s, border-color 0.3s;

  &:first-child {
    margin-right: 40px;
  }

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(86, 149, 237, 0.15);
  }

  &:active {
    border-color: ${colors.brightblue};
    ${Text} {
      color: ${colors.brightblue};
    }
  }
`;

export const Image = styled.img`
  width: 52px;
  height: 88px;
`;
