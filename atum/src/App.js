import React from "react";
import { Navbar, Header, Companies, Equipments } from "./containers";
import "./app.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Companies />
      <Equipments />
    </div>
  );
};

export default App;
