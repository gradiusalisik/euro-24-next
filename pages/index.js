import React, { useState, useRef, useEffect } from "react";
import "../styles/index.css";
import "../styles/font.css";
import "../styles/optimize.css";
import "../styles/slider.css";
import "react-image-lightbox/style.css";

import { Element } from "react-scroll";

import Header from "../src/components/Header/Header";
import FirstScreen from "../src/components/FirstScreen/FirstScreen";
import Stocks from "../src/components/Stocks/Stocks";
import Portfolio from "../src/components/Portfolio/Portfolio";
import Reviews from "../src/components/Reviews/Reviews";
import Jalousie from "../src/components/Jalousie/Jalousie";
import Balconies from "../src/components/Balconies/Balconies";
import Services from "../src/components/Services/Services";
import Nets from "../src/components/Nets/Nets";
import Window from "../src/components/Window/Window";
import Repair from "../src/components/Repair/Repair";
import Feedback from "../src/components/Feedback/Feedback";
import Footer from "../src/components/Footer/Footer";
import CompanyDetails from "../src/components/CompanyDetails/CompanyDetails";
import ModalReviewSuccess from "../src/components/ModalReviewSuccess/ModalReviewSuccess";
import ModalSuccess from "../src/components/ModalSuccess/ModalSuccess";
import ModalWindowCalculator from "../src/components/ModalWindowCalculator/ModalWindowCalculator";
import ModalCall from "../src/components/ModalCall/ModalCall";
import ModalCallWindow from "../src/components/ModalCallWindow/ModalCallWindow";
import ModalCallNets from "../src/components/ModalCallNets/ModalCallNets";
import ModalCallJalouse from "../src/components/ModalCallJalouse/ModalCallJalouse";
import ModalCallBalconies from "../src/components/ModalCallBalconies/ModalCallBalconies";
import ModalCallCupboard from "../src/components/ModalCallCupboard/ModalCallCupboard";
import FixedButton from "../src/components/FixedButton/FixedButton";
import Promo from "../src/components/Promo/Promo";

import {
  AppStyled,
  HeaderScroll,
  Container,
  ContentWindow,
  CupboardStyled,
  Content,
  ContentWrap
} from "../App.styled";

const App = () => {
  const [isShowHeader, setShowHeader] = useState(false);

  const headerEl = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("contextmenu", handleBlockLeftClick);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBlockLeftClick = event => {
    event.preventDefault();
  };

  const handleScroll = () => {
    const scrollPage = window.pageYOffset;
    const headerHeight = headerEl.current.getBoundingClientRect().height;

    if (scrollPage > headerHeight) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  };

  return (
    <AppStyled>
      <Element name="home">
        <Container>
          <div ref={headerEl}>
            <Header />
          </div>

          <HeaderScroll isScroll isShowHeader={isShowHeader} />
          <FirstScreen />
          <Element name="window">
            <Window />
            <Promo />
            <ContentWindow>
              <Jalousie />
              <Nets />
            </ContentWindow>
          </Element>
          <Element name="repair">
            <Repair />
          </Element>
          <Element name="balconies">
            <Balconies />
            <CupboardStyled />
          </Element>
          <Content>
            <ContentWrap>
              <Element name="services">
                <Services />
              </Element>
              <Element name="stocks">
                <Stocks />
              </Element>
              <Element name="portfolio">
                <Portfolio />
              </Element>
            </ContentWrap>
          </Content>
          <Element name="reviews">
            <Reviews />
          </Element>
          <Element name="company-details">
            <CompanyDetails />
          </Element>
          <Feedback />
          <Footer />
          <FixedButton />
        </Container>
      </Element>
      <ModalSuccess />
      <ModalReviewSuccess />
      <ModalCall />
      <ModalCallWindow />
      <ModalCallNets />
      <ModalCallJalouse />
      <ModalCallBalconies />
      <ModalCallCupboard />
      <ModalWindowCalculator />
    </AppStyled>
  );
};

export default App;
