import React, { useState, useEffect } from "react";

// data
import { tags, slides, sheets } from "../../assets/dataJson/nets";

import { setTag, filteredTags, getSlides } from "../../utils/tags";

import Title from "../Title/Title";
import Tags from "../Tags/Tags";
import Button from "../Button/Button";
import Slides from "../Slides/Slides";
import ChooseSheet from "../ChooseSheet/ChooseSheet";

import {
  NetsStyled,
  Content,
  Information,
  Photo,
  Buttons,
  Advantages,
  AdvantageStyled
} from "./Nets.styled";

const Nets = () => {
  const defaultSlides = slides.filter(slide => slide.tags.includes(tags[0].id));

  const [tagIds, setTagId] = useState([tags[0].id]);
  const [newSlides, setNewSlides] = useState(defaultSlides);
  const [background, setBackground] = useState(newSlides[0].background);
  const [advantages, setAdvantages] = useState(newSlides[0].advantages);
  const [count, setCount] = useState(0);
  const [isOpenChooseSheet, setOpenChooseSheet] = useState(false);

  const handleClick = id => {
    setTagId(setTag(tagIds, id));
    setBackground(newSlides[0].background);
    setAdvantages(newSlides[0].advantages);
    setCount(0);
  };

  useEffect(() => {
    setNewSlides(getSlides(tagIds, slides));
  }, [tagIds]);

  useEffect(() => {
    setBackground(newSlides[count].background);
    setAdvantages(newSlides[count].advantages);
  }, [count, newSlides]);

  const handleClickPrev = () => {
    setCount(count - 1);
  };

  const handleClickNext = () => {
    setCount(count + 1);
  };

  const handleOpenChooseSheet = () => {
    setOpenChooseSheet(true);
  };

  const handleCloseChooseSheet = () => {
    setOpenChooseSheet(false);
  };

  const getSlideTags = slideTags =>
    slideTags
      .map(slideTag => tags.filter(tag => slideTag === tag.id)[0])
      .map(tag => tag.text);

  return (
    <NetsStyled>
      <Title>Сетки</Title>
      <Tags
        onClick={handleClick}
        tagIds={tagIds}
        tags={filteredTags(tags, slides)}
      />
      <Content>
        <Information>
          <Photo background={background} />
          {isOpenChooseSheet ? (
            <ChooseSheet
              sheets={sheets.list}
              onClickBack={handleCloseChooseSheet}
              price={sheets.price}
            />
          ) : (
            <Slides
              slides={newSlides}
              count={count}
              onClickPrev={handleClickPrev}
              onClickNext={handleClickNext}
              getSlideTags={getSlideTags}
              isArrows
            >
              <Buttons>
                <Button size="full">Заказать сетку</Button>
                <Button
                  size="full"
                  theme="secondary"
                  onClick={handleOpenChooseSheet}
                >
                  Выбрать полотно
                </Button>
              </Buttons>
            </Slides>
          )}
        </Information>

        <Advantages>
          {advantages.map(advantage => (
            <AdvantageStyled
              key={advantage.id}
              icon={advantage.icon}
              title={advantage.title}
              description={advantage.description}
            />
          ))}
        </Advantages>
      </Content>
    </NetsStyled>
  );
};

export default Nets;
