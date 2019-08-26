import React, { useState, useEffect } from "react";
import { inject } from "mobx-react";
import useForm from "react-hook-form";

import { validateName, validateTextarea } from "../../utils/validate";

import Modal from "../Modal/Modal";
import FieldFiles from "../FieldFiles/FieldFiles";

import {
  ModalReviewStyled,
  Image,
  Title,
  Header,
  Form,
  TextareaStyled,
  FieldStyled,
  ButtonSubmit
} from "./ModalReview.styled";

const ModalReview = ({
  closeModalReview,
  isShowModalReview,
  openModalReviewSuccess,
  send,
  myFiles,
  resetFiles
}) => {
  const [isErrorFiles, setErrorFiles] = useState(false);
  const [isSubmitCheck, setSubmitCheck] = useState(false);

  const handleClose = () => {
    closeModalReview();
  };

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, e) => {
    if (myFiles.length === 0) {
      return false;
    }
    e.target.reset();
    openModalReviewSuccess();
    send({
      ...data,
      files: myFiles
    });
    handleClose();
    resetFiles();
    setSubmitCheck(false);
  };

  useEffect(() => {
    setErrorFiles(myFiles.length === 0);
  }, [myFiles]);

  const handleClick = e => {
    setSubmitCheck(true);
  };

  return (
    <Modal isShow={isShowModalReview} onClose={handleClose}>
      <ModalReviewStyled>
        <Header>
          <Image />
          <Title>Оставить отзыв</Title>
        </Header>
        <Form
          onSubmit={handleSubmit(onSubmit)}
          enctype="multipart/form-data"
          method="post"
        >
          <FieldStyled
            name="name"
            type="text"
            ref={{
              ref: register({
                validate: validateName,
                required: true
              })
            }}
            placeholder="Как к вам обращаться?"
            error={errors.name && "Пожалуйста, введите русские символы"}
          />
          <TextareaStyled
            name="reviews"
            placeholder="Ваш отзыв"
            ref={register({
              validate: validateTextarea,
              required: true
            })}
            error={!!errors.reviews}
          />
          <FieldStyled
            name="video"
            type="text"
            ref={{
              ref: register
            }}
            placeholder="Ссылка на видео-отзыв (необязательно)"
          />
          <FieldFiles name="files" error={isSubmitCheck && isErrorFiles} />
          <ButtonSubmit type="submit" size="full" onClick={handleClick}>
            Оставить отзыв
          </ButtonSubmit>
        </Form>
      </ModalReviewStyled>
    </Modal>
  );
};

export default inject(({ modalStore, formStore }) => ({
  closeModalReview: modalStore.closeModalReview,
  openModalReviewSuccess: modalStore.openModalReviewSuccess,
  isShowModalReview: modalStore.isShowModalReview,
  send: formStore.send,
  resetFiles: formStore.resetFiles,
  myFiles: formStore.myFiles
}))(ModalReview);
