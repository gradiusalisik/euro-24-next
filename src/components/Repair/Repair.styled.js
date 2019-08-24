import styled, { css } from "styled-components";
import { colors } from "../../variables";

import { Balcony } from "../Icons/Balcony";
import { WindowCommon } from "../Icons/WindowCommon";

const IconsStyle = css`
  margin-bottom: 24px;
  color: ${colors.white};
  transition: color 0.3s;
`;

export const WindowIcon = styled(WindowCommon)`
  width: 56px;
  height: 48px;
  ${IconsStyle}
`;

export const BalconiesIcon = styled(Balcony)`
  width: 54px;
  height: 56px;
  ${IconsStyle}
`;

const cardStyle = css`
  position: relative;
  display: flex;
  align-items: center;
  width: 50%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  cursor: pointer;
  background-image: url(${p => p.background});
  transition: width 0.2s ease-in-out;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    background-color: rgba(50, 60, 72, 0.55);
    transition: background-color 0.3s;
  }

  &:hover {
    ${WindowIcon},
    ${BalconiesIcon} {
      color: ${colors.orange};
    }
  }
`;

const cardStyleDefaultHover = css`
  ${WindowIcon},
  ${BalconiesIcon} {
    color: ${colors.white};
  }
`;

export const RepairInfoStyled = styled.div`
  position: relative;
  padding-right: 56px;
  width: calc(100% - 240px);
  flex: 0 0 auto;
  transform: translateX(100%) scaleX(0);
  opacity: 0;
  transition: transform 0.5s, opacity 0.5s;
`;

export const Info = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-width: 240px;
  flex: 1 0 auto;
  transition: width 0.2s ease-in-out;
`;

export const Window = styled.div`
  ${cardStyle}
`;

export const Balconies = styled.div`
  ${cardStyle};
`;

const hoverBlock = {
  window: css`
    ${Window} {
      width: 70%;
    }

    ${Balconies} {
      width: 30%;

      &::before {
        background-color: rgba(50, 60, 72, 0.7);
      }

      ${Info} {
        flex: 1 0 auto;
      }

      ${RepairInfoStyled} {
        opacity: 0;
        transform: translateX(100%) scaleX(0);
      }
    }
  `,
  balconies: css`
    ${Balconies} {
      width: 70%;
    }

    ${Window} {
      width: 30%;

      &::before {
        background-color: rgba(50, 60, 72, 0.7);
      }

      ${Info} {
        flex: 1 0 auto;
      }

      ${RepairInfoStyled} {
        opacity: 0;
        transform: translateX(100%) scaleX(0);
      }
    }
  `
};

const activeBlock = {
  window: css`
    ${Window} {
      width: 83%;
      cursor: default;

      ${Info} {
        flex: 0 1 auto;
      }
      ${RepairInfoStyled} {
        opacity: 1;
        transform: translateX(0) scaleX(1);
      }
    }

    ${Balconies} {
      width: 17%;

      &::before {
        background-color: rgba(50, 60, 72, 0.9);
      }
    }
  `,
  balconies: css`
    ${Balconies} {
      width: 83%;
      cursor: default;

      ${Info} {
        flex: 0 1 auto;
      }

      ${RepairInfoStyled} {
        opacity: 1;
        transform: translateX(0) scaleX(1);
      }
    }

    ${Window} {
      width: 17%;

      &::before {
        background-color: rgba(50, 60, 72, 0.9);
      }
    }
  `
};

const activeBlockAfterHover = {
  window: css`
    ${Window} {
      width: 83%;

      &:hover {
        ${cardStyleDefaultHover}
      }
    }

    ${Balconies} {
      width: 17%;

      &::before {
        background-color: rgba(50, 60, 72, 0.9);
      }

      ${RepairInfoStyled} {
        opacity: 1;
        transform: translateX(0) scaleX(1);
      }
    }
  `,
  balconies: css`
    ${Balconies} {
      width: 83%;

      &:hover {
        ${cardStyleDefaultHover}
      }
    }

    ${Window} {
      width: 17%;

      &::before {
        background-color: rgba(50, 60, 72, 0.9);
      }

      ${RepairInfoStyled} {
        opacity: 1;
        transform: translateX(0) scaleX(1);
      }
    }
  `
};

export const RepairStyled = styled.div`
  position: relative;
  display: flex;
  height: 264px;
  margin-bottom: 100px;

  ${p => activeBlock[p.activeBlock]};
  ${p => hoverBlock[p.hoverBlock]};
  ${p => p.activeBlock === p.hoverBlock && activeBlockAfterHover[p.hoverBlock]};
`;

export const Title = styled.h3`
  font-size: 20px;
  color: ${colors.white};
`;
