import React from "react";
import { Navbar, Header, Companies } from "./containers";
import "./app.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Companies />
    </div>
  );
};

export default App;
