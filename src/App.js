import React from "react";
import "./App.css";
import AnimatedCard from "./components/AnimatedCard";
import NavHeader from "./components/NavHeader";

const animations = ["animation1", "animation2", "animation3", "animation4"];

function App() {
  const numberOfCards = 90; // 90 cards on the dashboard

  return (
    <div className="App">
      <NavHeader />
      <div className="cards-container">
        {Array.from({ length: numberOfCards }).map((_, index) => (
          <div key={index} className="card-wrapper">
            <AnimatedCard
              animation={animations[index % animations.length]} // Loop through different animations
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
