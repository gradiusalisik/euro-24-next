import React from "react";
import { PropTypes as pt } from "prop-types";

import {
  CardDescriptionStyled,
  Head,
  Title,
  Content,
  Tags,
  Tag,
  Description,
  SliderButtonStyled,
  PriceStyled
} from "./CardDescription.styled";

const CardDescription = ({
  tags,
  title,
  description,
  price,
  children,
  slideCount,
  currentSlide,
  onClickPrev,
  onClickNext,
  isArrows,
  className,
  maxWidth
}) => {
  const count = currentSlide !== undefined ? currentSlide : 0;

  return (
    <CardDescriptionStyled
      className={className}
      count={count}
      maxWidth={maxWidth}
    >
      <Head>
        <Title>{title}</Title>
        {slideCount > 0 && isArrows && (
          <SliderButtonStyled
            size="small"
            slideCount={slideCount}
            currentSlide={currentSlide}
            onClickPrev={onClickPrev}
            onClickNext={onClickNext}
          />
        )}
      </Head>
      <Content>
        {tags && (
          <Tags>
            {tags.map((tag, key) => (
              <Tag key={key}>{tag}</Tag>
            ))}
          </Tags>
        )}
        <Description dangerouslySetInnerHTML={{ __html: description }} />
        <PriceStyled price={price} />
        {children}
      </Content>
    </CardDescriptionStyled>
  );
};

CardDescription.propTypes = {
  tags: pt.arrayOf(pt.string),
  title: pt.string,
  description: pt.string,
  price: pt.string,
  children: pt.node,
  slideCount: pt.number,
  currentSlide: pt.number,
  onClickPrev: pt.func,
  onClickNext: pt.func,
  isArrows: pt.bool,
  maxWidth: pt.number
};

CardDescription.defaultProps = {
  onClickPrev: () => {},
  onClickNext: () => {}
};

export default CardDescription;
