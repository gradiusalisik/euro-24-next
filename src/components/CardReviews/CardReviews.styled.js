import styled, { css } from "styled-components";
import { colors } from "../../variables";

export const CardReviewsStyled = styled.div`
  /* width: 434px; */
  background-color: ${colors.white};
  border: 1px solid ${colors.whiteBlue};
  border-radius: 4px;
  box-shadow: 0 4px 12px 0 rgba(50, 60, 72, 0.15);
`;

export const Images = styled.ul`
  margin-left: -8px;
  margin-top: -8px;
  display: flex;
  flex-wrap: wrap;
`;

const sizeImage = {
  two: css`
    width: calc(50% - 8px);
  `,
  three: css`
    width: calc(50% - 8px);
    height: 100px;

    &:first-child {
      width: 100%;
      height: 200px;
    }
  `,
  four: css`
    height: 200px;
    width: calc(50% - 8px);

    &:nth-last-child(2),
    &:last-child {
      height: 100px;
    }
  `,
  more: css`
    width: calc(20% - 8px);
    height: 100px;

    &:first-child {
      width: 100%;
      height: 200px;
    }
  `
};

export const Item = styled.li`
  margin-left: 8px;
  margin-top: 8px;
  width: 100%;
  height: 308px;
  ${p => sizeImage[p.size]};
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Content = styled.div`
  padding: 24px;
  opacity: 0;
  transform: scale(0);
  transition: opacity 0.3s, transform 0.3s;
`;

export const Description = styled.p`
  margin-bottom: 32px;
  font-size: 14px;
  line-height: 1.43;
  color: ${colors.gray};
`;

export const Info = styled.div``;

export const Name = styled.div`
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  color: ${colors.gray};
`;

export const Date = styled.div`
  font-size: 14px;
  line-height: 1.43;
  color: ${colors.gray};
`;

export const Video = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;
