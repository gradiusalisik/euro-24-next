import React from "react";

// data
import { reviews } from "../../assets/dataJson/reviews";

import { SliderReviewsStyled, CardReviewsStyled } from "./SliderReviews.styled";

const SliderReviews = React.forwardRef(({ className }, ref) => {
  const settings = {
    slidesToShow: 3,
    arrows: false,
    speed: 700
  };

  return (
    <SliderReviewsStyled {...settings} className={className} ref={ref}>
      {reviews.map(review => (
        <CardReviewsStyled
          key={review.id}
          images={review.images}
          description={review.description}
          date={review.date}
          name={review.name}
        />
      ))}
    </SliderReviewsStyled>
  );
});

export default SliderReviews;
