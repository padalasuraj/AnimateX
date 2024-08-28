import React from "react";
import "./App.css";
import AnimatedCard from "./components/AnimatedCard";
import NavHeader from "./components/NavHeader";

function App() {
  const cardColors = [
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
    "#00FFFF",
  ];

  // Generate 90 cards
  const cards = Array.from({ length: 90 }, (_, index) => ({
    color: cardColors[index % cardColors.length],
  }));

  return (
    <div className="App">
      <NavHeader />
      <div className="cards-container">
        {cards.map((card, index) => (
          <div key={index} className="card-wrapper">
            <AnimatedCard color={card.color} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
