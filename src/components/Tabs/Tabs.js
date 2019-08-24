import React from "react";
import { PropTypes as pt } from "prop-types";

import Tab from "../Tab/Tab";

import { TabsStyled } from "./Tabs.styled";

const Tabs = ({ id, onClick, tabs, className }) => {
  const handleClick = id => () => {
    onClick(id);
  };

  return (
    <TabsStyled className={className}>
      {tabs.map(tab => (
        <Tab
          key={tab.id}
          onClick={handleClick(tab.id)}
          isActive={tab.id === id}
        >
          {tab.text}
        </Tab>
      ))}
    </TabsStyled>
  );
};

Tabs.propTypes = {
  onClick: pt.func,
  id: pt.string
};

Tabs.defaultProps = {
  onClick: () => {}
};

export default Tabs;
