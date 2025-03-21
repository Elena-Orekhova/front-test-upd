import { FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Card } from "../Card/Card";
import "./cards.scss";
import { initialCardData } from "./const";
import { ICard } from "./types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Cards: FC = () => {
  const [cardData, setCardData] = useState<ICard[]>([]);

  useEffect(() => {
    const expanded = [...initialCardData, ...initialCardData, ...initialCardData];
    setCardData(expanded);
  }, []);

  return (
    <section className="cards">
      <div className="cards__header">
        <h2 className="cards__title">Weekly - Top NFTs</h2>
      </div>
      <div className="cards__scroll-wrapper">
        <Swiper
          modules={[Navigation, Pagination]}
          
          slidesPerView="auto"
          loop={true}
          centeredSlides={true}
          navigation={{
            nextEl: ".cards__arrow--next",
            prevEl: ".cards__arrow--prev",
          }}
          className="cards__container"
        >
          {cardData.map((card, index) => (
            <SwiperSlide
              key={`${card.id}-${index}`}
              className="cards__card-wrapper"
            >
              <Card
                image={card.image}
                title={card.title}
                current={card.current}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="cards__navigation">
        <button
          className="cards__arrow cards__arrow--prev"
          aria-label="Предыдущий слайд"
        ></button>
        <button
          className="cards__arrow cards__arrow--next"
          aria-label="Следующий слайд"
        ></button>
      </div>
    </section>
  );
};
