import { FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Card } from "../Card/Card";
import "./cards.scss";
import { initialCardData } from "./const";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Cards: FC = () => {
  return (
    <section className="cards">
      <div className="cards__header">
        <Text type="title">Weekly - Top NFTs</Text>
      
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
          {initialCardData.map((card, index) => (
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
        <Button
          className="cards__arrow cards__arrow--prev"
          aria-label="Предыдущий слайд"
        ></Button>
        <button
          className="cards__arrow cards__arrow--next"
          aria-label="Следующий слайд"
        ></button>
      </div>
    </section>
  );
};
