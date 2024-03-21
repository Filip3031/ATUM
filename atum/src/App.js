import React from "react";
import {
  Navbar,
  Header,
  Companies,
  Equipments,
  Offer,
  Tents,
  Contact,
  Footer,
} from "./containers";
import "./app.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
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

export default App;
