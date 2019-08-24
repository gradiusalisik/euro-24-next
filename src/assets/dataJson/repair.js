import React from "react";
import { Adjust } from "../../components/Icons/Adjust";
import { Window } from "../../components/Icons/Window";
import { Settings } from "../../components/Icons/Settings";
import { Change } from "../../components/Icons/Change";
import { AdjustSecond } from "../../components/Icons/AdjustSecond";

export const advantagesWindow = [
  {
    id: "1",
    icon: <Settings />,
    title: "Ремонт фурнитуры",
    description: "Необходимо при износе или поломке механизмов"
  },
  {
    id: "2",
    icon: <Change />,
    title: "Замена уплотнителя",
    description: "Необходимо, при неплотном прилегании створки к раме"
  },
  {
    id: "3",
    icon: <Adjust />,
    title: "Регулировка створки",
    description: "Необходимо, если створка при закрытии задевает раму сбоку"
  },
  {
    id: "4",
    icon: <AdjustSecond />,
    title: "Регулировка прижима",
    description: "Обеспечивает плотность прилегания створки к оконной раме"
  }
];
export const advantagesBalconies = [
  {
    id: "1",
    icon: <Settings />,
    title: "Замена дверной ручки",
    description: "Необходимо, когда ручка ломается"
  },
  {
    id: "2",
    icon: <Adjust />,
    title: "Регулировка створки",
    description: "Необходимо, если створка при закрытии задевает раму снизу"
  },
  {
    id: "3",
    icon: <Window />,
    title: "Замена стелка",
    description: "Необходимо при разгерметезации или повреждении стелка"
  }
];
