import React from "react";
import {
  Header,
  Companies,
  Equipments,
  Offer,
  Tents,
  Contact,
  Footer,
} from "../../containers";

const Main = () => {
  return (
    <div className="App">
      <Header />
      <Companies />
      <Equipments />
      <Offer />
      <Tents />
      <Contact />
      <Footer />
    </div>
  );
};

export default Main;
