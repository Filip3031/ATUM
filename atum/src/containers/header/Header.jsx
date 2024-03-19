import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div id="header">
      <div className="about-us">
        <div className="about-us-title">
          <h1>O nas</h1>
        </div>
        <p>
          ATUM to firma oferująca wynajem namiotów, która dba o każdy detal, by
          Twoje wydarzenie było niezapomniane. Specjalizujemy się w kompleksowej
          obsłudze imprez plenerowych i masowych, zapewniając namioty na krótkie
          i długie terminy.
        </p>
        <p>
          Nasza oferta obejmuje różnorodne wydarzenia, począwszy od rodzinnych
          uroczystości, jak komunie czy wesela, po imprezy masowe, takie jak
          koncerty czy festiwale, oraz wydarzenia organizowane przez instytucje
          publiczne.
        </p>
        <p>
          Co nas wyróżnia? Profesjonalizm od pierwszego kontaktu. Dostarczamy
          nie tylko namioty, ale także kompleksową obsługę logistyczną,
          włączając w to transport i montaż. Nasz zespół to doświadczeni
          specjaliści, którzy dbają o perfekcyjny stan techniczny i wizualny
          każdego elementu naszego wyposażenia.
        </p>
        <p>
          Zaufaj ATUM, a Twoje wydarzenie stanie się nie tylko wyjątkowe, ale
          też bezproblemowe i komfortowe dla Ciebie oraz Twoich gości.
        </p>
      </div>
      <div className="about-us-experience">
        <div>
          <h5>Doświadczenie</h5>
          <p>7+ Lat na rynku</p>
        </div>
        <div>
          <h5>Klienci</h5>
          <p>200+ Zadowolonych klientów</p>
        </div>
        <div>
          <h5>Wydarzenia</h5>
          <p>50+ Imprez masowych</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
