import React from "react";
import { inject } from "mobx-react";
import MainForm from "../MainForm/MainForm";
import ModalDiscount from "../ModalDiscount/ModalDiscount";

import {
  PromoStyled,
  ImageWrap,
  Image,
  Code,
  Content,
  CodeShadow
} from "./Promo.styled";

const PromoImage = "static/img/promo/illustration-size.svg";

const Promo = ({ hideCodeDiscount, openModalDiscount, setDiscount }) => {
  const handleOpenDiscount = () => {
    setDiscount();
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

export default inject(({ modalStore, formStore }) => ({
  hideCodeDiscount: modalStore.hideCodeDiscount,
  openModalDiscount: modalStore.openModalDiscount,
  setDiscount: formStore.setDiscount
}))(Promo);
