import React from "react";
import { Navbar, Header, Companies, Equipments, Offer } from "./containers";
import "./app.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Companies />
      <Equipments />
      <Offer />
    </div>
  );
};

export default App;
