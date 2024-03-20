import React from "react";
import "./header.scss";
import CountUp from "react-countup";

const Header = () => {
  return (
    <section id="header">
      <div className="container">
        <div className="container-left">
          <div className="title">
            <div className="orange-circle" />
            <h1>
              Wynajem namiotów <br />
              na imprezy masowe <br /> i okolicznościowe
            </h1>
          </div>

          <div className="description">
            <span>
              Jesteśmy firmą, która wynajmuje namioty i wyposażenie na imprezy
              okolicznościowe oraz masowe.
            </span>
            <span>
              Dzięki różnorodnym namiotom i wyposażeniu najwyższej jakości,
              jesteśmy gotowi obsłużyć <br />
              przeróżne imprezy - od skromnych wydarzeń po wielkie festiwale.
            </span>
          </div>

          <div className="stats">
            <div className="stat">
              <span>
                <CountUp start={0} end={7} duration={10} />
                <span className="plus">+</span>
              </span>
              <span className="secondaryText">Lat doświadczenia</span>
            </div>

            <div className="stat">
              <span>
                <CountUp start={150} end={200} duration={6} />
                <span className="plus">+</span>
              </span>
              <span className="secondaryText">Zadowolonych klientów</span>
            </div>

            <div className="stat">
              <span>
                <CountUp start={50} end={100} duration={6} />
                <span className="plus">+</span>
              </span>
              <span className="secondaryText">Uroczystości</span>
            </div>
          </div>
        </div>

        <div className="container-right">
          <div className="image-container">
            <img src="/images/Jarocin.jpeg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
