import styled from "styled-components";
import { colors } from "../../variables";

export const PromoStyled = styled.div`
  position: relative;
  padding: 40px 56px;
  margin-bottom: 100px;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    opacity: 0.4;
    background-image: linear-gradient(
      to bottom,
      rgba(234, 241, 252, 0),
      #dcddfc
    );
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageWrap = styled.div`
  position: relative;
  width: 490px;
  height: 460px;
  margin-left: 200px;
`;

export const Image = styled.img`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
`;

export const Code = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 23px;
  right: 75px;
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  font-size: 16px;
  color: ${colors.white};
  background-color: ${colors.softBlueTwo};
  opacity: 0.4;
`;

export const CodeShadow = styled(Code)`
  z-index: 3;
  opacity: 0;
`;
