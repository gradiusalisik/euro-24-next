import React from "react";
import { Cold } from "../../components/Icons/Cold";

export const tags = [
  {
    id: "econom",
    text: "Эконом"
  },
  {
    id: "standart",
    text: "Стандарт"
  },
  {
    id: "premium",
    text: "Премиум"
  },
  {
    id: "premium-plus",
    text: "Премиум +"
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
    id: "novotex",
    background: "static/img/window/novotex.jpg",
    title: "NOVOTEX Classic",
    description:
      "Эта бюджетная профильная система лучше всего подходит для остекления лоджий с балконами и дачных домиков, в которых не живут зимой.Профильные системы Новотекс пригодны для сборки как оконных, так и дверных оконных блоков.Подходит для изготовления как стандартных окон, так и окон ПВХ с повышенной изоляцией ",
    price: "1990",
    tags: ["econom"],
    advantages: [
      {
        id: "1",
        icon: <Cold />,
        title: "Теплоизоляция",
        description:
          "Четырёхкамерный профиль (со стеклопакетом) обеспечивает надёжную защиту от промерзаний даже в регионах с суровыми климатическими условиями."
      },
      {
        id: "2",
        icon: <Cold />,
        title: "Герметичность",
        description:
          "Уплотнение выполнено из материалов, не теряющих эластичности при резких температурных перепадах, соответственно внутренние помещения остаются надёжно защищены от сквозняков в любую погоду."
      },
      {
        id: "3",
        icon: <Cold />,
        title: "Надёжность",
        description:
          "В конструкции установлен П-образный армирующий профиль, что существенно повышает общую прочность оконной системы."
      },
      {
        id: "4",
        icon: <Cold />,
        title: " Универсальность",
        description:
          "Вариативность штапиков обеспечивает изменение толщины заполнения от 4 до 36 мм."
      }
    ]
  },
  {
    id: "reachmont",
    background: "static/img/window/reachmont.jpg",
    title: "REACHMONT",
    description:
      "Это высококачественный профиль, позволяющий изготавливать окна с повышенным светопропусканием.Камерный уплотнитель имеет эластичную структуру и обладает улучшенными теплосберегающими свойствами. Уплотнитель ТермоКонтур не требует ежегодного ухода в отличии от обычных резиновых уплотнителей.",
    price: "2800",
    tags: ["econom"],
    advantages: [
      {
        id: "1",
        icon: <Cold />,
        title: "Устойчивость",
        description:
          "Система уплотнителей устойчива к сносу и не боится перепадов температур"
      },
      {
        id: "2",
        icon: <Cold />,
        title: "Звукоизоляция",
        description:
          "Оконные профили Richmont гарантируют максимальную звукоизоляцию."
      },
      {
        id: "3",
        icon: <Cold />,
        title: "Прочность",
        description:
          "Прочный материал обладает повышенной устойчивостью к агрессивным факторам из вне."
      },
      {
        id: "4",
        icon: <Cold />,
        title: "Качество класса А",
        description:
          "Толщина стенок профиля Richmont соответствует классу А, что гарантирует отсутствие деформации в процессе длительной эксплуатации;"
      },
      {
        id: "5",
        icon: <Cold />,
        title: "Экологичность",
        description:
          "Наличие всех сертификатов качества и экологичности делает окна Richmont одними из самых востребованных на рынке."
      }
    ]
  },
  {
    id: "brusbox",
    background: "static/img/window/brusbox.jpg",
    title: "BRUSBOХ",
    description:
      "Универсальная, самая доступная, благодаря высокому уровню потребительских свойств и безупречному качеству, наиболее известная профильная система BRUSBOX. Подходит для использования в самых разных климатических условиях и на самых разнообразных строительных объектах: от панельных домов до элитных коттеджей. Имеет 4 внутренние камеры и отличается одним из самых высоких показателей сопротивления теплопередачи в своём классе.",
    price: "2100",
    tags: ["econom"],
    advantages: [
      {
        id: "1",
        icon: <Cold />,
        title: "Звукоизоляция",
        description:
          "Применение профилей BRUSBOХ значительно улучшает звукоизоляцию помещения,снижает уровень проникновения уличного шума."
      },
      {
        id: "2",
        icon: <Cold />,
        title: "Безопасность",
        description:
          "Окна и балконные двери из профилей BRUSBOХ предоставляют Вам большое количество возможностей преградить путь грабителям."
      },
      {
        id: "3",
        icon: <Cold />,
        title: "Теплоизоляция",
        description:
          "Применение профилей BRUSBOХ уменьшает потребности в тепловой энергии,приводит к равномерному распределению температуры в помещении."
      },
      {
        id: "4",
        icon: <Cold />,
        title: "Долговечность",
        description:
          "Срок эксплуатации пластиковых окон при правильном уходе может достигать пятидесяти лет."
      }
    ]
  },
  {
    id: "melke-smart",
    background: "static/img/window/melke_smart.png",
    title: "MELKE Smart",
    description:
      "Надежный профиль Melke Smart- это правильный выбор для остекления домов с сезонным проживанием, съемных квартир и различных хозяйственных помещений, а также для остекления террас, веранд и беседок. Оптимальный экономичный вариант остекления. Благодаря наличию четырех воздушных камер надежно сохраняет тепло",
    price: "3227",
    tags: ["standart"],
    advantages: [
      {
        id: "1",
        icon: <Cold />,
        title: "Забота о здоровье",
        description:
          "Отсутствие токсичных и опасных для здоровья компонентов подтверждено сертификатом качества."
      },
      {
        id: "2",
        icon: <Cold />,
        title: "Практичность",
        description:
          "Профиль Melke создан с учетом российских реалий эксплуатации окон."
      },
      {
        id: "3",
        icon: <Cold />,
        title: "Надежность",
        description:
          "Толщина стенок профильных систем Melke – 3 мм. Это значит, что в вашем доме будет тепло даже, если за окном суровая зима."
      },
      {
        id: "4",
        icon: <Cold />,
        title: "Эстетичность",
        description:
          "Утонченная геометрия, правильная форма, белоснежный цвет, безупречная гладкость. Melke для тех, кто обладает хорошим вкусом."
      }
    ]
  },
  {
    id: "rehau-blitz-new",
    background: "static/img/window/rehau_blitz.jpg",
    title: "REHAU Blitz New",
    description:
      "BLITZ NEW — базовая система в продуктовой линейке, разработанная в соответствии с наиболее актуальными запросами российских потребителей. Надежные окна, которые эффективно сохраняют тепло, защищают дом от уличного шума и легко вписываются в любой интерьер.Эта система разработана с учетом российского климата, сильных морозов и перепадов температур. Благодаря многокамерному стеклопакету эта оконная система сохраняет в помещении тепло и не пускает внутрь влагу и сквозняки.",
    price: "9985",
    tags: ["standart"],
    advantages: [
      {
        id: "1",
        icon: <Cold />,
        title: "Долговечность",
        description:
          "Материал был разработан специально для изготовления профилей для светопрозрачных конструкций,прошел испытания на устойчивость к воздействию окружающей среды."
      },
      {
        id: "2",
        icon: <Cold />,
        title: "Легкость в уходе",
        description:
          "Пластиковые окна из профиля REHAU не требуют покраски и легки в повседневном уходе. Благодаря гладкой поверхности загрязнения не скапливаются на поверхности профиля."
      },
      {
        id: "3",
        icon: <Cold />,
        title: "Элегантность",
        description:
          "Пластиковые окна REHAU имеют элегантный внешний вид.Два контура уплотнения задерживают пыль, влагу, сквозняки, что позволяет создать в помещении комфортный климат."
      },
      {
        id: "4",
        icon: <Cold />,
        title: "Теплоизоляция",
        description:
          "Такой профиль уменьшает потребность в тепловой энергии,приводит к равномерному распределению температуры в помещении."
      }
    ]
  },
  {
    id: "rehau-thermo",
    background: "static/img/window/Rehau_thermo.jpg",
    title: "REHAU Thermo",
    description:
      "Недавно разработанная оконная система “Thermo-Design”, подходит для всех климатических условий. Такие окна отлично, служат как в жарком, засушливом климате, так и в более холодных погодных условиях. Уникальность системы, может также исправно служить в регионах, с постоянными перепадами температуры.Заказывая цветной пластик этой серии, вы можете быть уверены: долгие годы он будет сохранять первоначальный оттенок даже при интенсивном солнечном освещении.",
    price: "10488",
    tags: ["standart"],
    advantages: [
      {
        id: "1",
        icon: <Cold />,
        title: "Светопропускная способность",
        description:
          "Больше света в сравнении со стандартными профильными системами."
      },
      {
        id: "2",
        icon: <Cold />,
        title: "Теплозащита",
        description:
          "Системная глубина профильной системы 60 мм и четырехкамерный профиль REHAU THERMO, надежно защитят помещение от теплопотерь"
      },
      {
        id: "3",
        icon: <Cold />,
        title: "Шумоизоляция",
        description:
          "Окна Рехау Термо  благодаря четырехкамерной структуре профиля и возможностью установки стеклопакета толщиной до 40 мм. Надежно защитят от посторонних звуков с улицы."
      },
      {
        id: "4",
        icon: <Cold />,
        title: "Долговечность",
        description:
          "Пластиковые окна Рехау Термо прослужат вам верой и правдой долгие, долгие годы. Срок службы профиля составляет не менее 50 лет."
      }
    ]
  },
  {
    id: "melke-evolution",
    background: "static/img/window/melke_evolution.png",
    title: "MELKE Evolution",
    description:
      "Немецкий профиль высокого качества, который появился на заре рынка поливинилхлоридных изделий, возвращается в форме melke evolution. Модель характеризуется утолщенными стенками, улучшенными параметрами, технологией производства.",
    price: "3616",
    tags: ["premium"],
    advantages: [
      {
        id: "1",
        icon: <Cold />,
        title: "Без вредных примесей",
        description:
          "Отсутствие токсичных веществ в составе подтверждено сертификатом качества."
      },
      {
        id: "2",
        icon: <Cold />,
        title: "Создан для российских зим",
        description:
          "Профиль EVOlution создан с учетом российских реалий эксплуатации окон."
      },
      {
        id: "3",
        icon: <Cold />,
        title: "Отсутствие сквозняков",
        description:
          "Окна из профиля Melke имеют А1-класс сопротивления теплопередаче и А-класс водонепроницаемости.Защита от продуваний и протечек в вашем доме обеспечена!"
      },
      {
        id: "4",
        icon: <Cold />,
        title: "Дома всегда тепло",
        description:
          "Толщина стенок профильных систем Melke – 3 мм. Это значит, что в вашем доме будет тепло даже, если за окном суровая зима."
      }
    ]
  },
  {
    id: "rehau-Grazio",
    background: "static/img/window/rehau_grazio.jpg",
    title: "REHAU Grazio",
    description:
      "Внешне легкая и изящная REHAU GRAZIO открывает возможности для дизайна любой сложности, одновременно обеспечивая высокую теплоизоляцию. Обновленный дизайн профилей: новое сочетание радиусов и ступенчатого наклона лицевых поверхностей профилей обеспечивает их характерный облик. Смещенные лицевые поверхности коробки и створки определяют классический тип оконной системы.",
    price: "11130",
    tags: ["premium"],
    advantages: [
      {
        id: "1",
        icon: <Cold />,
        title: "Максимум света в Вашем доме",
        description:
          "Благодаря уменьшенной высоте профиля система пропускает больше солнечного света."
      },
      {
        id: "2",
        icon: <Cold />,
        title: "Высокая теплоизоляция",
        description:
          "Обеспечивают комфортную температуру в помещении круглый год."
      },
      {
        id: "3",
        icon: <Cold />,
        title: "Доступная стоимость в своем сегменте",
        description:
          "Окна REHAU Grazio-оптимальное соотношение цены и высоких технических характеристик."
      },
      {
        id: "4",
        icon: <Cold />,
        title: "Простой уход",
        description:
          "Гладкая поверхность материала профиля обеспечивает простоту ухода за окнами."
      }
    ]
  },
  {
    id: "trocal",
    background: "static/img/window/trocal.jpg",
    title: "TROCAL",
    description:
      "Благодаря исключительному сочетанию стиля, комфорта и функциональности современные технологии производства завоевали окнам Trocal любовь тысяч пользователей. Если вам нужны прочные и изящные окна с длительным сроком службы и безукоризненной функциональностью, остановите свой выбор на высококачественной немецкой системе Trocal.",
    price: "7000",
    tags: ["premium"],
    advantages: [
      {
        id: "1",
        icon: <Cold />,
        title: "Шумопоглощение",
        description:
          "С помощью пластиковых окон Trocal можно успешно бороться с неблагоприятными воздействиями шума и холода, создавая уют даже там, где бессильны все другие методы."
      },
      {
        id: "2",
        icon: <Cold />,
        title: "Устойчивость к морозам",
        description:
          "Пластиковые окна Trocal не утрачивают своих замечательных свойств даже при температуре – 60 по Цельсию, что делает их незаменимыми в северных широтах нашей страны."
      },
      {
        id: "3",
        icon: <Cold />,
        title: "Высокая прочность",
        description:
          "Именно этот фактор позволяет производить окна любых форм и размеров, сообразно желаниям и потребностям заказчика. Подобная гибкость позволяет использовать окна в помещениях с любым дизайном."
      },
      {
        id: "4",
        icon: <Cold />,
        title: "Экологичность",
        description:
          "Отсутствие токсичных и опасных для здоровья компонентов подтверждено сертификатом качества."
      }
    ]
  },
  {
    id: "melke-art",
    background: "static/img/window/melke_art.png",
    title: "MELKE Art",
    description:
      "Изделия этой серии сочетают классическое выполнение со стилем минимализма. Профиль melke art — сложносочиненная система, в которой воплощается творческий и художественный подход. История насчитывает множество стилей, которые учитывают требования времени.",
    price: "4307",
    tags: ["premium-plus"],
    advantages: [
      {
        id: "1",
        icon: <Cold />,
        title: "Больше света",
        description:
          "Особенность технического решения MELKE Art помогает сократить высоту профиля конструкции и впустить в комнату на 10% больше света в сравнении с обычными пластиковыми окнами."
      },
      {
        id: "2",
        icon: <Cold />,
        title: "Сохранение тепла",
        description:
          "Зимой сберегает до 90% тепловой волны, а значит, увеличивает температуру в помещении на 4 градуса. А летом — отражает инфракрасное излучение, приносит в ваш дом прохладу."
      },
      {
        id: "3",
        icon: <Cold />,
        title: "Защита от шума",
        description:
          "Отличная тепло- и звукоизоляция. В комнате с такими окнами будет тихо и уютно, даже если дом находится рядом с оживленной автомагистралью."
      },
      {
        id: "4",
        icon: <Cold />,
        title: "Идеальная сочетаемость и экономичность",
        description:
          "Изящный дизайн окон MELKE Art отлично гармонирует с их способностью сберегать тепло в сильные морозы, а следовательно, вам не нужно вкладывать больше средств в отопление помещения."
      }
    ]
  },
  {
    id: "rehau-intelio",
    background: "static/img/window/rehau_intelio.jpg",
    title: "REHAU Intelio",
    description:
      "Уличный шум должен остаться на улице. Чтобы комфорт вашей квартиры не нарушался посторонними звуками, стоит позаботиться о шумоизоляции. Оптимальное решение такой задачи — купить окна REHAU Intelio Design. C ними ваш дом будет надежно защищен от посторонних звуков, сквозняка и холода.К этому стоит добавить изящный внешний вид окон, создаваемый гладкой поверхностью профиля. Она не впитывает грязь, пыль, не желтеет и позволяет свести к минимуму процедуру ухода за окнами.",
    price: "13865",
    tags: ["premium-plus"],
    advantages: [
      {
        id: "1",
        icon: <Cold />,
        title: "Повышенная энергоэффективность",
        description:
          "Энергоэффективность-важное преимущество данных оконных систем.Они обеспечат надежную теплоизоляцию и позволят сэкономить на отоплении дома в холодное время года."
      },
      {
        id: "2",
        icon: <Cold />,
        title: "Шумоизоляция",
        description:
          "С окнами из этой профильной системы Вы будете надежно защищены от неприятных звуков извне.Ничто не побеспокоит Ваш сон и отдых,не отвлечет детей от занятий."
      },
      {
        id: "3",
        icon: <Cold />,
        title: "Минимальный уход",
        description:
          "Гладкие низкопористые поверхности оконных рам не впитывают пыль и загрязнения,легко отмываются влажной тряпкой и не требуют использования агрессивных моющих средств."
      },
      {
        id: "4",
        icon: <Cold />,
        title: "Защита",
        description:
          "Два контура уплотнения обеспечивают надежную защиту от сквозняков и сырости."
      }
    ]
  },
  {
    id: "rehau-geneo",
    background: "static/img/window/rehau_geneo.jpg",
    title: "REHAU Geneo",
    description:
      "Профильная система REHAU Geneo-Design – первый в мире пластиковый оконный профиль без использования стального усиления, утяжеляющего конечное изделие и ограничивающего его изоляционные возможности.Окна и двери Geneo не имеют себе равных для установки в строениях с особыми требованиями к энергоэффективности.Система прошла успешные испытания и уже широко применяется на практике при строительстве домов с нулевым энергопотреблением. Она активно внедряется застройщиками как при новом строительстве, так и при реконструкции зданий премиум класса. ",
    price: "28748",
    tags: ["premium-plus"],
    advantages: [
      {
        id: "1",
        icon: <Cold />,
        title: "Экономия на отоплении до 75%",
        description:
          "Окна Рехау Генео рекомендованы к установке в домах с низким энергопотреблением.По теплосбережению REHAU GENEO превосходит своего ближайшего конкурента – тёплый алюминий."
      },
      {
        id: "2",
        icon: <Cold />,
        title: "На 40% больше надёжности",
        description:
          "Вес профиля Рехау Генео на 40% меньше обычного, поэтому нагрузка на оконную фурнитуру существенно снижена – оконные створки легче открываются, а их эксплуатация будет дольше."
      },
      {
        id: "3",
        icon: <Cold />,
        title: "Противовзломность  окон и дверей",
        description:
          "Это позволяет окнам сопротивляться попытке взлома путём отжатия створки.С такими окнами можно быть уверенным в безопасности жилища."
      },
      {
        id: "4",
        icon: <Cold />,
        title: "Звукоизоляция класса А",
        description:
          "Окна Рехау Генео позволяют получить самый высокий уровень звукоизоляции.Звуки машин на автостраде или шумные соседи не смогут потревожить сон."
      },
      {
        id: "5",
        icon: <Cold />,
        title: "Больше света",
        description:
          "Больше солнечного света и выше уровень гормона радости обеспечен: высота комбинации рамы и створки ниже, чем у других систем, а световой проём больше, чем у стандартного окна на 5%."
      }
    ]
  }
];

