import React from "react";
import "./tents.scss";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../utils/sliderTents.json";
import { sliderSettings } from "../../utils/common";

const Equipments = () => {
  return (
    <section id="equipments">
      <div className="container">
        <div className="head">
          <span className="best-choice">Najlepsza decyzja</span>
          <span className="our-eq">Nasze Namioty</span>
        </div>

        <Swiper className="swiper-tents" {...sliderSettings}>
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
    <div className="buttons-tents">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
