import React from "react";
import "./equipments.scss";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";

const Equipments = () => {
  return (
    <section id="equipments">
      <div className="container">
        <div className="head">
          <span className="best-choice">Najlepszy Wybór</span>
          <span className="our-eq">Nasze Wyposażenie</span>
        </div>

        <Swiper className="swiper" {...sliderSettings}>
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="card">
                <img src={card.image} alt="" />
                <span className="name">{card.name}</span>
                <span className="detail">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Equipments;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
