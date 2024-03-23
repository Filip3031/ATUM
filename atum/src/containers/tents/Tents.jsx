import React from "react";
import "./tents.scss";
import data from "../../utils/sliderTents.json";

const Tents = () => {
  return (
    <section id="tents">
      <div className="container">
        <div className="head">
          <span className="best-choice">Najlepsza decyzja</span>
          <span className="our-eq">Nasze Namioty</span>
        </div>

        <div className="cards-container">
          {data.map((card, i) => (
            <div className="card" key={i}>
              <img src={card.image} alt="" />
              <span className="name">{card.name}</span>
              <span className="detail">{card.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tents;
