import React from "react";
import { Decor } from "../../components/Icons/Decor";
import { Blocks } from "../../components/Icons/Blocks";
import { Kladka } from "../../components/Icons/Kladka";
import { Move } from "../../components/Icons/Move";
import { MoveSecond } from "../../components/Icons/MoveSecond";
import { Woods } from "../../components/Icons/Woods";

import BalconiesImg from "../img/services/balconies.jpg";
import WindowImg from "../img/services/window.jpg";
import DecorImg from "../img/services/decor.jpg";
import BlocksImg from "../img/services/blocks.jpg";
import KladkaImg from "../img/services/kladka.jpg";
import WoodsImg from "../img/services/woods.jpg";
import MoveImg from "../img/services/move.jpg";
import MoveSecondsImg from "../img/services/move-second.jpg";

export const tabs = [
  {
    id: "window",
    text: "Окна"
  },
  {
    id: "balconies",
    text: "Балконы"
  }
];

export const servicesWindow = [
  {
    id: "decor",
    icon: <Decor />,
    title: "Отделка балкона",
    description:
      "Стеклопакет толщиной 40 мм. Ваши окна будут бережно хранить тепло.",
    price: "500",
    info: [
      {
        id: "1",
        title: "Панели ПВХ",
        description:
          "Панели ПВХ ламинированы качественной немецкой пленкой, обладают повышенной жесткостью, термо и износостойкостью. Предлагаем на выбор и варианты цветовых покрытий с различной фактурой и декором.",
        price: "500"
      },
      {
        id: "2",
        title: "Евро вагонка",
        description:
          "Деревянная вагонка — это натуральный экологический материал, успешно применяемый при внутренней отделке стен балконов или лоджий. Дерево хорошо сохраняет тепло в мороз и прохладу летом, а при прямом попадании солнечных лучей не выделяет никаких вредных и токсических веществ.",
        price: "600"
      },
      {
        id: "3",
        title: "МДФ панели",
        description:
          "МДФ – прочный и долговечный материал, устойчивый к влаге за счет обработки ламинированной пленкой. Поверхность панелей МДФ идеально ровная и имеет стабильные размеры, что очень важно при облицовке стен. Разнообразие расцветок столь велико, что можно подобрать панели в тон к отделке пола или потолка.",
        price: "650"
      }
    ]
  },
  {
    id: "blocks",
    icon: <Blocks />,
    title: "Французкое остекление",
    description: "Обеспечивает качественную теплоизоляцию высокого уровня.",
    price: "2600",
    info: []
  },
  {
    id: "kladka",
    icon: <Kladka />,
    title: "Кладка на балкон",
    description: "Контур уплотнения. Продлевает срок жизни окон до 50 лет.",
    price: "2100",
    info: []
  },
  {
    id: "woods",
    icon: <Woods />,
    title: "Крыша на балкон",
    description: "Обеспечивает качественную теплоизоляцию высокго уровня",
    price: "4950",
    info: []
  },
  {
    id: "move",
    icon: <Move />,
    title: "Вынос балкона",
    description: "Контур уплотнения. Продлевает срок жизни оконо до 50 лет.",
    price: "1000",
    info: []
  },
  {
    id: "move-second",
    icon: <MoveSecond />,
    title: "Присоединение балкона",
    description: "Контур уплотнения. Продлевает срок жизни оконо до 50 лет.",
    price: "15000",
    info: []
  }
];

export const servicesBalconies = [
  {
    id: "decor",
    icon: <Decor />,
    title: "Отделка балкона Я балкон",
    description:
      "Стеклопакет толщиной 40 мм. Ваши окна будут бережно хранить тепло.",
    price: "500",
    info: []
  },
  {
    id: "blocks",
    icon: <Blocks />,
    title: "Французкое остекление",
    description: "Обеспечивает качественную теплоизоляцию высокого уровня.",
    price: "2600",
    info: []
  },
  {
    id: "kladka",
    icon: <Kladka />,
    title: "Кладка на балкон",
    description: "Контур уплотнения. Продлевает срок жизни окон до 50 лет.",
    price: "2100",
    info: []
  },
  {
    id: "woods",
    icon: <Woods />,
    title: "Крыша на балкон",
    description: "Обеспечивает качественную теплоизоляцию высокго уровня",
    price: "4950",
    info: []
  },
  {
    id: "move",
    icon: <Move />,
    title: "Вынос балкона",
    description: "Контур уплотнения. Продлевает срок жизни оконо до 50 лет.",
    price: "1000",
    info: []
  },
  {
    id: "move-second",
    icon: <MoveSecond />,
    title: "Присоединение балкона",
    description: "Контур уплотнения. Продлевает срок жизни оконо до 50 лет.",
    price: "15000",
    info: []
  }
];

export const images = {
  balconies: BalconiesImg,
  window: WindowImg,
  decor: DecorImg,
  blocks: BlocksImg,
  kladka: KladkaImg,
  woods: WoodsImg,
  move: MoveImg,
  "move-second": MoveSecondsImg
};
