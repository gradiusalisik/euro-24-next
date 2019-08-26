import React, { useState } from "react";
import { inject } from "mobx-react";

import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import ChoiceHouse from "../ChoiceHouse/ChoiceHouse";

import {
  ModalWindowCalculatorStyled,
  ChoiceWindow,
  Header,
  ImageWindow,
  Info,
  Title,
  SubTitle,
  Windows,
  Buttons,
  ImageTypeWindow,
  ImageLastStep,
  ButtonsLast,
  Form
} from "./ModalWindowCalculator.styled";

const ModalWindowCalculator = ({
  closeModalWindowCalculator,
  isShowModalWindowCalculator
}) => {
  const [step, setStepModal] = useState("first");
  const [typeHouse, setTypeHouse] = useState(null);

  const handleClose = () => {
    closeModalWindowCalculator();
    setStepModal("first");
    setTypeHouse(null);
  };

  const handleClickHouse = name => {
    setTypeHouse(name);
    setStepModal("second");
  };

  const handleBack = stepCalculate => () => {
    setStepModal(stepCalculate);
  };
  const handleNext = stepCalculate => () => {
    setStepModal(stepCalculate);
  };

  const renderCountWindow = () => (
    <ChoiceWindow>
      <Header>
        <ImageWindow
          src="static/img/window/ic-count-windows.svg"
          alt="count-window"
        />
        <Info>
          <Title>Выбор конфигурации окон</Title>
          <SubTitle>Расчет стоимости</SubTitle>
        </Info>
      </Header>
      <Windows>hello</Windows>
      <Buttons>
        <Button theme="secondary" onClick={handleBack("first")}>
          Назад
        </Button>
        <Button onClick={handleNext("third")}>Далее</Button>
      </Buttons>
    </ChoiceWindow>
  );

  const renderTypeWindow = () => (
    <ChoiceWindow>
      <Header>
        <ImageTypeWindow
          src="static/img/window/ic-measure.svg"
          alt="type-window"
        />
        <Info>
          <Title>Выбор типа раскрытия окон</Title>
          <SubTitle>Расчет стоимости</SubTitle>
        </Info>
      </Header>
      <Windows>hello</Windows>
      <Buttons>
        <Button theme="secondary" onClick={handleBack("second")}>
          Назад
        </Button>
        <Button onClick={handleNext("last")}>Далее</Button>
      </Buttons>
    </ChoiceWindow>
  );
  const renderLastStep = () => (
    <ChoiceWindow>
      <Header>
        <ImageLastStep src="static/img/window/ic-ruler.svg" alt="ruler" />
        <Info>
          <Title>Измерения</Title>
          <SubTitle>Расчет стоимости</SubTitle>
        </Info>
      </Header>
      <Form>Hello</Form>
      <ButtonsLast>
        <Button theme="secondary" onClick={handleBack("third")}>
          Назад
        </Button>
        <Button>Заказать окна</Button>
      </ButtonsLast>
    </ChoiceWindow>
  );

  return (
    <Modal isShow={isShowModalWindowCalculator} onClose={handleClose}>
      <ModalWindowCalculatorStyled>
        {step === "first" && <ChoiceHouse onClickHouse={handleClickHouse} />}
        {step === "second" && renderCountWindow()}
        {step === "third" && renderTypeWindow()}
        {step === "last" && renderLastStep()}
      </ModalWindowCalculatorStyled>
    </Modal>
  );
};

export default inject(({ modalStore }) => ({
  closeModalWindowCalculator: modalStore.closeModalWindowCalculator,
  isShowModalWindowCalculator: modalStore.isShowModalWindowCalculator
}))(ModalWindowCalculator);
