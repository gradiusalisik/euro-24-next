import React, { useState } from "react";
import { PropTypes as pt } from "prop-types";
import LightboxSlide from "../LightboxSlide/LightboxSlide";

import {
  CardReviewsStyled,
  Images,
  Image,
  Item,
  Content,
  Description,
  Info,
  Name,
  Date,
  Video
} from "./CardReviews.styled";

const CardReviews = ({
  images,
  description,
  name,
  date,
  className,
  openSlide
}) => {
  const [isOpenSlides, setOpenSlides] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getSize = quantity => {
    if (quantity === 2) {
      return "two";
    }
    if (quantity === 3) {
      return "three";
    }

    if (quantity === 4) {
      return "four";
    }

    if (quantity > 4) {
      return "more";
    }

    return;
  };

  const handleOpenSlides = id => () => {
    const currentIndexSlide = images.map(item => item.id).indexOf(id);

    setCurrentIndex(currentIndexSlide);
    setOpenSlides(true);
  };

  const handleCloseSlides = () => {
    setOpenSlides(false);
  };

  const imagesReview = images.map(item => item.image);

  return (
    <CardReviewsStyled className={className}>
      <Images>
        {images.map(item => (
          <Item
            key={item.id}
            size={getSize(images.length)}
            onClick={handleOpenSlides(item.id)}
          >
            {item.video ? (
              <Video
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                src={item.video}
                frameborder="0"
                allowfullscreen
              />
            ) : (
              <Image
                style={{
                  backgroundImage: `url(${item.image})`
                }}
              />
            )}
          </Item>
        ))}
        {isOpenSlides && (
          <LightboxSlide
            onClose={handleCloseSlides}
            images={imagesReview}
            currentIndexSlide={currentIndex}
          />
        )}
      </Images>
      <Content>
        <Description>{description}</Description>
        <Info>
          <Name>{name}</Name>
          <Date>{date}</Date>
        </Info>
      </Content>
    </CardReviewsStyled>
  );
};

CardReviews.propTypes = {
  images: pt.arrayOf(
    pt.shape({
      id: pt.string,
      image: pt.string,
      video: pt.string
    })
  ),
  description: pt.string,
  name: pt.string,
  date: pt.string
};

export default CardReviews;
