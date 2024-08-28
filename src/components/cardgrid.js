import React from "react";
import AnimatedCard from "./AnimatedCard";
import "./CardGrid.css";

const CardGrid = () => {
  const cardColors = Array(90).fill("#0F0"); // You can customize colors as needed

  return (
    <div className="card-grid">
      {cardColors.map((color, index) => (
        <AnimatedCard key={index} color={color} />
      ))}
    </div>
  );
};

export default CardGrid;
