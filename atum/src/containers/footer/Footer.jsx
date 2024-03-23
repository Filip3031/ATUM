import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container">
        <div className="left-side">
          <span className="description">
            ATUM - Wynajem namiotów na eventy oraz imprezy okolicznościowe.
          </span>
        </div>
        <div className="right-side">
          <span className="information">Informacje:</span>
          <span className="address">Bydgoszcz, Polska</span>
          <span className="contact">Kontakt: 790 319 878</span>
          <span className="email">Email: atum.namioty@gmail.com</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
