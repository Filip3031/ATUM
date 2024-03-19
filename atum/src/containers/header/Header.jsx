import React from "react";
import "./header.scss";
import jarocin from "../../images/Jarocin.jpeg";

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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </span>
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </span>
          </div>

          <div className="stats">
            <div className="stat">
              <span></span>
              <span>Doświadczenie</span>
            </div>
          </div>
        </div>
        <div className="container-right">
          <div className="image-container">
            <img src={jarocin} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
