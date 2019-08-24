import React from "react";
import { Cold } from "../../components/Icons/Cold";
const ExampleImg = "/static/img/window/example.jpg";
const BalconiesImg = "/static/img/window/balconies.jpg";
const WindowImg = "/static/img/window/window.jpg";
const Classic1 = "/static/img/radiobutton/classic/button/cs001.jpg";
const Classic2 = "/static/img/radiobutton/classic/button/cs002.jpg";
const Premier1 = "/static/img/radiobutton/premier/button/1.jpg";
const Premier2 = "/static/img/radiobutton/premier/button/2.jpg";
const Metallic1 = "/static/img/radiobutton/metallic/button/mt001.jpg";
const Metallic2 = "/static/img/radiobutton/metallic/button/mt002.jpg";
const ClassicBig1 = "/static/img/radiobutton/classic/frame/cs001.jpg";
const ClassicBig2 = "/static/img/radiobutton/classic/frame/cs002.jpg";
const PremierBig1 = "/static/img/radiobutton/premier/frame/1.jpg";
const PremierBig2 = "/static/img/radiobutton/premier/frame/2.jpg";
const MetallicBig1 = "/static/img/radiobutton/metallic/frame/mt001.jpg";
const MetallicBig2 = "/static/img/radiobutton/metallic/frame/mt002.jpg";

export const tags = [
  {
    id: "reliable",
    text: "Надежные"
  },
  {
    id: "classic",
    text: "Классические"
  },
  {
    id: "premium",
    text: "Премиальные"
  },
  {
    id: "technological",
    text: "Технологичные"
  },
  {
    id: "non-standard",
    text: "Нестандартные"
  },
  {
    id: "economical",
    text: "Экономичные"
  },
  {
    id: "unique",
    text: "Уникальные"
  },
  {
    id: "functional",
    text: "Функциональные"
  },
  {
    id: "frost-resistant",
    text: "Морозоустойчивые"
  }
];

