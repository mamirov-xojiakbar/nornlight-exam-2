import { ref } from "vue";

export const useKatalog = () => {
  const katalog = ref([
    {
      id: 1,
      img: "/katalog-1.png",
      name: "Люстры",
    },
    {
      id: 2,
      img: "/katalog-2.png",
      name: "Светильники",
    },
    {
      id: 3,
      img: "/katalog-3.png",
      name: "Бра",
    },
    {
      id: 4,
      img: "/katalog-4.png",
      name: "Споты",
    },
    {
      id: 5,
      img: "/katalog-5.png",
      name: "Торшеры",
    },
    {
      id: 6,
      img: "/katalog-6.png",
      name: "Споты",
    },
  ]);

  const intro1 = ref([
    {
      id: 1,
      img: "/intro-1.png",
      title: "Только проверенные бренды",
      text: "Бренды, проверенные временем и качеством",
    },
    {
      id: 2,
      img: "/intro-2.png",
      title: "Самые низкие цены",
      text: "Ниже не будет нигде",
    },
    {
      id: 3,
      img: "/intro-3.png",
      title: "Быстрая доствка",
      text: "Доставляем по всей РФ за 1-10 дней",
    },
    {
      id: 4,
      img: "/intro-4.png",
      title: "Большой ассортимент",
      text: "Более 1000 товаров",
    },
  ]);

  const blog = ref([
    {
      id: 1,
      img: "/blog-1.png",
      date: "01.01.2024",
      text: "Как правильно освещать дом снаружи?",
    },
    {
      id: 2,
      img: "/blog-2.png",
      date: "01.01.2024",
      text: "Как правильно освещать дом снаружи?",
    },
    {
      id: 3,
      img: "/blog-3.png",
      date: "01.01.2024",
      text: "Как правильно освещать дом снаружи?",
    }
  ]);

  const xarakteristika = [
    {
      Цвет: "Жёлтый",
      Год: "2016",
      "Диаметр колеса": "27.5",
      "Материал рамы": "Карбон",
      Размер: "L",
      Страна: "Швейцария",
      Производитель: "Scott",
    },
  ];
  return {
    katalog,
    intro1,
    blog,
    xarakteristika,
  };
};