export const colors = [
  {
    category: "premier",
    textCategory: "Premier ламинация",
    colors: [
      {
        value: "Ирландский дуб",
        name: "premier",
        background: "static/img/radiobutton/premier/button/1.jpg",
        backgroundBig: "static/img/radiobutton/premier/frame/1.jpg"
      },
      {
        value: "Античный дуб",
        name: "premier",
        background: "static/img/radiobutton/premier/button/2.jpg",
        backgroundBig: "static/img/radiobutton/premier/frame/2.jpg"
      },
      {
        value: "Рустикальная вишня",
        name: "premier",
        background: "static/img/radiobutton/premier/button/3.jpg",
        backgroundBig: "static/img/radiobutton/premier/frame/3.jpg"
      },
      {
        value: "Цветущая вишня",
        name: "premier",
        background: "static/img/radiobutton/premier/button/4.jpg",
        backgroundBig: "static/img/radiobutton/premier/frame/4.jpg"
      },
      {
        value: "Нежная вишня",
        name: "premier",
        background: "static/img/radiobutton/premier/button/5.jpg",
        backgroundBig: "static/img/radiobutton/premier/frame/5.jpg"
      },
      {
        value: "Табаско тик",
        name: "premier",
        background: "static/img/radiobutton/premier/button/6.jpg",
        backgroundBig: "static/img/radiobutton/premier/frame/6.jpg"
      },
      {
        value: "Горная лиственница красная",
        name: "premier",
        background: "static/img/radiobutton/premier/button/7.jpg",
        backgroundBig: "static/img/radiobutton/premier/frame/7.jpg"
      },
      {
        value: "Антик",
        name: "premier",
        background: "static/img/radiobutton/premier/button/8.jpg",
        backgroundBig: "static/img/radiobutton/premier/frame/8.jpg"
      },
      {
        value: "Рустик",
        name: "premier",
        background: "static/img/radiobutton/premier/button/9.jpg",
        backgroundBig: "static/img/radiobutton/premier/frame/9.jpg"
      },
      {
        value: "Винчестер XA",
        name: "premier",
        background: "static/img/radiobutton/premier/button/10.jpg",
        backgroundBig: "static/img/radiobutton/premier/frame/10.jpg"
      },
      {
        value: "Винчестер XC",
        name: "premier",
        background: "static/img/radiobutton/premier/button/11.jpg",
        backgroundBig: "static/img/radiobutton/premier/frame/11.jpg"
      },
      {
        value: "Терезина XC",
        name: "premier",
        background: "static/img/radiobutton/premier/button/12.jpg",
        backgroundBig: "static/img/radiobutton/premier/frame/12.jpg"
      },
      {
        value: "Сиена ПЛ",
        name: "premier",
        background: "static/img/radiobutton/premier/button/13.jpg",
        backgroundBig: "static/img/radiobutton/premier/frame/13.jpg"
      },
      {
        value: "Сиена ПР",
        name: "premier",
        background: "static/img/radiobutton/premier/button/14.jpg",
        backgroundBig: "static/img/radiobutton/premier/frame/14.jpg"
      },
      {
        value: "Сиена ПН",
        name: "premier",
        background: "static/img/radiobutton/premier/button/15.jpg",
        backgroundBig: "static/img/radiobutton/premier/frame/15.jpg"
      },
      {
        value: "Висконсин XД",
        name: "premier",
        background: "static/img/radiobutton/premier/button/16.jpg",
        backgroundBig: "static/img/radiobutton/premier/frame/16.jpg"
      },
      {
        value: "Туманный серый",
        name: "premier",
        background: "static/img/radiobutton/premier/button/17.jpg",
        backgroundBig: "static/img/radiobutton/premier/frame/17.jpg"
      },
      {
        value: "Синевато-серый финессе",
        name: "premier",
        background: "static/img/radiobutton/premier/button/18.jpg",
        backgroundBig: "static/img/radiobutton/premier/frame/18.jpg"
      },
      {
        value: "Серая буря финессе",
        name: "premier",
        background: "static/img/radiobutton/premier/button/19.jpg",
        backgroundBig: "static/img/radiobutton/premier/frame/19.jpg"
      },
      {
        value: "Красное вино",
        name: "premier",
        background: "static/img/radiobutton/premier/button/20.jpg",
        backgroundBig: "static/img/radiobutton/premier/frame/20.jpg"
      },
      {
        value: "Зеленая ель финессе",
        name: "premier",
        background: "static/img/radiobutton/premier/button/21.jpg",
        backgroundBig: "static/img/radiobutton/premier/frame/21.jpg"
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
        background: "static/img/radiobutton/classic/button/cs001.jpg",
        backgroundBig: "static/img/radiobutton/classic/frame/cs001.jpg"
      },
      {
        value: "Темный дуб FL-F1",
        name: "classic",
        background: "static/img/radiobutton/classic/button/cs002.jpg",
        backgroundBig: "static/img/radiobutton/classic/frame/cs002.jpg"
      },
      {
        value: "Светлый дуб",
        name: "classic",
        background: "static/img/radiobutton/classic/button/cs003.jpg",
        backgroundBig: "static/img/radiobutton/classic/frame/cs003.jpg"
      },
      {
        value: "Сапели",
        name: "classic",
        background: "static/img/radiobutton/classic/button/cs004.jpg",
        backgroundBig: "static/img/radiobutton/classic/frame/cs004.jpg"
      },
      {
        value: "Махагон",
        name: "classic",
        background: "static/img/radiobutton/classic/button/cs005.jpg",
        backgroundBig: "static/img/radiobutton/classic/frame/cs005.jpg"
      },
      {
        value: "Золотой дуб",
        name: "classic",
        background: "static/img/radiobutton/classic/button/cs006.jpg",
        backgroundBig: "static/img/radiobutton/classic/frame/cs006.jpg"
      },
      {
        value: "Орех V",
        name: "classic",
        background: "static/img/radiobutton/classic/button/cs007.jpg",
        backgroundBig: "static/img/radiobutton/classic/frame/cs007.jpg"
      },
      {
        value: "Горная сосна",
        name: "classic",
        background: "static/img/radiobutton/classic/button/cs008.jpg",
        backgroundBig: "static/img/radiobutton/classic/frame/cs008.jpg"
      },
      {
        value: "Натуральный дуб FL-G",
        name: "classic",
        background: "static/img/radiobutton/classic/button/cs009.jpg",
        backgroundBig: "static/img/radiobutton/classic/frame/cs009.jpg"
      },
      {
        value: "Рустикальный дуб 1",
        name: "classic",
        background: "static/img/radiobutton/classic/button/cs010.jpg",
        backgroundBig: "static/img/radiobutton/classic/frame/cs010.jpg"
      },
      {
        value: "Полосатый дуглас",
        name: "classic",
        background: "static/img/radiobutton/classic/button/cs011.jpg",
        backgroundBig: "static/img/radiobutton/classic/frame/cs011.jpg"
      },
      {
        value: "Дуб ST-G",
        name: "classic",
        background: "static/img/radiobutton/classic/button/cs012.jpg",
        backgroundBig: "static/img/radiobutton/classic/frame/cs012.jpg"
      },
      {
        value: "Макоре",
        name: "classic",
        background: "static/img/radiobutton/classic/button/cs013.jpg",
        backgroundBig: "static/img/radiobutton/classic/frame/cs013.jpg"
      },
      {
        value: "Мореный дуб ST-F",
        name: "classic",
        background: "static/img/radiobutton/classic/button/cs014.jpg",
        backgroundBig: "static/img/radiobutton/classic/frame/cs014.jpg"
      },
      {
        value: "Черная вишня",
        name: "classic",
        background: "static/img/radiobutton/classic/button/cs015.jpg",
        backgroundBig: "static/img/radiobutton/classic/frame/cs015.jpg"
      },
      {
        value: "Винно-красный",
        name: "classic",
        background: "static/img/radiobutton/classic/button/cs016.jpg",
        backgroundBig: "static/img/radiobutton/classic/frame/cs016.jpg"
      },
      {
        value: "Темно-красный",
        name: "classic",
        background: "static/img/radiobutton/classic/button/cs017.jpg",
        backgroundBig: "static/img/radiobutton/classic/frame/cs017.jpg"
      },
      {
        value: "Бриллиантово-синий",
        name: "classic",
        background: "static/img/radiobutton/classic/button/cs018.jpg",
        backgroundBig: "static/img/radiobutton/classic/frame/cs018.jpg"
      },
      {
        value: "Стальной синий",
        name: "classic",
        background: "static/img/radiobutton/classic/button/cs019.jpg",
        backgroundBig: "static/img/radiobutton/classic/frame/cs019.jpg"
      },
      {
        value: "Зеленый мох",
        name: "classic",
        background: "static/img/radiobutton/classic/button/cs020.jpg",
        backgroundBig: "static/img/radiobutton/classic/frame/cs020.jpg"
      },
      {
        value: "Темно-зеленый",
        name: "classic",
        background: "static/img/radiobutton/classic/button/cs021.jpg",
        backgroundBig: "static/img/radiobutton/classic/frame/cs021.jpg"
      },
      {
        value: "Сигнальный серый",
        name: "classic",
        background: "static/img/radiobutton/classic/button/cs022.jpg",
        backgroundBig: "static/img/radiobutton/classic/frame/cs022.jpg"
      },
      {
        value: "Базальтовый серый",
        name: "classic",
        background: "static/img/radiobutton/classic/button/cs023.jpg",
        backgroundBig: "static/img/radiobutton/classic/frame/cs023.jpg"
      },
      {
        value: "Агатовый серый",
        name: "classic",
        background: "static/img/radiobutton/classic/button/cs025.jpg",
        backgroundBig: "static/img/radiobutton/classic/frame/cs025.jpg"
      },
      {
        value: "Кварцевый серый",
        name: "classic",
        background: "static/img/radiobutton/classic/button/cs026.jpg",
        backgroundBig: "static/img/radiobutton/classic/frame/cs026.jpg"
      },
      {
        value: "Серый",
        name: "classic",
        background: "static/img/radiobutton/classic/button/cs027.jpg",
        backgroundBig: "static/img/radiobutton/classic/frame/cs027.jpg"
      },
      {
        value: "Светло-серый",
        name: "classic",
        background: "static/img/radiobutton/classic/button/cs028.jpg",
        backgroundBig: "static/img/radiobutton/classic/frame/cs028.jpg"
      },
      {
        value: "Черно-коричневый",
        name: "classic",
        background: "static/img/radiobutton/classic/button/cs029.jpg",
        backgroundBig: "static/img/radiobutton/classic/frame/cs029.jpg"
      },
      {
        value: "Шоколадно-коричневый",
        name: "classic",
        background: "static/img/radiobutton/classic/button/cs030.jpg",
        backgroundBig: "static/img/radiobutton/classic/frame/cs030.jpg"
      },
      {
        value: "Шогун АС",
        name: "classic",
        background: "static/img/radiobutton/classic/button/cz001.jpg",
        backgroundBig: "static/img/radiobutton/classic/frame/cz001.jpg"
      },
      {
        value: "Шогун AF",
        name: "classic",
        background: "static/img/radiobutton/classic/button/cz002.jpg",
        backgroundBig: "static/img/radiobutton/classic/frame/cz002.jpg"
      },
      {
        value: "Шогун AD",
        name: "classic",
        background: "static/img/radiobutton/classic/button/cz003.jpg",
        backgroundBig: "static/img/radiobutton/classic/frame/cz003.jpg"
      },
      {
        value: "Орегон 3",
        name: "classic",
        background: "static/img/radiobutton/classic/button/cz004.jpg",
        backgroundBig: "static/img/radiobutton/classic/frame/cz004.jpg"
      },
      {
        value: "Зимний дуглас",
        name: "classic",
        background: "static/img/radiobutton/classic/button/cz005.jpg",
        backgroundBig: "static/img/radiobutton/classic/frame/cz005.jpg"
      },
      {
        value: "Дуб ST-F",
        name: "classic",
        background: "static/img/radiobutton/classic/button/cz006.jpg",
        backgroundBig: "static/img/radiobutton/classic/frame/cz006.jpg"
      },
      {
        value: "Натуральный дуб ST-F2",
        name: "classic",
        background: "static/img/radiobutton/classic/button/cz007.jpg",
        backgroundBig: "static/img/radiobutton/classic/frame/cz007.jpg"
      },
      {
        value: "Бирюза",
        name: "classic",
        background: "static/img/radiobutton/classic/button/cz008.jpg",
        backgroundBig: "static/img/radiobutton/classic/frame/cz008.jpg"
      },
      {
        value: "Зеленый чартвелл",
        name: "classic",
        background: "static/img/radiobutton/classic/button/cz009.jpg",
        backgroundBig: "static/img/radiobutton/classic/frame/cz009.jpg"
      },
      {
        value: "Коричневый каштан",
        name: "classic",
        background: "static/img/radiobutton/classic/button/cz010.jpg",
        backgroundBig: "static/img/radiobutton/classic/frame/cz010.jpg"
      },
      {
        value: "Антрацитово-серый",
        name: "classic",
        background: "static/img/radiobutton/classic/button/cz011.jpg",
        backgroundBig: "static/img/radiobutton/classic/frame/cz011.jpg"
      },
      {
        value: "Изумрудно-зеленый",
        name: "classic",
        background: "static/img/radiobutton/classic/button/cz012.jpg",
        backgroundBig: "static/img/radiobutton/classic/frame/cz012.jpg"
      },
      {
        value: "Желтый",
        name: "classic",
        background: "static/img/radiobutton/classic/button/cz013.jpg",
        backgroundBig: "static/img/radiobutton/classic/frame/cz013.jpg"
      },
      {
        value: "Светло-красный",
        name: "classic",
        background: "static/img/radiobutton/classic/button/cz014.jpg",
        backgroundBig: "static/img/radiobutton/classic/frame/cz014.jpg"
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
        background: "static/img/radiobutton/metallic/button/mt001.jpg",
        backgroundBig: "static/img/radiobutton/metallic/frame/mt001.jpg"
      },
      {
        value: "Драгоценная платина",
        name: "metallic",
        background: "static/img/radiobutton/metallic/button/mt002.jpg",
        backgroundBig: "static/img/radiobutton/metallic/frame/mt002.jpg"
      },
      {
        value: "Кварцевая платина",
        name: "metallic",
        background: "static/img/radiobutton/metallic/button/mt003.jpg",
        backgroundBig: "static/img/radiobutton/metallic/frame/mt003.jpg"
      },
      {
        value: "Королевская платина",
        name: "metallic",
        background: "static/img/radiobutton/metallic/button/mt004.jpg",
        backgroundBig: "static/img/radiobutton/metallic/frame/mt004.jpg"
      },
      {
        value: "Императорская платина",
        name: "metallic",
        background: "static/img/radiobutton/metallic/button/mt005.jpg",
        backgroundBig: "static/img/radiobutton/metallic/frame/mt005.jpg"
      },
      {
        value: "Графская платина",
        name: "metallic",
        background: "static/img/radiobutton/metallic/button/mt006.jpg",
        backgroundBig: "static/img/radiobutton/metallic/frame/mt006.jpg"
      },
      {
        value: "Кардинальская платина",
        name: "metallic",
        background: "static/img/radiobutton/metallic/button/mt007.jpg",
        backgroundBig: "static/img/radiobutton/metallic/frame/mt007.jpg"
      }
    ]
  }
];
