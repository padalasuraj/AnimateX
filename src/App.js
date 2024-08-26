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

  return (
    <div className="App">
      <NavHeader />
      <div className="cards-container">
        {cardColors.map((color, index) => (
          <div key={index} className="card-wrapper">
            <AnimatedCard color={color} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
