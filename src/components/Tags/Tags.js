import React from "react";
import { PropTypes as pt } from "prop-types";

import { TagsStyled, TagStyled, List } from "./Tags.styled";

const Tags = ({ onClick, tags, tagIds, className }) => {
  const handleClick = id => () => {
    onClick(id);
  };

  return (
    <TagsStyled className={className}>
      <List>
        {tags.map(tag => (
          <TagStyled
            key={tag.id}
            onClick={handleClick(tag.id)}
            isActive={tagIds.includes(tag.id)}
          >
            {tag.text}
          </TagStyled>
        ))}
      </List>
    </TagsStyled>
  );
};

Tags.propTypes = {
  onClick: pt.func,
  tagIds: pt.arrayOf(pt.string)
};

Tags.defaultProps = {
  onClick: () => {}
};

export default Tags;
