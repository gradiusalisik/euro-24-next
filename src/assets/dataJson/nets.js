import React from "react";
import ExampleImg from "../img/nets/example.jpg";
import { Cold } from "../../components/Icons/Cold";
import ImageStandart from "../img/nets/sheets/standart.jpg";
import ImageAntiCats from "../img/nets/sheets/anti-cats.jpg";
import ImageAntiDust from "../img/nets/sheets/anti-dust.jpg";
import ImageView from "../img/nets/sheets/view.jpg";
import ImageAntiPollen from "../img/nets/sheets/anti-pollen.jpg";
import ImageAluminium from "../img/nets/sheets/aluminum.jpg";

export const tags = [
  {
    id: "framework",
    text: "Рамочные"
  },
  {
    id: "sliding",
    text: "Раздвижные"
  },
  {
    id: "door",
    text: "Дверные"
  },
  {
    id: "plisse",
    text: "Плиссе"
  },
  {
    id: "auto",
    text: "Автоматизированные"
  }
];

export const slides = [
  {
    id: "framework",
    background: ExampleImg,
    title: "Стандарт",
    description:
      "Стандартные рамочные москитные сетки — это самые распространённые сетки в России, они обладают простой конструкцией и невысокой ценой, их легко мыть и снимать в случае необходимости. Рамочная москитная сетка может быть установлена в любые оконные проемы, различаются лишь способы крепления и монтажа.",
    price: "5600",
    tags: ["framework", "door"],
    advantages: [
      {
        id: "1",
        icon: <Cold />,
        title: "Простота конструкции"
      },
      {
        id: "2",
        icon: <Cold />,
        title: "Лёгкий вес изделия"
      },
      {
        id: "3",
        icon: <Cold />,
        title: "Легко устанавливаются и демонтируются"
      },
      {
        id: "4",
        icon: <Cold />,
        title: "Не требуют особого ухода"
      }
    ]
  },
  {
    id: "sliding",
    background: ExampleImg,
    title: "Раздвижные",
    description:
      "Стандартные рамочные москитные сетки — это самые распространённые сетки в России, они обладают простой конструкцией и невысокой ценой, их легко мыть и снимать в случае необходимости. Рамочная москитная сетка может быть установлена в любые оконные проемы, различаются лишь способы крепления и монтажа.",
    price: "5600",
    tags: ["auto", "door", "plisse"],
    advantages: [
      {
        id: "1",
        icon: <Cold />,
        title: "Простота конструкции"
      },
      {
        id: "2",
        icon: <Cold />,
        title: "Лёгкий вес изделия"
      },
      {
        id: "3",
        icon: <Cold />,
        title: "Легко устанавливаются и демонтируются"
      },
      {
        id: "4",
        icon: <Cold />,
        title: "Не требуют особого ухода"
      }
    ]
  },
  {
    id: "door",
    background: ExampleImg,
    title: "Дверные",
    description:
      "Стандартные рамочные москитные сетки — это самые распространённые сетки в России, они обладают простой конструкцией и невысокой ценой, их легко мыть и снимать в случае необходимости. Рамочная москитная сетка может быть установлена в любые оконные проемы, различаются лишь способы крепления и монтажа.",
    price: "5600",
    tags: ["framework", "plisse"],
    advantages: [
      {
        id: "1",
        icon: <Cold />,
        title: "Простота конструкции"
      },
      {
        id: "2",
        icon: <Cold />,
        title: "Лёгкий вес изделия"
      },
      {
        id: "3",
        icon: <Cold />,
        title: "Легко устанавливаются и демонтируются"
      },
      {
        id: "4",
        icon: <Cold />,
        title: "Не требуют особого ухода"
      }
    ]
  },
  {
    id: "plisse",
    background: ExampleImg,
    title: "Плиссе",
    description:
      "Стандартные рамочные москитные сетки — это самые распространённые сетки в России, они обладают простой конструкцией и невысокой ценой, их легко мыть и снимать в случае необходимости. Рамочная москитная сетка может быть установлена в любые оконные проемы, различаются лишь способы крепления и монтажа.",
    price: "5600",
    tags: ["framework", "door"],
    advantages: [
      {
        id: "1",
        icon: <Cold />,
        title: "Простота конструкции"
      },
      {
        id: "2",
        icon: <Cold />,
        title: "Лёгкий вес изделия"
      },
      {
        id: "3",
        icon: <Cold />,
        title: "Легко устанавливаются и демонтируются"
      },
      {
        id: "4",
        icon: <Cold />,
        title: "Не требуют особого ухода"
      }
    ]
  },
  {
    id: "auto",
    background: ExampleImg,
    title: "Автоматизированные",
    description:
      "Стандартные рамочные москитные сетки — это самые распространённые сетки в России, они обладают простой конструкцией и невысокой ценой, их легко мыть и снимать в случае необходимости. Рамочная москитная сетка может быть установлена в любые оконные проемы, различаются лишь способы крепления и монтажа.",
    price: "5600",
    tags: ["plisse", "door"],
    advantages: [
      {
        id: "1",
        icon: <Cold />,
        title: "Простота конструкции"
      },
      {
        id: "2",
        icon: <Cold />,
        title: "Лёгкий вес изделия"
      },
      {
        id: "3",
        icon: <Cold />,
        title: "Легко устанавливаются и демонтируются"
      },
      {
        id: "4",
        icon: <Cold />,
        title: "Не требуют особого ухода"
      }
    ]
  }
];

export const sheets = {
  price: "1000",
  list: [
    {
      value: "standart",
      title: "Стандарт",
      image: ImageStandart
    },
    {
      value: "anti-cats",
      title: "Антикошка",
      image: ImageAntiCats
    },
    {
      value: "anti-dust",
      title: "Антипыль",
      image: ImageAntiDust
    },
    {
      value: "view",
      title: "Обзор",
      image: ImageView
    },
    {
      value: "anti-pollen",
      title: "Антипыльца",
      image: ImageAntiPollen
    },
    {
      value: "aluminum",
      title: "Алюминиевое",
      image: ImageAluminium
    }
  ]
};