export const slides = [
  {
    id: "trocal",
    background: ExampleImg,
    title: "Trocal Balance",
    description:
      "Trocal Balance&nbsp;&mdash; это воплощение новых идей для стильного и&nbsp;качественного решения в&nbsp;частном строительстве и&nbsp;ремонте. <br /><br />Традиционно выделяясь высоким качеством, окна из&nbsp;профиля Trocal Balance имеют элегантный внешний вид и&nbsp;отвечают эстетическим вкусам даже самых притязательных потребителей.",
    price: "5600",
    tags: ["reliable", "classic"],
    advantages: [
      {
        id: "1",
        icon: <Cold />,
        title: "Двухкамерный",
        description:
          "Стеклопакет толщиной 40 мм. Ваши окна будут бережно хранить тепло даже в зимний период."
      },
      {
        id: "2",
        icon: <Cold />,
        title: "Двухкамерный",
        description:
          "Стеклопакет толщиной 40 мм. Ваши окна будут бережно хранить тепло даже в зимний период."
      },
      {
        id: "3",
        icon: <Cold />,
        title: "Двухкамерный",
        description:
          "Стеклопакет толщиной 40 мм. Ваши окна будут бережно хранить тепло даже в зимний период."
      },
      {
        id: "4",
        icon: <Cold />,
        title: "Двухкамерный",
        description:
          "Стеклопакет толщиной 40 мм. Ваши окна будут бережно хранить тепло даже в зимний период."
      },
      {
        id: "5",
        icon: <Cold />,
        title: "Двухкамерный",
        description:
          "Стеклопакет толщиной 40 мм. Ваши окна будут бережно хранить тепло даже в зимний период."
      }
    ]
  },
  {
    id: "trocal2",
    background: BalconiesImg,
    title: "Trocal Balance2",
    description:
      "Trocal Balance&nbsp;&mdash;2 это воплощение новых идей для стильного и&nbsp;качественного решения в&nbsp;частном строительстве и&nbsp;ремонте. <br /><br />Традиционно выделяясь высоким качеством, окна из&nbsp;профиля Trocal Balance имеют элегантный внешний вид и&nbsp;отвечают эстетическим вкусам даже самых притязательных потребителей.",
    price: "5600",
    tags: ["classic"],
    advantages: [
      {
        id: "1",
        icon: <Cold />,
        title: "Двухкамерный 2 c копейкаи",
        description:
          "Стеклопакет толщиной 40 мм. Ваши окна будут бережно хранить тепло даже в зимний период."
      },
      {
        id: "2",
        icon: <Cold />,
        title: "Двухкамерный",
        description:
          "Стеклопакет толщиной 40 мм. Ваши окна будут бережно хранить тепло даже в зимний период."
      },
      {
        id: "3",
        icon: <Cold />,
        title: "Двухкамерный",
        description:
          "Стеклопакет толщиной 40 мм. Ваши окна будут бережно хранить тепло даже в зимний период."
      },
      {
        id: "4",
        icon: <Cold />,
        title: "Двухкамерный",
        description:
          "Стеклопакет толщиной 40 мм. Ваши окна будут бережно хранить тепло даже в зимний период."
      },
      {
        id: "5",
        icon: <Cold />,
        title: "Двухкамерный",
        description:
          "Стеклопакет толщиной 40 мм. Ваши окна будут бережно хранить тепло даже в зимний период."
      }
    ]
  },
  {
    id: "trocal3",
    background: WindowImg,
    title: "Trocal Balance3",
    description:
      "Trocal Balance&nbsp;&mdash;3 это воплощение новых идей для стильного и&nbsp;качественного решения в&nbsp;частном строительстве и&nbsp;ремонте. <br /><br />Традиционно выделяясь высоким качеством, окна из&nbsp;профиля Trocal Balance имеют элегантный внешний вид и&nbsp;отвечают эстетическим вкусам даже самых притязательных потребителей.",
    price: "5600",
    tags: ["reliable", "classic"],
    advantages: [
      {
        id: "1",
        icon: <Cold />,
        title: "Двухкамерный",
        description:
          "Стеклопакет толщиной 40 мм. Ваши окна будут бережно хранить тепло даже в зимний период."
      },
      {
        id: "2",
        icon: <Cold />,
        title: "Двухкамерный",
        description:
          "Стеклопакет толщиной 40 мм. Ваши окна будут бережно хранить тепло даже в зимний период."
      },
      {
        id: "3",
        icon: <Cold />,
        title: "Двухкамерный",
        description:
          "Стеклопакет толщиной 40 мм. Ваши окна будут бережно хранить тепло даже в зимний период."
      },
      {
        id: "4",
        icon: <Cold />,
        title: "Двухкамерный",
        description:
          "Стеклопакет толщиной 40 мм. Ваши окна будут бережно хранить тепло даже в зимний период."
      },
      {
        id: "5",
        icon: <Cold />,
        title: "Двухкамерный",
        description:
          "Стеклопакет толщиной 40 мм. Ваши окна будут бережно хранить тепло даже в зимний период."
      }
    ]
  }
];

export const colors = {
  price: "5600",
  list: [
    {
      category: "premier",
      textCategory: "Premier ламинация",
      colors: [
        {
          value: "Ирландский дуб",
          name: "premier",
          background: Premier1,
          backgroundBig: PremierBig1
        },
        {
          value: "Античный дуб",
          name: "premier",
          background: Premier2,
          backgroundBig: PremierBig2
        }
      ]
    },
    {
      category: "classic",
      textCategory: "Classic ламинация",
      colors: [
        {
          value: "Орегон 4",
          name: "classic",
          background: Classic1,
          backgroundBig: ClassicBig1
        },
        {
          value: "Темный дуб FL-F1",
          name: "classic",
          background: Classic2,
          backgroundBig: ClassicBig2
        }
      ]
    },
    {
      category: "metallic",
      textCategory: "Metallic ламинация",
      colors: [
        {
          value: "Серебряная платина",
          name: "metallic",
          background: Metallic1,
          backgroundBig: MetallicBig1
        },
        {
          value: "Драгоценная платина",
          name: "metallic",
          background: Metallic2,
          backgroundBig: MetallicBig2
        }
      ]
    }
  ]
};
