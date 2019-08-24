import styled, { css } from "styled-components";
import Header from "./src/components/Header/Header";
import Cupboard from "./src/components/Cupboard/Cupboard";

const BgHeader = "./static/img/backgrounds/bg-header.svg";
const BgGreeting = "./static/img/backgrounds/bg-greeting.svg";
const BgOptions = "./static/img/backgrounds/bg-options.svg";
const BgShells = "./static/img/backgrounds/bg-shells.svg";
const BgPromo = "./static/img/backgrounds/bg-promo.svg";

export const AppStyled = styled.div`
  position: relative;

  &::before,
  &::after {
    position: absolute;
    top: 0;
    content: "";
    background-repeat: no-repeat;
  }

  &::before {
    left: 0;
    width: 168px;
    height: 472px;
    background-image: url(${BgHeader});
  }

  &::after {
    right: 0;
    width: 677px;
    height: 1371px;
    background-image: url(${BgGreeting});
  }
`;

export const Container = styled.div`
  position: relative;
  z-index: 1;
`;

export const ContentWindow = styled.div`
  position: relative;

  &::before {
    position: absolute;
    top: 50%;
    left: 0;
    width: 300px;
    height: 975px;
    content: "";
    background-image: url(${BgOptions});
    background-repeat: no-repeat;
    transform: translateY(-50%);
  }
`;

export const HeaderScroll = styled(Header)`
  ${props =>
    props.isShowHeader &&
    css`
      transform: translateY(0);
    `}
`;

export const CupboardStyled = styled(Cupboard)`
  position: relative;
  padding-top: 57px;
  padding-bottom: 123px;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 824px;
    content: "";
    background-image: url(${BgShells});
    background-repeat: no-repeat;
    background-position: 0 100%;
  }
`;

export const Content = styled.div`
  position: relative;

  &::before {
    position: absolute;
    top: 50%;
    left: 0;
    width: 761px;
    height: 1610px;
    content: "";
    background-image: url(${BgPromo});
    background-repeat: no-repeat;
    transform: translateY(-50%);
  }
`;

export const ContentWrap = styled.div`
  position: relative;
  z-index: 1;
`;
