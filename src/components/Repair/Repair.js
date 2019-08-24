import React, { useState } from "react";

// data
import {
  advantagesWindow,
  advantagesBalconies
} from "../../assets/dataJson/repair";
import BalconiesImg from "../../assets/img/repair/balconies.jpg";
import WindowImg from "../../assets/img/repair/window.jpg";

import RepairInfo from "../RepairInfo/RepairInfo";

import {
  RepairStyled,
  Window,
  Info,
  WindowIcon,
  BalconiesIcon,
  Balconies,
  Title,
  RepairInfoStyled
} from "./Repair.styled";

const Repair = () => {
  const [activeName, setActiveName] = useState(null);
  const [hoverName, setHoverName] = useState(null);

  const handleClick = name => () => {
    setActiveName(name);
  };

  const handleMouseOver = name => () => {
    setHoverName(name);
  };
  const handleMouseOut = () => {
    setHoverName(null);
  };

  return (
    <RepairStyled hoverBlock={hoverName} activeBlock={activeName}>
      <Window
        onClick={handleClick("window")}
        onMouseOver={handleMouseOver("window")}
        onMouseOut={handleMouseOut}
        background={WindowImg}
      >
        <Info>
          <WindowIcon />
          <Title>Ремонт окон</Title>
        </Info>
        <RepairInfoStyled>
          <RepairInfo advantages={advantagesWindow} theme="white" />
        </RepairInfoStyled>
      </Window>
      <Balconies
        onClick={handleClick("balconies")}
        onMouseOver={handleMouseOver("balconies")}
        onMouseOut={handleMouseOut}
        background={BalconiesImg}
      >
        <Info>
          <BalconiesIcon />
          <Title>Ремонт балконов</Title>
        </Info>
        <RepairInfoStyled>
          <RepairInfo advantages={advantagesBalconies} theme="white" />
        </RepairInfoStyled>
      </Balconies>
    </RepairStyled>
  );
};

export default Repair;
