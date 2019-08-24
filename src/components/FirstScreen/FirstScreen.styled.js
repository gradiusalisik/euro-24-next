import styled, { css } from "styled-components";
import { colors } from "../../variables";
import { Link as LinkScroll } from "react-scroll";
import { ButtonBase, buttonTheme } from "../Button/Button.styled";

export const FirstScreenStyled = styled.div`
  padding-top: 90px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(100vh - 130px);
`;

export const Container = styled.div`
  padding-left: 56px;
  padding-right: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Info = styled.div`
  margin-right: 40px;
  max-width: 610px;
  width: 100%;
`;

export const Title = styled.h1`
  margin-bottom: 24px;
  font-size: 56px;
  font-weight: 900;
  line-height: 1.14;
  color: ${colors.main};

  strong {
    color: ${colors.blue};
  }
`;

export const Description = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
  line-height: 1.6;
  color: ${colors.main};
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 24px;
  }
`;

export const ButtonLink = styled(LinkScroll)`
  ${ButtonBase};
  ${buttonTheme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 634px;
  height: 520px;
`;

export const Brands = styled.ul`
  padding-bottom: 40px;
  padding-left: 56px;
  padding-right: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Item = styled.ul``;

export const Brand = styled.img`
  ${props => {
    switch (props.brand) {
      case "logo-veka":
        return css`
          width: 72px;
          height: 22px;
        `;
      case "logo-salamander":
        return css`
          width: 194px;
          height: 24px;
        `;
      case "logo-schuco":
        return css`
          width: 150px;
          height: 24px;
        `;
      case "logo-kbe":
        return css`
          width: 86px;
          height: 44px;
        `;
      case "logo-trocal":
        return css`
          width: 86px;
          height: 26px;
        `;
      case "logo-rehau":
        return css`
          width: 78px;
          height: 22px;
        `;
      default:
        return css``;
    }
  }}
`;
