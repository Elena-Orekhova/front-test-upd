const generateRandomCurrent = () => {
  return (Math.random() * 3 + 1).toFixed(2);
};

export const initialCardData = [
  {
    id: 1,
    image: "/images/image_card_4.png",
    title: "Sun-Glass",
    current: parseFloat(generateRandomCurrent()),
  },
  {
    id: 2,
    image: "/images/image_header_1.png",
    title: "Sun-Glass",
    current: parseFloat(generateRandomCurrent()),
  },
  {
    id: 3,
    image: "/images/image_card_3.png",
    title: "Sun-Glass",
    current: parseFloat(generateRandomCurrent()),
  },
  {
    id: 4,
    image: "/images/image_card_2.png",
    title: "Sun-Glass",
    current: parseFloat(generateRandomCurrent()),
  },
  {
    id: 5,
    image: "/images/image_card_1.png",
    title: "Sun-Glass",
    current: parseFloat(generateRandomCurrent()),
  },
  {
    id: 6,
    image: "/images/image_card_1.png",
    title: "Sun-Glass",
    current: parseFloat(generateRandomCurrent()),
  },
  {
    id: 7,
    image: "/images/image_card_1.png",
    title: "Sun-Glass",
    current: parseFloat(generateRandomCurrent()),
  },
];
