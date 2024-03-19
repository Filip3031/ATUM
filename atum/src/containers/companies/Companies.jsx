import React from "react";
import "./companies.scss";
import Zetka from "../../images/Zetka.jpeg";
import Jarocin from "../../images/jarocin-logo.jpeg";
import Uniejow from "../../images/uniejow.jpeg";
import Polsat from "../../images/Polsat.png";
import Winobranie from "../../images/winobranie.jpeg";

const Companies = () => {
  return (
    <section id="companies">
      <div className="container">
        <img src={Jarocin} alt="" />
        <img src={Polsat} alt="" />
        <img src={Zetka} alt="" />
        <img src={Winobranie} alt="" />
        <img src={Uniejow} alt="" />
      </div>
    </section>
  );
};

export default Companies;
