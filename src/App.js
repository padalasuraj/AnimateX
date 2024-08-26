// src/App.js
import React from "react";
import "./App.css";
import AnimatedCard from "./components/AnimatedCard";
import NavHeader from "./components/NavHeader";

function App() {
  const cards = Array.from({ length: 15 }, (_, index) => (
    <AnimatedCard key={index} />
  ));

  return (
    <div className="App">
      <div className="layout">
        <NavHeader />
        <div className="cards-container">{cards}</div>
      </div>
    </div>
  );
}

export default App;
