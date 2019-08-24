import React from "react";
import { inject } from "mobx-react";
import MainForm from "../MainForm/MainForm";
import ModalDiscount from "../ModalDiscount/ModalDiscount";

import PromoImage from "../../assets/img/promo/illustration-size.svg";

import {
  PromoStyled,
  ImageWrap,
  Image,
  Code,
  Content,
  CodeShadow
} from "./Promo.styled";

const Promo = ({ hideCodeDiscount, openModalDiscount }) => {
  const handleOpenDiscount = () => {
    openModalDiscount();
  };

  return (
    <PromoStyled>
      <Content>
        <MainForm />
        <ImageWrap>
          <Image src={PromoImage} />

          {!hideCodeDiscount && (
            <>
              <Code>XsYDILSN2019</Code>
              <CodeShadow onClick={handleOpenDiscount}>XsYDILSN2019</CodeShadow>
            </>
          )}
        </ImageWrap>
      </Content>
      <ModalDiscount />
    </PromoStyled>
  );
};

export default inject(({ modalStore }) => ({
  hideCodeDiscount: modalStore.hideCodeDiscount,
  openModalDiscount: modalStore.openModalDiscount
}))(Promo);
