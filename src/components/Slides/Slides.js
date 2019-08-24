import React from "react";
import { PropTypes as pt } from "prop-types";

import { SlidesStyled, List, CardDescriptionStyled } from "./Slides.styled";

const Slides = ({
  slides,
  children,
  count,
  onClickPrev,
  onClickNext,
  getSlideTags,
  isArrows,
  className,
  maxWidth
}) => (
  <SlidesStyled className={className} maxWidth={maxWidth}>
    <List>
      {slides.map((slide, key) => (
        <CardDescriptionStyled
          key={slide.id}
          maxWidth={maxWidth}
          title={slide.title}
          description={slide.description}
          price={slide.price}
          tags={getSlideTags(slide.tags)}
          currentSlide={count}
          slideCount={slides.length - 1}
          onClickPrev={onClickPrev}
          isArrows={isArrows}
          onClickNext={onClickNext}
        >
          {children}
        </CardDescriptionStyled>
      ))}
    </List>
  </SlidesStyled>
);

Slides.propTypes = {
  slides: pt.arrayOf(
    pt.shape({
      id: pt.string,
      title: pt.string,
      description: pt.string,
      price: pt.string
    })
  ),
  isArrows: pt.bool,
  count: pt.number,
  onClickPrev: pt.func,
  getSlideTags: pt.func,
  onClickNext: pt.func,
  maxWidth: pt.number
};

Slides.defaultProps = {
  getSlideTags: () => {},
  onClickPrev: () => {},
  onClickNext: () => {},
  maxWidth: 335
};

export default Slides;
