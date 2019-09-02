import React, { useEffect, useRef } from "react";
import Portal from "../Portal/Portal";

import {
  ModalStyled,
  Overlay,
  CloseButton,
  CloseIcon,
  Content
} from "./Modal.styled";

const Modal = React.memo(({ isShow, onClose, children }) => {
  const scrollableContentRef = useRef();

  useEffect(() => {
    window.addEventListener("keyup", onKeyUp);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      window.removeEventListener("keyup", onKeyUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onKeyUp = e => {
    if (e.keyCode === 27) {
      onClose();
    }
  };

  const handleClose = () => {
    onClose();
  };

  const renderModal = () => {
    return (
      <ModalStyled isShow={isShow} ref={scrollableContentRef}>
        <Overlay />
        <Content>
          <CloseButton onClick={handleClose}>
            <CloseIcon />
          </CloseButton>
          {children}
        </Content>
      </ModalStyled>
    );
  };

  return <Portal>{renderModal()}</Portal>;
});

export default Modal;
