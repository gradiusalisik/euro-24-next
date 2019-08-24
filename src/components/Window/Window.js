import React, { useState, useEffect } from "react";

// data
import { tags, slides, colors } from "../../assets/dataJson/window";

import { setTag, filteredTags, getSlides } from "../../utils/tags";

import Title from "../Title/Title";
import Tags from "../Tags/Tags";
import Slides from "../Slides/Slides";
import Button from "../Button/Button";

import {
  WindowStyled,
  Content,
  Visual,
  Photo,
  ButtonColor,
  Information,
  WindowColorStyled,
  Advantages,
  Buttons,
  ColorIcon,
  AdvantageStyled
} from "./Window.styled";

const Window = () => {
  const defaultSlides = slides.filter(slide => slide.tags.includes(tags[0].id));

  const defaultValue = colors.list[0].colors[0].value;

  const [tagIds, setTagId] = useState([tags[0].id]);
  const [newSlides, setNewSlides] = useState(defaultSlides);
  const [background, setBackground] = useState(newSlides[0].background);
  const [advantages, setAdvantages] = useState(newSlides[0].advantages);
  const [count, setCount] = useState(0);
  const [currentSlideColor, setCurrentSlideColor] = useState(0);
  const [checkedValue, setCheckedValue] = useState(defaultValue);
  const defaultCurrentColorData = colors.list[0].colors[0];
  const [currentColorData, setCurrentColorData] = useState(
    defaultCurrentColorData
  );
  const [isChooseColor, setOpenColor] = useState(false);

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

  useEffect(() => {
    setCheckedValue(colors.list[currentSlideColor].colors[0].value);
  }, [currentSlideColor]);

  useEffect(() => {
    const currentFind = colors.list[currentSlideColor].colors.find(
      element => element.value === checkedValue
    );
    const currentData = currentFind || defaultValue;
    setCurrentColorData(currentData);
  }, [checkedValue, currentSlideColor, defaultValue]);

  const handleClickPrev = () => {
    setCount(count - 1);
  };

  const handleClickNext = () => {
    setCount(count + 1);
  };

  const handleClickPrevColor = () => {
    setCurrentSlideColor(currentSlideColor - 1);
  };

  const handleClickNextColor = () => {
    setCurrentSlideColor(currentSlideColor + 1);
  };

  const handleChangeColor = value => {
    setCheckedValue(value);
  };

  const getSlideTags = slideTags =>
    slideTags
      .map(slideTag => tags.filter(tag => slideTag === tag.id)[0])
      .map(tag => tag.text);

  const openChooseColor = () => {
    setOpenColor(true);
  };
  const closeChooseColor = () => {
    setOpenColor(false);
  };

  return (
    <WindowStyled>
      <Title>Подобрать окна</Title>
      <Tags
        onClick={handleClick}
        tagIds={tagIds}
        tags={filteredTags(tags, slides)}
      />
      <Content>
        {isChooseColor ? (
          <WindowColorStyled
            title={newSlides[count].title}
            currentSlide={currentSlideColor}
            listColors={colors.list}
            price={colors.price}
            onClick={closeChooseColor}
            checkedValue={checkedValue}
            onClickNext={handleClickNextColor}
            onClickPrev={handleClickPrevColor}
            onChangeColor={handleChangeColor}
            currentColorData={currentColorData}
          />
        ) : (
          <Information>
            <Visual>
              <Photo background={background} />
              <ButtonColor onClick={openChooseColor}>
                <ColorIcon />
              </ButtonColor>
            </Visual>
            <Slides
              slides={newSlides}
              count={count}
              onClickPrev={handleClickPrev}
              onClickNext={handleClickNext}
              getSlideTags={getSlideTags}
              isArrows
            >
              <Buttons>
                <Button size="full">Заказать окна</Button>
                <Button size="full">Рассчитать стоимость</Button>
              </Buttons>
            </Slides>
          </Information>
        )}
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
    </WindowStyled>
  );
};

export default Window;
